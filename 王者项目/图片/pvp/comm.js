var G_biz = 18;
var G_Source = 'web';
var order = "sIdxTime"//��ʼ����������;
var Page = 1; //��ʼ��ҳ��
var PageSize = 12; //��ʼ��ÿҳ��ʾ������
var Type = "all"; //��ʼ����������
var TypeId = 0; //��ʼ����������ID
var search = ""; //��ʼ��ģ����������
var sousuoid=0;
//��λӢ��
var dingwei = {
    '�����': '����',
    '����': '����',
    '̫������': '����',
    '���ļ�': '����',
    '����': '����',
    '����': '����',
    '�ɼ�˼��': '����',
    '��ɲ���': '����',
    '�ݼ�': '����',
    '��Ԫ��': '����',
    '���ʽ�': '����',
    '³���ߺ�': '����',
    '������': '����',
    '����': '����',
    '¶��': '�̿�',
    '��ľ��': '�̿�',
    '�ȿ�¶¶': '�̿�',
    '������': '�̿�',
    '����': '�̿�',
    '���': '�̿�',
    '����': '�̿�',
    '����̫һ': '̹��',
    '��ظ': '̹��',
    '�ŷ�': '̹��',
    'ţħ': '̹��',
    '����': '̹��',
    '����': '̹��',
    '����': '̹��',
    '����': '̹��',
    'ׯ��': '̹��',
    '����': '̹��',
    '����': '̹��',
    'ī��': '̹��',
    '��ҧ��': '̹��',
    '�ɽ�Īа': '��ʦ',
    '�����': '��ʦ',
    '��֪����': '��ʦ',
    '����': '��ʦ',
    '���Ѿ�': '��ʦ',
    '������': '��ʦ',
    '������': '��ʦ',
    '����': '��ʦ',
    '������': '��ʦ',
    '�缧': '��ʦ',
    '���': '��ʦ',
    '����': '��ʦ',
    '��ȵ': '��ʦ',
    '����': '��ʦ',
    '槼�': '��ʦ',
    'С��': '��ʦ',
    '�߽���': '��ʦ',
    '�������': 'սʿ',
    '����': 'սʿ',
    '��߸': 'սʿ',
    '���': 'սʿ',
    '���Ҿ�': 'սʿ',
    '�ŵ���': 'սʿ',
    '�ĺ': 'սʿ',
    '����': 'սʿ',
    '������': 'սʿ',
    '��ɪ': 'սʿ',
    '�Ϸ���': 'սʿ',
    '��Ħ': 'սʿ',
    '��Τ': 'սʿ',
    '�ܲ�': 'սʿ',
    '����': 'սʿ',
    '�����': 'սʿ',
    '��': 'սʿ',
	'������Լ': '����',
    '��������': 'սʿ',
    '����': '̹��',
    '����': '̹��',
    'Ů�': '��ʦ',
    '������': '����',
    '������': '����',
    '����': '��ʦ',
    '���ܻ�': '�̿�',
    '����': '��ʦ',
    '����': 'սʿ',
    '������': '��ʦ',
    'Ԫ��': '�̿�',
    '���': '̹��',
    '˾��ܲ': '�̿�',
    '��ɽ': '����',
    '٤��': '����',
    '����Ϫ': '��ʦ',
    '����': 'սʿ',
    '�Ϲ����': '��ʦ',
    '�϶�': '��ʦ',
    '��˽�': '̹��',
    '�̹�': 'սʿ',
    '��': '����',
    '���о�': '�̿�',
    '��': 'սʿ'
};

var dataHero = {} || [];
var herolist = {} || [];
var appearrate = {};
var herolistIds = {} || [];

//Ĭ����Ѷ����
QueryNewsRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#zixunList').html(RetHTML);
});

