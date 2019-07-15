var G_biz = 18;
var G_Source = 'web';
var order = "sIdxTime"//初始化排序类型;
var Page = 1; //初始化页数
var PageSize = 12; //初始化每页显示多少条
var Type = "all"; //初始化搜索类型
var TypeId = 0; //初始化搜索类型ID
var search = ""; //初始化模糊搜索内容
var sousuoid=0;
//定位英雄
var dingwei = {
    '鬼谷子': '辅助',
    '大乔': '辅助',
    '太乙真人': '辅助',
    '蔡文姬': '辅助',
    '孙膑': '辅助',
    '黄忠': '射手',
    '成吉思汗': '射手',
    '马可波罗': '射手',
    '虞姬': '射手',
    '李元芳': '射手',
    '狄仁杰': '射手',
    '鲁班七号': '射手',
    '孙尚香': '射手',
    '后羿': '射手',
    '露娜': '刺客',
    '花木兰': '刺客',
    '娜可露露': '刺客',
    '兰陵王': '刺客',
    '阿轲': '刺客',
    '李白': '刺客',
    '韩信': '刺客',
    '东皇太一': '坦克',
    '钟馗': '坦克',
    '张飞': '坦克',
    '牛魔': '坦克',
    '刘邦': '坦克',
    '项羽': '坦克',
    '白起': '坦克',
    '刘禅': '坦克',
    '庄周': '坦克',
    '廉颇': '坦克',
    '吕布': '坦克',
    '墨子': '坦克',
    '程咬金': '坦克',
    '干将莫邪': '法师',
    '诸葛亮': '法师',
    '不知火舞': '法师',
    '张良': '法师',
    '王昭君': '法师',
    '姜子牙': '法师',
    '安琪拉': '法师',
    '貂蝉': '法师',
    '武则天': '法师',
    '甄姬': '法师',
    '周瑜': '法师',
    '芈月': '法师',
    '扁鹊': '法师',
    '嬴政': '法师',
    '妲己': '法师',
    '小乔': '法师',
    '高渐离': '法师',
    '宫本武藏': '战士',
    '刘备': '战士',
    '哪吒': '战士',
    '杨戬': '战士',
    '橘右京': '战士',
    '雅典娜': '战士',
    '夏侯惇': '战士',
    '关羽': '战士',
    '钟无艳': '战士',
    '亚瑟': '战士',
    '老夫子': '战士',
    '达摩': '战士',
    '典韦': '战士',
    '曹操': '战士',
    '赵云': '战士',
    '孙悟空': '战士',
    '铠': '战士',
	'百里守约': '射手',
    '百里玄策': '战士',
    '苏烈': '坦克',
    '梦奇': '坦克',
    '女娲': '法师',
    '明世隐': '辅助',
    '公孙离': '射手',
    '杨玉环': '法师',
    '裴擒虎': '刺客',
    '弈星': '法师',
    '狂铁': '战士',
    '米莱狄': '法师',
    '元歌': '刺客',
    '孙策': '坦克',
    '司马懿': '刺客',
    '盾山': '辅助',
    '伽罗': '射手',
    '沈梦溪': '法师',
    '李信': '战士',
    '上官婉儿': '法师',
    '嫦娥': '法师',
    '猪八戒': '坦克',
    '盘古': '战士',
    '瑶': '辅助',
    '云中君': '刺客',
    '曜': '战士'
};

var dataHero = {} || [];
var herolist = {} || [];
var appearrate = {};
var herolistIds = {} || [];

//默认资讯排行
QueryNewsRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#zixunList').html(RetHTML);
});

//英雄攻略单个英雄资讯排行
QueryNewsRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    var str = 'newsindexNew';
    var iType = 0;
    for (var x in data[type]) {
        var fenlei = data[type][x]['iType'];
        if (fenlei == 80) {
            RetHTML += '<li class="mtl-item"><em class="subscript">法师</em>';
        } else if (fenlei == 81) {
            RetHTML += '<li class="mtl-item"><em class="subscript">坦克</em>';
        } else if (fenlei == 79) {
            RetHTML += '<li class="mtl-item"><em class="subscript">战士</em>';
        } else if (fenlei == 82) {
            RetHTML += '<li class="mtl-item"><em class="subscript">刺客</em>';
        } else if (fenlei == 83) {
            RetHTML += '<li class="mtl-item"><em class="subscript">射手</em>';
        } else if (fenlei == 84) {
            RetHTML += '<li class="mtl-item"><em class="subscript">辅助</em>';
        } else {
            RetHTML += '<li class="mtl-item"><em class="subscript">最新</em>';
        }
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[type][x]['sUrl'], data[type][x]['iNewsId']) + '" onclick="PTTSendClick(\'heros\',\'hero' + data[type][x]['iSubType'] + '_image\',\'图文\');WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[type][x].iNewsId + '\')" target="_blank" title="' + data[type][x]['sTitle'] + '">' + data[type][x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[type][x]['sCreated']) + '</cite></li>';
    }
    $('#bakList9').html(RetHTML);
});

