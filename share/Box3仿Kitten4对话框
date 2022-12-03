async function entityDialog(entity, title = "", text = "", switchingSpeed = 100) {
    try {
        var content = '', resume = !1, resumed = !0;
        for (let i = 0; i < text.length; i++) {
            entity.cancelDialogs();
            if (resume && resumed) {
                content = text;
                i = text.length - 2;
                resumed = !1
            } else {
                content += text[i];
            };
            entity.dialog({
                type: "text",
                title,
                content: resume ? text : content,
            }).then((v) => {
                if (v) { resume = !0 }
            });
            await sleep(switchingSpeed);
        };
        resume = !0;
        entity.cancelDialogs();
        entity.dialog({
            type: "text",
            title,
            content: text,
            hasArrow: true,
        })
    } catch (e) {
        throw TypeError("Invalid parameter.");
    }
}
world.onPlayerJoin(({ entity }) => { //当玩家进入地图时
    //调试函数
    entityDialog(entity /*玩家*/, "hi" /*对话框标题内容*/, "你好呀，欢迎来到Box3星球" /*对话框文本内容*/, 100 /*对话框文本播放速度（单位：ms/字）*/);
})