//Ӣ�۹��Ե���Ӣ����Ѷ����
QueryNewsRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    var str = 'newsindexNew';
    var iType = 0;
    for (var x in data[type]) {
        var fenlei = data[type][x]['iType'];
        if (fenlei == 80) {
            RetHTML += '<li class="mtl-item"><em class="subscript">��ʦ</em>';
        } else if (fenlei == 81) {
            RetHTML += '<li class="mtl-item"><em class="subscript">̹��</em>';
        } else if (fenlei == 79) {
            RetHTML += '<li class="mtl-item"><em class="subscript">սʿ</em>';
        } else if (fenlei == 82) {
            RetHTML += '<li class="mtl-item"><em class="subscript">�̿�</em>';
        } else if (fenlei == 83) {
            RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        } else if (fenlei == 84) {
            RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        } else {
            RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        }
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[type][x]['sUrl'], data[type][x]['iNewsId']) + '" onclick="PTTSendClick(\'heros\',\'hero' + data[type][x]['iSubType'] + '_image\',\'ͼ��\');WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[type][x].iNewsId + '\')" target="_blank" title="' + data[type][x]['sTitle'] + '">' + data[type][x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[type][x]['sCreated']) + '</cite></li>';
    }
    $('#bakList9').html(RetHTML);
});

//��ȡ�ǳ���ǰ20Ӣ��
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
//Ӣ�۴������
$("#herolist li").bind("mouseover", function () {
    var tid = $(this).attr('data-id');
    if (tid == 0) {
        getHeroList2(0);
    } else {
        //��ȡ�÷����µ�Ӣ��
        getHeroList(tid);
    }
}).eq(0).mouseover().mouseout();

//����Ӣ���б����ȵ�9��Ӣ��
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
                                                    RetHTML += '<li  id="tihuan" class = "hero-list-item" onclick="PTTSendClick(\'hero\',\'hot\',\'����\');" id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + herolistIds[j] + ',1)">';
                                                } else {
                                                    RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + herolistIds[j] + ',1)" onclick="PTTSendClick(\'hero\',\'hot\',\'����\');">';
                                                }
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + herolistIds[j] + '/' + herolistIds[j] + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-hot"></s>'
                                                RetHTML += ' <div class = "hli-info">'
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>��������<cite><span id="showpar' + herolistIds[j] + '"></span></cite></span>|<span>ʤ������<cite><span id="showwin' + herolistIds[j] + '"></span></cite></span></p>';
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
                        RetHTML += '<a href="#"  class="hlm-a" onclick="PTTSendClick(\'heros\',\'more_hero\',\'����Ӣ��\');">����Ӣ��</a>'
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

//���ظ���Ӣ������ģ��
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
//����Ӣ���б�����Ӣ��1��
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
                                                RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + arrs[j].ename + ',1)" onclick="PTTSendClick(\'hero\',\'Newest\',\'ȫ��\');">';
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + arrs[j].ename + '/' + arrs[j].ename + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-new"></s>';
                                                RetHTML += ' <div class = "hli-info">';
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>��������<cite><span  id="showpar' + arrs[j].ename + '"></span></cite></span>|<span>ʤ������<cite><span id="showwin' + arrs[j].ename + '"></span></cite></span></p>';
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
//����Ӣ���б�����Ӣ��7��
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
                                                RetHTML += '<li  class = "hero-list-item"  id="' + perosonList[subType[k].iType] + '" subType=' + subType[k].iType + ' onmouseover="LoadSubTypeLists(1,' + subType[k].iType + ',\'' + subType[k].sName + '\',0,' + perosonList[subType[k].iType] + ',' + arr[j].ename + ',1)" onclick="PTTSendClick(\'hero\',\'free\',\'����\');">';
                                                RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + arr[j].ename + '/' + arr[j].ename + '.jpg" class="avatar" alt="' + subType[k].sName + '">';
                                                RetHTML += '<s class = "ssico ssico-free"></s>';
                                                RetHTML += ' <div class = "hli-info">';
                                                RetHTML += '<p><span>' + subType[k].sName + '</span><span>' + dingwei[subType[k].sName] + '</span><span></span>|<span>��������<cite><span id="showpar' + arr[j].ename + '"></span></cite></span>|<span>ʤ������<cite><span  id="showwin' + arr[j].ename + '"></span></cite></span></p>';
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


