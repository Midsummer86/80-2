var G_biz = null;
var G_Detail = 'detail.shtml';
var G_NewsDetail = 'newsDetail.shtml';
var G_Go = 'go.shtml';
var G_NewsGo = 'newsGo.shtml';
var G_IsGo = true;
var G_Source = 'web';
var PageSize = 0;
document.domain = 'https://gicp.qq.com/wmp/sys/v3.0/js/qq.com';
var G_MSG = {
    G_url : '//apps.game.qq.com/wmp/v3.1/',
    G_search : '//apps.game.qq.com/wmp/v3.1/public/search.php?',
    G_searchNews : '//apps.game.qq.com/wmp/v3.1/public/searchNews.php?',
	G_pagesize : 10
};
var G_report_info ={
   openId:"",
   agent:"",
   channel:"",
   area:""
};

//����userId�ж��û���Ϣ�����Լ���������
function CheckUser(callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserInfo',
        'p2' : G_UserId,
        'r0' : 'script',
        'r1' : 'checkUserObj'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ȡ������Ϣ
function QueryMyInfo(callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserInfo',
        'r0' : 'script',
        'r1' : 'userObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ȡ������Ϣ
function QueryUserInfo(callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserInfo',
        'p2' : G_UserId,
        'r0' : 'script',
        'r1' : 'checkUserObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�ҵĲ�������
//myHistory : ��ѯ��Ƶ�ۿ���¼
//myCollect : ��ѯ�ҵ���Ƶ�ղ�
//myNewsHistory : ��ѯ��Ѷ�ۿ���¼
//myNewsCollect : ��ѯ�ҵ���Ѷ�ղ�
//myVideo : ��ѯ���ϴ���Ƶ
//myNews : ��ѯ���ϴ���Ѷ
//myUploadVideo ����ѯ�������Ƶ
//myUploadNews ����ѯ�������Ѷ
//myJF : ��ѯ�ҵĻ���
function QueryMyActionInfo(Action,page,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchMyActionInfo',
        'p2' : Action,
        'page' : page,
        'pagesize':PageSize,
        'r0' : 'script',
        'r1' : Action
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�û��Ĳ�������
//userVideo : ��ѯ�û���Ƶ
//userNews : ��ѯ�û���Ѷ
//userSubscribe : ��ѯ�û�����
//userFans : ��ѯ�û���˿
function QueryUserActionInfo(Action,page,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserActionInfo',
        'p2' : Action,
        'p3' : G_UserId,
        'page' : page,
        'pagesize':PageSize,
        'r0' : 'script',
        'r1' : 'UserActionInfo'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯר����Ϣ
function QuerySpecialInfo(SpecialId,pagesize,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchSpecialInfo',
        'p2' : SpecialId,
        'pageSize' : pagesize,
        'r0' : 'script',
        'r1' : 'SpecialInfo'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	for(var x in data.msg.result){
			data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'SpecialVideoList','r'+x);
			data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'SpecialVideoList\',\'r'+x+'\','+data.msg.result[x]['iVideoId']+',\''+data.msg.result[x]['sUrl']+'\')';	
    	}
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯר���б���Ϣ
function QuerySpecialListInfo(page,pagesize,order,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchSpecialInfoList',
        'order' : order,
        'page':page,
        'pagesize' : pagesize,
        'r0' : 'script',
        'r1' : 'specialObj'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�ҵĻ�������
function QueryMyJFInfo(page,sTime,eTime,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchJfCloud',
        'action' : 'queryList',
        'sTime':sTime,
        'eTime':eTime,
        'page' : page,
        'r0' : 'json',
        'r1' : 'MyJFList'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�ܻ���
function QueryMyTotalJFInfo(callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchJfCloud',
        'action' : 'query',
        'r0' : 'json',
        'r1' : 'MyJFTotal'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//�����ҵĻ�������
function UpdateMyDataInfo(formdata,callback){
	need("util.object",function(jo){
		var postdata = {
			'p0' : G_biz,
			'p1' : 'updateUserInfo',
			'p2' : jo.jsonToString(formdata)
		};
		if(callback){
			ajax_iframe_callback = function(data){
				callback(data);
			};
		}	
		postFormData(postdata);
	});
}
//��ѯ�û�1:�ղء�2�����ޡ�3���ۿ���¼��4��������Ϣ
//��ѯ�û��ղ�״̬
//check:��ѯ�ղ� 0��δ�ղ�	1�����ղ�
//add������ղ� 0���ɹ� 	-1:ʧ��
//delete:ɾ���ղ� 0���ɹ�		-1��ʧ��
function DoMyCollectStatus(iVideoId,Action,callback){
	if(iVideoId == 0){
		alert('��ƵID����Ϊ0');
		return;
	}
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p2' : iVideoId,
        'p3' : '1',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'collectObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
function DoMyNewsCollectStatus(iNewsId,Action,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserNewsAction',
        'p2' : iNewsId,
        'p3' : '1',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'newscollectObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�û�����״̬
//check:��ѯ����0��δ����	1���ѵ���
//add����ӵ��� 0���ɹ� 	-1:ʧ��
//delete:ɾ������ 0���ɹ�		-1��ʧ��
function DoMyDiggStatus(iVideoId,Action,callback){
	if(iVideoId == 0){
		alert('��ƵID����Ϊ0');
		return;
	}
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p2' : iVideoId,
        'p3' : '2',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'diggObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
function DoMyNewsDiggStatus(iNewsId,Action,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserNewsAction',
        'p2' : iNewsId,
        'p3' : '2',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'newsdiggObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�û�����״̬
//check:��ѯ����0��δ����1���Ѷ���
//add����Ӷ���0���ɹ� 	-1:ʧ��
//delete:ɾ������ 0���ɹ�		-1��ʧ��
function DoMySubscribeStatus(Action,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p5' : G_UserId,
        'p3' : '4',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'subscribeObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�û�����״̬
//check:��ѯ����0��δ����1���Ѷ���
//checkMulti:���û�id��ѯ����(2,3,4)0��δ����1���Ѷ���
//add����Ӷ���0���ɹ� 	-1:ʧ��
//delete:ɾ������ 0���ɹ�		-1��ʧ��
function DoSingleSubscribeStatus(userId,Action,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p5' : userId,
        'p3' : '4',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'SinglesubscribeObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ѯ�û�ר������״̬
//check:��ѯ����0��δ����1���Ѷ���
//add����Ӷ���0���ɹ� 	-1:ʧ��
//delete:ɾ������ 0���ɹ�		-1��ʧ��
function DoMySpecialSubscribeStatus(iSpecialId,Action,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p6' : iSpecialId,
        'p3' : '5',
        'p4' : Action,
        'r0' : 'json',
        'r1' : 'SpecialsubscribeObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//��ӹۿ���¼
//add����ӹۿ���¼0���ɹ� 	-1:ʧ��
function DoMyHistroyStatus(iVideoId,callback){
	if(iVideoId == 0){
		alert('��ƵID����Ϊ0');
		return;
	}
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserAction',
        'p2' : iVideoId,
        'p3' : '3',
        'p4' : 'add',
        'r0' : 'json',
        'r1' : 'HistroyObj'
    };
    setTimeout(function(){
    	var p = postScriptDeferData(postdata,true);
    	p.then(function(data){
	    	callback(data);
	    },function(data){
	    	callback(data);
	    });
    },1000);
}
//�ϱ���Ƶ����Ѷ���Ŵ���
function uploadTotalPlay(id,Type,iFrom,sControl,fromDetail,action_type,ext){
        fromDetail = 1;
	if(iFrom == 1 && !sControl){
		var timer = setInterval(function(){
			if(LWPlayer.getPlaytime() > 0){
				DoTotalPlay(id,1,function(data){},fromDetail,action_type,ext);
				clearInterval(timer);
			}
		},500);	
	}else{
		setTimeout(function(){
			DoTotalPlay(id,1,function(data){},fromDetail,action_type,ext);
		},10000);
	}
}

function DoTotalPlay(id,Type,callback,fromDetail,action_type,ext){
        fromDetail  = fromDetail || 0;
        action_type = action_type || 'play'; 
        ext = ext || '';

	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateTotalPlay',
        'p2' : id,
        'p3' : Type,
        'p5' : fromDetail,
        'action_type' : action_type,
        'ext' : ext
    };
   // if(G_Source != 'web'){
    	postdata['source'] = G_Source;
   // }
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
function DoMyNewsHistroyStatus(iNewsId,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'updateUserNewsAction',
        'p2' : iNewsId,
        'p3' : '3',
        'p4' : 'add',
        'r0' : 'json',
        'r1' : 'HistroyObj'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//����VID������Ƶ��Ϣ
function SearchVedioInfobyVID(sVID,callback){
    var p = postScriptDeferStaticData("//apps.game.qq.com/lol/api/wmp/searchVidInfo.php?source=1&sVid="+sVID+"&r0=QZOutputJson",'QZOutputJson');
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//�ϴ�ͼƬ
function UploadImg(elementId,callback){
	$.ajaxFileUpload({
        url: G_MSG.G_url+'?p0='+G_biz+'&p1=updateImg&p2='+elementId,
        secureuri:false,
        fileElementId:elementId,
        dataType: 'json',               
        success: function (data){
            //console.log(data);
            callback(data);
        }
    });
}
//�ϴ�����ͼƬ
function UploadImgNews(elementId,callback){
	$.ajaxFileUpload({
        url: G_MSG.G_url+'?p0='+G_biz+'&p1=updateNewsImg&p2='+elementId,
        secureuri:false,
        fileElementId:elementId,
        dataType: 'json',               
        success: function (data){
            //console.log(data);
            callback(data);
        }
    });
}
//�ϴ���Ƶ
function UpdateVideoForm(formdata,callback){
	need("util.object",function(jo){
		var postdata = {
			'p0' : G_biz,
			'p1' : 'updateUserUploadVideo',
			'p2' : jo.jsonToString(formdata)
		};
		if(callback){
			ajax_iframe_callback = function(data){
				callback(data);
			};
		}
		postFormData(postdata);
	});
}
//�ϴ���Ѷ
function UpdateNewsForm(formdata,callback){
	need("util.object",function(jo){
		var postdata = {
			'p0' : G_biz,
			'p1' : 'updateUserUploadNews',
			'p2' : jo.jsonToString(formdata)
		};
		if(callback){
			ajax_iframe_callback = function(data){
				callback(data);
			};
		}
		postFormData(postdata);
	});
}
//�޸���Ƶ
function QueryFixVideo(iVideoId,callback){
	if(iVideoId == 0){
		alert('��ƵID����Ϊ0');
		return;
	}
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserOneVideo',
        'p2' : iVideoId,
        'r0' : 'script',
        'r1' : 'VideoInfo'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//�޸���Ѷ
function QueryFixNews(iNewsId,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchUserOneNews',
        'p2' : iNewsId,
        'r0' : 'script',
        'r1' : 'NewsInfo'
    };
    var p = postScriptDeferData(postdata);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//ɾ����Ƶ
function DeleteVideo(iVideoId,callback){
	if(iVideoId == 0){
		alert('��ƵID����Ϊ0');
		return;
	}
	var postdata = {
        'p0' : G_biz,
        'p1' : 'deleteUserVideo',
        'p2' : iVideoId,
        'r0' : 'script',
        'r1' : 'DelVideoInfo'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
//ɾ����Ƶ
function DeleteNews(iNewsId,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'deleteUserNews',
        'p2' : iNewsId,
        'r0' : 'script',
        'r1' : 'DelNewsInfo'
    };
    var p = postScriptDeferData(postdata,true);
    p.then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
    return p;
}
var ajax_iframe_callback = '';
//��ȡ��Ƶ�Ƽ�λ����
function QueryTargetInfo(callback){		
    var rectaget = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_VDRECTYPE_GW_'+G_biz+'.js','rectargetTypeObj');
    rectaget.then(function(data){
    	var promisearr = [];
    	$.each(data.msg,function(i,v){
    		var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_VDRECLIST_GW_'+G_biz+'_'+v['iTarget']+'.js','rectargetObj_'+v['iTarget']);
    		promisearr.push(p);
    	});
    	$.when.apply($, promisearr).then(function(){
			var retData = Array.prototype.slice.call(arguments);
			var newData = {'reclist':{}};
			for(var x in retData){
				for(y in retData[x]['msg']){
					if(y.indexOf('_')<0){
						for(var i in retData[x]['msg'][y]){
							newData['reclist'][i] = retData[x]['msg'][y][i];
						}						
					}else{
						newData[y] = retData[x]['msg'][y];
					}					
				}
			}
			for(var x in newData){
				if(x.indexOf('_')>=0){
					for(y in newData[x]){
						newData[x][y]['sUrl'] = LinkInfoPro(newData[x][y]['sUrl'],newData[x][y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'targetId_'+newData[x][y]['iSubTarget'],'r'+y);
						newData[x][y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'targetId'+newData[x][y]['iSubTarget']+'\',\'r'+y+'\','+newData[x][y]['iVideoId']+',\''+newData[x][y]['sUrl']+'\')';
					}
				}
			}
			callback(newData);
		});	
    });
}
//��ȡ��Ѷ�Ƽ�λ����
function QueryNewsTargetInfo(callback){		
    var rectaget = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWSRECTYPE_GW_'+G_biz+'.js','NewsrectargetTypeObj');
    rectaget.then(function(data){
    	var promisearr = [];
    	$.each(data.msg,function(i,v){
    		var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWSRECLIST_GW_'+G_biz+'_'+v['iTarget']+'.js','NewsrectargetObj_'+v['iTarget']);
    		promisearr.push(p);
    	});
    	$.when.apply($, promisearr).then(function(){
			var retData = Array.prototype.slice.call(arguments);
			var newData = {'reclist':{}};
			for(var x in retData){
				for(y in retData[x]['msg']){
					if(y.indexOf('_')<0){
						for(var i in retData[x]['msg'][y]){
							newData['reclist'][i] = retData[x]['msg'][y][i];
						}						
					}else{
						newData[y] = retData[x]['msg'][y];
					}					
				}
			}
			callback(newData);
		});	
    });
}
//��ȡ�û��Ƽ�λ����
function QueryUserTargetInfo(callback){		
    var rectaget = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_USERRECTYPE_GW_'+G_biz+'.js','rectargetTypeObj');
    rectaget.then(function(data){
    	var promisearr = [];
    	$.each(data.msg,function(i,v){
    		var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_USERRECLIST_GW_'+G_biz+'_'+v['iTarget']+'.js','rectargetObj_'+v['iTarget']);
    		promisearr.push(p);
    	});
    	$.when.apply($, promisearr).then(function(){
			var retData = Array.prototype.slice.call(arguments);
			var newData = {'reclist':{}};
			for(var x in retData){
				for(y in retData[x]['msg']){
					if(y.indexOf('_')<0){
						for(var i in retData[x]['msg'][y]){
							newData['reclist'][i] = retData[x]['msg'][y][i];
						}						
					}else{
						newData[y] = retData[x]['msg'][y];
					}					
				}
			}
			callback(newData);
		});	
    });
}

//��ȡ�û����У���ע����Ʒ�����û���
function QueryUserRankList(callback){
	var userrankObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_USERRANKLIST_GW_'+G_biz+'.js','userrankObj');
	$.when(userrankObj).then(function(userrankObj){
		callback(userrankObj.msg);
	});
	return userrankObj;
}

//��ȡ��Ƶ���Źؼ���
function QueryHotKeywords(callback){
	var hotkeywordObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_HOTKEYWORDLIST_GW_'+G_biz+'.js','hotkeywordObj');
	$.when(hotkeywordObj).then(function(hotkeywordObj){
		callback(hotkeywordObj.msg);
	});
	return hotkeywordObj;
}
//��ȡ��Ƶ�ؼ����б�
function QueryKeywordList(callback){
	var keywordObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_KEYWORDLIST_GW_'+G_biz+'.js','keywordObj');
	$.when(keywordObj).then(function(keywordObj){
		callback(keywordObj.msg);
	});
}
//��ȡ��Ѷ���Źؼ���
function QueryNewsHotKeywords(callback){
	var hotkeywordObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWSHOTKEYWORDLIST_GW_'+G_biz+'.js','newshotkeywordObj');
	$.when(hotkeywordObj).then(function(newshotkeywordObj){
		callback(hotkeywordObj.msg);
	});
	return hotkeywordObj;
}
//��ȡ��Ѷ�ؼ����б�
function QueryNewsKeywordList(callback){
	var keywordObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWSKEYWORDLIST_GW_'+G_biz+'.js','newskeywordObj');
	$.when(keywordObj).then(function(newskeywordObj){
		callback(newskeywordObj.msg);
	});
}
//��ȡ��Ƶ������
function QueryParentTypeInfo(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_PARENTTYPE_GW_'+G_biz+'.js','ParentType');
	p.then(function(data){
		callback(data.msg);
	});
	return p;
}
//��ȡ��Ѷ������
function QueryNewsParentTypeInfo(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_PARENTTYPE_GW_'+G_biz+'.js','NewsParentType');
	p.then(function(data){
		callback(data.msg);
	});
	return p;
}
//��ȡ��Ƶ�ӷ���
function QueryTypeInfo(callback){
	var typeInfo = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_TYPELIST_GW_'+G_biz+'.js','typeObj');
	typeInfo.then(function(typeObj){
		callback(typeObj.msg);
	});
	return typeInfo;
}
//��ȡ��Ѷ�ӷ���
function QueryNewsTypeInfo(callback){
	var typeInfo = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_TYPELIST_GW_'+G_biz+'.js','newsTypeObj');
	typeInfo.then(function(typeObj){
		callback(typeObj.msg);
	});
	return typeInfo;
}
//��ȡ��Ƶ��������
function QueryTypeList(callback){
	var typeInfo = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_TYPELIST_GW_'+G_biz+'.js','typeObj');
	typeInfo.then(function(data){
		var promisearr = [];
		$.each(data.msg,function(i,v){
			if(i.split('_')[1] != 0){
				var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_VIDEOLIST_GW_'+G_biz+'_'+i.split('_')[1]+'.js','resObj_'+i.split('_')[1]);
    			promisearr.push(p);
			}   		
    	});
    	$.when.apply($, promisearr).then(function(){
			var retData = Array.prototype.slice.call(arguments);
			var newData = {};
			for(var x in retData){
				for(y in retData[x]['msg']){
					newData[y] = retData[x]['msg'][y];
				}
			}
			for(var x in newData){
				if(x.indexOf('newlist')>=0){
					for(y in newData[x]){
						newData[x][y]['sUrl'] = LinkInfoPro(newData[x][y]['sUrl'],newData[x][y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'statictypenew','type'+newData[x][y]['iType']);
						newData[x][y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'statictypenew\',\'type'+newData[x][y]['iType']+'\','+newData[x][y]['iVideoId']+',\''+newData[x][y]['sUrl']+'\')';
					}
				}else{
					for(y in newData[x]){
						newData[x][y]['sUrl'] = LinkInfoPro(newData[x][y]['sUrl'],newData[x][y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'statictype'+newData[x][y]['iType'],'subtype'+newData[x][y]['iSubType']);
						newData[x][y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'statictype'+newData[x][y]['iType']+'\',\'subtype'+newData[x][y]['iSubType']+'\','+newData[x][y]['iVideoId']+',\''+newData[x][y]['sUrl']+'\')';
					}
				}				
			}
			callback(newData);
		});	
	});
}
//��ȡ��Ѷ��������
function QueryNewsTypeList(callback){
	var typeInfo = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_TYPELIST_GW_'+G_biz+'.js','newsTypeObj');
	typeInfo.then(function(data){
		var promisearr = [];
		$.each(data.msg,function(i,v){
			if(i.split('_')[1] != 0){
	    		var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWSLIST_GW_'+G_biz+'_'+i.split('_')[1]+'.js','newsResObj_'+i.split('_')[1]);
	    		promisearr.push(p);
    		}
    	});
    	$.when.apply($, promisearr).then(function(){
			var retData = Array.prototype.slice.call(arguments);
			var newData = {};
			for(var x in retData){
				for(y in retData[x]['msg']){
					newData[y] = retData[x]['msg'][y];
				}
			}
			callback(newData);
		});	
	});
}
//��ȡ��Ƶ��������
function QueryNewList(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_RANKLIST_GW_'+G_biz+'.js','rankObj');
	p.then(function(data){
		for(var x in data.msg.newlist){
			data.msg.newlist[x]['sUrl'] = LinkInfoPro(data.msg.newlist[x]['sUrl'],data.msg.newlist[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'staticnewlist','r'+x);
			data.msg.newlist[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'staticnewlist\',\'r'+x+'\','+data.msg.newlist[x]['iVideoId']+',\''+data.msg.newlist[x]['sUrl']+'\')';
		}
		callback(data.msg.newlist);
	});
}
//��ȡ��Ѷ��������
function QueryNewsNewList(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_RANKLIST_GW_'+G_biz+'.js','newsRankObj');
	p.then(function(data){
		callback(data.msg.newlist);
	});
}
//��ȡ��Ƶ��������
function QueryVideoPreciseList(userInfo,callback){
	var p = postScriptDeferStaticData2(G_MSG.G_url+'?p0='+G_biz+'&p1=searchPreciseRec&source=client_circle_precise&r1=listObj&'+userInfo,'listObj');
	p.then(function(data){
		for(var x in data.msg){
			data.msg[x]['sUrl'] = LinkInfoPro(data.msg[x]['sUrl'],data.msg[x]['iVideoId'],BizTypeInfo.msg[G_biz]+'client_circle_precise','PreciseRecList','r'+x);
			data.msg[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+'client_circle_precise\',\'PreciseRecList\',\'r'+x+'\','+data.msg[x]['iVideoId']+',\''+data.msg[x]['sUrl']+'\')';
		}
		callback(data.msg);
	});
}
//��ȡר���б�����
function QuerySpecialList(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_SPECIALIST_GW_'+G_biz+'.js','specialObj');
	p.then(function(data){
		callback(data);
	});
}
//��ȡ��Ƶ����������������
function QueryRankList(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_RANKLIST_GW_'+G_biz+'.js','rankObj');
	p.then(function(data){
		var rank = {};
		for(var x in data.msg){
			if(x == 'dpvlist'){
				for(var y in data.msg.dpvlist){
					data.msg.dpvlist[y]['sUrl'] = LinkInfoPro(data.msg.dpvlist[y]['sUrl'],data.msg.dpvlist[y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'dpvlist','r'+y);
					data.msg.dpvlist[y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'dpvlist\',\'r'+y+'\','+data.msg.dpvlist[y]['iVideoId']+',\''+data.msg.dpvlist[y]['sUrl']+'\')';
				}				
			}
			if(x == 'wpvlist'){
				for(var y in data.msg.wpvlist){
					data.msg.wpvlist[y]['sUrl'] = LinkInfoPro(data.msg.wpvlist[y]['sUrl'],data.msg.wpvlist[y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'wpvlist','r'+y);
					data.msg.wpvlist[y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'wpvlist\',\'r'+y+'\','+data.msg.wpvlist[y]['iVideoId']+',\''+data.msg.wpvlist[y]['sUrl']+'\')';
				}
			}
			if(x == 'mpvlist'){
				for(var y in data.msg.mpvlist){
					data.msg.mpvlist[y]['sUrl'] = LinkInfoPro(data.msg.mpvlist[y]['sUrl'],data.msg.mpvlist[y]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'mpvlist','r'+y);
					data.msg.mpvlist[y]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'mpvlist\',\'r'+y+'\','+data.msg.mpvlist[y]['iVideoId']+',\''+data.msg.mpvlist[y]['sUrl']+'\')';
				}
			}			
			rank[x] = data.msg[x];	
		}
		callback(rank);
	});
}
//��ȡ��Ѷ����������������
function QueryNewsRankList(callback){
	var p = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_RANKLIST_GW_'+G_biz+'.js','newsRankObj');
	p.then(function(data){
		var rank = {};
		for(var x in data.msg){
			if(x != 'newlist'){
				rank[x] = data.msg[x];
			}			
		}
		callback(rank);
	});
}
//��ȡ������Ƶ�����������ݣ���Ƶ2.0ר�ã�
function QueryWeeklyRankList(callback){
	var JFRankObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_JFRANKLIST_GW_'+G_biz+'.js','JFRankObj');
	JFRankObj.then(function(JFRankObj){
		callback(JFRankObj.msg);
	});
}
//��ȡ������Ѷ�����������ݣ���Ƶ2.0ר�ã�
function QueryWeeklyRankList(callback){
	var JFRankObj = postScriptDeferStaticData('//gicp.qq.com/wmp/data/js/v3/WMP_NEWS_JFRANKLIST_GW_'+G_biz+'.js','NesJFRankObj');
	JFRankObj.then(function(NesJFRankObj){
		callback(NesJFRankObj.msg);
	});
}
//��ȡ��Ƶ��������
function QuerySearchList(page,pagesize,order,type,id,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchKeywordsList',
        'page':page,
        'pagesize':pagesize,
        'order':order,
        'r0' : 'script',
        'r1' : 'userObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_search';
    }
	if(type!='' && id!=0){
		postdata['type'] = type;
		postdata['id'] = id;
	}
	var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	for(var x in data.msg.result){
    		if(type!='' && id!=0){
				data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'search'+type,type+id);
				data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'search'+type+'\',\''+type+id+'\','+data.msg.result[x]['iVideoId']+',\''+data.msg.result[x]['sUrl']+'\')';
			}else{
				data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'searchall',order);
				data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'searchall\',\''+order+'\','+data.msg.result[x]['iVideoId']+',\''+data.msg.result[x]['sUrl']+'\')';
			}  		
    	}
    	callback(data);
    },function(data){
    	callback(data);
    });
}
//��ȡ��Ƶģ����������
function QueryAllSearchList(query,page,pagesize,order,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchIso',
        'p2' : query,
        'p3' : 'VIDEO',
        'page':page,
        'pagesize':pagesize,
        'order':order,
        'r1' : 'searchObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_search';
    }
    var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	for(var x in data.msg.result){
			data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'searchall',order);
			data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'searchall\',\''+order+'\','+data.msg.result[x]['iVideoId']+',\''+data.msg.result[x]['sUrl']+'\')';		
    	}
    	var postdataLog = {
    		'p0' : G_biz,
	        'p1' : 'searchIsoSmartLog',
	        'p2' : query
    	};
    	if(G_Source != 'web'){
	    	postdataLog['source'] = G_Source+'_search';
	    }
    	var p = postScriptDeferData(postdataLog);
    	p.then(function(){});
    	callback(data);
    },function(data){
    	callback(data);
    });
}

//��ȡ��Ƶģ����������
function QueryAllSearchListU8(query,page,pagesize,order,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchIso',
        'p2' : query,
        'p3' : 'VIDEO',
        'p4' : '1',
        'page':page,
        'pagesize':pagesize,
        'order':order,
        'r1' : 'searchObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_search';
    }
    var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	for(var x in data.msg.result){
			data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'searchall',order);
			data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'searchall\',\''+order+'\','+data.msg.result[x]['iVideoId']+',\''+data.msg.result[x]['sUrl']+'\')';		
    	}
    	var postdataLog = {
    		'p0' : G_biz,
	        'p1' : 'searchIsoSmartLog',
	        'p2' : query
    	};
    	if(G_Source != 'web'){
	    	postdataLog['source'] = G_Source+'_search';
	    }
    	var p = postScriptDeferData(postdataLog);
    	p.then(function(){});
    	callback(data);
    },function(data){
    	callback(data);
    });
}
//��ȡ��ʾģ����������
function QuerySmartBoxList(query,pagesize,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchIsoSmart',
        'p2' : query,
        'r1' : 'smartObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_search';
    }
	var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
}
//��ȡ��Ѷ��������
function QuerySearchNewsList(page,pagesize,order,type,id,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchNewsKeywordsList',
        'page':page,
        'pagesize':pagesize,
        'order':order,
        'r0' : 'script',
        'r1' : 'NewsObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_news_search';
    }
	if(type!='' && id!=0){
		postdata['type'] = type;
		postdata['id'] = id;
	}
	var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	callback(data);
    },function(data){
    	callback(data);
    });
}
//��ȡ��Ѷģ����������
function QueryAllSearchNewsList(query,page,pagesize,order,callback){
	var postdata = {
        'p0' : G_biz,
        'p1' : 'searchIso',
        'p2' : query,
        'p3' : 'NEWS',
        'page':page,
        'pagesize':pagesize,
        'order':order,
        'r1' : 'searchObj'
    };
    if(G_Source != 'web'){
    	postdata['source'] = G_Source+'_news_search';
    }
    var p = postScriptDeferData(postdata);
    $.when(p).then(function(data){
    	for(var x in data.msg.result){
			data.msg.result[x]['sUrl'] = LinkInfoPro(data.msg.result[x]['sUrl'],data.msg.result[x]['iNewsId'],BizTypeInfo.msg[G_biz]+G_Source,'searchall',order);
			data.msg.result[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'searchall\',\''+order+'\','+data.msg.result[x]['iNewsId']+',\''+data.msg.result[x]['sUrl']+'\')';		
    	}
    	var postdataLog = {
    		'p0' : G_biz,
	        'p1' : 'searchIsoSmartLog',
	        'p2' : query
    	};
    	if(G_Source != 'web'){
	    	postdataLog['source'] = G_Source+'_search';
	    }
    	var p = postScriptDeferData(postdataLog);
    	p.then(function(){});
    	callback(data);
    },function(data){
    	callback(data);
    });
}
//��ȡ������Ƶ������
function QueryDetailInfo(id,callback){
	var BizInfo = postScriptDeferStaticData('PAGE_WMP_BIZ_INFO.js'/*tpa=https://gicp.qq.com/wmp/data/js/PAGE_WMP_BIZ_INFO.js*/,'BizInfo');
	BizInfo.then(function(data){
		for(var x in data.msg){
			if(x == G_biz){
				var url = location.href;
				if(/detail/.test(url)){
		    		var source = G_Source+'_detail';
		    	}else{
		    		var source = G_Source+'_go';
		    	}
			}
		}
		var p = postScriptDeferStaticData2(G_MSG.G_search+'source='+source+'&p0='+G_biz+'&id='+id,'searchObj',true);
	    $.when(p).then(function(data){
	    	if(data.msg.linkList){
	    		for(var x in data.msg.linkList){
					data.msg.linkList[x]['sUrl'] = LinkInfoPro(data.msg.linkList[x]['sUrl'],data.msg.linkList[x]['iVideoId'],BizTypeInfo.msg[G_biz]+G_Source,'detailRec','r'+x);
					data.msg.linkList[x]['sLog'] = 'WMP_LOG_EAS(\''+BizTypeInfo.msg[G_biz]+G_Source+'\',\'detailRec\',\'r'+x+'\','+data.msg.linkList[x]['iVideoId']+',\''+data.msg.linkList[x]['sUrl']+'\')';		
		    	}
	    	}	    	
	    	callback(data);
	    },function(data){
	    	callback(data);
	    });
	});	
}
//��ȡ������Ѷ������
function QueryNewsDetailInfo(id,callback){
	var BizInfo = postScriptDeferStaticData('PAGE_WMP_BIZ_INFO.js'/*tpa=https://gicp.qq.com/wmp/data/js/PAGE_WMP_BIZ_INFO.js*/,'BizInfo');
	BizInfo.then(function(data){
		for(var x in data.msg){
			if(x == G_biz){
				var url = location.href;
				if(/detail/.test(url)){
		    		var source = G_Source+'_news_detail';
		    	}else{
		    		var source = G_Source+'_news_go';
		    	}
			}
		}
		var p = postScriptDeferStaticData2(G_MSG.G_searchNews+'source='+source+'&p0='+G_biz+'&id='+id,'searchObj',true);
	    $.when(p).then(function(data){
	    	callback(data);
	    },function(data){
	    	callback(data);
	    });
	});	
}
//���GOҳ����
function QueryDigg(id,callback){
	var BizInfo = postScriptDeferStaticData('PAGE_WMP_BIZ_INFO.js'/*tpa=https://gicp.qq.com/wmp/data/js/PAGE_WMP_BIZ_INFO.js*/,'BizInfo');
	BizInfo.then(function(data){
		for(var x in data.msg){
			if(x == G_biz){
				var url = G_MSG.G_url+"?action=query&p0="+G_biz+"&p1=updateDigg&id="+id+"&appid="+data.msg[x]['sName']+"webvideo&r0=json&r1=diggObj";
			}
		}
		var p = postScriptDeferStaticData(url,'diggObj');
	    $.when(p).then(function(data){
	    	callback(data);
	    },function(data){
	    	callback(data);
	    });
	});	
}
//����GOҳ����
function UpdateDigg(id,callback){
	var BizInfo = postScriptDeferStaticData('PAGE_WMP_BIZ_INFO.js'/*tpa=https://gicp.qq.com/wmp/data/js/PAGE_WMP_BIZ_INFO.js*/,'BizInfo');
	BizInfo.then(function(data){
		for(var x in data.msg){
			if(x == G_biz){
				var url = G_MSG.G_url+"?action=update&p0="+G_biz+"&p1=updateDigg&id="+id+"&appid="+data.msg[x]['sName']+"webvideo&r0=json&r1=diggObj";
			}
		}
		var p = postScriptDeferStaticData(url,'diggObj');
	    $.when(p).then(function(data){
	    	callback(data);
	    },function(data){
	    	callback(data);
	    });
	});	
}


function hash_time33($str, $hash ) {
	$len = $str.length;  
	for (var $i = 0; $i < $len; ++$i) {
           $hash = (($hash<<5&0x7fffffff) + ($str[$i]).charCodeAt() + $hash);
	}
	return $hash & 0x7fffffff;
}


function get_csrf_token(uin){
   return  hash_time33(uin,5399);
}
var G_defer_cache_map = {};

function request(url, varname, cache) {	
   if(!G_defer_cache_map[url] || cache) {
     var dtd = $.Deferred();
     need("biz.login",function(LoginManager){
        var uin = ""+LoginManager.getUserUin();
        var csrf_token = get_csrf_token(uin);
        var delimiter = (url.indexOf('?')>0) ? '&' : '?' ;
        var real_url =  url + delimiter +  'gicp_tk='  + csrf_token ;
		$.getScript(real_url, function(){
			eval('var tmpObj ='+varname+';');
			if('object'==typeof(tmpObj)) {
				if(0==tmpObj.status) {
					dtd.resolve(tmpObj);
				}else{
					dtd.reject(tmpObj);
				}
			}
		});
      });
      G_defer_cache_map[url] = dtd.promise();
    }
   return G_defer_cache_map[url];
}

function postScriptDeferData(postdata,cache) {
	if(postdata) {
		var reqURL = G_MSG.G_url + '?';
		for(var x in postdata) {
			reqURL += x + '=' + postdata[x] + '&';
		}
                for(var x in G_report_info) {
			reqURL += x + '=' + G_report_info[x] + '&';
		}
		return request(reqURL, postdata['r1'], cache);
	}
};


function postScriptDeferData(postdata,cache) {
	if(postdata) {
		var reqURL = G_MSG.G_url + '?';
		for(var x in postdata) {
			reqURL += x + '=' + postdata[x] + '&';
		}
                for(var x in G_report_info) {
			reqURL += x + '=' + G_report_info[x] + '&';
		}
		return request(reqURL, postdata['r1'], cache);
	}
};

function postScriptDeferStaticData2(url,r1,cache) {
               
        for(var x in G_report_info) {
		url += '&' + x + '=' + G_report_info[x] + '&';
	}
	return request(url,r1,cache);
};

function postScriptDeferStaticData(url,r1,cache) {
	return request(url,r1,cache);
};
function postFormData(postdata) {
   need("biz.login",function(LoginManager){
        var uin = ""+LoginManager.getUserUin();
        var csrf_token = get_csrf_token(uin);

    $("#submit_form").attr('action', G_MSG.G_url);
    $("#submit_form").html("<input id='submit_form_r0' name='r0' type='hidden' value='frame' />");
    if(postdata) {
        postdata["gicp_tk"] = csrf_token;
        for(var x in postdata) {
            var v = postdata[x].toString().replace(/(\')/g, "");
            $("#submit_form").append("<input id='submit_form_"+x+"' name='"+x+"' type='hidden' value='"+v+"' />");
        }
        $("#submit_form").submit();
    }
 });
};

//----------------ͨ�÷���----------------------------------------------------------
//��ȡţ��
function GetComment(iComment,ElementId,source,ownstyle){
	cmt_id = iComment;	
	QueryRegisterCoralEvent(ownstyle);
	CreateCommentIframe(ElementId,source);
}
function CreateCommentIframe(ElementId,source){            
    var iframe = document.createElement('iframe');             
    iframe.id = 'commentIframe';   
    iframe.border = 0;       
    iframe.scrolling = 'no';        
    iframe.style.border = 'none';
    iframe.frameBorder = "no";
    iframe.width = '100%';      
    iframe.height = '100%';      
    bindIframeOnloadEvent(iframe,function(){    
    	if(source == 'app'){
    		QueryLoginUserInfoAPP();
    	}else{
    		QueryLoginUserInfo();
    	}      
        $('#commentIframe').contents().find('#top_reply').find('span').eq(1).hide();
        $('#commentIframe').contents().find('.change').hide();
        $('#commentIframe').contents().find('#top_textarea').val('���ȵ�¼�ٽ������۲�����').attr('disabled','disabled');
    });     
    iframe.src = 'coral.html'/*tpa=https://page.coral.qq.com/coralpage/comment/coral.html*/;      
    document.getElementById(ElementId).appendChild(iframe);        
};
//��ȡţ����ͷ�����Ϣ
function QueryLoginUserInfo(){
    need("biz.login",function(LoginManager){
        LoginManager.checkLogin(function(){
            var nickName = '';
            var userFace = '';
            LoginManager.getNickName(function(loginInfo){
                if(loginInfo.isLogin){
                   nickName = loginInfo.nickName;
                   LoginManager.getUserFace(function(data){
                        userFace = data.userFace;
                        registerCoralEvent.publicLogined(LoginManager.getUserUin(),nickName,userFace);
                   });
                }
            });
        });                                        
    });    
}   
//��ȡAPPţ����ͷ�����Ϣ
function QueryLoginUserInfoAPP(){
	need("biz.login", function(LoginManager) {
        LoginManager.checkLogin(function(){
            milo.loader.loadScript("//ptlogin2.qq.com/getface?appid=21000501&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + LoginManager.getUserUin(), function(){});
        });
    });  
} 
//WEB��Ƶ����
var onloadPlayflag = 0,playTime = 0,adTime = 10;
function GetQVideoPlay(vid,ElementId,iFrom,url,bullet,noautoplay) {

    var _wiw, _wih;
    _wiw = $('#'+ElementId).width(), _wih = $('#'+ElementId).height();
    var bullet= bullet || 0;
    var noautoplay = noautoplay || 0;

    if(iFrom == 1){
    	var video = new tvp.VideoInfo();	
	    LWPlayer = new tvp.Player();
	    LWPlayer.getPlaytime = function(){return 0;};
	    video.setVid(vid);
	    var infoObj = {
	        vid: vid, 
	        width: _wiw,
	        height: _wih,
	        modId: ElementId,
	        flashWmode: 'opaque',            
	        vodFlashExtVars:{share: 0,follow: 0,searchbar:0,searchpanel:0,clientbar : 0,bullet: bullet},
	        onplaying: function(){hideVideoTips({'stat':'onplaying', 'vid':vid, 'player':LWPlayer});},
			onresume: function(){hideVideoTips({'stat':'onresume', 'vid':vid, 'player':LWPlayer});},
	        onfullscreen: function(isfull){}
	    };       	    
	    var uin = '';
		need("biz.login-min",function(LoginManager){
	        LoginManager.checkLogin(function(){
	            uin = LoginManager.getUserUin();//��ȡQQ��            
	        });
	    });	
	    if(uin == ''){
	    	if(milo.cookie.get('pt2gguin')){
	    		uin = milo.cookie.get('pt2gguin').match(/[1-9]*[1-9][0-9]*/)[0];
	    	}    	
	    }
		loadScript('//apps.game.qq.com/client_pop/recommend.php?iRecommendType=6&lUin='+uin+'&iZone=&iClientVersion=1&sBusinessId='+BizTypeInfo.msg[G_biz]+'&iRecommendScene=1&iFlowId=1&iReqId=1&iExtend1=&iExtend2=&iExtend3=&iExtend4=&iExtend5=&sExtend1=&sExtend2=sExtend3=&sExtend4=&sExtend5=',function(){
			if(TgVideoGPMAds.errcode == 0){
				var data = TgVideoGPMAds['data']['acts'];
				var randNum = array_rand(data,1);
				if(data[randNum]['clickurl'] != '' && data[randNum]['imgurl'] != ''){
					infoObj['onwrite'] = function(){showVideoTips({'stat':'onwrite', 'vid':vid, 'player':LWPlayer,'clickurl':data[randNum]['clickurl'],'imgurl':data[randNum]['imgurl'],'actid':data[randNum]['actid']});};
					infoObj['oninited'] = function(){showVideoTips({'stat':'oninited', 'vid':vid, 'player':LWPlayer,'clickurl':data[randNum]['clickurl'],'imgurl':data[randNum]['imgurl'],'actid':data[randNum]['actid']});};
					onloadPlayflag = 1;
				}else{
                                     infoObj['autoplay'] = (noautoplay) ? false:  true ;
				}
				if(data[randNum]['pauseclickurl'] != '' && data[randNum]['pauseimgurl'] != ''){
					infoObj['onpause'] = function(){showVideoTips({'stat':'onpause', 'vid':vid, 'player':LWPlayer,'clickurl':data[randNum]['pauseclickurl'],'imgurl':data[randNum]['pauseimgurl'],'actid':data[randNum]['actid']});};
				}
				if(data[randNum]['endclickurl'] != '' && data[randNum]['endimgurl'] != ''){
					infoObj['onallended'] = function(){showVideoTips({'stat':'onallended', 'vid':vid, 'player':LWPlayer,'clickurl':data[randNum]['endclickurl'],'imgurl':data[randNum]['endimgurl'],'actid':data[randNum]['actid']});};
				}			
			}else{
                                infoObj['autoplay'] = (noautoplay) ? false:  true ;
			}		
			infoObj.video = video;
         	    	LWPlayer.create(infoObj); 
			if(onloadPlayflag){
				adTime = 10;
				var autoVideoTipsClose = setInterval(function(){
					if(adTime>0) {
						$("#jVideoTipsTime").html(adTime);
						if(1==adTime) {
							window.clearInterval(autoVideoTipsClose);
							hideVideoTips();
							LWPlayer.play();
						}
					}else{
						window.clearInterval(autoVideoTipsClose);
					}
					adTime --;
					return;
				}, 1000);
			}		
		});	
    }else{
        CreateVideoPlay(ElementId,_wiw,_wih,url,noautoplay);
    	//CreateVideoIframe(vid,ElementId,_wiw,_wih,iFrom,url);
    }        
}
function hideVideoTips(stat) {		
	$("#JPlayTips").html('').hide();
	$('#mask').hide();
}
function showVideoTips(pObj) {
	if('object'==typeof(pObj)) {
		var retHTML = '';
		if('onwrite'==pObj.stat||'oninited'==pObj.stat) {
			retHTML += '<div class="vt_time">���ʣ�ࣺ<span id="jVideoTipsTime">10</span>��</div>';
			retHTML += '<a href="'+pObj.clickurl+'" onclick="GPM_WMP_LOG(\'click\','+pObj.actid+')" target="_blank"><img src="'+pObj.imgurl+'" /></a>';
			$('#mask').css({'height':'535px'}).show();
		}else{
			playTime = LWPlayer.getPlaytime();
			retHTML += '<div class="vt_close"><a href="javascript:;" onclick="hideVideoTips(\''+pObj.stat+'\');">�ر�</a></div>';	
			retHTML += '<a href="'+pObj.clickurl+'" onclick="GPM_WMP_LOG(\'click\','+pObj.actid+')" target="_blank"><img src="'+pObj.imgurl+'" /></a>';
			//$('#mask').css({'height':'460px'}).show();
		}
		GPM_WMP_LOG('pop',pObj.actid);
		$("#JPlayTips").html(retHTML).show();		
	}
	return;
}
setInterval(function(){
	if(playTime){
		if(LWPlayer.getPlaytime() != playTime){
			LWPlayer.onresume();
		}
	}
},300);
function GPM_WMP_LOG(action,actid){
	var url = location.href;
	var uin = '';
	need("biz.login-min",function(LoginManager){
        LoginManager.checkLogin(function(){
            uin = LoginManager.getUserUin();//��ȡQQ��            
        });
    });	
    if(uin == ''){
    	if(milo.cookie.get('pt2gguin')){
    		uin = milo.cookie.get('pt2gguin').match(/[1-9]*[1-9][0-9]*/)[0];
    	}    	
    }
	loadScript('//apps.game.qq.com/client_pop/api.php?action=doGPMReport&channel=28&service='+BizTypeInfo.msg[G_biz]+'&uin='+uin+'&op='+action+'&actId='+actid+'&iRet=0&sMsg=OK&extends='+url,function(){});
}
//�ֻ�����Ƶ����
function GetAPPVideoPlay(vid,ElementId,iFrom,url) {
	var _wiw, _wih;
    _wiw = $('#'+ElementId).width(), _wih = $('#'+ElementId).height();
    if(iFrom == 1){
    	CreateVideoIframe(vid,ElementId,_wiw,_wih,iFrom,url);
    }else{
    	CreateVideoPlay(ElementId,_wiw,_wih,url);
    }
}
//����IFRAME�ڵ�
function CreateVideoIframe(vid,ElementId,width,height,iFrom,url){   
	$('#'+ElementId).html(''); 
    var iframe = document.createElement('iframe');             
    iframe.id = 'VideoIframe';   
    iframe.border = 0;
    iframe.style.border = 'none';
    iframe.frameBorder = "no";
    iframe.scrolling = 'no';        
    iframe.width = '100%';      
    iframe.height = '100%';     
    if(iFrom != 1){
    	iframe.src = url; 
    	document.getElementById(ElementId).appendChild(iframe);     
    }else{
    	iframe.src = '//gicp.qq.com/wmp/v/wmplayer.html?vid='+vid+'&width='+width+'&height='+height;  
    	document.getElementById(ElementId).appendChild(iframe);  
    	var timer = setInterval(function(){
	    	if(document.getElementsByTagName('iframe')[0].contentWindow.LWPlayer){
				LWPlayer = document.getElementsByTagName('iframe')[0].contentWindow.LWPlayer; 
				clearInterval(timer);
	    	}
	    },200); 
    }        
}; 
//����H5���ű�ǩ
function CreateVideoPlay(ElementId,width,height,url,noautoplay){  
    $('#'+ElementId).html(''); 
    var video = document.createElement('video');             
    video.id = 'VideoIframe';          
    video.border = 0;
    video.style.border = 'none';    
    video.type = 'video/mp4';
    video.width = width;      
    video.controls="controls";  
    if(!noautoplay){ video.autoplay="autoplay";}
    video.height = height;     
	video.src = url;
    document.getElementById(ElementId).appendChild(video);  
};
//IFRAME�󶨺��¼�
function bindIframeOnloadEvent(el, onload) {        
    if (el.attachEvent){        
        el.attachEvent("onload", onload);       
    } else {        
        el.onload = onload;     
    }       
};  
//��ȡIFRAMEԪ��
function getIframeWindow(el) {      
    return el.contentWindow || el.contentDocument.parentWindow;     
};
function ReloadPubdate(string) {
    var re = /^(\d{2,4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    if( re.test(string) ) {
        var t = string.match(re);
        var d = new Date(t[1], t[2]-1, t[3], t[4], t[5], t[6]);
        var c = new Date();
        var s = (c.getTime() - d.getTime())/1000;
        var m = Math.floor(s/60);
        var h = Math.floor(s/3600);
        var d = Math.floor(s/86400);
        var n = Math.floor(s/(86400*30));
        var y = Math.floor(s/(86400*365));
        if(y>0) return y+"����ǰ"; 
        if(n>0) return n+"������ǰ";
        if(d>0) return d+"����ǰ";
        if(h>0) return h+"Сʱ��ǰ";
        if(m>0) return m+"������ǰ";
    }
    return "�ո�";
}
function ReloadPlay(total) {
    return +total>10000 ? Math.round(+(total)/10000, 1) + "��" : +total;
}
function ReloadTime(times) {
	var time = +(times);
	var min = parseInt(time/60);		
	var sec = time%60;
	return (min<10 ? "0"+min : min) +":"+ (sec<10 ? "0"+sec : sec);
}
function js_htmlspecialchars_decode(html) {
    html = html.replace(/&amp;/gi, '&');
    html = html.replace(/&quot;/gi, '"');
    html = html.replace(/&#039;/gi, '\'');
    html = html.replace(/&lt;([\/]?(a|p|img|span|strong|br|h\d|div|table|tbody|thead|tfoot|tr|th|td|dd|dt|dl|ul|li|ol|b|em|u|title|small|pre|i|section))/gi, "<$1");
    html = html.replace(/&gt;/gi, '>');
    html = html.replace(/<img [^>]*src=['"]?([^'" ]+)[^>]*>/gi, function (match, src) {
        return '<img src='+src+'>';
    });
    return html;
}
function GetQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substring(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function LinkInfo(str,iVideoId,iMark){
	return G_Detail+'?G_Biz='+G_biz+'&tid='+iVideoId;

	if(iVideoId !=0){
		if(str == '' || /v.qq.com/.test(str) || /detail/.test(str) || !G_IsGo){
    		return G_Detail+'?G_Biz='+G_biz+'&tid='+iVideoId;
    	}else{
    		return G_Go+'?G_Biz='+G_biz+'&tid='+iVideoId
    	}
	}else{
		return str;
	}    	
}
function LinkNewsInfo(str,iNewsId,iMark){
	if(iNewsId !=0){
		if(str == '' || /newsDetail/.test(str)){
    		return G_NewsDetail+'?G_Biz='+G_biz+'&tid='+iNewsId;
    	}else{
    		return G_NewsDetail+'?G_Biz='+G_biz+'&tid='+iNewsId;
    	}
	}else{
		return str;
	}    	
}
function LinkInfoPro(str,iVideoId,p1,p2,p3,iMark){
    	return G_Detail+'?G_Biz='+G_biz+'&tid='+iVideoId+'&e_code='+p1+'.'+p2+'.'+p3;

	if(parseInt(iMark) && !/v.qq.com/.test(str)){
		return G_Go+'?G_Biz='+G_biz+'&tid='+iVideoId+'&e_code='+p1+'.'+p2+'.'+p3;
	}
	if(iVideoId !=0){
		if(str == '' || /v\.qq\.com/.test(str)|| /\.qq\.com/.test(str)|| /ixigua\.com/.test(str) || /egame\.qq\.com/.test(str) || /detail/.test(str) || !G_IsGo){
    		return G_Detail+'?G_Biz='+G_biz+'&tid='+iVideoId+'&e_code='+p1+'.'+p2+'.'+p3;
    	}else{
    		return G_Go+'?G_Biz='+G_biz+'&tid='+iVideoId+'&e_code='+p1+'.'+p2+'.'+p3;
    	}
	}else{
		return str;
	}    	
}
function LinkNewsInfoPro(str,iNewsId,p1,p2,p3,iMark){
	if(parseInt(iMark) && !/v.qq.com/.test(str)){
		return G_NewsDetail+'?G_Biz='+G_biz+'&tid='+iNewsId+'&e_code='+p1+'.'+p2+'.'+p3;
	}
	if(iNewsId !=0){
		if(str == '' || /v.qq.com/.test(str) || /newsDetail/.test(str)){
    		return G_NewsDetail+'?G_Biz='+G_biz+'&tid='+iNewsId+'&e_code='+p1+'.'+p2+'.'+p3;
    	}else{
    		return G_NewsDetail+'?G_Biz='+G_biz+'&tid='+iNewsId+'&e_code='+p1+'.'+p2+'.'+p3;
    	}
	}else{
		return str;
	}    	
}
function WMP_LOG(p1,p2,p3,p4,p5){
	pgvSendClick({hottag:''+p1+'.'+p2+'.'+p3+'.'+p4+''});
};
function WMP_LOG_EAS(p1,p2,p3,p4,p5){
	var p1 = p1.toLowerCase();
	var p2 = p2.toLowerCase();
	var p3 = p3.toLowerCase();
	var p4 = +p4;
	loadScript("eas-1.js"/*tpa=https://ossweb-img.qq.com/images/js/eas/eas.js*/,function(){
		pgvSendClick({hottag:''+p1+'.'+p2+'.'+p3+'.'+p4+''});
		EAS.VShow({
				'VUrl':p5,
		        'Vid': p4,
		        'e_code': p1+'.'+p2+'.'+p3,
		        'VType': 'click'
		});	
	});
};
function WMP_LOG_EAS_PLAY(id,sVID){
	loadScript("eas-1.js"/*tpa=https://ossweb-img.qq.com/images/js/eas/eas.js*/,function(){
		EAS.VShow({
				'VUrl':location.href,
		        'Vid': id,
		        'Vvid': sVID,
		        'e_code': GetQueryString('e_code'),
		        'VType': 'play'
		});
	});
}
function openUrl(url) {
	var a = document.createElement('a');
	a.target = '_blank';
	a.href = url;
	a.style.display = 'none';
	var body = document.getElementsByTagName('body').item(0);
	body.appendChild(a);
	a.click();
	body.removeChild(a);
};
//��ȡ���ۿ��
var registerCoralEvent = {};
function QueryRegisterCoralEvent(ownstyle){
	var BizInfo = postScriptDeferStaticData('PAGE_WMP_BIZ_INFO.js'/*tpa=https://gicp.qq.com/wmp/data/js/PAGE_WMP_BIZ_INFO.js*/,'BizInfo');
	BizInfo.then(function(data){
		if(G_biz){
			for(var x in data.msg){
				if(x == G_biz){
					if(data.msg[x]['sName'] == 'pvp'){
						G_MSG.G_site = 'sgame';
					}else{
						G_MSG.G_site = data.msg[x]['sName'];
					}				
				}
			}

			var allowbiz = ["cf","sm","age","bns","dnf","car","nz","jf","sgame","yl","mho","wuxia","mx","hyrz","xlx","huoying","ds","x5","she"];
			if(allowbiz.indexOf(G_MSG.G_site) == -1) {
				G_MSG.G_site = "sm";
			}

		}else{
			G_MSG.G_site = 'lol';//���ݷ���Ƶ����ҵ�����ţ��
		}		
		if(ownstyle){
			registerCoralEvent =  {         
		        site:G_MSG.G_site, // ��ƵΪvedio ������Ϊkbs ���Թܼ�Ϊ pm ---- Ƶ������
		        ownStyle: ownstyle,  // ˽����ʽ�ɸ�д������ʽ // **���Ƽ�
		        loginEvent:function(){
		            //parent.CheckLogin();
		            parent.need("biz.login",function(LoginManager){
		                LoginManager.login();                               
		            }); 
		        },
		        publicLogined:function(uin,nick,headUrl){   // 20130716 ��½�ɹ��ص�  ----��Ҫִ��
		           document.getElementById('commentIframe').contentWindow.publicLogined(uin,nick,headUrl);
		           $('#commentIframe').contents().find('#top_textarea').val('').attr('disabled',false);
		        },
		        publicLogout:function(){   // �˳��ص�  ----��Ҫִ��
		             document.getElementById('commentIframe').contentWindow.publicLogout();
		        }
			};
		}else{
			registerCoralEvent =  {         
		        site:G_MSG.G_site, // ��ƵΪvedio ������Ϊkbs ���Թܼ�Ϊ pm ---- Ƶ������
		        loginEvent:function(){
		            //parent.CheckLogin();
		            parent.need("biz.login",function(LoginManager){
		                LoginManager.login();                               
		            }); 
		        },
		        publicLogined:function(uin,nick,headUrl){   // 20130716 ��½�ɹ��ص�  ----��Ҫִ��
		           document.getElementById('commentIframe').contentWindow.publicLogined(uin,nick,headUrl);
		           $('#commentIframe').contents().find('#top_textarea').val('').attr('disabled',false);
		        },
		        publicLogout:function(){   // �˳��ص�  ----��Ҫִ��
		             document.getElementById('commentIframe').contentWindow.publicLogout();
		        }
			};
		}
		
	});	
}
var pt = {
    setHeader : function(pObj) {
        need("biz.login", function(LoginManager) {
            LoginManager.checkLogin(function(){
                var uin = LoginManager.getUserUin();
                var nick = LoginManager.getNickName();
                var src = pObj[uin];
                registerCoralEvent.publicLogined(uin, nick, src);
            },function(){
            });
        });
    }
}; 
function array_rand(input, num_req) {
  //  discuss at: //phpjs.org/functions/array_rand/
  // original by: Waldo Malqui Silva
  //   example 1: array_rand( ['Kevin'], 1 );
  //   returns 1: 0

  var indexes = [];
  var ticks = num_req || 1;
  var checkDuplicate = function(input, value) {
    var exist = false,
      index = 0,
      il = input.length;
    while (index < il) {
      if (input[index] === value) {
        exist = true;
        break;
      }
      index++;
    }
    return exist;
  };

  if (Object.prototype.toString.call(input) === '[object Array]' && ticks <= input.length) {
    while (true) {
      var rand = Math.floor((Math.random() * input.length));
      if (indexes.length === ticks) {
        break;
      }
      if (!checkDuplicate(indexes, rand)) {
        indexes.push(rand);
      }
    }
  } else {
    indexes = null;
  }

  return ((ticks == 1) ? indexes.join() : indexes);
}
function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '')
    .toLowerCase()
    .match(/<[a-z][a-z0-9]*>/g) || [])
    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '')
    .replace(tags, function($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}
// add by georgehuang, �ϱ����ƻ�
function reportToCfMobile(msg){
    var url = 'https://apps.game.qq.com/wmp/v3.1/index.php?p0=1&p1=reportToCfMobile';
    var key = msg.sVID;
    if (msg.sExt3 != ''){
        key = msg.sExt3;
    }
    var params = new Object();
    params['key'] = key;
    params['type'] = 1;
    params['time'] = 6;

    setTimeout(function(){
        $.ajax({
            type: "POST",
            url: url,
            data: params,
            dataType: "script",
            success: function(data){}
        });
    }, 6000);
    // $.post(url, params, function(res){console.log(res)});
}
/*  |xGv00|9fe85db66cd1c0061485f86a5d2b0d3e */