//获取登场率前20英雄
var encodeParam = 'E5CB3C064B7A772867B1B552594434FCA26621A002CCB5AF47407E70297E2D6EE7962AC5C4D05234943B0144EDFBDCC4C2A285820C8983E5DE4E22B38EF167CCCA62220D5B3FF8BF83283431B8FF17FB790EDAA0932201873DEC7556F3CFF3AD325B51D6FF5A451618921BA48FF6818B53191FA3C7ED56E51021350FDC66A01CB44BB53178F3C501';
$.ajax({
    url: '//pvp.ingame.qq.com/php/ingame/smoba/top_heros.php?partition=1119&roleid=90876401&area=1&physicalID=1&algorithm=v2&version=2.14.6a&timestamp=1493112232746&appid=1104466820&sig=11a92c24e8f0d1fc74e31bb8c5203a09&encode=2&msdkEncodeParam=' + encodeParam + '&game=smoba&start=1&num=20&ordertype=1&filter=0&grade=-1&herotype=0&matchtype=2',
    dataType: 'jsonp',
    'success': function (data) {
        var RetHTML = '';
        if (data.status == 'SUCCESS') {
            var hdata = data.data.herolist;
            for (var x in hdata) {
                var hid = hdata[x].heroid;
                if (module_exports[hid] != "") {
                    herolist[x] = module_exports[hid];
                    herolistIds[x] = hid;

                }
            }
            getHeroList2(0);
            getHeroList3(0);
        }
    }
})
//英雄大分类点击
$("#herolist li").bind("mouseover", function () {
    var tid = $(this).attr('data-id');
    if (tid == 0) {
        getHeroList2(0);
    } else {
        //获取该分类下的英雄
        getHeroList(tid);
    }
}).eq(0).mouseover().mouseout();