//����Ӣ�۰�ť�����¼�
function yiru() {

    $("#yxxianshi").show();
}
//����Ӣ�۰�ť�Ƴ��¼�
function yichu() {
    $("#yxxianshi").hide();
}

//���ͷ����ʾʤ�ʸ�����������
function showru(lookheroid) {
    //��ȡ�ǳ���ǰ20Ӣ��
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
//--------��Ƶ���д���-------------
QueryRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#videoList').html(RetHTML);
});

//��Ƶ������
QueryRankList(function (data) {
    var type = 'dpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#dpvList').html(RetHTML);
});
//��Ƶ������
QueryRankList(function (data) {
    var type = 'mpvlist';
    var RetHTML = "";
    for (var x in data[type]) {
        var num = parseInt(x) + 1;
        RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
    }
    $('#tpvList').html(RetHTML);
});
//��Ƶ������
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

    //��Ƶ������
    QueryRankList(function (data) {
        var type = 'dpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#dpvList').html(RetHTML);
    });

    //��Ƶ������
    QueryRankList(function (data) {
        var type = 'mpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#tpvList').html(RetHTML);
    });

    //��Ƶ������
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
        //��Ƶ������
        QueryRankList(function (data) {
            var type = 'dpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    } else if (n == "3") {
        //��Ƶ������
        QueryRankList(function (data) {
            var type = 'wpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    } else {
        //��Ƶ������
        QueryRankList(function (data) {
            var type = 'mpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/v/' + data[type][x]['sUrl'] + '" class="t" onclick="PTTSendClick(\'btn\',\'video_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#videoList').html(RetHTML);
        });
    }


    $("#search").attr('placeholder', "����ؼ�������������Ƶ");
}
function yrtw() {
	sousuoid=1;
    var n = $('.mtbp-triggers .active').attr('name');
    //��Ѷ������
    QueryNewsRankList(function (data) {
        var type = 'wpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#wpvList').html(RetHTML);
    });
    //��Ѷ������
    QueryNewsRankList(function (data) {
        var type = 'dpvlist';
        var RetHTML = "";
        for (var x in data[type]) {
            var num = parseInt(x) + 1;
            RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
        }
        $('#dpvList').html(RetHTML);
    });

    //��Ѷ������
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
        //��Ѷ������
        QueryNewsRankList(function (data) {
            var type = 'dpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    } else if (n == "3") {
        //��Ѷ������
        QueryNewsRankList(function (data) {
            var type = 'wpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    } else {
        //��Ѷ������
        QueryNewsRankList(function (data) {
            var type = 'tpvlist';
            var RetHTML = "";
            for (var x in data[type]) {
                var num = parseInt(x) + 1;
                RetHTML += '<li><em class="s">' + num + '</em><a target="_blank" href="//pvp.qq.com/web201605/newsDetail.shtml?G_biz=18&tid=' + data[type][x].iNewsId + '" class="t" onclick="PTTSendClick(\'btn\',\'image_details\',\'����\');">' + data[type][x]['sTitle'] + '</a><cite>' + data[type][x]['iTotalPlay'] + '</cite></li>';
            }
            $('#zixunList').html(RetHTML);
        });
    }
    $("#search").attr('placeholder', "����ؼ�����������ͼ�Ĺ���");
}

//��ȡӢ�۹�����Ƶ��ͼ��
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
                newBeeHeroDataFill.pick(6,heroName,roleid); /* �������������л�Ӣ�۵Ļ�ȡ�ӿڵĴ��룬��Ϊ�½�Ʒ���� mofify by sonic 2018-06-07 */

                $('.dropdown').hide();
            } else {
                $("#matchVideoList").html(PushDataMath(data, 8, 'videoindexType', iSubType))
            }
        });
    }
};
//------------------------------------------- ͨ����V4�ӿ�ȡӢ����Ƶ/�б� ��add by sonic 2018-06-06��-----------
// LoadSubTypeLists(1,1269,'���',0,200,178,1);
// newBeeHeroDataFill.pick(6,'����',135)

