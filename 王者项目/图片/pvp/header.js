/**
 * pvp Header JS
 * Author: sonichuang
 * Create: 2017-05-31
 */
var pvpHeader = (function () {
	var util = {},
		fn = {},
		$header = "",
		init = function () { };

	var isOldHeader = $("body").hasClass("old-header") ? true : false;

	fn = {
		jsLoader: function (url, callback, options) {
			options = options || {};
			var head = document.getElementsByTagName('head')[0] || document.documentElement,
				script = document.createElement('script'),
				done = false;
			script.src = url;
			if (options.charset) {
				controller
				script.charset = options.charset;
			}
			script.onerror = script.onload = script.onreadystatechange = function () {
				if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done = true;
					if (callback) {
						callback();
					}
					script.onerror = script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.insertBefore(script, head.firstChild);
		}
	};

	util.addHeaderHTML = function () {
		if (isOldHeader) {
			var loginSup = '';
			var loginSub = '';
			loginSub += '<!--=========����Ӣ�ۺ��û���¼==========-->';
			loginSub += '<div class="info-box clearfix">';
			loginSub += '  <div class="hero-box fl pr">';
			loginSub += '	<p id="FreeHeros-Title"><b>����Ӣ�ۣ�<span id="freeHerosPeriod"></span>��</b></p>';
			loginSub += '	<ul id="FreeHeros-Cont" class="hero-list clearfix">������...</ul>';
			loginSub += '	<a href="https://game.gtimg.cn/web201605/herolist.shtml" onclick="PTTSendClick(\'head\',\'morehero\',\'����Ӣ��\');" target="_blank" title="����Ӣ��" class="more-hero pa">��<br>��<br>Ӣ<br>��</a>';
			loginSub += '  </div>';
			loginSub += '  <div class="login-box clearfix fl pr">';
			loginSub += '	<a class="avatar pa spr" href="https://game.gtimg.cn/web201605/personal.shtml">';
			loginSub += '	  <img src="avatar1.jpg"/*tpa=https://game.gtimg.cn/images/yxzj/web201605/main/avatar1.jpg*/ width="75" height="75">';
			loginSub += '	  <span class="pa spr level-ico db">0</span>';
			loginSub += '	</a>';
			loginSub += '	<!--=====��¼����ѡ�����=====-->';
			loginSub += '	<div id="logined_selected" class="per-infor fl" style="display:none;">';
			loginSub += '	  <p class="user-name f12">';
			loginSub += '		<em>�û�����</em>';
			loginSub += '		<i id="nickname">--</i>';
			loginSub += '		<a class="logout_btn" href="javascript:void(0)">ע��</a>';
			loginSub += '		<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">�л�����&gt;</a>';
			loginSub += '	  </p>';
			loginSub += '	  <ul class="userinfo-list tc">';
			loginSub += '		<li><em class="grade_level">��ǿ��ͭIII</em><i>��λ</i></li>';
			loginSub += '		<li><em class="win_count">-</em><i>ʤ��</i></li>';
			loginSub += '		<li><em class="hero_count">-</em><i>Ӣ����</i></li>';
			loginSub += '		<li><em class="skin_count">-</em><i>Ƥ����</i></li>';
			loginSub += '	  </ul>';
			loginSub += '	</div>';
			loginSub += '	<!--=====��¼ǰ=====-->';
			loginSub += '	<div id="unlogin" class="per-infor txt2 fl" style="display:block;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		�װ����ٻ�ʦ����ӭ';
			loginSub += '  <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSub\',\'��¼\');">��¼</a>';
			loginSub += '	  </p>';
			loginSub += '	</div>';
			loginSub += '	<!--=====��¼��δѡ�����=====-->';
			loginSub += '	<div id="logined_not_selected" class="per-infor txt2 fl" style="display:none;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		���ѵ�¼����<a class="select_role" href="javascript:void(0)">ѡ�����</a>������<a class="logout_btn" href="javascript:void(0)">ע��</a>';
			loginSub += '		<!--���ѵ�¼������������δ����<a class="logout_btn" href="javascript:void(0)">ע��</a>-->';
			loginSub += '	  </p>';
			loginSub += '	  <!--p>��¼��鿴�Լ���Ӣ��������Ϸ��Ϣ�������ٻ�ʦ�ȼ�����Ϸʤ�������˻���Ϣ������ֵ �ȡ�</p-->';
			loginSub += '	</div>';
			loginSub += '  </div>';
			loginSub += '</div><!--=========����Ӣ�ۺ��û���¼==========-->';
			loginSub += '<a target="_blank" href="javascript:;" onClick="PTTSendClick(\'btn\',\'subtopkv\',\'����ר��\');"  class="kv-link" title="�鿴����">�鿴����</a>';
		} else {
			var loginSub = '';
			var loginSup = '';
			loginSup += '      <!--=====��¼ģ��=====-->';
			loginSup += '      <div class="login_pannel clearfix pa">';
			loginSup += '        <a class="avatar user_pic " href="https://game.gtimg.cn/web201605/personal.shtml">';
			loginSup += '          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAARpQTFRF88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JYAAAA88JYAMCn0QAAAF10Uk5TZBSP1dYNDujnLPuA3/zQAos0UjmnB8KcgZrNkfGwCdhthtnjysFgCFAZSuQWKYNXh9IbREw+9iRhdyPlZRNdvRwnMRrvNf3F3isBtz+eRfPha+v3O+718Gm0eB4AqcfmkwAAAUBJREFUOMvt1FWTg0AMAOCeu7u71t3dFS+FJv//b9wCnbu5YwI83VPzsBvYb2aRbHzgOXxzartTLbGhVPVAN9Z0NurrXVdaE9GkKNZcaFPBVBJ6kEyh0nSksoqYAVgEyCCqsgMdcIjIpxOYSPMs4wYkHY3RiPwSLufNbDyiqIp/Q6Iob6MqRZ9t9ImiNzZ6R9ELG72k6Dl22q1v1mp38JSiE9SgLpR3mNssC3XQ2DVBD62lBR2zRSPR8JiiR9jIrgDEwhiOAazqDTyjaI7trMQhwqYIxBU2XVH01nibCYTYGGIPzuKBLJdrkwb86A9YVCfpI1uNBkHmZAhGDSqQ9MUspwLkwGcV2StJh9bHn8J09hs+Sfo2/EXFd6ezVZB+aP/D+cQebM+odN9z6wPFvkl3ux66y95WBSr7J/NW/F/0C0EhZNPgBN3FAAAAAElFTkSuQmCC" width="42" height="42">';
			loginSup += '        </a>';
			loginSup += '        <!--=====��¼����ѡ�����=====-->';
			loginSup += '        <div id="logined_selected" class="per-infor" style="display:none;">';
			loginSup += '          <p class="user-name f12">';
			loginSup += '            <i id="nickname">--</i>';
			loginSup += '            <a class="logout_btn" href="javascript:void(0)">ע��</a>';
			loginSup += '            <!--<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">�л�����&gt;</a>-->';
			loginSup += '          </p>';
			loginSup += '          <p class="personal_link"><a href="https://pvp.qq.com/web201605/personal.shtml">����鿴��Ϸս��</a></p>';
			loginSup += '          <ul class="userinfo-list tc">';
			loginSup += '            <li><em class="grade_level">��ǿ��ͭIII</em><i>��λ</i></li>';
			loginSup += '            <li><em class="win_count">-</em><i>ʤ��</i></li>';
			loginSup += '            <li><em class="hero_count">-</em><i>Ӣ����</i></li>';
			loginSup += '            <li><em class="skin_count">-</em><i>Ƥ����</i></li>';
			loginSup += '          </ul>';
			loginSup += '        </div>';
			loginSup += '        <div id="unlogin" class="per-infor unlogin_pannel">';
			loginSup += '          <span class="unlogin_user_pic"></span>';
			loginSup += '          <div class="unlogin_info">';
			loginSup += '            <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSup\',\'��ӭ��¼\');">��ӭ��¼</a>';
			loginSup += '            <p>��¼��鿴��Ϸս��</p>';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '        <!--=====��¼��δѡ�����=====-->';
			loginSup += '        <div id="logined_not_selected" class="per-infor" style="display:none;">';
			loginSup += '          <div class="user-name">';
			loginSup += '            ���ѵ�¼';
			loginSup += '            <p>��<a class="select_role" href="javascript:void(0)">ѡ�����</a>������<a class="logout_btn" href="javascript:void(0)">ע��</a></p>';
			loginSup += '            <!--���ѵ�¼������������δ����<a class="logout_btn" href="javascript:void(0)">ע��</a>-->';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '      </div><!--=====��¼ģ��=====-->';
		}
		var headerHTML = '';
		headerHTML += '<div id="header" class="header tganime-header-fix">';
		headerHTML += '<div class="header-nav">';		
		headerHTML += '    <div class="header-inner">';
		headerHTML += '      <h1><a href="https://pvp.qq.com/" class="logo pa" title="������ҫ" onclick="PTTSendClick(\'link\',\'logo\',\'logo\');">������ҫ</a></h1>';
		headerHTML += '      <!--=========������==========-->';
		headerHTML += '      <ul class="main-nav clearfix">';
		headerHTML += '        <li class="first-nav">';
		headerHTML += '          <a href="https://pvp.qq.com/" target="_blank" title="������ҳ" onclick="PTTSendClick(\'link\',\'home\',\'������ҳ\');">������ҳ<em>HOME</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="https://game.gtimg.cn/web201605/herolist.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick(\'link\',\'data\',\'��Ϸ����\');">��Ϸ����<em>DATA</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="https://game.gtimg.cn/raiders/" target="_blank" title="��������" onclick="PTTSendClick(\'link\',\'strategy\',\'��������\');">��������<em>CONTENTS</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="https://game.gtimg.cn/match/center.shtml?ADTAG=pvp.index.nav.matchcenter" target="_blank" title="��������" onclick="PTTSendClick(\'link\',\'match\',\'��������\');">��������<em>MATCH</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="https://game.gtimg.cn/cp/a20171023pvppc/" target="_blank" title="�̳�/����" onclick="PTTSendClick(\'link\',\'CULTURE\',\'��̬����\');">��̬����<em>CULTURE</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" title="��������" onclick="PTTSendClick(\'link\',\'Community\',\'��������\');">��������<em>COMMUNITY</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" target="_blank" title="���֧��" onclick="PTTSendClick(\'link\',\'player\',\'���֧��\');">���֧��<em>PLAYER</em></a>';
		headerHTML += '        </li>';
		headerHTML += '      </ul>';
		headerHTML += loginSup;
		headerHTML += '    </div>';
		headerHTML += '    <!--=====��������=====-->';
		headerHTML += '      <div id="J_subNav" class="sub-nav">';
		headerHTML += '        <ul class="sub-nav-inner">';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             &nbsp;';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20170829bbgxsm/index.html" target="_blank" title="�汾����" onclick="PTTSendClick(\'link\',\'version\',\'�汾����\');">�汾����</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/web201605/introduce.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick(\'link\',\'gameinfomation\',\'��Ϸ����\');">��Ϸ����</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/web201605/herolist.shtml" target="_blank" title="Ӣ������" onclick="PTTSendClick(\'link\',\'hero\',\'Ӣ������\');">Ӣ������</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/coming/v2/" target="_blank" title="����վ" onclick="PTTSendClick(\'link\',\'data_coming\',\'����վ\');"><i class="icon-fans"></i>����վ</a>';
		headerHTML += '             <a href="javascript:void(0)" title="����վ" onclick="TGDialogS(\'story\');PTTSendClick(\'link\',\'data_story\',\'����վ\');"><i class="icon-fans"></i>����վ</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/web201605/wallpaper.shtml" target="_blank" title="��Ϸ��ֽ" onclick="PTTSendClick(\'link\',\'wallpaper\',\'��Ϸ��ֽ\');">��Ϸ��ֽ</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://game.gtimg.cn/raiders/" target="_blank" title="��������" onclick="PTTSendClick(\'link\',\'strategy_center\',\'��������\');">��������</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/strategy/" target="_blank" title="Ӣ�۹���" onclick="PTTSendClick(\'link\',\'strategy_hero\',\'Ӣ�۹���\');">Ӣ�۹���</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/v/" target="_blank" title="��Ƶ����" onclick="PTTSendClick(\'link\',\'strategy_video\',\'��Ƶ����\');">��Ƶ����</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20180808wzsj/index.htm" target="_blank" title="�����ӽ�" onclick="PTTSendClick(\'link\',\'a20180808wzsj\',\'�����ӽ�\');">�����ӽ�</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/author/" target="_blank" title="������פ" onclick="PTTSendClick(\'link\',\'author\',\'������פ\');">������פ</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/mcn/" target="_blank" title="ý����פ" onclick="PTTSendClick(\'link\',\'mcn\',\'ý����פ\');">ý����פ</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="https://game.gtimg.cn/match/kpl/index.shtml" target="_blank" title="KPLְҵ����" onclick="PTTSendClick(\'link\',\'match_KPL\',\'KPL\');"><i class="icon-fans"></i>KPL</a>';
		headerHTML += '            <a href="https://game.gtimg.cn/cp/a20181017krkpl/index.html" target="_blank" title="KRKPL����" onclick="PTTSendClick(\'link\',\'match_KRKPL\',\'KRKPL\');"><i class="icon-hot"></i>KRKPL</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/match/kcc.shtml" target="_blank" title="�ھ���" onclick="PTTSendClick(\'link\',\'match_kcc\',\'kcc\');">�ھ���</a>';
		// headerHTML +='             <a href="https://game.gtimg.cn/match/krkpl/" target="_blank" title="KPL����ְҵ����" onclick="PTTSendClick(\'link\',\'match_KRKPL\',\'KRKPL\');">KRKPL</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20180906gxls/index.shtml" target="_blank" title="���߸�У����" onclick="PTTSendClick(\'link\',\'match_gaoxiao\',\'���߸�У����\');">��У��</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20180822citylg/index.shtml" target="_blank" title="������ҫ������" onclick="PTTSendClick(\'link\',\'match_city\',\'������ҫ������\');">������</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="QGC����" onclick="TGDialogS(\'qgc\');PTTSendClick(\'link\',\'match_QGC\',\'QGC\');">QGC</a>';
		// headerHTML +='             <a href="https://tga.qq.com/match/2018/pc_game.html?game=wzry&tga=1" target="_blank" title="TGA����" onclick="PTTSendClick(\'link\',\'match_TGA\',\'TGA\');">TGA</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="WGC��Ӣ��" onclick="TGDialogS(\'wgc\');PTTSendClick(\'link\',\'match_WGC\',\'WGC\');">WGC</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/match/quanmin/index.html#/" target="_blank" title="ȫ����" onclick="PTTSendClick(\'link\',\'match_KCC\',\'quanmin\');">ȫ����</a>';
		headerHTML += '             <a href="https://datamore.qq.com/project/wzmatch/dist/index.html" target="_blank" title="��������" onclick="PTTSendClick(\'link\',\'match_datamore\',\'��������\');"><i class="icon-fans"></i>��������</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="����С����" onclick="TGDialogS(\'applets2\');PTTSendClick(\'link\',\'match_applets\',\'����С����\');">����С����</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://game.gtimg.cn/culture/inherit.html" target="_blank" title="��ҫ������" onclick="PTTSendClick(\'link\',\'culture\',\'��ҫ������\');">��ҫ������</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/history/" target="_blank" title="�����Ļ�վ" onclick="PTTSendClick(\'link\',\'history\',\'�����Ļ�վ\');">�����Ļ�վ</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20180327music/index.html" target="_blank" title="����������" onclick="PTTSendClick(\'link\',\'a20180327music\',\'����������\');">����������</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/wonder/" target="_blank" title="��ǧ����" onclick="PTTSendClick(\'link\',\'wonder\',\'��ǧ����\');">��ǧ����</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20190102starlight/index.html" target="_blank" title="�ǹ����" onclick="PTTSendClick(\'link\',\'star\',\'�ǹ����\');" >�ǹ����</a>';
		headerHTML += '             <a href="https://igame.qq.com/newcss/pvp/privilegePC/index.html" target="_blank" title="�̻���Ȩ" onclick="PTTSendClick(\'link\',\'wifi\',\'�̻���Ȩ\');">�̻���Ȩ</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="javascript:void(0)" title="����Ӫ��" onclick="TGDialogS(\'zhushou\');PTTSendClick(\'link\',\'Community_tools\',\'����Ӫ��\');"><i class="icon-hot"></i>����Ӫ��</a>';
		headerHTML += '            <a href="https://buluo.qq.com/p/barindex.html?bid=227061" target="_blank" title="��Q����" onclick="PTTSendClick(\'link\',\'Community_qq\',\'��Q����\');">��Q����</a>';
		headerHTML += '            <a href="javascript:void(0)" target="_blank" title="΢��Ȧ��" onclick="TGDialogS(\'weiquan\');PTTSendClick(\'link\',\'Community_wx\',\'΢��Ȧ��\');">΢��Ȧ��</a>';
		headerHTML += '            <a href="https://weibo.com/heromoba" target="_blank" title="�ٷ�΢��" onclick="PTTSendClick(\'link\',\'Community_wb\',\'�ٷ�΢��\');">�ٷ�΢��</a>';
		headerHTML += '            <a href="javascript:void(0)" title="΢�Ź��ں�" onclick="TGDialogS(\'weixin\');PTTSendClick(\'link\',\'Community_wxgzh\',\'΢�Ź��ں�\');">΢�Ź��ں�</a>';
		headerHTML += '            <a href="javascript:void(0)" title="��Q���ĺ�" onclick="TGDialogS(\'qq\');PTTSendClick(\'link\',\'Community_qqdyh\',\'��Q���ĺ�\');">��Q���ĺ�</a>';
		// headerHTML +='            <a href="javascript:void(0)" title="����С����" onclick="TGDialogS(\'applets\');PTTSendClick(\'link\',\'website_applets\',\'����С����\');">����С����</a>';
		headerHTML += '            <a href="https://game.gtimg.cn/fans/index.shtml" target="_blank" title="ͬ������" onclick="PTTSendClick(\'link\',\'Community_fans\',\'ͬ������\');">ͬ������</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://jiazhang.qq.com/jz/home.html" target="_blank" title="�ɳ��ػ�ƽ̨" onclick="PTTSendClick(\'link\',\'player_watch\',\'�ɳ��ػ�ƽ̨\');"><i class="icon-guard"></i>�ɳ��ػ�ƽ̨</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20170726hsbbspc/index.html" target="_blank" title="����ϵͳ" onclick="PTTSendClick(\'link\',\'player_healthy\',\'����ϵͳ\');"><i class="icon-health"></i>����ϵͳ</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/cp/a20181105talk/" target="_blank" title="���ʽܻ���վ" onclick="PTTSendClick(\'link\',\'player_drj\',\'���ʽܻ���վ\');"><i class="icon-fans"></i>���ʽܻ���վ</a>';
		headerHTML += '             <a href="javascript:void(0)" target="_blank" title="�ͷ�ר��" onclick="TGDialogS(\'kefu\');PTTSendClick(\'link\',\'player_kf\',\'�ͷ�ר��\');">�ͷ�ר��</a>';
		headerHTML += '             <a href="https://game.gtimg.cn/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml" title="����һ�" onclick="PTTSendClick(\'link\',\'player_feedback\',\'����һ�\');" target="_blank">����һ�</a>';
		headerHTML += '             <a href="https://tool.helper.qq.com/v3/wzry/official_website/index.html" title="��������" onclick="PTTSendClick(\'link\',\'player_service\',\'��������\');" target="_blank">��������</a>';
		headerHTML += '          </li>';
		headerHTML += '        </ul>';
		headerHTML += '      </div>';
		headerHTML += '      </div>';
		headerHTML += loginSub;
		headerHTML += '</div>';
		headerHTML += '<div class="header-dialog">';
		headerHTML += '  <div class="pop pr tganime-fadein on" style="display:none;" id="login_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">�ر�</a>';
		headerHTML += '    <a href="javascript:void(0)" id="wxlogin" class="wx-login pa db ht">΢���û���¼</a>';
		headerHTML += '    <a href="javascript:void(0)" id="qqlogin" class="qq-login pa db ht">QQ�û���¼</a>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="pop2 pr" style="display:none;" id="area_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">�ر�</a>';
		headerHTML += '    <div class="se-input">';
		headerHTML += '      <select name="channelContentId" id="channelContentId"><option selected>ѡ������</option></select>';
		headerHTML += '      <select name="areaContentId" id="areaContentId"><option selected>ѡ�����</option></select>';
		headerHTML += '      <select name="roleContentId" id="roleContentId"><option selected>ѡ���ɫ</option></select>';
		headerHTML += '    </div>';
		headerHTML += '    <div class="se-btn clearfix">';
		headerHTML += '      <a id="RoleSelectBtn" href="javascript:showDialog.hide()" class="fl ht">ȷ��</a>';
		headerHTML += '      <a href="javascript:showDialog.hide()" class="fl ht">ȡ��</a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="zhushou pr" id="zhushou" style="display:none">';
		headerHTML += '    <div class="dia-zhushou pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="weixin pr" id="weixin" style="display:none">';
		headerHTML += '    <div class="dia-weixin pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="story pr" id="story" style="display:none">';
		headerHTML += '    <div class="dia-story">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="skin pr" id="skin" style="display:none">';
		headerHTML += '    <div class="dia-skin">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="version pr" id="version" style="display:none">';
		headerHTML += '    <div class="dia-version">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '   <div class="weiquan pr" id="weiquan" style="display:none">';
		headerHTML += '    <div class="dia-weiquan">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="hero_pop pr" id="hero_pop" style="display:none">';
		headerHTML += '    <div class="dia-hero-pop">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="kefu pr" id="kefu" style="display:none">';
		headerHTML += '    <div class="dia-kefu">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '      <p>΢��ɨһɨ����ϵ�ͷ�</p>';
		headerHTML += '    </div> ';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qq pr" id="qq" style="display:none">';
		headerHTML += '    <div class="dia-qq">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="wgc pr" id="wgc" style="display:none">';
		headerHTML += '    <div class="dia-wgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qgc pr" id="qgc" style="display:none">';
		headerHTML += '    <div class="dia-qgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets pr" id="applets" style="display:none">';
		headerHTML += '    <div class="dia-applets">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets2 pr" id="applets2" style="display:none">';
		headerHTML += '    <div class="dia-applets2">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '</div>';
		$("#header").remove(); // if include header.inc, remove div#header
		$("body").prepend(headerHTML);
		$header = $("#header");
	};

	util.headerFunc = function () {
		if (isOldHeader) {
			util.headerFreeHeroPeriod();
			util.headerFreeHeroInit();
			util.setKVLink();
		}
	};

	util.headerFreeHeroInit = function () {
		sUrl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/';
		$("#FreeHeros-Cont").on("mouseenter", "li", function () {
			var _self = $(this),
				_selfImg = _self.find("img"),
				hid = _selfImg.data("id");
			// console.log(hid);
			// _selfImg.attr('src', sUrl + hid + '/' + hid + '-freehover.png');
			_self.siblings("li").find("img").each(function (i) {
				hhid = $(this).data("id");
				// console.log(hhid);
				// $(this).attr("src", sUrl + hhid + '/' + hhid + '.jpg');
			});
			_self.addClass("active").siblings("li").removeClass("active");

		});
		$.ajax({
			url: 'https://pvp.qq.com/web201605/js/herolist.json',
			dataType: 'json',
			success: function (data) {
				// console.log(data);
				var freeHeroData = [],
					freeHeroHtml = "";
				for (var i = 0; i < data.length; i++) {
					var payarr = [],
						payarr = ('' + data[i].pay_type).split(',');
					if (payarr == 10 || payarr[0] == 10 || payarr[1] == 10) {
						freeHeroData.push(data[i]);
					}
				}
				// console.log(freeHeroData);
				for (var i = 0; i < freeHeroData.length; i++) {
					var hid = freeHeroData[i].ename;
					freeHeroHtml += '<li>';
					freeHeroHtml += '	<a href="https://pvp.qq.com/web201605/herodetail/%27 + hid + %27.shtml" target="_blank" onclick="PTTSendClick(\'header\',\'freeHero-' + i + '\',\'����Ӣ��\');">';
					freeHeroHtml += '		<img class="small" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '.jpg" width="69" height="69">';
					freeHeroHtml += '		<img class="large" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '-freehover.png" width="224" height="69">';
					freeHeroHtml += '	</a>';
					freeHeroHtml += '</li>';
				}
				// console.log(freeHeroHtml);
				$("#FreeHeros-Cont").html(freeHeroHtml);
				$("#FreeHeros-Cont li").eq(0).trigger("mouseenter");
			},
			error: function (xhr, type) {
				console.log("get herolist.json error!")
			}
		});
	};

	util.headerFreeHeroPeriod = function () {
		/* Ӣ���޷�ʱ����䣬һ��Ϊ��1-���� */
		// ��ȡ��ǰ������ʱ��
		function getServerTime (callback) {
			$.getScript('//apps.game.qq.com/CommArticle/app/reg/gdate.php?t=' + new Date().getTime(), function () {
				var serverDate = json_curdate,
					date = new Date(serverDate.replace(/-/g, "/"));
				callback && callback(date);
			});
		}
		function getDateStr (date, offset) {
			var dateSet = date || new Date(),
				offset = offset || 0;
			var h = new Date();
			h.setDate(dateSet.getDate() + offset);
			var set = [];
			set.push(h.getFullYear());
			set.push(h.getMonth() + 1);
			set.push(h.getDate());
			// return set[0] + '-' + set[1] + '-' + set[2];
			return set[1] + '��' + set[2] + '��';
		}
		var freeHeroDayFill = function (d) {
			var d = d || new Date();
			var day = d.getDay();
			var d1, d2;
			switch (day) {
				case 0: //��
					d1 = getDateStr(d, +1);
					d2 = getDateStr(d, +7);
					break;
				case 1: //һ
					d1 = getDateStr(d, 0);
					d2 = getDateStr(d, +6);
					break;
				case 2: //��
					d1 = getDateStr(d, -1);
					d2 = getDateStr(d, +5);
					break;
				case 3: //��
					d1 = getDateStr(d, -2);
					d2 = getDateStr(d, +4);
					break;
				case 4: //��
					d1 = getDateStr(d, -3);
					d2 = getDateStr(d, +3);
					break;
				case 5: //��
					d1 = getDateStr(d, -4);
					d2 = getDateStr(d, +2);
					break;
				case 6: //��
					d1 = getDateStr(d, -5);
					d2 = getDateStr(d, +1);
					break;
			}
			if (d1 && d2) { $("#freeHerosPeriod").html(d1 + "-" + d2) }
		}
		// �õ�ǰ������ʱ�����ó�����1 - ������
		getServerTime(freeHeroDayFill);
	};

	util.setKV = function () {
		var $wrapper = $(".wrapper");
		if (!$wrapper[0]) { return }
		$.getScript("Info_new_15191.js"/*tpa=https://game.qq.com/time/qqadv/Info_new_15191.js*/, function () {
			var kvPos = "pos16040";
			if (!oDaTaNew15191 || !oDaTaNew15191[kvPos]) return
			var kvImg = "//game.gtimg.cn/upload/adw/" + oDaTaNew15191[kvPos][2],
				kvLink = oDaTaNew15191[kvPos][1];
			$(".wrapper").css("background-image", 'url(' + kvImg + ')');
			$("#kvLink").attr("url", kvLink);
			// console.log($(".wrapper").css("background-image"))
		})
	};

	util.setKVLink = function () {
		function setLink () {
			var link = $(".kv-bg .kv_link").attr("href");
			if (link) {
				$("#header .kv-link").attr("href", link)
			} else {
				$("#header .kv-link").hide();
			}
		}
		$.getScript("index.js"/*tpa=https://pvp.qq.com/webplat/info/news_version3/15592/29030/29082/38446/m11738/index.js*/, function () {
			$(".wrapper").css("background-image", 'url(' + newsIndexData[0].sInfoImageAddr + ')');
		})
		setTimeout(setLink, 500);
	};


	init = function () {
		function n () {
			util.addHeaderHTML();
			util.headerFunc();

			//����PC����SEOͳ�����
			fn.jsLoader("pvppc.js"/*tpa=https://game.gtimg.cn/images/yxzj/web201706/js/pvppc.js*/);

			// util.addFooterHTML();
			// util.footerFunc();
			// util.setKV();
		}
		function nJS () {
			fn.jsLoader("logic.js"/*tpa=https://pvp.qq.com/web201605/js/logic.js*/, function () {
				n()
			})
		}
		var libFile = (window.milo) ? "" : "milo.js"/*tpa=https://game.gtimg.cn/images/js/milo/milo.js*/
		libFile ? fn.jsLoader(libFile, nJS()) : nJS();
	};

	return {
		init: init
	}
})()
pvpHeader.init();