//加载英雄列表最热的9个英雄
function getHeroList(tid) {
    $.ajax({
        url: 'https://pvp.qq.com/web201605/js/herolist.json',
        dataType: 'json',
        success: function (data) {
            dataHero = data;
            QueryParentTypeInfo(function (data) {
                QueryTypeInfo(function (typeObj) {
                    var RetHTML = '';
                    var num = 0;
                    var zhoumian = "";
                    var xinrole = "";
                    if (tid == 0) {
                        for (var j in herolist) {
                            for (var i in typeObj) {
                                var subType = typeObj[i];
                                for (var k in subType) {
                                    if (herolist[j] === subType[k].sName) {
                                        zhoumian = milo.cookie.get(encodeURI(herolist[j] + 'zhoumian'));
                                        xinrole = milo.cookie.get(encodeURI(herolist[j] + 'xinrole'));
                                        if (zhoumian != herolist[j] && xinrole != herolist[j]) {
                                            if (num < 8) {
                                                if (num < 7) {
                                                    milo.cookie.set(herolistIds[j] + 'jilu', herolistIds[j], 10 * 600, "https://game.gtimg.cn/images/yxzj/web201706/js/raiders/qq.com", "/");
                                                }
                                                if (num == 7) {
                                                    RetHTML += '<li  id="tihuan" class = "hero-list-item" onclick="PTTSendClick(\'hero\',\'hot\',\'热门\');" id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + herolistIds[j] + ',1)">';
                                                } else {
                                                    RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + herolistIds[j] + ',1)" onclick="PTTSendClick(\'hero\',\'hot\',\'热门\');">';
                                                }
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + herolistIds[j] + '/' + herolistIds[j] + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-hot"></s>'
                                                RetHTML += ' <div class = "hli-info">'
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>出场排名<cite><span id="showpar' + herolistIds[j] + '"></span></cite></span>|<span>胜率排名<cite><span id="showwin' + herolistIds[j] + '"></span></cite></span></p>';
                                                RetHTML += ' </div>'
                                                RetHTML += '</li>';
                                                num++;
                                            } else {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        RetHTML += '<li class="hero-list-item hero-list-more" onmouseover="yiru();" onmouseout="yichu();">'
                        RetHTML += '<a href="#"  class="hlm-a" onclick="PTTSendClick(\'heros\',\'more_hero\',\'更多英雄\');">更多英雄</a>'
                        RetHTML += '</li>'
                        $('#herolve').append(RetHTML);
                        return;
                    }
                    var subType = typeObj['typelist_' + tid];
                    for (var x in subType) {
                        for (var y in dataHero) {
                            if (dataHero[y].cname === subType[x].sName) {
                                RetHTML += '<li subType=' + subType[x].iType + '  id="' + perosonList[subType[x].iType] + '" onmouseover="LoadSubTypeLists(' + tid + ',' + subType[x].iType + ',\'' + dataHero[y].cname + '\',0,' + perosonList[subType[x].iType] + ',' + dataHero[y].ename + ',0)">';
                                RetHTML += '<a>';
                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + dataHero[y].ename + '/' + dataHero[y].ename + '.jpg" width="60px" alt="' + subType[x].sName + '">' + subType[x].sName;
                                RetHTML += '</a>';
                                RetHTML += '</li>';
                            }
                        }

                    }
                    $('#hero_list').html(RetHTML);
                });
            })
        }
    })
}

//加载更多英雄最热模块
function getHeroList2(tid) {
    $.ajax({
        url: 'https://pvp.qq.com/web201605/js/herolist.json',
        dataType: 'json',
        success: function (data) {
            dataHero = data;
            QueryParentTypeInfo(function (data) {
                QueryTypeInfo(function (typeObj) {
                    var RetHTML = '';
                    if (tid == 0) {
                        for (var j in herolist) {
                            for (var i in typeObj) {
                                var subType = typeObj[i];
                                for (var k in subType) {
                                    if (herolist[j] === subType[k].sName) {
                                        RetHTML += '<li id="' + perosonList[subType[k].iType] + '" onmouseout="clearss(' + herolistIds[j] + ')"  subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(0,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + herolistIds[j] + ',0)">';
                                        RetHTML += '<a>';
                                        RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + herolistIds[j] + '/' + herolistIds[j] + '.jpg" width="60px" alt="' + subType[k].sName + '">' + subType[k].sName;
                                        RetHTML += '</a>';
                                        RetHTML += '</li>';
                                    }
                                }
                            }
                        }
                        $('#hero_list').html(RetHTML);
                        return;
                    }
                });
            })
        }
    })
}
function clearss(ronddid) {

    $("#" + ronddid).removeClass("active");

}
//加载英雄列表最新英雄1个
function getHeroList3(tid) {
    $.ajax({
        url: 'https://pvp.qq.com/web201605/js/herolist.json',
        dataType: 'json',
        success: function (data) {
            arrs = {};
            arrs = data;
            var numss = 0;
            for (var i in data) {
                new_type = data[i].new_type;
                if (new_type == "1") {
                    var cname = data[i].cname;
                    var ename = data[i].ename;
                    QueryParentTypeInfo(function (data) {
                        QueryTypeInfo(function (typeObj) {
                            var RetHTML = '';
                            if (tid == 0) {
                                for (var i in typeObj) {
                                    var subType = typeObj[i];
                                    for (var j in arrs) {
                                        for (var k in subType) {
                                            if (arrs[j].cname === subType[k].sName && arrs[j].new_type == "1") {
                                                milo.cookie.set(encodeURI(arrs[j].cname + 'xinrole'), arrs[j].cname, 10 * 600, "https://game.gtimg.cn/images/yxzj/web201706/js/raiders/qq.com", "/");
                                                milo.cookie.set(arrs[j].ename + 'jilu', arrs[j].ename, 10 * 600, "https://game.gtimg.cn/images/yxzj/web201706/js/raiders/qq.com", "/");
                                                RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + arrs[j].ename + ',1)" onclick="PTTSendClick(\'hero\',\'Newest\',\'全新\');">';
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + arrs[j].ename + '/' + arrs[j].ename + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-new"></s>';
                                                RetHTML += ' <div class = "hli-info">';
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>出场排名<cite><span  id="showpar' + arrs[j].ename + '"></span></cite></span>|<span>胜率排名<cite><span id="showwin' + arrs[j].ename + '"></span></cite></span></p>';
                                                RetHTML += ' </div>';
                                                RetHTML += '</li>';
                                            }
                                        }
                                    }

                                }
                                numss++
                                if (numss == 1) {
                                    $('#herolve').html(RetHTML);
                                }


                            }
                        });
                    })
                }
            }
            getHeroList4(0);
        }
    })
}
//加在英雄列表周免英雄7个
function getHeroList4(tid) {
    $.ajax({
        url: 'https://pvp.qq.com/web201605/js/herolist.json',
        dataType: 'json',
        success: function (data) {
            arr = {};
            arr = data;
            var nums = 0;
            for (var i in data) {
                pay_type = data[i].pay_type;
                if (pay_type == "10") {
                    var cname = data[i].cname;
                    var ename = data[i].ename;
                    QueryParentTypeInfo(function (data) {
                        QueryTypeInfo(function (typeObj) {
                            var RetHTML = '';
                            if (tid == 0) {
                                for (var i in typeObj) {
                                    var subType = typeObj[i];
                                    for (var j in arr) {
                                        for (var k in subType) {
                                            if (arr[j].cname === subType[k].sName && arr[j].pay_type == "10") {
                                                milo.cookie.set(encodeURI(arr[j].cname + 'zhoumian'), arr[j].cname, 10 * 600, "https://game.gtimg.cn/images/yxzj/web201706/js/raiders/qq.com", "/");
                                                milo.cookie.set(arr[j].ename + 'jilu', arr[j].ename, 10 * 600, "https://game.gtimg.cn/images/yxzj/web201706/js/raiders/qq.com", "/");
                                                RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + arr[j].ename + ',1)" onclick="PTTSendClick(\'hero\',\'free\',\'限免\');">';
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + arr[j].ename + '/' + arr[j].ename + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-free"></s>';
                                                RetHTML += ' <div class = "hli-info">';
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>出场排名<cite><span id="showpar' + arr[j].ename + '"></span></cite></span>|<span>胜率排名<cite><span  id="showwin' + arr[j].ename + '"></span></cite></span></p>';
                                                RetHTML += ' </div>';
                                                RetHTML += '</li>';

                                            }
                                        }
                                    }
                                }
                            }
                            nums++;
                            if (nums == 1) {
                                $('#herolve').append(RetHTML);
                                getHeroList(0);
                            }

                        });
                    })

                }

            }

        }
    })
}


//更多英雄按钮移入事件
function yiru() {

    $("#yxxianshi").show();
}
//更多英雄按钮移出事件
function yichu() {
    $("#yxxianshi").hide();
}

//点击头像显示胜率跟出场率名次
function showru(lookheroid) {
    //获取登场率前20英雄
    var encodeParam = 'E5CB3C064B7A772867B1B552594434FCA26621A002CCB5AF47407E70297E2D6EE7962AC5C4D05234943B0144EDFBDCC4C2A285820C8983E5DE4E22B38EF167CCCA62220D5B3FF8BF83283431B8FF17FB790EDAA0932201873DEC7556F3CFF3AD325B51D6FF5A451618921BA48FF6818B53191FA3C7ED56E51021350FDC66A01CB44BB53178F3C501';
    $.ajax({
        url: '//pvp.ingame.qq.com/php/ingame/smoba/get_valuable_book.php?partition=1119&roleid=90876401&area=1&physicalID=1&algorithm=v2&version=2.14.6a&timestamp=1493112232746&appid=1104466820&sig=11a92c24e8f0d1fc74e31bb8c5203a09&encode=2&msdkEncodeParam=' + encodeParam + '&game=smoba&start=1&num=20&ordertype=1&filter=0&grade=-1&herotype=0&matchtype=2&heroid=' + lookheroid,
        dataType: 'jsonp',
        'async': false,
        'success': function (data) {
            if (data.status == 'SUCCESS') {
                var winrank = data.data.winrank;
                var pickrank = data.data.pickrank;
                $("#showpar" + lookheroid).text(pickrank);
                $("#showwin" + lookheroid).text(winrank);
                return;
            }
        }
    })
}
//--------视频排行代码-------------
QueryRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#videoList').html(RetHTML);
});

//视频日排行
QueryRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#dpvList').html(RetHTML);
});
//视频周排行
QueryRankList(function (data) {
    var type = 'mpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#tpvList').html(RetHTML);
});
//视频月排行
QueryRankList(function (data) {
    var type = 'wpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#wpvList').html(RetHTML);
});
function yrsp() {
	sousuoid=0;
    var n = $('.mtbp-triggers .active').attr('name');

    //视频日排行
    QueryRankList(function (data) {
        var type = 'dpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#dpvList').html(RetHTML);
    });

    //视频周排行
    QueryRankList(function (data) {
        var type = 'mpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#tpvList').html(RetHTML);
    });

    //视频月排行
    QueryRankList(function (data) {
        var type = 'wpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#wpvList').html(RetHTML);
    });

    if (n == "2") {
        //视频日排行
        QueryRankList(function (data) {
            var type = 'dpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    } else if (n == "3") {
        //视频月排行
        QueryRankList(function (data) {
            var type = 'wpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    } else {
        //视频周排行
        QueryRankList(function (data) {
            var type = 'mpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    }


    $("#search").attr('placeholder', "输入关键字搜索更多视频");
}
function yrtw() {
	sousuoid=1;
    var n = $('.mtbp-triggers .active').attr('name');
    //资讯周排行
    QueryNewsRankList(function (data) {
        var type = 'wpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#wpvList').html(RetHTML);
    });
    //资讯日排行
    QueryNewsRankList(function (data) {
        var type = 'dpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#dpvList').html(RetHTML);
    });

    //资讯月排行
    QueryNewsRankList(function (data) {
        var type = 'tpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#tpvList').html(RetHTML);
    });
    if (n == "2") {
        //资讯日排行
        QueryNewsRankList(function (data) {
            var type = 'dpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    } else if (n == "3") {
        //资讯周排行
        QueryNewsRankList(function (data) {
            var type = 'wpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    } else {
        //资讯月排行
        QueryNewsRankList(function (data) {
            var type = 'tpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'详情\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    }
    $("#search").attr('placeholder', "输入关键字搜索更多图文攻略");
}

//获取英雄攻略视频与图文
var LoadSubTypeLists = function (iType, iSubType, heroName, type, id, roleid, state) {
    showru(roleid);
    if (iSubType == 0) {
        QueryTypeList(function (data) {
            var data = data['newlist' + iType];
            $('#videoList').html(PushData(data, 8, 'videoindexType', 'new' + iType));
        });
    } else {
        QueryTypeList(function (data) {
            var data = data['videolist' + iSubType];
            if (type == 0) {
                if (state == 0) {
                    updateRole(iType, iSubType, heroName, type, id, roleid);
                }
                $("#" + id).addClass("active");
                // searchSmart(id);
                // $('#herovideoNewList').html(PushDataaa(data, 8, 'videoindexType', iSubType));
                newBeeHeroDataFill.pick(6,heroName,roleid); /* 屏蔽上面两行切换英雄的获取接口的代码，改为新接品调用 mofify by sonic 2018-06-07 */

                $('.dropdown').hide();
            } else {
                $("#matchVideoList").html(PushDataMath(data, 8, 'videoindexType', iSubType))
            }
        });
    }
};
//------------------------------------------- 通过新V4接口取英雄视频/列表 （add by sonic 2018-06-06）-----------
// LoadSubTypeLists(1,1269,'杨戬',0,200,178,1);
// newBeeHeroDataFill.pick(6,'项羽',135)

var newBeeheroData1 = {},newBeeheroData2 = {},newbee_hero_list_callback = function(){};
var newBeeHeroDataFill = (function(){
    var newBeeheroDataUrl1 = 'WMP_PVP_WEBSITE_NEWBEE_DATA_V1.js'/*tpa=https://gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_NEWBEE_DATA_V1.js*/,
        newBeeheroDataUrl2 = 'WMP_PVP_WEBSITE_DATA_18_VIDEO_V3.js'/*tpa=https://gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_DATA_18_VIDEO_V3.js*/;

    var util = {},
        init = function () {};

    // 英雄视频图文接口请求
    util.pickHeroVideo = function(dataNum,roleName,roleId){
        if(!dataNum || !roleName || !roleId ) { return }
        if(!newBeeheroData1.video){
            // console.log("getScript newBeeheroDataUrl1")
            $.ajax({
                type: 'GET',url: newBeeheroDataUrl1,dataType: 'jsonp',jsonpCallback : 'newbee_hero_list_callback',
                success: function (data) {
                    newBeeheroData1 = data; //取得第一个接口数据

                    $.ajax({
                        type: 'GET',url: newBeeheroDataUrl2,dataType: 'jsonp',jsonpCallback : 'web_hero_list_v3',
                        success: function (data) {
                            newBeeheroData2 = data; //取得第二个接口数据
                            util.asetHeroVideoHtml(dataNum,roleName,roleId);
                        },error: function() {console.log('get newBeeheroDataUrl2 error!')}
                    });
                },
                error: function() {console.log('get newBeeheroDataUrl1 error!')}
            });
        }else{
            util.asetHeroVideoHtml(dataNum,roleName,roleId);
        }
    },

     // 英雄视频图文取回数据填充
    util.asetHeroVideoHtml = function(dataNum,roleName,roleId){
        // 从第一个接口取两个播放量最高的视频
        var ahtml = newBeeheroData1.video[roleName];
        ahtml.sort(function(a,b){ return  b.iTotalPlay.substring(0,b.iTotalPlay.length-1) - a.iTotalPlay.substring(0,a.iTotalPlay.length-1);}) //按播放数重排数组
        ahtml = util.pushDataHeroVideo(ahtml, 2, 'videoindexType', 0);

        // 从第二个接口取 4条进阶功略视频
        var bhtml = newBeeheroData2[roleIdPair[roleId]].jData;
        bbhtml = util.pushDataHeroVideo(bhtml, 4);

        var chtml = ahtml+bbhtml;
        $('#herovideoNewList').html(chtml);

        // 从第二个接口取 10条进阶功略图文或视频(排除头4条)
        var nhtml = util.pushDataHeroNews(bhtml, 10, 4);
        $('#bakList9').html(nhtml);
    },

    // 拼装英雄视频html
    util.pushDataHeroVideo = function(data, num){
        var RetHTML = '',
            length = data.length > num ? num : data.length;
        // console.log(data);
        var newArr = [];
        for(var i = 0; i < data.length; i++) {
            if( 'iVideoId' in data[i] ) {
                newArr.push( data[i] );
            }
        }

        data = newArr;
        // console.log(data);

        for (var x = 0; x < length; x++) {
            if (x <= 5) {
                // console.log(x + ',' + data[x]['iVideoId'] + ',' + data[x]['sTitle']);
                RetHTML += '<li class="mvl-item">';
                RetHTML += '<a class="mvl-a" href="/v/detail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iVideoId'] + '" onclick="PTTSendClick(\'heros\',\'hero' + data[x]['sParentTag'] + '_video\',\'视频\');" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
                RetHTML += '<span class="mvl-play-bar"><em class="icon-play">' + data[x]['iTotalPlay'] + '</em><em>' + ReloadPubdate(data[x]['sIdxTime']) + '</em></span>';
                RetHTML += '<span class="mvl-video-title" title="">' + data[x]['sTitle'] + '</span>';
                RetHTML += '<span class="mvl-mask pa">';
                RetHTML += '<em class="icon-play"></em>';
                RetHTML += '</span>';
                RetHTML += '</a>';
                RetHTML += '</li>';
            }
        }
        return RetHTML;
    },

    // 拼装英雄图文html
    util.pushDataHeroNews = function(data,num,index){
         var RetHTML = '',
             length = (data.length - index) > num ? num + index : data.length,
             index = index || 0;

         for (var x = index; x < length; x++) {
             if(data[x].iVideoId){
                RetHTML += '<li class="mtl-item"><em class="subscript">视频</em><a class="title" href="/v/detail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iVideoId'] + '"  target="_blank" title="' + data[x]['sTitle'] + '">';
             }else{
                RetHTML += '<li class="mtl-item"><em class="subscript">图文</em><a class="title" href="/web201605/newsDetail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iNewsId'] + '"  target="_blank" title="' + data[x]['sTitle'] + '">';
             }
             RetHTML += data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sIdxTime']) + '</cite></li>';
        }
         return RetHTML;
    };

    return{
        pick:function(dataNum,roleName,roleId){  util.pickHeroVideo(dataNum,roleName,roleId)  }
    }
})();
//------------------------------------------- 通过新V4接口取英雄视频/列表  End ---------------------------------


//点击更多英雄选择头像后修改最后一个英雄为选择英雄
function updateRole(iType, iSubType, heroName, type, id, roleid) {
    var findRoleid = "";
    findRoleid = milo.cookie.get(roleid + 'jilu');
    var RetHTML = '';
    if (findRoleid != roleid) {
        RetHTML += '<li  id="tihuan" class = "hero-list-item active" onmouseover="showru(' + roleid + ');" id="' + perosonList[iSubType] + '" subType=' + iSubType + ' onclick="LoadSubTypeLists(1,' + iSubType + ',\'' + heroName + '\',0,' + perosonList[iSubType] + ',' + roleid + ')">';
        RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + roleid + '/' + roleid + '.jpg" class="avatar" alt="' + heroName + '">';
        RetHTML += ' <div class = "hli-info">';
        RetHTML += '<p><span>' + heroName + '</span><span>' + dingwei[heroName] + '</span><span></span>|<span>出场排名<cite><span id="showpar' + roleid + '"></span></cite></span>|<span>胜率排名<cite><span  id="showwin' + roleid + '"></span></cite></span></p>';
        RetHTML += ' </div>'
        RetHTML += '</li>';
        $("#tihuan").replaceWith(RetHTML);
    }


}

//获取英雄攻略图文
function searchSmart(id) {
    var type = "iSubType";
    var page = 1;
    var pagesize = 10;
    var order = "sIdxTime"//初始化排序类型;
    var str = 'newsindexNew';
    var iType = 0;
    QuerySearchNewsList(page, pagesize, order, type, id, function (data) {
        if (data.status == 0) {
            var html = '';
            for (var x in data.msg.result) {
                var fenlei = data.msg.result[x]['iType'];
                if (fenlei == 80) {
                    html += '<li class="mtl-item"><em class="subscript">法师</em>';
                } else if (fenlei == 81) {
                    html += '<li class="mtl-item"><em class="subscript">坦克</em>';
                } else if (fenlei == 79) {
                    html += '<li class="mtl-item"><em class="subscript">战士</em>';
                } else if (fenlei == 82) {
                    html += '<li class="mtl-item"><em class="subscript">刺客</em>';
                } else if (fenlei == 83) {
                    html += '<li class="mtl-item"><em class="subscript">射手</em>';
                } else if (fenlei == 84) {
                    html += '<li class="mtl-item"><em class="subscript">辅助</em>';
                } else {
                    html += '<li class="mtl-item"><em class="subscript">最新</em>';
                }

                html += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data.msg.result[x]['sUrl'], data.msg.result[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data.msg.result[x].iNewsId + '\')" target="_blank" title="' + data.msg.result[x]['sTitle'] + '">' + data.msg.result[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data.msg.result[x]['sCreated']) + '</cite></li>';
            }
            $('#bakList9').html(html).show();

        } else {
            var html = '';
            html += '<li class="mtl-item">';
            html += '<a class="title"   target="_blank" >暂无数据</a><cite class="date"></cite></li>';
            $('#bakList9').html(html).show();
        }
    });
}

//获取英雄攻略视频
var PushDataaa = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        if (x <= 5) {
            RetHTML += '<li class="mvl-item">'
            RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'heros\',\'hero' + data[x]['iSubType'] + '_video\',\'视频\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
            RetHTML += '<span class="mvl-play-bar"><em class="icon-play">' + data[x]['iTotalPlay'] + '</em><em>' + ReloadPubdate(data[x]['sCreated']) + '</em></span>'
            RetHTML += ' <span class="mvl-video-title" title="">' + data[x]['sTitle'] + '</span>'
            RetHTML += '<span class="mvl-mask pa">'
            RetHTML += '<em class="icon-play"></em>'
            RetHTML += '</span>'
            RetHTML += '</a>'
            RetHTML += '</li>'
        }

    }
    return RetHTML;
};
var PushDataMath = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        RetHTML += '<li>';
        RetHTML += '<a  href="' + data[x]['sUrl'] + '" target="_blank" onclick="' + data[x]['sLog'] + '" title="' + data[x]['sTitle'] + '">';
        RetHTML += '<img src="' + data[x]['sIMG'] + '" width="173" height="110">';
        RetHTML += '<p class="video-tit">' + data[x]['sTitle'] + '</p>';
        RetHTML += '<p class="clearfix play-bar">';
        RetHTML += '<em class="fl ico-play">' + data[x]['iTotalPlay'] + '</em><em class="fr">' + ReloadPubdate(data[x]['sCreated']) + +'</em>';
        RetHTML += '</p>';
        RetHTML += '</a>';
        RetHTML += '<div class="mask pa">';
        RetHTML += '<a href="' + data[x]['sUrl'] + '" onclick="' + data[x]['sLog'] + '" target="_blank"><span class="mask-play-ico db spr"></span></a>';
        RetHTML += '</div>';
        RetHTML += '</li>';
    }
    return RetHTML;
};

//-------图文最新-------------
QueryNewsNewList(function (data) {
    $('#NewList').html(PushData(data, 12, 'NewsindexNew', 0));
});

var PushData = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mtl-item"><em class="subscript">最新</em>';
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[x]['sUrl'], data[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[x].iNewsId + '\')" target="_blank" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sCreated']) + '</cite></li>';
    }
    return RetHTML;
};
//--------图文官方-------------
QueryNewsTypeList(function (data) {
    var iType = '77';
    var data = data['newlist' + iType];
    $('#bakList5').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------图文英雄-------------
QueryNewsTypeList(function (data) {
    var iType = '103';
    var data = data['newlist' + iType];
    $('#bakList6').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------图文新手-------------
QueryNewsTypeList(function (data) {
    var iType = '111';
    var data = data['newlist' + iType];
    $('#bakList7').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------图文同人-------------
QueryNewsTypeList(function (data) {
    var iType = '76';
    var data = data['newlist' + iType];
    $('#bakList8').html(PushDatafl(data, 12, 'newsindexNew', iType));
});


//获取图文攻略
var PushDatafl = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        // if (x < 10) {
        if (iType == '103') {
            RetHTML += '<li class="mtl-item"><em class="subscript">英雄</em>';
        } else if (iType == '111') {
            RetHTML += '<li class="mtl-item"><em class="subscript">新手</em>';
        } else if (iType == '76') {
            RetHTML += '<li class="mtl-item"><em class="subscript">同人</em>';
        } else if (iType == '77') {
            RetHTML += '<li class="mtl-item"><em class="subscript">官方</em>';
        } else {
            RetHTML += '<li class="mtl-item"><em class="subscript">最新</em>';
        }
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[x]['sUrl'], data[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[x].iNewsId + '\')" target="_blank" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sCreated']) + '</cite></li>';
        // }
    }
    return RetHTML;
};



//英雄攻略6视频
//--------最新视频代码-------------
QueryNewList(function (data) {
    $('#herovideoNewList').html(PushDatas(data, 6, 'videoindexType', 962));
});
var PushDatas = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mvl-item">'
        RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'heros\',\'hero' + iType + '_video\',\'视频\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
        RetHTML += '<span class="mvl-play-bar"><em class="icon-play">' + data[x]['iTotalPlay'] + '</em><em>' + ReloadPubdate(data[x]['sCreated']) + '</em></span>'
        RetHTML += ' <span class="mvl-video-title" title="">' + data[x]['sTitle'] + '</span>'
        RetHTML += '<span class="mvl-mask pa">'
        RetHTML += '<em class="icon-play"></em>'
        RetHTML += '</span>'
        RetHTML += '</a>'
        RetHTML += '</li>'
    }
    return RetHTML;
};
$("#sousuo").click(function () {
     
    var search = $("#search").val();
    if (sousuoid == "0") {
        window.location.href = location.protocol + '//pvp.qq.com/v/videolist.shtml?G_biz=18&sKeyword='+encodeURIComponent(encodeURIComponent(search));
    } else {
        window.location.href = location.protocol + '//pvp.qq.com/web201605/searchResult.shtml?G_biz=18&sKeyword='+encodeURIComponent(encodeURIComponent(search));
    }
});

function panduan(typeid) {

}

QueryTypeInfo(function (subType) {
    TypeId = "item2";
    getColumNewest(TypeId);
});
//点击精品栏目按钮
function liclick(self) {
    var clickid = self.id;
    var xiaobiaoti = self.text;
    $("#xiaobiaoti").text("“" + xiaobiaoti + "”");
    Type = 'iTag';
    TypeId = clickid;
    if (TypeId == 'item1' || TypeId == 'item2') {
        getColumNewest(TypeId,'boutique');
    } else {
        LoadDefaultData(1, 20, 'sIdxTime', Type, TypeId);
    }

}
//点击赛事精品按钮
function liclicks(self) {
    var clickid = self.id;
    var xiaobiaoti = self.text;
    $("#xiaobiaotis").text("“" + xiaobiaoti + "”");
    Type = 'iTag';
    TypeId = clickid;
    if (TypeId == 'item1' || TypeId == 'item2') {
        getColumNewest(TypeId,'match');
        // getColumNewests(TypeId);
    } else {
        LoadDefaultDatas(1, 20, 'sIdxTime', Type, TypeId);
    }
}
var pttName = '';

//根据关键词获取精品栏目视频信息
var LoadDefaultData = function LoadDefaultData(Page, PageSize, order, Type, TypeId) {
    QuerySearchList(Page, PageSize, order, Type, TypeId, function (data) {
        if (data.status == 0) {
            pttName = 'boutique';
            $('#jingxuanvideo').html(PushDatavideo(data['msg']['result'], PageSize, 'videosearch' + Type, TypeId));
        } else {
            $('#jingxuanvideo').html(data.msg);
        }
    });
};
//根据关键词获取赛事精品视频信息
var LoadDefaultDatas = function LoadDefaultData(Page, PageSize, order, Type, TypeId) {
    QuerySearchList(Page, PageSize, order, Type, TypeId, function (data) {
        if (data.status == 0) {
            pttName = 'match';
            $('#saishi').html(PushDatavideo(data['msg']['result'], PageSize, 'videosearch' + Type, TypeId));
        } else {
            $('#saishi').html(data.msg);
        }
    });
};
//填充赛事与精品栏目视频
var PushDatavideo = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    var num = 0;
    if( iType == undefined || iType == 'undefined' ) {
        iType = 'Newest'
    }
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mvl-item">'
        RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'' + pttName + '\',\'nav' + iType + '_details\',\'详情\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic"  src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
        RetHTML += '<span class="mvl-play-bar" ><em class="icon-play">' + data[x]['iTotalPlay'] + '</em><em>' + ReloadPubdate(data[x]['sCreated']) + '</em></span>'
        if (num == 4) {
            RetHTML += ' <span class="mvl-video-title" title="">' + data[x]['sTitle'] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
        } else {
            RetHTML += ' <span class="mvl-video-title" title="">' + data[x]['sTitle'] + '</span>'
        }
        RetHTML += '<span class="mvl-mask pa">'
        RetHTML += '<em class="icon-play"></em>'
        RetHTML += '</span>'
        RetHTML += '</a>'
        RetHTML += '</li>'
        num++;
    }
    return RetHTML;
};

