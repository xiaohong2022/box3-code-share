var tk = [//题库
    ["题目", ["正确答案", '干扰选项1', '干扰选项2'], "正确答案"],
]

world.querySelectorAll(".答题机器人").forEach((e) => {
    e.enableInteract = true;
    e.interactHint = `答题机器人`;
    e.interactRadius = 3;
    e.onInteract(async ({ entity }) => {
        var a = await entity.player.dialog({
            type: "select",
            title: e.interactHint,
            content: `你好，${entity.player.name}，欢迎使用本机器人。
            你现在要答题吗，点击下方按钮就可以开始答题哦`,
            options: ['开始答题']
        })
        if (a) {
            entity.player.dialog({ type: "text", title: "提示", content: "开始答题" })
            var coins = 0;
            var dttk = [];
            var ydgtm = [];
            var timushu = 10;//共10道题
            var huodejinbi = 2;//每答对一道题获得2金币
            await sleep(750); entity.player.cancelDialogs()
            for (var i = 0; i < timushu; i++) {
                while (true) {
                    var s = Math.floor(Math.random() * tk.length)
                    if (!ydgtm.includes(s)) {//保证这次测试没有答过这题
                        ydgtm.push(s)
                        break
                    }
                }
                var tiku = tk[s];
                var options = [];
                for (var c in tiku[1]) {//打乱选项
                    var loop = true;
                    while (loop) {
                        var test = tiku[1][Math.floor(Math.random() * tiku[1].length)]
                        if (!options.includes(test)) {
                            options.push(test);
                            loop = false;
                        }
                    }
                }
                var abcs = "ABCDEFGHIJKLMMOPQRSTUVWXYZ";
                var yldo = [];
                for (var c in options) {
                    yldo.push(options[c])
                    options[c] = abcs[c] + "、" + options[c];
                }
                var a = await entity.player.dialog({
                    type: "select",
                    title: `第${i + 1}题/共${timushu}题`,
                    content: tiku[0],
                    options,
                });
                if (a) {
                    var dqxx = {
                        content: tiku[0],
                        options,
                        opt: a.index,
                        yes: false,
                        yesOpt: abcs[yldo.indexOf(tiku[2])]
                    }
                    if (tiku[2].includes(a.value.substring(2))) {
                        entity.coin += huodejinbi;
                        coins++;
                        dqxx.yes = true
                        entity.player.dialog({ type: "text", title: "提示", content: `答对了，金币+${huodejinbi}！` });
                        await sleep(900); entity.player.cancelDialogs();
                    } else {
                        entity.player.dialog({ type: "text", title: "提示", content: "答错了，继续加油！" });
                        await sleep(900); entity.player.cancelDialogs();
                    }
                    dttk.push(dqxx)
                } else {
                    entity.player.dialog({ type: "text", title: "提示", content: "已自动退出答题" }); return
                }
            }
            while (true) {
                var dtwc = await entity.player.dialog({
                    type: "select",
                    title:  e.interactHint,
                    content: `答题完成！
                    你答对了${coins}道题，答错了${timushu - coins}道题，\n获得了${coins * huodejinbi}金币。
                    你这次的答题成绩是：${coins * 10}分（等级：${['F', 'E', 'E', 'D', 'D', 'C', 'C', 'B', 'A', 'A+'][coins - 1]}）`,
                    options: ['查看详细']
                });
                if (dtwc) {
                    for (var ck = 0; ck < dttk.length;) {
                        var optionses = []
                        if (ck == 0) {
                            optionses.push("下一题")
                        } else if (ck == dttk.length - 1) {
                            optionses.push("上一题")
                        } else {
                            optionses.push("上一题")
                            optionses.push("下一题")
                        }
                        optionses.push("跳转")
                        var dqtk = dttk[ck]
                        var ckz = await entity.player.dialog({
                            type: "select",
                            title: `第${ck + 1}题/共${timushu}题（${dqtk.yes ? "✔答对" : "✘答错"}）`,
                            content: `问题：${dqtk.content}
                            选项：\n${dqtk.options.join("\n")}
                            
                            你选择了：${abcs[dqtk.opt]}
                            正确答案：${dqtk.yesOpt}`,
                            options: optionses
                        })
                        if (ckz) {
                            if (ckz.value == '跳转') {
                                var options = []
                                for (var x = 0; x < timushu; x++) {
                                    options.push(`第${x + 1}题${x == ck ? "（当前正在查看）" : `（${dttk[x].yes ? "✔答对" : "✘答错"}）`}`)
                                }
                                var tz = await entity.player.dialog({
                                    type: "select",
                                    title: `跳转`,
                                    content: `你要跳转到第几题？`,
                                    options
                                })
                                if (tz) {
                                    ck = tz.index;
                                }
                            } else {
                                switch (ckz.value) {
                                    case "下一题":
                                        ck++;
                                        break;
                                    case "上一题":
                                        ck--;
                                        break;
                                }
                            }
                        } else {
                            break;
                        }
                    }
                } else {
                    return
                }
            }
            
        }
    })
})
