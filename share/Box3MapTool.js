/*!
  * Box3MapTool v1.0.0
  * Copyright (c) 2022 xiaohong2022
*/
!function (t, e) {
    ("object" == typeof module ? module.exports : (t ? t : world)).Box3MapTool = e();
}(world, function () {
    "use strict";
    let aa = Date.now(), ab = 0, ac = 0;
    function a() {
        return /.+\/(.+)\/.+/.exec(world.url)[1] == "e";
    };
    function b() {
        return /.+\/(.+)\/.+/.exec(world.url)[1] == "p";
    };
    function c(d) {
        sleep(100 / 6).then(() => {
            return ("function" == d ? d() : d);
        });
    };
    function e() {
        ab++;
        if (Date.now() - aa > 1000) {
            ac = ab;
            aa = Date.now();
            ab = 0;
        };
        c(e);
    };
    function f() {
        return ac;
    };
    function $(t) {
        if (typeof t == "function") {
            setInterval(t, 100 / 16);
        }
        else if (typeof t == "string") {
            const searchList = world.querySelectorAll(t);
            Object.assign(searchList, {
                on: function (t, f) {
                    try {
                        eval(`searchList.forEach((v,i)=>{v.on${t}((e)=>{f(e,i)})})`);
                        return f;
                    } catch (e) {
                        return [][0];
                    };
                },
            });
            return searchList;
        } else {
            return t;
        }
    };
    e();
    return {
        isEdit: a,
        isPlay: b,
        getMapFps: f,
        requestAnimationFrame: c,
        $,
    };
});
