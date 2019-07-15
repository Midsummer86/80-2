/**
 * pvp Header JS
 * Author: sonichuang
 * Create: 2017-06-14
 */

pvpRaidersFunc = (function () {
	var setall = $('.item-types li'),
			flag = 0,
			detList = $(".det-i"),
			dname = $("#Jname"),
			pic = $("#Jpic"),
			price = $("#Jprice"),
			tprice = $("#Jtprice"),
			dec1 = $("#Jitem-desc1"),
			dec2 = $("#Jitem-desc2"),
			popPupItem = $("#popPupItem"),
			ord = 0;

	var util = {},
			fn = {},
			init = function () {};
	fn = {
		getWinHeight: function () {
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight;
		},
		getWinWidth: function () {
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth;
		},
		getPageHeight: function () {
			var h = window.innerHeight && window.scrollMaxY ? window.innerHeight + window.scrollMaxY : document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight;
			return h > document.documentElement.scrollHeight ? h : document.documentElement.scrollHeight;
		},
		getY: function (ev) {
			var t = ev.offsetTop;
			while (ev = ev.offsetParent)
				t += ev.offsetTop;
			return t;
		},
		mouseCoords: function (ev) {
			ev = ev || window.event;
			if (ev.pageX || ev.pageY) {
				return {
					x: ev.pageX,
					y: ev.pageY
				};
			}
			return {
				x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
				y: ev.clientY + document.body.scrollTop - document.body.clientTop
			};
		},
		popupMove: function (ev, thisType) {
			ev = ev || window.event;
			popPupItem.removeClass("right-popup");
			var mousePos = fn.mouseCoords(ev),
					popLeft = mousePos.x + 50,
					popTop = mousePos.y - 50,
					winW = fn.getWinWidth(),
					winH = fn.getWinHeight(),
					pageH = fn.getPageHeight(),
					scrollT = document.documentElement.scrollTop,
					offH = popPupItem.offsetHeight,
					tmpx = winW - popLeft,
					tmpy = pageH - popTop - winH;
			var userAgent = navigator.userAgent.toLowerCase();
			if (/msie/.test(userAgent) && !/opera/.test(userAgent)) {
				popTop = fn.getY(thisType);
			}
			if (tmpx < 260) {
				popLeft = popLeft - 350;
				popPupItem.addClass("right-popup");
			}
			popPupItem.animate({
				top: popTop + "px",
				left: popLeft + "px"
			}, 0);
			popPupItem.show();
		},
		showpop: function (tagParent, item, data) {
			if (!data)
				return
			// 格式化数据
			var dataList = {};
			$.each(data, function (i) {
				var n = data[i].item_id;
				dataList[n] = data[i];
			})
			// console.log(dataList);
			detList = tagParent.children(item);
			for (i = 0; i < detList.length; i++) {
				(function (idx) {
					$(detList[idx]).mousemove(function (e) {
						if (e.stopPropagation) {
							e.stopPropagation();
						}
						e.cancelBubble = true;
						var thisType = this;
						fn.popupMove(e, thisType);
					});
					$(detList[idx]).hover(function (e) {
						if (e.stopPropagation) {
							e.stopPropagation();
						}
						e.cancelBubble = true;
						var j = $(this).children("a").attr("data-item-id");
						// console.log("j: " + j);
						if (!j) {
							return
						}
						dname.html(dataList[j].item_name);
						price.html('\u552e\u4ef7\uff1a' + dataList[j].price);
						tprice.html('\u603b\u4ef7\uff1a' + dataList[j].total_price);
						dec1.html(dataList[j].des1);
						dec2.html(' ');
						dec2.html(dataList[j].des2);
						pic.attr("src", "//game.gtimg.cn/images/yxzj/img201606/itemimg/" + dataList[j].item_id + ".jpg");
					}, function (e) {
						if (e.stopPropagation) {
							e.stopPropagation();
						}
						e.cancelBubble = true;
						popPupItem.hide();
					});
				})(i);
			}
		}

	};

	// 主KV大背景
	util.mainBannerFill = function () {
		$.getScript("Info_new_15719.js"/*tpa=https://game.qq.com/time/qqadv/Info_new_15719.js*/, function () {
			if (!oDaTaNew15719)
				return


			var $raidersKvBanner = $("#raidersKvBanner");
			if (!$raidersKvBanner[0])
				return
			$raidersKvBanner.each(function (i) {
				var _self = $(this), tgad = _self.attr("data-tgad");
				if (!oDaTaNew15719['pos' + tgad])
					return
				var bgTitle = decodeURIComponent(oDaTaNew15719['pos' + tgad][0]),
						bgLink = oDaTaNew15719['pos' + tgad][1],
						bgImg = "http://game.gtimg.cn//upload/adw/" + oDaTaNew15719['pos' + tgad][2];
				// kvHTML = '<a href="'+bgLink+'"><img src="'+bgImg+'" width="1920" height="420"></a>';
				_self.css("background-image", 'url(' + bgImg + ')');
				_self.find(".btn-link").html(bgTitle).attr("title", bgTitle).attr("href", bgLink);
			});

		})
	};

	// 主轮播图 - 功能激活
	util.initTGads = function () {
		$.getScript("tgAds.min.js"/*tpa=https://game.gtimg.cn/images/js/comm/tgAds.min.js*/, function () {
			// alert("go")
			var test = new tgAds({
				ggID: '15719'//填写轮播广告所属的频道ID("频道管理"-"频道ID")
				, info: ['18878', '18879', '18880', '18881', '18882']//,info:'201206' ['2024','2025','2026','2027','2033','2034']
						//以下参数都是可选！可不填，可忽略，可无视~~~~
				, box: 'ggBox'//[可选参数]填写放置广告的div的ID
				, pgv: 'https://game.gtimg.cn/images/yxzj/web201706/js/raiders/raiders.adsRolling.ad'// ,pgv:'mainAd'
						// [可选参数]pgv接受2种形式（普通点击流orPPT点击流）：普通点击流'https://game.gtimg.cn/images/yxzj/web201706/js/raiders/index.adsRolling.ad'点击流名称，序号会自动加，eg第一帧叫:'https://game.gtimg.cn/images/yxzj/web201706/js/raiders/index.adsRolling.ad1' |||||| PTT点击流'mainAd'：点击流名称，序号会自动加，会自动上报:PTTSendClick('adRoll','mainAd1','轮播广告1')
						//,auto:false//[可选参数]移动端禁止自动滚动，不添加此项或者true为定时自动滚动
				, mouse: true//[可选参数,若点击触发请删掉此项]，true为鼠标经过小按钮触发翻页。false为点击小按钮触发翻页（默认为点击触发）最好是点击触发，不然晃得眼花
						// ,noUrl:true//[可选参数]如果纯展示不能点击跳转请用这个参数
			});

			if (typeof(EAS.ADShow) == 'function') {
				// EAS点击上报
				$("#ggBox").on("click",".adPic a",function(){
					EAS.ADClick ($(this).attr("href"));
				});

				// 爆光上报
				function showAdFunc(){
					var showAdList = [];
					$("#ggBox .adPic a").each(function(i){
						showAdList.push($(this).attr("href"));
					});
					var showAdStr = showAdList.join("|");
					EAS.ADShow(showAdStr);
				}
				setTimeout(showAdFunc,1000);
			};
		})
	};
	// 选项卡 - 功能激活
	util.tabSwitch = function () {
		$("#wrapper").on("mouseenter", ".m-tab-box-triggers li", function () {
			var _self = $(this),
					index = _self.parents(".m-tab-box-triggers").find("li").index(_self);
			tabPanel = _self.parents(".m-tab-box").find(".m-tab-box-panel"),
					linkMore = _self.parents(".sbox").find("a.s-more"),
					link = _self.attr('data-link-more'),
					delay = _self.attr('data-delay-type'),
					num = _self.attr('data-show-num');
			_self.addClass("active").siblings("li").removeClass("active");
			tabPanel.removeClass("active").eq(index).addClass("active");
			if (link) {
				linkMore.attr('href', link).show();
			}
			if (delay == "gameItem") {
				util.gameItemInit()
			}
			if (delay == "gameHero") {
				util.gameHeroInit()
			}

		});
	};

	// 英雄攻略 - 功能激活
	util.heroRaiders = function () {
		var $heroListMore = $(".hero-list-more"),
			$allHeroDropdown = $(".hero-raiders-dropdown");

		var setTimeoutConst;
		$heroListMore.hover(function () {
			$allHeroDropdown.show();
		}, function () {
			setTimeoutConst = setTimeout(function () {
				$allHeroDropdown.hide()
			}, 300)
		});
		$allHeroDropdown.hover(function () {
			clearTimeout(setTimeoutConst);
			$allHeroDropdown.show();
		}, function () {
			$allHeroDropdown.hide();
		});

		$(".hero-raiders").on("mouseenter",".hero-list-ul .hero-list-item",function(){
			$(this).addClass("active").siblings("li").removeClass("active");
		});
		$(".hero-raiders").on("click",".hero-raiders-dropdown .hero-list li",function(){
			$allHeroDropdown.hide();
		});
		$(".hero-raiders-dropdown").on("mouseenter",".hero-list-ul li",function(){
			$(".hero-raiders .hero-list-ul .hero-list-item").removeClass("active");
		});
		$(".hero-raiders").on("mouseenter",".hero-type-ul li",function(){
			$(this).addClass("on").siblings("li").removeClass("on");
		});
	}


	// 召唤师技能 - 功能激活
	util.skillSummoner = function () {
		var summonerJson = "https://pvp.qq.com/web201605/js/summoner.json";
		$.ajax({
			type: 'GET',
			url: summonerJson,
			dataType: 'json',
			success: function (data) {
				var pData = {};
				pData.data = data;
				var html = juicer($('#JSsrsShow').html(), pData);
				var html2 = juicer($('#JSsrsNav').html(), pData);
				$('#srsShow').html(html);
				$('#srsNav').html(html2);

				$(".skill-raiders-summoner").on("click", ".srs-nav-item", function () {
					console.log("aaaa")
					var _self = $(this),
							index = _self.parent().find("li").index(_self);
					tabPanel = _self.parents(".skill-raiders-summoner").find(".srs-panel"),
							_self.addClass("active").siblings("li").removeClass("active");
					tabPanel.removeClass("active").eq(index).addClass("active");
				})
			},
			error: function (xhr, type) {
				console.log('get json error!')
			}
		});
	};

	// 局内道具 - 初始化
	util.gameItemInit = function () {
		// console.log("gameItemInit");
		if ($("#gameItemList").html() != "") {
			return
		}
		var itemJson = "https://pvp.qq.com/web201605/js/item.json";
		$.ajax({
			type: 'GET',
			url: itemJson,
			dataType: 'json',
			success: function (data) {
				var pData = {};
				pData.data = data;
				var html = juicer($('#JSgameItemList').html(), pData);
				$('#gameItemList').html(html);

				fn.showpop($("#gameItemList"), "li", data);
			},
			error: function (xhr, type) {
				console.log('get json error!')
			}
		});

	};

	// 英难 - 初始化
	util.gameHeroInit = function () {
		if ($("#gameHeroList").html() != "") {
			return
		}
		var itemJson = "https://pvp.qq.com/web201605/js/herolist.json";
		$.ajax({
			type: 'GET',
			url: itemJson,
			dataType: 'json',
			success: function (data) {
				var pData = {};
				pData.data = data;
				var html = juicer($('#JSgameHeroList').html(), pData);
				$('#gameHeroList').html(html);
			},
			error: function (xhr, type) {
				console.log('get json error!')
			}
		});
	}

	// 精品栏目 - 功能激活
	util.boutiqueFunc = function () {
		var $boutiqueFoldTrigger = $("a.boutique-fold-trigger");
		$boutiqueFoldTrigger.on("click", function () {
			var selfP = $(this).parent();
			var $boutique = $(this).parents(".boutique");
			// console.log(selfP);
			if (selfP.hasClass("fold")) {
				$boutique.removeClass("boutique-fold");
			} else {
				$boutique.addClass("boutique-fold")
			}
		})
		var $boutiqueNavItem = $(".boutique-nav-ul li");
		$boutiqueNavItem.on("mouseenter", function () {
			$(this).addClass("active").siblings("li").removeClass("active");
		})
	};

	init = function () {
		util.mainBannerFill();
		util.initTGads();
		util.tabSwitch();
		util.heroRaiders();
		util.skillSummoner();
		util.boutiqueFunc();
		// util.jqCustomScrollbar();
	};
	return{
		init: init,
	}
})();
pvpRaidersFunc.init();