//获取赛事精品、精品栏目最新
function getColumNewest(TypeId,EleId) {
    var retNHTML = '';
    var arr = [],index = 0;
    
    var iParentId = (EleId == 'boutique') ? 932 : 931;
    QuerySearchList(1, 20, 'sIdxTime', 'iTag', iParentId, function (data) {
        if (data.status == 0) {
            var dataArr = data.msg.result;
            for (var j = 0; j < dataArr.length; j++) {
                arr.push(dataArr[j]);
            }

            // if (index == items.length - 1) {
                arr.sort(function (a, b) {
                    return compareTime(b.sCreated) - compareTime(a.sCreated);
                });
                var newData = arr.slice(0, 20);
                
                if(EleId == 'boutique'){
                    pttName = EleId
                    $('#jingxuanvideo').html(PushDatavideo(newData, 20));
                }else if(EleId == 'match'){
                    pttName = EleId
                    $('#saishi').html(PushDatavideo(newData, 20));
                }

            // }

        } else {
            console.log(data);
        }
    });
}
getColumNewest('item2','boutique');
getColumNewest('item1','match');
// function getColumNewests(TypeId) {
//     var items = {} || [];
//     if (TypeId == 'item1') {
//         items = [2507, 2508, 2132, 2509, 2135, 2510, 2504, 2511, 2512];
//     } else {
//         items = [2132, 2499, 2137, 2140, 2125, 2500, 2501, 2502, 2503, 2504, 2505, 2506];
//     }
//     var retNHTML = '';
//     var arr = [],
//             index = 0;
//     for (var i = 0; i < items.length; i++) {
//         QuerySearchList(1, 2, 'sIdxTime', 'iKeyword', items[i], function (data) {
//             if (data.status == 0) {
//                 var dataArr = data.msg.result;
//                 for (var j = 0; j < dataArr.length; j++) {
//                     arr.push(dataArr[j]);
//                 }

//                 if (index == items.length - 1) {
//                     arr.sort(function (a, b) {
//                         return compareTime(b.sCreated) - compareTime(a.sCreated);
//                     });
//                     var newData = arr.slice(0, 20);
//                     pttName = 'match';
//                     $('#saishi').html(PushDatavideo(newData, 20));
//                 }
//                 index++;

//             } else {
//                 console.log(data);
//             }
//         });
//     }
// }
// getColumNewests('item1');

function compareTime(a) {
    return parseInt(new Date(Date.parse(a)).getTime());
}


