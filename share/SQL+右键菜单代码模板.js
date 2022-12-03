async function initTable() {//创建玩家数据表
    return await db.sql`
        CREATE TABLE IF NOT EXISTS "player" (
            "coin" INT NOT NULL,--金币
            "exp" INT NOT NULL,--经验
            "item" TEXT NOT NULL,--背包
            "bbzdhl" INT NOT NULL,--背包最大含量
            "weapon" TEXT,--当前装备名称
            "userKey" CHAR(16) PRIMARY KEY UNIQUE NOT NULL --用户识别码
        )
    `;
};

async function saveUser(user) {//玩家存档
    await db.sql`
        INSERT INTO "player" (
            "exp",
            "coin",
            "item",
            "bbzdhl",
            "weapon",
            "userKey"
        ) VALUES (
            ${user.exp}, 
            ${user.coin}, 
            ${JSON.stringify(user.item)},
            ${user.bbzdhl},
            ${user.weapon},
            ${user.player.userKey} 
        )
        ON CONFLICT("userKey")
        DO UPDATE SET
            "exp"=excluded."exp",
            "coin"=excluded."coin",
            "item"=excluded."item",
            "bbzdhl"=excluded."bbzdhl",
            "weapon"=excluded."weapon"
    `;
};

async function loadUser(user) {//玩家读档
    const [data] = await db.sql`SELECT * FROM "player" WHERE "userKey"=${user.player.userKey} LIMIT 1`
    if (data) {//如果这个玩家已经有存档
        user.exp = data.exp
        user.coin = data.coin
        user.item = JSON.parse(data.item)
        user.bbzdhl = data.bbzdhl
        user.weapon = data.weapon
    } else {//玩家无存档
        saveUser(user)
    }
};

async function poll(fn) {//无限轮询执行sql语句直到成功
    while (true) {
        try {
            return await fn()//一旦成功执行, 停止无限轮询, 并返回查询结果
        } catch (e) {
            const m = e.message//需要简略显示的异常消息
            //sql偶尔会执行超时, 但如果反复显示timeout 15秒以上一直不停, 大概是数据库出了故障只能等官方修复
            if (m.includes('timeout')) {
                world.say(m);
            }
            else {
                world.say(e.stack);//如果sql执行出错, 广播错误消息, 用来排查错误原因
            }
        };
        await sleep(2000); //每2秒重试一次
    };
};

async function showPlayerData() {
    var t = []
    for (var row of await db.sql`SELECT * FROM "player"`) {
        t.push(JSON.stringify(row))
    }
    console.log(t.join('\n'))
}

; (async() => {//当地图开始运行
    await poll(()=>{db.sql`SELECT 1`});
    await poll(initTable);
    console.log("数据库启动成功")
    showPlayerData()
})();

var wp_data = {//玩家背包数据处理
    "物品": {
        context: "物品说明",
        fun(entity) {
            //物品使用后触发的函数
        }
    }, "武器": {
        context: "武器说明",
        fun(entity) {//物品装备后触发的函数
            var handWears = entity.player.wearables(Box3BodyPart.RIGHT_HAND)///查找装备在右手上的东西
            entity.player.removeWearable(handWears[0])//删除装备在右手上的东西
            entity.player.addWearable({//装备该物品
                bodyPart: Box3BodyPart.RIGHT_HAND,//装备在右手上
                mesh: 'mesh/武器.vb',//模型mesh
                orientation: new Box3Quaternion(12, 12, -12, 12).rotateY(Math.PI / 2),//其他属性请自行修改
                scale: new Box3Vector3(0.5, 0.7, 0.5),
                offset: new Box3Vector3(0, 0.1, 0.7),
            })
        }
    },
};
var isWeapons = ['武器'];