var newBeeheroData1 = {},newBeeheroData2 = {},newbee_hero_list_callback = function(){};
var newBeeHeroDataFill = (function(){
    var newBeeheroDataUrl1 = 'WMP_PVP_WEBSITE_NEWBEE_DATA_V1.js'/*tpa=https://gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_NEWBEE_DATA_V1.js*/,
        newBeeheroDataUrl2 = 'WMP_PVP_WEBSITE_DATA_18_VIDEO_V3.js'/*tpa=https://gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_DATA_18_VIDEO_V3.js*/;

    var util = {},
        init = function () {};

    // Ӣ����Ƶͼ�Ľӿ�����
    util.pickHeroVideo = function(dataNum,roleName,roleId){
        if(!dataNum || !roleName || !roleId ) { return }
        if(!newBeeheroData1.video){
            // console.log("getScript newBeeheroDataUrl1")
            $.ajax({
                type: 'GET',url: newBeeheroDataUrl1,dataType: 'jsonp',jsonpCallback : 'newbee_hero_list_callback',
                success: function (data) {
                    newBeeheroData1 = data; //ȡ�õ�һ���ӿ�����

                    $.ajax({
                        type: 'GET',url: newBeeheroDataUrl2,dataType: 'jsonp',jsonpCallback : 'web_hero_list_v3',
                        success: function (data) {
                            newBeeheroData2 = data; //ȡ�õڶ����ӿ�����
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

     // Ӣ����Ƶͼ��ȡ���������
    util.asetHeroVideoHtml = function(dataNum,roleName,roleId){
        // �ӵ�һ���ӿ�ȡ������������ߵ���Ƶ
        var ahtml = newBeeheroData1.video[roleName];
        ahtml.sort(function(a,b){ return  b.iTotalPlay.substring(0,b.iTotalPlay.length-1) - a.iTotalPlay.substring(0,a.iTotalPlay.length-1);}) //����������������
        ahtml = util.pushDataHeroVideo(ahtml, 2, 'videoindexType', 0);

        // �ӵڶ����ӿ�ȡ 4�����׹�����Ƶ
        var bhtml = newBeeheroData2[roleIdPair[roleId]].jData;
        bbhtml = util.pushDataHeroVideo(bhtml, 4);

        var chtml = ahtml+bbhtml;
        $('#herovideoNewList').html(chtml);

        // �ӵڶ����ӿ�ȡ 10�����׹���ͼ�Ļ���Ƶ(�ų�ͷ4��)
        var nhtml = util.pushDataHeroNews(bhtml, 10, 4);
        $('#bakList9').html(nhtml);
    },

    // ƴװӢ����Ƶhtml
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
                RetHTML += '<a class="mvl-a" href="/v/detail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iVideoId'] + '" onclick="PTTSendClick(\'heros\',\'hero' + data[x]['sParentTag'] + '_video\',\'��Ƶ\');" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
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

    // ƴװӢ��ͼ��html
    util.pushDataHeroNews = function(data,num,index){
         var RetHTML = '',
             length = (data.length - index) > num ? num + index : data.length,
             index = index || 0;

         for (var x = index; x < length; x++) {
             if(data[x].iVideoId){
                RetHTML += '<li class="mtl-item"><em class="subscript">��Ƶ</em><a class="title" href="/v/detail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iVideoId'] + '"  target="_blank" title="' + data[x]['sTitle'] + '">';
             }else{
                RetHTML += '<li class="mtl-item"><em class="subscript">ͼ��</em><a class="title" href="/web201605/newsDetail.shtml?G_Biz='+G_biz+'&tid=' + data[x]['iNewsId'] + '"  target="_blank" title="' + data[x]['sTitle'] + '">';
             }
             RetHTML += data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sIdxTime']) + '</cite></li>';
        }
         return RetHTML;
    };

    return{
        pick:function(dataNum,roleName,roleId){  util.pickHeroVideo(dataNum,roleName,roleId)  }
    }
})();
//------------------------------------------- ͨ����V4�ӿ�ȡӢ����Ƶ/�б�  End ---------------------------------


//�������Ӣ��ѡ��ͷ����޸����һ��Ӣ��Ϊѡ��Ӣ��
function updateRole(iType, iSubType, heroName, type, id, roleid) {
    var findRoleid = "";
    findRoleid = milo.cookie.get(roleid + 'jilu');
    var RetHTML = '';
    if (findRoleid != roleid) {
        RetHTML += '<li  id="tihuan" class = "hero-list-item active" onmouseover="showru(' + roleid + ');" id="' + perosonList[iSubType] + '" subType=' + iSubType + ' onclick="LoadSubTypeLists(1,' + iSubType + ',\'' + heroName + '\',0,' + perosonList[iSubType] + ',' + roleid + ')">';
        RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + roleid + '/' + roleid + '.jpg" class="avatar" alt="' + heroName + '">';
        RetHTML += ' <div class = "hli-info">';
        RetHTML += '<p><span>' + heroName + '</span><span>' + dingwei[heroName] + '</span><span></span>|<span>��������<cite><span id="showpar' + roleid + '"></span></cite></span>|<span>ʤ������<cite><span  id="showwin' + roleid + '"></span></cite></span></p>';
        RetHTML += ' </div>'
        RetHTML += '</li>';
        $("#tihuan").replaceWith(RetHTML);
    }


}

//��ȡӢ�۹���ͼ��
function searchSmart(id) {
    var type = "iSubType";
    var page = 1;
    var pagesize = 10;
    var order = "sIdxTime"//��ʼ����������;
    var str = 'newsindexNew';
    var iType = 0;
    QuerySearchNewsList(page, pagesize, order, type, id, function (data) {
        if (data.status == 0) {
            var html = '';
            for (var x in data.msg.result) {
                var fenlei = data.msg.result[x]['iType'];
                if (fenlei == 80) {
                    html += '<li class="mtl-item"><em class="subscript">��ʦ</em>';
                } else if (fenlei == 81) {
                    html += '<li class="mtl-item"><em class="subscript">̹��</em>';
                } else if (fenlei == 79) {
                    html += '<li class="mtl-item"><em class="subscript">սʿ</em>';
                } else if (fenlei == 82) {
                    html += '<li class="mtl-item"><em class="subscript">�̿�</em>';
                } else if (fenlei == 83) {
                    html += '<li class="mtl-item"><em class="subscript">����</em>';
                } else if (fenlei == 84) {
                    html += '<li class="mtl-item"><em class="subscript">����</em>';
                } else {
                    html += '<li class="mtl-item"><em class="subscript">����</em>';
                }

                html += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data.msg.result[x]['sUrl'], data.msg.result[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data.msg.result[x].iNewsId + '\')" target="_blank" title="' + data.msg.result[x]['sTitle'] + '">' + data.msg.result[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data.msg.result[x]['sCreated']) + '</cite></li>';
            }
            $('#bakList9').html(html).show();

        } else {
            var html = '';
            html += '<li class="mtl-item">';
            html += '<a class="title"   target="_blank" >��������</a><cite class="date"></cite></li>';
            $('#bakList9').html(html).show();
        }
    });
}

//��ȡӢ�۹�����Ƶ
var PushDataaa = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        if (x <= 5) {
            RetHTML += '<li class="mvl-item">'
            RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'heros\',\'hero' + data[x]['iSubType'] + '_video\',\'��Ƶ\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
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

//-------ͼ������-------------
QueryNewsNewList(function (data) {
    $('#NewList').html(PushData(data, 12, 'NewsindexNew', 0));
});

var PushData = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[x]['sUrl'], data[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[x].iNewsId + '\')" target="_blank" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sCreated']) + '</cite></li>';
    }
    return RetHTML;
};
//--------ͼ�Ĺٷ�-------------
QueryNewsTypeList(function (data) {
    var iType = '77';
    var data = data['newlist' + iType];
    $('#bakList5').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------ͼ��Ӣ��-------------
QueryNewsTypeList(function (data) {
    var iType = '103';
    var data = data['newlist' + iType];
    $('#bakList6').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------ͼ������-------------
QueryNewsTypeList(function (data) {
    var iType = '111';
    var data = data['newlist' + iType];
    $('#bakList7').html(PushDatafl(data, 12, 'newsindexNew', iType));
});
//--------ͼ��ͬ��-------------
QueryNewsTypeList(function (data) {
    var iType = '76';
    var data = data['newlist' + iType];
    $('#bakList8').html(PushDatafl(data, 12, 'newsindexNew', iType));
});


//��ȡͼ�Ĺ���
var PushDatafl = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        // if (x < 10) {
        if (iType == '103') {
            RetHTML += '<li class="mtl-item"><em class="subscript">Ӣ��</em>';
        } else if (iType == '111') {
            RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        } else if (iType == '76') {
            RetHTML += '<li class="mtl-item"><em class="subscript">ͬ��</em>';
        } else if (iType == '77') {
            RetHTML += '<li class="mtl-item"><em class="subscript">�ٷ�</em>';
        } else {
            RetHTML += '<li class="mtl-item"><em class="subscript">����</em>';
        }
        RetHTML += '<a class="title" href="//pvp.qq.com/web201605/' + LinkNewsInfo(data[x]['sUrl'], data[x]['iNewsId']) + '" onclick="WMP_LOG(\'' + BizTypeInfo.msg[G_biz] + 'web\',\'' + str + '\',\'type' + iType + '\',\'a' + data[x].iNewsId + '\')" target="_blank" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</a><cite class="date">' + ReloadPubdate(data[x]['sCreated']) + '</cite></li>';
        // }
    }
    return RetHTML;
};



//Ӣ�۹���6��Ƶ
//--------������Ƶ����-------------
QueryNewList(function (data) {
    $('#herovideoNewList').html(PushDatas(data, 6, 'videoindexType', 962));
});
var PushDatas = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mvl-item">'
        RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'heros\',\'hero' + iType + '_video\',\'��Ƶ\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic" src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
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
//�����Ʒ��Ŀ��ť
function liclick(self) {
    var clickid = self.id;
    var xiaobiaoti = self.text;
    $("#xiaobiaoti").text("��" + xiaobiaoti + "��");
    Type = 'iTag';
    TypeId = clickid;
    if (TypeId == 'item1' || TypeId == 'item2') {
        getColumNewest(TypeId,'boutique');
    } else {
        LoadDefaultData(1, 20, 'sIdxTime', Type, TypeId);
    }

}
//������¾�Ʒ��ť
function liclicks(self) {
    var clickid = self.id;
    var xiaobiaoti = self.text;
    $("#xiaobiaotis").text("��" + xiaobiaoti + "��");
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

//���ݹؼ��ʻ�ȡ��Ʒ��Ŀ��Ƶ��Ϣ
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
//���ݹؼ��ʻ�ȡ���¾�Ʒ��Ƶ��Ϣ
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
//��������뾫Ʒ��Ŀ��Ƶ
var PushDatavideo = function (data, num, str, iType) {
    var RetHTML = '';
    var length = data.length > num ? num : data.length;
    var num = 0;
    if( iType == undefined || iType == 'undefined' ) {
        iType = 'Newest'
    }
    for (var x = 0; x < length; x++) {
        RetHTML += '<li class="mvl-item">'
        RetHTML += '<a class="mvl-a" href="//pvp.qq.com/v/' + data[x]['sUrl'] + '" onclick="PTTSendClick(\'' + pttName + '\',\'nav' + iType + '_details\',\'����\');' + data[x]['sLog'] + '" target="_blank" title="' + data[x]['sTitle'] + '"><img class="mvl-pic"  src="' + data[x]['sIMG'] + '" width="173" height="110" alt="' + data[x]['sTitle'] + '"><div class="video_hover"></div>';
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

//��ȡ���¾�Ʒ����Ʒ��Ŀ����
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


