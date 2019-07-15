var pvpSeoData = {
    pvpClickArr: [],
    pvpClickQueue: null,
    pathname: location.pathname.replace(/\./g, "_"),
    inti: function () {
        if (typeof (pgvSendClickForPTT) == 'function') {
            this.pvpClickQueue = function (hottag) {
                pgvSendClickForPTT({ hottag: hottag });
            }
        } else {
            if (typeof (pgvSendClick) == 'function') {
                this.pvpClickQueue = function (hottag) {
                    pgvSendClick({ hottag: hottag });
                }
            } else {
                this.pvpClickQueue = function (hottag) {
                    this.pvpClickArr.push(hottag);
                }
            }
        }
        if (this.pathname.indexOf("/web201605/herodetail/")!=-1) {
            this.pathname = "herodetail." + this.pathname;
        }
        this.pvpClickQueue("ppv." + this.pathname);
        if (document.referrer != "") {
            var reg = /^http(s)?:\/\/(.*?)\//;
            var hostStr = reg.exec(document.referrer)[2];
            hostStr = hostStr.replace(/\./g, "_");
            this.pvpClickQueue("pseohost." + hostStr + "." + this.pathname);
            this.pvpClickQueue("pseopage." + this.pathname + "." + hostStr);
        } else {
            this.pvpClickQueue("pseohost.pvp." + this.pathname);
            this.pvpClickQueue("pseopage." + this.pathname + ".pvp");
        }
        console.log("pvppc");
    }
};
function PTTCallback() {
    PTTCallback = null;
    if (typeof (pgvSendClickForPTT) == 'function') {
        pvpSeoData.pvpClickQueue = function (hottag) {
            pgvSendClickForPTT({ hottag: hottag });
        }
    } else {
        if (typeof (pgvSendClick) == 'function') {
            pvpSeoData.pvpClickQueue = function (hottag) {
                pgvSendClick({ hottag: hottag });
            }
        }
    }
    if (typeof (pgvSendClickForPTT) != 'function') {
        pvpSeoData.pvpClickQueue("pnoptt." + pvpSeoData.pathname);
    }

    if (pvpSeoData.pvpClickArr.length > 0) {
        for (var i = 0; i < pvpSeoData.pvpClickArr.length; i++) {
            pvpSeoData.pvpClickQueue(pvpSeoData.pvpClickArr[i]);
        }
    }
}
pvpSeoData.inti();
if (typeof (pgvMain) == 'function') { PTTCallback(); } else {
    pvpSeoData.pvpSet = setInterval(function () {
        if (typeof (pgvMain) == 'function') {
            if (typeof (PTTCallback) == 'function') {
                PTTCallback();
            }
            clearInterval(pvpSeoData.pvpSet);
        }
    }, 20);
}








////pvp.qq.com/web201605/herodetail/


//首页
////pvp.qq.com

//版本介绍
////pvp.qq.com/cp/a20170829bbgxsm/index.html

//爆料站
////pvp.qq.com/coming/

//游戏介绍
////pvp.qq.com/web201605/introduce.shtml

//英雄资料
////pvp.qq.com/web201605/herolist.shtml

//游戏壁纸 
////pvp.qq.com/web201605/wallpaper.shtml
//攻略中心
////pvp.qq.com/raiders/

//英雄攻略
////pvp.qq.com/strategy/

//视频中心
////pvp.qq.com/v/

//KPL职业联赛
////pvp.qq.com/match/kpl/index.shtml

////www.baidu.com/link?url=3pqIlfLS2w87dyFmPl7vO7tPmq2JZTvLriX5LAEJcwC&wd=&eqid=9b044388000077cf000000065ad019de
////www.baidu.com/link?url=Vi8owjr44Y2XiOBDwMmaYlcWyJ3-CBcT_z_TUJQfR3K&wd=&eqid=c3ae8fdd00007e1e000000065ad01a31