world.onPlayerJoin(async ({ entity }) => {
    //初始化数据
    entity.exp = 0;//经验
    entity.coin = 0;//金币
    entity.item = [];//背包
    entity.weapon = '空气';//已装备的武器
    entity.bbzdhl = 25;//背包最大含量
    await loadUser(entity);//读取数据
    entity.player.onRelease(async ({ button }) => {
        if (button == 'action1') {
            async function cd1() {//定义函数，做出哈哈农场那样的菜单
                entity.bbts = '';//我的背包 的提示语
                const sj = await entity.player.dialog({
                    type: Box3DialogType.SELECT,
                    title: "我的信息",
                    content: `昵称：${entity.player.name}
                    BoxID：${entity.player.boxId}
                    
                    等级：Lv${exp_judge(entity.exp)[0] + `
                    距离升级还有` + exp_judge(entity.exp)[1] + "经验"}
                    总经验：${entity.exp}
                    血量：${entity.hp + '/' + entity.maxHp}
                    金币：${entity.coin}
                    `,//对话框内容
                    options: ['我的背包 (' + entity.item.length + '/' + entity.bbzdhl + ')', '保存数据'],//按钮
                });
                if (sj) {//判断是否点击右上角的×
                    if (sj.index == 0) {
                        async function cd2() {//定义函数，做出哈哈农场那样的菜单
                            if (entity.item.length != 0) {//判断背包是否不是空的
                                const wp = await entity.player.dialog({//查看背包里的东西
                                    type: Box3DialogType.SELECT,
                                    title: '我的背包 (' + entity.item.length + '/' + entity.bbzdhl + ')',
                                    content: entity.bbts,
                                    options: entity_item_slice(entity.item, entity.weapon),
                                });
                                if (wp) {//判断是否点击右上角的×
                                    async function cd3() {//定义函数，做出哈哈农场那样的菜单
                                        var options, isWeapon;//定义变量
                                        if (isWeapons.includes(entity_item_read(wp.value))) {
                                            options = [entity.weapon != entity_item_read(wp.value) ? '装备' : "卸下", "丢弃"];
                                            isWeapon = '（可装备物品）';
                                        } else {
                                            options = ['使用', "丢弃"];
                                            isWeapon = '';
                                        }
                                        const wpaz = await entity.player.dialog({
                                            type: Box3DialogType.SELECT,
                                            title: entity_item_read(wp.value) + isWeapon,
                                            content: wp_data[entity_item_read(wp.value)].context,
                                            options,
                                        });
                                        if (wpaz) {//判断是否点击右上角的×
                                            if (wpaz.value == '使用') {//如果点击的是使用按钮
                                                entity.bbts = "使用了“" + entity_item_read(wp.value) + "”";//设置提示语
                                                wp_data[entity_item_read(wp.value)].fun(entity);//运行使用函数
                                            } else if (wpaz.value == '丢弃') {//如果点击的是丢弃按钮
                                                const diuqi = await entity.player.dialog({//询问是否丢弃
                                                    title: '丢弃物品',
                                                    content: '确认丢弃' + entity_item_read(wp.value) + '？\n提示：丢弃后不可恢复，请谨慎选择',
                                                    options: ['确认', '取消']
                                                })
                                                if (diuqi) {//判断是否点击右上角的×
                                                    if (diuqi.index == 0) {//如果点击的是确认按钮
                                                        entity.bbts = "丢弃了“" + entity_item_read(wp.value) + "”";//设置提示语
                                                        entity.item.splice(entity.item.indexOf(entity_item_read(wp.value)), 1);//丢弃物品
                                                    }
                                                }
                                            } else if (wpaz.value == '卸下') {//如果点击的是卸下按钮
                                                entity.bbts = "卸下了“" + entity_item_read(wp.value) + "”";//设置提示语
                                                var handWears = entity.player.wearables(Box3BodyPart.RIGHT_HAND);///查找装备在右手上的东西
                                                entity.player.removeWearable(handWears[0]);//删除装备在右手上的东西
                                                entity.weapon = '空气';//设置已装备物品为空气
                                            } else if (wpaz.value == '装备') {//如果点击的是装备按钮
                                                entity.bbts = "装备了“" + entity_item_read(wp.value) + "”";//设置提示语
                                                wp_data[entity_item_read(wp.value)].fun(entity);//运行使用函数
                                                entity.weapon = entity_item_read(wp.value);//设置已装备物品为这个物品的名字
                                            }
                                            cd2();//返回背包界面
                                        } else {
                                            cd2();//返回背包界面
                                        }
                                    } cd3();//运行
                                } else { cd1();/*返回主菜单*/ }
                            } else {//背包是空的
                                const wp = await entity.player.dialog({//弹出提示
                                    type: Box3DialogType.SELECT,
                                    title: "我的背包",
                                    content: `你背包里还没有物品呢`,
                                });
                                cd1();//返回主菜单
                            }
                        }; cd2();//运行
                    } else if (sj.index == 1) {
                        await saveUser(entity)//保存数据
                        await entity.player.dialog({//弹出提示
                            type: Box3DialogType.SELECT,
                            title: "保存数据",
                            content: `保存成功！`,
                        });
                        cd1();//返回主菜单
                    }
                }
            }; cd1();//运行
        }
    })
    while (true) {//为了防止服务器卡顿，我们不采用world.onTick来实现自动保存
        await saveUser(entity);
        await sleep(1000);//每一秒保存一次
        if (entity.destroyed) { return };//如果玩家离开了地图，就取消这个玩家自动保存循环
    };
});

function exp_judge(exp) {//等级判断函数
    var levels = -1;
    var mathss = 0;
    var leiji = 0;
    var leijijy = 0;
    do {
        if (leijijy > mathss) {
            leiji += mathss;
        }
        levels += 1;
        var mathss = ((Math.floor(levels / 10) + 1) * 30 * (levels + 1)) + ((Math.floor(levels / 10) + 1) * 70);
        var leijijy = exp - leiji;
    }
    while (leijijy > mathss)
        var dj = String(levels + 1);
    var sy = dj == '1' ? String(100 - leijijy) : String(mathss - leijijy);
    return [dj, sy];
}

function entity_item_slice(arr, weapon) {//背包物品整理函数
    if (!arr) { return }
    var newarr = [];
    var copyarr = arr.slice();
    for (var i = 0; i < copyarr.length; i++) {
        var temp = copyarr[i];
        var count = 0;
        for (var j = 0; j < copyarr.length; j++) {
            if (copyarr[j] == temp) {
                count++;
                copyarr[j] = -1;
            }
        }
        if (temp != -1) {
            newarr.push(temp + '×' + count);
        }
    }
    for (var i = 0; i < newarr.length; i++) {
        if (entity_item_read(newarr[i]) == weapon) {
            newarr[i] = '[已装备] ' + newarr[i];
        }
    }
    return newarr;
}

function entity_item_read(data = "") {//返回出物品名字函数
    var str = data
    if (data.substring(0, 6) == "[已装备] ") {
        str = data.substring(6)
    }
    var string = ''
    for (var i = 0; i < str.length; i++) {
        var test = str[i]
        if (test == '×') {
            break
        } else {
            string = string + test
        }
    }
    return string
}
