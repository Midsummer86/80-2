/**
 * @author cathzhang 
 * @version 0.1.0.0 
 * @date 2011-05-12 
 * @demo http://gameact.qq.com/milo/core/base.html
 * @class milo.base  
 * <p>
 * ��������Ҫ������namespace��extend��ط�����is�ж϶���ϵ��<br/>
 * ���������з������󶨵�window�����У���ֱ�ӶԷ��������е��á�<br/>
 * </p>
 * <p>
 * Example code:
 * <pre><code>
var a;
console.log(isUndefined(a));    //true
var b= new Array(1,2);
console.log(isUndefined(b));    //false
console.log(isUndefined(b[4])); //true
 *</code></pre>
 * </p>
 * <p>
 * �������ࣺ
 * <pre><code>
var cal1 = cloneClass(Calendar);
var cal2 = cloneClass(Calendar);
 * </code></pre>

 * </p> 
 --------
* @author marsboyding
* 1 ����isSafeUrl����
* 2 �����첽��¼̬��ز�������
 */
/**
 * ���������ռ�
 * @param {string} �ռ����ƣ��ɶ�� 
 * @return {object} ����
 */	

//��־�Ƿ�ǿ��ʹ��bundle�汾
//�Ҷ��ڼ䣬��ʹ��bundle�汾
window.useBundleVersion=false;

if(location.href.indexOf('useBundleVersion=1')>-1){
	window.useBundleVersion=true;//����ȡurl����
}else if(location.href.indexOf('useBundleVersion=0')>-1){//����ȡurl����
	window.useBundleVersion = false;
}else if('undefined' !== typeof window.useBundleVersion){//��ȡȫ�ֱ���
	window.useBundleVersion=!!window.useBundleVersion;
}else{
	window.useBundleVersion=true;//Ĭ�Ͽ���
}

/*bundle-file-useBundleVersion*/

var _defineMethodName=(window.useBundleVersion?'defineconflict':'define');
  
namespace = function(){
    var argus = arguments;
    for(var i = 0; i < argus.length; i++){
        var objs = argus[i].split(".");
		var obj = window;
        for(var j = 0; j < objs.length; j++){
            obj[objs[j]] = obj[objs[j]] || {};
            obj = obj[objs[j]];
        }
    }
    return obj;
};

namespace("https://game.gtimg.cn/images/js/milo/milo.base");

(function(){
	/**
	 * Ϊ���������չ���Ժͷ���
	 * @param {object} object ����
	 * @return {bool} ��/��
	 */	 
	milo.base.extend = function(destination, source) {
		if (destination == null) {
			destination = source
		}
		else {
			for (var property in source){		
				if ( getParamType(source[property]).toLowerCase() === "object" && 
					getParamType(destination[property]).toLowerCase() === "object" )
						extend(destination[property], source[property])
				else
					destination[property] = source[property];
			}
		}
		return destination;
	}
	
	milo.base.extendLess = function(destination, source) {
		var newopt = source;
		for (var i in destination) {
			if (isObject(source) && typeof(source[i]) != 'undefined') {
				destination[i] = newopt[i]
			}
		}
		return destination
	}
	
	/**
	 * ��ʽ�̳���
	 * @param {object} subClass ����
	 * @param {object} superClass ������
	 * @return {undefined} 
	 */	
	milo.base.extendClass = function(subClass,superClass){
		var F = function(){};
		F.prototype = superClass.prototype;
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		subClass.superclass = superClass.prototype;
		if (superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass
		}
	}
	
	/**
	 * ԭ�ͼ̳���
	 * @param {object} object ����
	 * @return {object} ���ɵ�����
	 */	 
	milo.base.cloneClass = function(object){		
		if(!isObject(object)) return object;
		if(object == null) return object;
		var F = new Object();
		for(var i in object)
			F[i] = cloneClass(object[i]);
		return F; 		
	}
	/**
	 * ��������
	 * @param {function,context} object
	 * @return {object}
	 */	 
	milo.base.bind = function(fn,context){		
		 return function(){
			 return fn.apply(context,arguments);
		 };		
	}

	milo.base.extend( milo.base, {
		/**
		 * �ж϶����Ƿ���
		 * ��ʵֻ�Զ����е�Ԫ���ж���Ч�����Ǵ��������˷������޷����ã���Ҫ�����try
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isUndefined : function(o){ 
    		 	return o === undefined && typeof o == "undefined";
    	},
		/**
		 * �ж϶����Ƿ�����
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isArray : function(obj) {
			return getParamType(obj).toLowerCase() === "array";
		},		
		/**
		 * �ж϶����Ƿ���
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isFunction : function(obj){
			return getParamType(obj).toLowerCase() === "function";
		},		
		/**
		 * �ж϶����Ƿ����
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isObject : function(obj) {
			return getParamType(obj).toLowerCase() === "object";
		},
		/**
		 * �ж϶����Ƿ���ֵ
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isNumber : function(obj) {
			return getParamType(obj).toLowerCase() === "number";
		},
		/**
		 * �ж϶����Ƿ��ַ���
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isString : function(obj) {
			return getParamType(obj).toLowerCase() === "string";
		},
		/**
		 * �ж��Ƿ񲼶�ֵ
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isBoolean : function(obj) {
			return getParamType(obj).toLowerCase() === "boolean";
		},
		/**
		 * �ж϶����Ƿ�����
		 * @param {object} object ����
		 * @return {bool} ��/��
		 */
		isDate : function(obj){
			return getParamType(obj).toLowerCase() === "date";
		},
		
		/**
		 * �ж϶����Ƿ�DOMԪ��
		 * @param {object} obj DOM����
		 * @return {bool} ��/��
		 */
		isDom : function(obj){
    		try{
    			return obj && typeof obj === "object" && !isUndefined(obj.nodeType) && obj.nodeType==1 && !isUndefined(obj.nodeName) && typeof obj.nodeName == "string";
    		}
    		catch(e){
    			//console.log(e)
    			return false;
    		}
    	},
    	
		/**
		 * ��ȡDOM�����ֵ
		 * @param {object} obj DOM����
		 * @return {string} ȡvalue��innerHTML
		 */
    	getDomVal : function(obj){
    		return obj.value || obj.innerHTML;
    	},
		/**
		 * ��������
		 * @param {serial,function} �������󼯺�
		 * @return {undefined}
		 */
    	forEach : function(haystack, callback) {
			var i = 0,
				length = haystack.length,
				name;

			if (length !== undefined) {
				for (; i < length;) {
					if (callback.call(haystack[i], i, haystack[i++]) === false) {
						break;
					}
				}
			} else {
				for (name in haystack) {
					callback.call(haystack[name], name, haystack[name]);
				}
			}
		},
    	/**
		 * ��ȡdom����
		 * @param {string|dom} dom��id�����k
		 * @return {dom} 
		 */
		g : function(obj){
			return (typeof obj=='object')?obj:document.getElementById(obj);
		}
	});
	
	/**
	 * ��ȡ��������
	 * @private
	 * @param {object} object ����
	 * @return {string} ����
	 * ���ж����ͣ�Boolean Number String Function Array Date RegExp Object
	 */	
	function getParamType(obj){
		return obj == null ? String(obj) : 
			Object.prototype.toString.call(obj).replace(/\[object\s+(\w+)\]/i,"$1") || "object";
	}	
})();

milo.base.extend(window, milo.base); 
/**
 * @author cathzhang
 * @version 0.1.0.0
 * @date 2011-11-21
 * @class milo.config
 * ͨ����������
 */

namespace("milo.config");

(function(){
	var config = {
		loaderPath : window.useBundleVersion?(location.protocol+"//ossweb-img.qq.com/images/js/milo_bundle/"):(location.protocol+"//ossweb-img.qq.com/images/js/milo/"),
		version : "20130701",
		expires : 30000
	}
	extend(milo.config, config);
})();
/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-05-12  
 * @class milo.loader
 * �������js/css�Ļ���ģ��<br/>
 * ���������з������󶨵�window�����У���ֱ�ӶԷ��������е��á�<br/>
 * modified by cathzhang on 2011-08-11 <br/>
 * modified content �Ż���loadscript����ʹ֮�ɱ���������<br/>
 * ajax����������δ������ݲ�����<br/>
 * includer�����parent��dep�������ǿ���̫˳�ۣ�modified on 2011-10-10 �����հ���<br/>
 * modified by cathzhang on 2011-10-11 <br/>
 * modified content ����ģ�黯���÷��� <br/> 
 * <p>
 * ����person��:
 * <pre><code>
need(["person"], function(person){
	alert("name:" + person.name);
});
 *</code></pre>
 * </p>
 * <p>
 * person��Ķ��壺(ֱ�ӷ�����������)
 * <pre><code>
define({
	name : 'angel',
	age : 1000
});
 * </code></pre>
 * </p>
 * <p>
 * person��Ķ�������д����
 * <pre><code>
define('person',[], function(){
	return {
		name : 'angel',
		age : 1000
	}
});
 * </code></pre>
 * </p>
 * <p>
 * ����ģ������������ʱ��
 * <pre><code>
define(["animal"],function(animal) {
        return {
			paw : animal.paw,
			play : function() {
				animal.play();
                return "miao";
            },
            eat: function() {
                console.log("fish");
            }
        }
    }
);

TODO:
//	var $ = require('lib/jquery');
//	var LOG = require('./log');
milo�ļ��ؿ��Կ����������
��һ�е��ÿ��url���ڶ��е��õ�ǰ�ű�/ҳ������url


 * </code></pre>
 * </p>
 * <p>
 * ��ģ���·���ᶨ�嵽��<b>http://ossweb-img.qq.com/images/js/milo/biz</b>
 * </p>
 * @demo http://gameact.qq.com/milo/core/load.html
 */
 
 
namespace("milo.loader");

(function(loader){	
	var __loading = null,
		loaded = {}, //�Ƿ�����
		loading = {}, //��������  ����ǰ�ͽ������Դ���ͬʱ������󣬵��˴�д�ˣ��ͶԲ�סloaded�ˣ����ع�
		queue = [],  //define��deps���� 
		modulemap = {};//���ض���	
		charset = "gb2312";
	loader.set = function(obj){
		charset = obj.charset;		
	}
	/**
	 * ���ض��󷽷� ��Ӧģ������define�������壬���򷵻����޷�ʹ��
	 * @param {array} modules ģ������ 
	 * @param {function} callback �ص� �ص������еĲ���Ϊ����ģ��ķ���
	 * @return {undefined} undefined 
	 */
	loader.need = function(modules,callback){
		//�������������жϣ��ɻص�ʱ�Զ���Ӧ�������undefined����ȱ���޷�ʹ��
		//**��callback����function�򲻴����򲻽��лص�
		//**modulesֻ�������жϡ�
		if (!isArray(modules) ) { 
			modules = new Array(modules)
        } 
		
		var mc = moduleContainer("", modules, callback);
		start(mc);
		//**�����Ƿ������м���ɲ㣬������ͨ���Լ�����ֵ��
		//**��һ�ڿ�����չ����������return�õ�һ��������ֱ��ʹ�ö���ķ�����talk��
		//**ȷʵ����Ҫ��var myobj = need("....");��������ʽ
		return undefined;
	}
	
	/**
	 * ģ�鶨�巽��
	 * @param {string} name ���ض���
	 * @param {array} modules ���ض���
	 * @param {function} callback ���ض���
	 * @return {undefined} undefined 
	 */
	loader[_defineMethodName] = function(name,deps,callback){
		//��name����ʱ���ļ���ȡname��urlcb�ص��д���
		//��deps����[]		
		if (!isString(name)){
			callback = deps;
			deps = name;			
			name = null;			
		}
		
		if (!isArray(deps)){
			callback = deps;
			deps = [];
		}	

		//**callback��function Ϊobjectʱ��ֱ��Ϊname����object��cb�ص��У�
		queue.push([name, deps, callback]);
		return undefined;
	}
	
	//jquery֧��
	loader[_defineMethodName].amd = {
        //multiversion: true,
        //plugins: true,
        jQuery: true
    };
	
	/**
	 * �����ļ�����(����ļ�)
	 * �ʺϽ��п�������
	 * @public
	 * @param {array} filepaths ��Ҫ���ؽű�
	 * @param {function} callback �ص������д���һ�������������Ƿ�ɹ���
	 * @return {undefined} ��
	 */
	loader.include = function(filepaths, callback){
		//refactoring
		//filepaths && deps����������Ҫ�����ж�string��ʽ����Ӧ����
		var files = new Array();
		files = files.concat(filepaths);
		if (!isFunction(callback)) {callback = function(){}}
		var ic = includerContainer(files, callback);
		start(ic);
	}
	
	/**
	 * ���ؽű�������������һ�ļ���
	 * @param {string} url ·�� url·�������κ���֤
	 * @param {function} callback �ص�����  �������������Ƿ���سɹ�
	 * @return {undefined} undefined 
	 */
	loader.loadScript = function(url, callback){
		if (!isFunction(callback)) callback = function(){};
		loadScript(url, callback);
	}


	/**
	 * ����CSS������ʽ 
	 * @param {string} url ·�� url����http��ͷ����ģ������ͬ�������path��css���粻��css��β���������
	 * @param {function} callback �ص�����  �������������Ƿ���سɹ�
	 * @return {undefined} undefined 
	 */
	loader.loadCSS = function(url, callback){
		if (url.search(/^(http:|https:|)\/\//i) == -1){
			url = milo.config.loaderPath + url.replace(/\./g, "/") + ".css"
					 + "?" + milo.config.version; 
		}
		var isCSS = /\.css(\?|$)/i.test(url);		
		if (!isFunction(callback)) callback = function(){};
		if (isCSS & !loaded[url]) {
			loadCSS(url, callback);
			loaded[url] = true;
		}
	}
	
	/**
	 * ���ݼ�����
	 * @private
	 * @param {string} name ��������
	 * @param {array} modules ����ģ�����
	 * @param {function} callback �ص�����
	 * @return {object} object 
	 * ÿһ���������Ҫ���ص��ļ�������һ��������
	 */
	function moduleContainer(name, modules, callback){	
		var needown = 0,
			hasdown = 0,
			hasmaped = 0,
			need = {};
		for(var i=0 ; i < modules.length; i++){
			var url = getModulePath(modules[i]);
			needown ++;
			modules[i] = modules[i].replace(/\//g, ".");
			//�����ع���ģ����д�������������
			//��������maped������ɻص�ͳһ����			
			if (loaded[modules[i]] || loading[modules[i]]) {
				hasdown ++;
				continue;
			}
			need[modules[i]] = url;			
		}

		return {
			name : name, //ģ����
			modules : modules, //����ģ����
			need : need,   //������������(����load����)
			res : new Array(), //���������� �����
			//���ڶ����ʱ�䴦����Ҫ����
			expires : (modules.length) * milo.config.expires, //����ʱ��
			callback : callback, //ģ�������ɺ�Ļص�
			needown : needown,  //��Ҫ������
			hasdown : hasdown,	//��������
			hasmaped : hasmaped, //�ѳɹ�������

			/**
			 * ���ļ����سɹ���ص�
			 * @private
			 * @param {bool} ret �������
			 * @param {string} name ģ������
			 * @return {undefined} undefined 
			 * ��ȡ�ļ��ڵ�define���󣬴�����mc
			 */
			loadUrlCallback : function(ret, name){
				//�����Ƿ�ɹ����������������������Ѵ���
				this.hasdown ++;	
				if(ret){					
					loaded[name] = true;
				 	while (1){
						var deps = queue.splice(0,1).pop();
						if (deps==null) {
							modulemap[name] = ret;
							break;
						}
						//**��deps������name���ֲ�һ��ʱ��������ô��������ô����
						if (deps[0] 
							&& deps[0].toLowerCase() != name.substr(name.lastIndexOf(".")+1).toLowerCase()
							&& deps[0].toLowerCase().indexOf(name.substr(name.lastIndexOf(".")+1).toLowerCase()) <0 
							&& name.toLowerCase().indexOf(deps[0].toLowerCase()) <0){
						}
						else{
							deps[0] = name;
							//ÿ�½�һ��deps����					
							var mc = moduleContainer.apply(null,deps);
							start(mc);
							break;
						}
					}							
				}
				else{
					//ʧ����ǰ������	
					//this.res[name] = "undefined"; 	
					modulemap[name] = "undefined"; 	
				}
			},		
			
			/**
			 * mc�����ļ����سɹ���ص�
			 * @private
			 * @param {bool} ret �������
			 * @param {string} name ģ������
			 * @return {undefined} undefined 
			 * �ȴ�maped�ɹ���
			 */
			loadInluderCallback : function(ret){		
				if (!ret){
					//**��ʧ���Ƿ����ǰ������
					//ʧ�ܴ���	
					//��ģ����δ����ģ����Ϊundefined
					//����maped����					
				}				
				this.checkMaped();
			},
			
			/**
			 * mc�����ļ����سɹ���ص�
			 * @private
			 * @param {bool} ret �������
			 * @param {string} name ģ������
			 * @return {undefined} undefined 
			 * �ȴ�maped�ɹ���
			 */
			completeLoad : function(maped){	
				var ret = [];
				//**ȡcontent��deps��Ӧ��modulemap�������
				for(var i=0 ; i < this.modules.length; i++){
					ret.push(this.res[this.modules[i]]);
				}
				
				if (!isFunction(this.callback) && !isObject(this.callback)) return false;
				if (this.name == ""){
					this.callback.apply(null,ret);
				}else{	
					isObject(this.callback) 
					? modulemap[this.name] = this.callback
					: modulemap[this.name] = this.callback.apply(null,ret);
				}	
			},
			
			/**
			 * ����Ƿ�����maped�Ķ���
			 * @private
			 * @return {undefined} undefined 
			 * ���޶�ʱ���ڼ��modulemap
			 */
			checkMaped : function(){
				//��modulemap����maped������Ϊres��ӡ�
				for(var i=0 ; i < this.modules.length; i++){
					if (isUndefined(this.res[this.modules[i]]) 
					  && !isUndefined(modulemap[this.modules[i]])
					  ){
						this.res[this.modules[i]] = modulemap[this.modules[i]];
						this.hasmaped ++ ;
					}
				}
				//�������
				if (this.hasmaped == this.needown){
					this.completeLoad.apply(this, [true]);
					return;
				}
				
				//���س�ʱ
				if (this.hasmaped < this.needown && this.expires<=0){
					for(var i=0 ; i < this.modules.length; i++){
						if (!isObject(modulemap[this.modules[i]])){
							this.res[this.modules[i]] = "undefined";
							this.hasmaped ++ ;
						}
					}
					this.completeLoad.apply(this, [false]);
					return;
				}
								
				//��������
				if (this.hasmaped < this.needown  && this.expires>0){			
					this.expires = this.expires - 50;
					var mc = this
					setTimeout(
					function (){
						mc.checkMaped();
					},50);
				}			
			}
		};
	}
	
	/**
	 * load���ؿ�ʼ
	 * @private
	 * @param {object} mc ���ض���
	 * @return {undefined} undefined 
	 */
	function start(mc){	
		var need = mc.need;

		//for(var key=0 ; key < need.length; key++){
	    for(var key in need){
			load(need[key],key,mc);				
		}
		//������״̬
		checkloaded(mc);	
	}
	
	/**
	 * �����ļ�
	 * @private
	 * @param {object} mc ���ض���
	 * @return {undefined} undefined 
	 */
	function load(url, name, mc){
		var isCSS = /\.css(\?|$)/i.test(url);
		loading[name] = true;
		isCSS ? loadCSS(url, function(ret){
				mc.loadUrlCallback.call(mc, [ret, name]);
			}) 
		  	: loadScript(url, function(ret){
				mc.loadUrlCallback.apply(mc, [ret, name]);
			}) ;		
	}
	
	/**
	 * ���������
	 * @private
	 * @param {object} mc ���ض���
	 * @return {undefined} undefined 
	 */
	function checkloaded(mc){
		//�������
		if (mc.hasdown == mc.needown){
			mc.loadInluderCallback.apply(mc, [true]);
			return;
		}
		
		//���س�ʱ
		if (mc.hasdown < mc.needown && mc.expires<=0){
			//**���õ�expires,�Ե����ļ�ʧ�ܵĿ�����ǰ�ж�
			mc.loadInluderCallback.apply(mc, [false]);
			return;
		}
		
		//��������
		if (mc.hasdown < mc.needown  && mc.expires>0){			
			mc.expires = mc.expires - 50;
			setTimeout(
			function (){
				checkloaded(mc);
			},50);
		}
	}
	
	/**
	 * ��ȡ�ű�·��
	 * ��http://��ͷ�ģ�Ϊfullpath
	 * �����ľ���Ϊ���·��
	 * ���·����ģ�鷽ʽ������
	 * @private
	 * @param {string} filepath ·��
	 * @return {string} fullpath ȫ��·�� 
	 */
	function getModulePath(filepath){
		if (filepath.search(/^http:|https:\/\//i) == -1){
			//var loc = window.location.href,    //extend
			//	path = loc.substr(0,loc.lastIndexOf("/"));
			//filepath = filepath.replace(/\./g, "/");
			filepath = milo.config.loaderPath + filepath.replace(/\./g, "/") + ".js"
					 + "?" + milo.config.version;
		}
		return filepath;
	}
	
	/**
	 * ��ȡģ������
	 * ��http://��ͷ�ģ�Ϊfullpath
	 * �����ľ���Ϊ���·��
	 * ���·����ģ�鷽ʽ������
	 * @private
	 * @param {string} filepath ·��
	 * @return {string} fullpath ȫ��·�� 
	 */
	function getModuleName(){
		return null;
	}
	

	/**
	 * includer���ݼ�����
	 * @private
	 * @param {string} name ��������
	 * @param {array} files ����ģ�����
	 * @param {function} callback �ص�����
	 * @return {object} object 
	 */
	function includerContainer(files, callback){	
		var needown = 0,
			hasdown = 0,
			need = {};

		for(var i=0 ; i < files.length; i++){
			var url = getModulePath(files[i]);			
			needown ++;
			if (loaded[files[i]]) {
				hasdown ++;
				break;
			}
			need[files[i]] = url;			
		}

		return {
			files : files,
			need : need,   //������������(����load����)
			res : new Array(), //���������� �����
			expires : needown * milo.config.expires, //����ʱ��
			callback : callback, //ģ�������ɺ�Ļص�
			needown : needown,  //��Ҫ������
			hasdown : hasdown,	//��������

			/**
			 * ���ļ����سɹ���ص�
			 * @private
			 * @param {bool} ret �������
			 * @param {string} name ģ������
			 * @return {undefined} undefined 
			 * ��ȡ�ļ��ڵ�define���󣬴�����mc
			 */
			loadUrlCallback : function(ret, name){
				if(ret)	this.hasdown ++;
				loaded[name] = ret;				
			},		
			
			/**
			 * �����ļ����سɹ���ص�
			 * @private
			 */
			loadInluderCallback : function(ret){
				var res = [];
				for(var i=0 ; i < this.files.length; i++){
					res.push(loaded[this.files[i]]);
				}
				this.callback.apply(null,res);
			}
		};
	}
	
	/**
	 * ���ؽű���������
	 * @private
	 * @param {string} filepath ·��
	 * @param {function} callback �ص�����
	 * @return {undefined} undefined 
	 */
	function loadScript(url, callback){
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");			
		script.type = "text/javascript";
		script.charset = charset;
		script.src = url;
		var timeout = setTimeout(
			function (){
				head.removeChild(script);
				callback.call(this,false);	
			},
			milo.config.expires
		);
		
		onload(
			script,
			function(Ins){
				head.removeChild(script);
				clearTimeout(timeout);
				callback(true);
			}
		);
		head.appendChild(script);
		return true;
	}



	/**
	 * ������ʽ��������
	 * �ݲ�������ص����������Ϊ���سɹ���
	 * @private
	 */
	function loadCSS(url, callback){
		var head = document.getElementsByTagName("head")[0];
		var link = head.appendChild(
			document.createElement("link")
		);
		link.href = url;
	    link.rel = 'stylesheet';
		callback.call(this,true);
	}
	
	/**
	 * ���ؽű���ɺ�Ĵ���
	 * @private
	 * @param {dom} node script DOM
	 * @param {function} callback �ص�����
	 * @return {undefined} undefined 
	 */
	function onload(node, callback){		
		var isImpOnLoad = ('onload' in node) ? true :
			(function(){
				node.setAttribute('onload','');
				return typeof node.onload == 'function' ; 
			})();
	
		if(document.addEventListener){
			node.addEventListener('load', function(){
				callback.call(this,node);
			}, false);	
		}
		else if (!isImpOnLoad){
			node.attachEvent ('onreadystatechange', function(){
				var rs = node.readyState.toLowerCase();
				if (rs === 'loaded' || rs === 'complete') {
					node.detachEvent('onreadystatechange');
					callback.call(this,node.innerHTML);
				}
			});
		}
		else{
			//maybe someother browser
		}
	}
	
})(milo.loader);

extend(window, milo.loader);
/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-08-01
 * @class milo.dom  
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * modified:2011-12-27 ����tt,chrome����������ж�
 * modified:2011-12-27 ����getX,getY����
 * <p>
 * Example:
 * <pre><code>
console.log(milo.browser.version) //1.9.2.23
console.log(milo.browser.msie)    //false
 *</code></pre>
 * </p>
 */
 
namespace("https://game.gtimg.cn/images/js/milo/milo.dom");

(function(){
var dom = milo.dom;

var userAgent = navigator.userAgent.toLowerCase();

extend( dom, {
	/**
	 * �ж����������
	 */
	browser : {
		/**
		 * ��ȡ�汾��
		 */
		version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
		/**
		 * �Ƿ�webkit�����
		 */
		webkit: /webkit/.test( userAgent ),
		/**
		 * �Ƿ�opera�����
		 */
		opera: /opera/.test( userAgent ),
		/**
		 * �Ƿ�IE�����
		 */
		msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
		/**
		 * �Ƿ�mozilla�����
		 */
		mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),
		/**
		 * �Ƿ�TT�����
		 */
		tt: /tencenttraveler/.test( userAgent ),
		/**
		 * �Ƿ�chrome�����
		 */
		chrome: /chrome/.test( userAgent ),
		/**
		 * �Ƿ�firefox�����
		 */
		firefox: /firefox/.test( userAgent ),
		/**
		 * �Ƿ�safari�����
		 */
		safari: /safari/.test( userAgent ),
		/**
		 * �Ƿ�gecko�����
		 */
		gecko: /gecko/.test( userAgent ),
		/**
		 * �Ƿ�IE6
		 */
		ie6: this.msie && this.version.substr(0,1) == '6'
	
	},
	
	/**
	 * ��ȡdom����
	 * @param {string|dom} dom��id�����
	 * @return {dom} 
	 */
	g : function(obj){
		return (typeof obj=='object')?obj:document.getElementById(obj);
	},
	
	/**
	 * �ж�DOM�����Ƿ������ʽ������
	 * @param {dom} element dom����
	 * @param {string} className ��ʽ����
	 * @return {bool} 
	 */	 
	hasClassName : function(element, className) {
        var elementClassName = element.className;
        return (elementClassName.length > 0 && (elementClassName == className ||
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
    },
	
	/**
	 * ΪDOM����������ʽ������
	 * @param {dom} element dom����
	 * @param {string} className ��ʽ����
	 * @return {dom} 
	 */
    addClassName : function(element, className) {
        if (!milo.hasClassName(element, className))
            element.className += (element.className ? ' ' : '') + className;
        return element;
    },
	
	/**
	 * ΪDOM����ɾ����ʽ������
	 * @param {dom} element dom����
	 * @param {string} className ��ʽ����
	 * @return {dom} 
	 */
    removeClassName : function(element, className) {
        element.className = milo.trim(element.className.replace(
			new RegExp("(^|\\s+)" + className + "(\\s+|$)") , ' '));
        return element;	
    },
	
	/**
	 * Ϊdom����������ʽ
	 * @param {dom} ele dom����
	 * @param {object} styles ��ʽ���� like:{width:100,height:100}
	 * @return undefined
	 */
	setStyle: function(ele, styles){
		for (var i in styles) {
			ele.style[i] = styles[i];
		}
	},
	
	/**
	 * Ϊdom�����ȡѡ�����Ե���ʽ
	 * @param {dom} ele dom����
	 * @param {string} prop ��������
	 * @return ������ʽ
	 */
	getStyle: function(el, prop){
		var viewCSS = isFunction(document.defaultView) //(typeof document.defaultView == 'function') 
			? document.defaultView() 
			: document.defaultView;
		if (viewCSS && viewCSS.getComputedStyle) {
			var s = viewCSS.getComputedStyle(el, null);
			return s && s.getPropertyValue(prop);
		}
		return (el.currentStyle && (el.currentStyle[prop] || null) || null);
	},
	
	/**
	 * ��ȡҳ�����߶�
	 * @return ������ʽ
	 */
	getMaxH: function(){
		return (this.getPageHeight() > this.getWinHeight() ? this.getPageHeight() : this.getWinHeight())
	},
	
	/**
	 * ��ȡҳ�������
	 * @return ������ʽ
	 */
	getMaxW: function(){
		return (this.getPageWidth() > this.getWinWidth() ? this.getPageWidth() : this.getWinWidth())
	},
	
	/**
	 * ��ҳ���ݸ߶�
	 * @return {int} ��ҳ���ݸ߶�
	 */
	getPageHeight: function(){
		var h = (window.innerHeight && window.scrollMaxY) ? (window.innerHeight + window.scrollMaxY) : (document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight);
		return h > document.documentElement.scrollHeight ? h : document.documentElement.scrollHeight
	},
	
	/**
	 * ��ҳ���ݿ��
	 * @return {int} ��ҳ���ݿ��
	 */
	getPageWidth: function(){
		return (window.innerWidth && window.scrollMaxX) ? (window.innerWidth + window.scrollMaxX) : (document.body.scrollWidth > document.body.offsetWidth ? document.body.scrollWidth : document.body.offsetWidth);
	},
	
	/**
	 * �������������߶�
	 * @return {int} ����������߶�
	 */
	getWinHeight: function(){
		return (window.innerHeight) ? window.innerHeight : 
		(document.documentElement && document.documentElement.clientHeight) 
		? document.documentElement.clientHeight 
		: document.body.offsetHeight
	},
	
	/**
	 * ���������������
	 * @return {int} ������������
	 */
	getWinWidth: function(){
		return (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth
	},
	
	/**
	 * ����dom͸����
	 * @param {dom} ele dom����
	 * @param {int} level ͸����ֵ��0-100��������
	 * @return {undefined} 
	 */	
	setOpacity: function(ele, level){
		//level = Math.min(1,Math.max(level,0));
		if(this.browser.msie && (!document.documentMode || document.documentMode < 9)){
			ele.style.filter = 'Alpha(opacity=' + level + ')'
		}else{
			ele.style.opacity = level / 100
		 }
    },
	/**
	 * ��ȡҳ���ж���ľ���Xλ��
	 * @param {dom} e dom����
	 * @return {int} 
	 */	
	getX: function(e) {
		var t = e.offsetLeft;
		while (e = e.offsetParent) t += e.offsetLeft;
		return t
	},
	/**
	 * ��ȡҳ���ж���ľ���Yλ��
	 * @param {dom} e dom����
	 * @return {int} 
	 */	
	getY: function(e) {
		var t = e.offsetTop;
		while (e = e.offsetParent) t += e.offsetTop;
		return t
	},
	
	/**
	 * ��ȡurl�еĲ���ֵ
	 * @param {string} pa ��������
	 * @return {string} ����ֵ
	 */	
	request: function(pa){ 
		var url = window.location.href.replace(/#+.*$/, ''),
			params = url.substring(url.indexOf("?")+1,url.length).split("&"),
			param = {} ;
		for (var i=0; i<params.length; i++){  
			var pos = params[i].indexOf('='),//����name=value  
				key = params[i].substring(0,pos),
				val = params[i].substring(pos+1);//��ȡvalue 
			param[key] = val;
		} 
		return (typeof(param[pa])=="undefined") ? "" : param[pa];
	} 
})
})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-07-21
 * @demo http://gameact.qq.com/milo/core/bases.html
 * @class milo.array 
 * ����������������ԭ��oss_base.js��Ϊarray������ӵĲ���ԭ�ͷ�����<br/>
 * �޸�������£�<br/>
 * ���ӷ���getLength,getArrayKey,hasValue,filter,unique<br/>
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * <p>
 * Example:
 * <pre><code>
var a=['1','2','3','4'] ;
var b=['1','2','5','23432',2] ;
alert(milo.filter(a,b))  //["3","4"] 
var c = milo.unique(a,b)
alert(c);				 //���["3","4",'5','23432'] 
 *</code></pre>
 * </p>
 
 */
 
namespace("milo.array");

(function(){
var array = milo.array;
extend( array, {
	/**
	 * �ж��������ݸ���
	 * @param {array} array ����
	 * @return {int} ����
	 */
	getLength : function(arr){
		var l = 0;
		for(var key in arr){
			l ++;
		}	
		return l;
	},
	/**
	 * ��������
	 * @param {array} array ����
	 * @return {array} ���������
	 */
	clone : function(arr){
		var a = [];
		for(var i=0; i<arr.length; ++i) {
			a.push(arr[i]);
		}
		return a;
	},
	/**
	 * �ж��������Ƿ�������ֵ
	 * @param {array} arr �������
	 * @param {object} value ����
	 * @return {bool} ��/��
	 */
	hasValue : function(arr, value){
		var find = false;
		if (isArray(arr) || isObject(arr))
			for(var key in arr){
				if (arr[key] == value) find = true;
			}
		return find;
	},
	/**
	 * ����ֵ��������е�key
	 * @param {array} arr �������
	 * @param {object} value ����
	 * @return {string} key
	 */
	getArrayKey : function(arr, value){
		var findKey = -1;
		if (isArray(arr) || isObject(arr))
			for(var key in arr){
				if (arr[key] == value) findKey = key;
			}
		return findKey;
	},
	/**
	 * ����a1������a2û�е�ֵ
	 * @param {array} a1 �������
	 * @param {array} a2 �������
	 * @return {array} key
	 */
	filter : function (a1, a2) {
		var res = [];
		for(var i=0;i<a1.length;i++) {
			if(!milo.hasValue(a2, a1[i]))
				res.push(a1[i]);
		}
		return res;
	},
	/**
	 * ���������ֵ�Ľ���
	 * @param {array} arr ����
	 * @param {array} arr ����
	 * @return {array} key
	 */
	unique : function (a1, a2) {
		return milo.filter(a1,a2).concat(milo.filter(a2,a1))
	} 
});
})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-07-21
 * @class milo.string �ַ�����
 * ����������������ԭ��oss_base.js��Ϊstring������ӵ�ԭ�ͷ���<br/>
 * �޸�������£�<br/>
 * ɾ������replaceAll��ʹ������/g�����ѳ�ȫ��<br/>
 * �޸ķ���replacePairs�����õ�replaceAll������Ϊ��replace���������򷽷�<br/>
 * ɾ������encode������ֱ�ӿ���escape<br/>
 * ɾ������unencode������ֱ�ӿ���unescape<br/>
 * ɾ������toInputValue: ��toHTML����<br/>
 * ɾ������toTextArea: ��toHTML����<br/>
 * ɾ������isEmpty: ���岻���Ƿ���Ҫtrim���ж�length�������Ҫʵ����Ҫ������<br/>
 * ��������isAllNumΪisNumberString<br/>
 * �Ƴ�����isInt��milo.number��<br/>
 * �Ƴ�����isFloat��milo.number��<br/>
 * �Ƴ�����isQQ��milo.number��<br/>
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * <p>
 * Example:
 * <pre><code>
milo.trim(" test ")
 *</code></pre>
 * </p> 
 */
 
namespace("milo.string");

(function(){

var string = milo.string;
extend( string, {
	/**
	 * �����ַ������ֽڳ���<br/>
	 * ������2 Ӣ����1<br/>
	 * @param {string} str �ַ���
	 * @return {int}
	 */
	getByteLength : function(str){
		var bytes=0,i=0;
		for (; i<str.length; ++i,++bytes) {
			if ( str.charCodeAt(i) > 255 ) {
					++bytes;
			}
		}
		return bytes;
	},
	/**
	 * �����ж��ٸ�˫�ֽ��ַ�
	 * @param {string} str �ַ���
	 * @return {int}
	 */
	getDwordNum : function(str){
		return string.getByteLength(str) - str.length;
	},
	/**
	 * �����ж��ٸ������ַ�
	 * @param {string} str �ַ���
	 * @return {int}
	 */
	getChineseNum : function(str){
		return str.length - str.replace(/[\u4e00-\u9fa5]/g,"").length;
	},
	/**
	 * ��ȡ�����ַ���<br/>
	 * ȡiMaxBytes �����һ�������ַ����ֵĵط��滻�ַ�<br/>
	 * @param {string} str �ַ���
	 * @param {int} iMaxBytes �ַ���
	 * @param {string} sSuffix �油�ַ���
	 * @return {string}
	 */
	cutChinese : function(str, iMaxBytes, sSuffix){
		if(isNaN(iMaxBytes)) return str;
		if(string.getByteLength(str)<=iMaxBytes) return str;
		var i=0, bytes=0;
		for (; i<str.length && bytes<iMaxBytes; ++i,++bytes) {
			if ( str.charCodeAt(i) > 255 ) {
					++bytes;
			}
		}
		sSuffix = sSuffix || "";
		return (bytes-iMaxBytes == 1 ? str.substr(0,i-1) : str.substr(0,i) ) + sSuffix;
	},
	/**
	 * ȥ���ַ�����ߵķǿ��ַ�
	 * @param {string} str �ַ���
	 * @return {string}
	 */
	trimLeft : function(str){
		return str.replace(/^\s+/,"");
	},
	/**
	 * ȥ���ַ����ұߵķǿ��ַ�
	 * @param {string} str �ַ���
	 * @return {string}
	 */
	trimRight : function(str){
		return str.replace(/\s+$/,"");
	},
	/**
	 * ȥ���ַ����������ߵķǿ��ַ�
	 * @param {string} str �ַ���
	 * @return {string}
	 */
	trim : function(str){
		return milo.trimRight(milo.trimLeft(str));
	},
	/**
	 * �ɶ��ַ����滻
	 * @param {string} str �ַ���
	 * @param {array} str �ַ���<br/>
	      array�������� [0] �������ݣ�[1] �滻����<br/>
		  array���Գ��ֶ��<br/>
	 * @return {string}
	 */
	replacePairs : function(){
		var str = arguments[0];
		for (var i=1; i<arguments.length; ++i) {
			var re = new RegExp(arguments[i][0], "g"); 
			str = str.replace(re, arguments[i][1]);
		}
		return str;
	},
	/**
	 * �ַ����滻ΪHTML������ʽ
	 * @param {string} str �ַ���
	 * @return {string}
	 */
	toHtml : function(str){
		var CONVERT_ARRAY =
		[
			["&", "&#38;"],
			[" ", "&#32;"],
			["'", "&#39;"], 
			["\"", "&#34;"],
			["/", "&#47;"],
			["<", "&#60;"],
			[">", "&#62;"],
			["\\\\", "&#92;"],
			["\n", "<br />"],
			["\r", ""]
		];
		return milo.replacePairs.apply(this, [str].concat(CONVERT_ARRAY));
	},
	/**
	 * У�������ַ
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isMail : function(str){
		return /^(?:[\w-]+\.?)*[\w-]+@(?:[\w-]+\.)+[\w]{2,3}$/.test(str);    
	},
	/**
	 * У����ͨ�绰��������룺���ԡ�+����ͷ���������⣬�ɺ��С�-��
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isTel : function(str){
		return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(str);
	},
	/**
	 * У���ֻ����룺���������ֿ�ͷ
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isMobile : function(str){
		return /^1[3456789]\d{9}$/.test(str);
	},
	/**
	 * У����������
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isZipCode : function(str){
		return /^(\d){6}$/.test(str);
	},
	/**
	 * �Ƿ����֤����
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isIDCard : function(str){
		var C15ToC18 = function(c15) {
			var cId=c15.substring(0,6)+"19"+c15.substring(6,15);
			var strJiaoYan  =[  "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
			var intQuan =[7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			var intTemp=0;
			for(i = 0; i < cId.length ; i++)
			intTemp +=  cId.substring(i, i + 1)  * intQuan[i];  
			intTemp %= 11;
			cId+=strJiaoYan[intTemp];
			return cId; 
		}
		var Is18IDCard = function(IDNum) {
			var aCity={11:"����",12:"���",13:"�ӱ�",14:"ɽ��",15:"���ɹ�",21:"����",22:"����",23:"������",31:"�Ϻ�",32:"����",33:"�㽭",34:"����",35:"����",36:"����",37:"ɽ��",41:"����",42:"����",43:"����",44:"�㶫",45:"����",46:"����",50:"����",51:"�Ĵ�",52:"����",53:"����",54:"����",61:"����",62:"����",63:"�ຣ",64:"����",65:"�½�",71:"̨��",81:"���",82:"����",91:"����"};
		
			var iSum=0, info="", sID=IDNum;
			if(!/^\d{17}(\d|x)$/i.test(sID)) {
				return false;
			}
			sID=sID.replace(/x$/i,"a");
		
			if(aCity[parseInt(sID.substr(0,2))]==null) {
				return false;
			}
			
			var sBirthday=sID.substr(6,4)+"-"+Number(sID.substr(10,2))+"-"+Number(sID.substr(12,2));
			var d=new Date(sBirthday.replace(/-/g,"/"))
			
			if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return false;
			
			for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sID.charAt(17 - i),11)
			
			if(iSum%11!=1)return false;
			return true;
		}
		
		return str.length==15 ? Is18IDCard(C15ToC18(str)) : Is18IDCard(str);
	},	
	/**
	 * �Ƿ�ȫ��������
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isChinese : function(str){
		return milo.getChineseNum(str)==str.length ? true : false;
	},
	/**
	 * �Ƿ�ȫ����Ӣ��
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isEnglish : function(str){
		return /^[A-Za-z]+$/.test(str);
	},
	/**
	 * �Ƿ����ӵ�ַ
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isURL : function(str){
		return /^(https|http):\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(str);
	},
	/**
	 * �Ƿ������ַ���
	 * @param {string} str �ַ���
	 * @return {bool}
	 */
	isNumberString : function(str){
		return /^\d+$/.test(str);
	}
})
})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-08-01
 * @class milo.cookie  
 * ����������������ԭ��oss_base.js�е�Cookie����<br/>
 * �޸�������£�<br/>
 * ��clear��������sDomain, sPath���������򷽷���Ч��<br/> 
 * <p>
 * Example:
 * <pre><code>
milo.cookie.set("abc","345",3600,"https://game.gtimg.cn/images/js/milo/localhost.qq.com","/",false);
alert("��ǰֵΪ��" + milo.cookie.get("abc") + "\n ��ʼ����\n");//345
milo.cookie.clear("abc","https://game.gtimg.cn/images/js/milo/localhost.qq.com","/")
alert("�����Ϊ��" + milo.cookie.get("abc"));  //null
 *</code></pre>
 * </p>
 */
 
namespace("milo.cookie");

(function(){
var cookie = milo.cookie;
extend( cookie, {
	/**
	 * ����cookie
	 * @param {string} sName cookie��
	 * @param {string} sValue cookieֵ
	 * @param {int} iExpireSec ʧЧʱ�䣨�룩
	 * @param {string} sDomain ������
	 * @param {string} sPath ����·��
	 * @param {bool} bSecure �Ƿ����
	 * @return {void}
	 */
	set : function(sName,sValue,iExpireSec,sDomain,sPath,bSecure){
		if(sName==undefined) {
			return;
		}
		if(sValue==undefined) {
			sValue="";
		}
		var oCookieArray = [sName+"="+escape(sValue)];
		if(!isNaN(iExpireSec)){
			var oDate = new Date();
			oDate.setTime(oDate.getTime()+iExpireSec*1000);
			iExpireSec==0 ? '' : oCookieArray.push("expires=" + oDate.toGMTString()) ;
		}
		if(sDomain!=undefined){
			oCookieArray.push("domain="+sDomain);
		}
		if(sPath!=undefined){
			oCookieArray.push("path="+sPath);
		}
		if(bSecure){
			oCookieArray.push("secure");
		}
		document.cookie=oCookieArray.join("; ");
	},
	/**
	 * ��ȡcookie
	 * @param {string} sName cookie��
	 * @param {string} sValue Ĭ��ֵ
	 * @return {string} cookieֵ
	 */
	get : function(sName,sDefaultValue){
		var sRE = "(?:; |^)" + sName + "=([^;]*);?";
		var oRE = new RegExp(sRE);
		
		if (oRE.test(document.cookie)) {
			return unescape(RegExp["$1"]);
		} else {
			return sDefaultValue||null;
		}
	},
	/**
	 * ��ȡcookie
	 * @param {string} sName cookie��
	 * @param {string} sDomain ������
	 * @param {sPath} sPath ����·��
	 * @return {void} 
	 */
	clear : function(sName, sDomain, sPath){
		var oDate = new Date();
		cookie.set(sName,"", -oDate.getTime()/1000, sDomain, sPath);
	}	
});
})();

/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-07-21
 * @class milo.date
 * ����������������ԭ��oss_base.js��Ϊdate������ӵĲ���ԭ�ͷ���<br/>
 * �޸�������£�<br/>
 * ������toShortDateStringΪtoDateString<br/>
 * ������toShortStringΪtoDateTimeString<br/> 
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * <p>
 * Example:
 * <pre><code>
console.log(milo.toDateString('/')) // 2011/10/21
 *</code></pre>
 * </p>
 */
 
namespace("https://game.gtimg.cn/images/js/milo/milo.date");
(function(){
var date = milo.date;
var _d = new Date();
extend( date, {
	/**
	 * ��ȡ����
	 * @param {string} sep �ָ��� Ĭ��Ϊ-
	 * @return {string} yyyy-mm-dd
	 */
	toDateString : function(nd){	
		var a=[],
			dt = isDate(nd) ? nd : _d;
			m = dt.getMonth()+1,
			d = dt.getDate(),
			sep = arguments[1] ? arguments[1] : (isString(arguments[0]) ? arguments[0] : "-"); 
		a.push(dt.getFullYear());
		a.push( m.toString().length < 2 ? "0" + m : m);
		a.push( d.toString().length < 2 ? "0" + d : d);
		return a.join(sep);
	},
	/**
	 * ��ȡ���ں�ʱ��
	 * @param {string} sep �ָ��� Ĭ��Ϊ-
	 * @return {string} yyyy-mm-dd hh:ii:ss
	 */
	toDateTimeString : function(nd){
	    var dt = isDate(nd) ? nd : _d,
			h = dt.getHours(),
			i = dt.getMinutes(),
			s = dt.getSeconds(),
			a = [];
		a.push(h.toString().length < 2 ? "0" + h : h);
		a.push(i.toString().length < 2 ? "0" + i : i);
		a.push(s.toString().length < 2 ? "0" + s : s);
		return date.toDateString.apply(this,arguments) + " " + a.join(":");
	},
	/**
	 * �Ƿ�����
	 * @param {int} year ���
	 * @return {bool} ��/��
	 */
	isLeapYear : function(year) {
		return (0 == year % 4 && ((year % 100 != 0) || (year % 400 == 0)))
	},
	/**
	 * ��ȡ������ʱ��
	 * @return {date} Date
	 */
	getSeverDateTime : function(){
		var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		xhr.open("HEAD", window.location.href, false);
		xhr.send();	
		var d= new Date(xhr.getResponseHeader("Date"));
		
		
		return d;
	}	
});
})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-07-21
 * @class milo.number 
 * ����������������ԭ��oss_base.js��Ϊstring������ӵĲ���ԭ�ͷ���<br/>
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * <p>
 * Example:
 * <pre><code>
milo.isQQ(12345456)
 *</code></pre>
 * </p> 
 */
 
namespace("milo.number");

(function(){

var number = milo.number;
extend( number, {
	/**
	 * �Ƿ�ĳһ��Χ������
	 * @param {int} n ��ֵ
	 * @param {int} iMin ��Χ��ֵ
	 * @param {int} iMax ��Χ��ֵ
	 * @return {bool} 
	 */
	isInt : function(n, iMin, iMax){
		if(!isFinite(n)) {
			return false;
		}
		if(!/^[+-]?\d+$/.test(n)) {
			return false;   
		}
		if(iMin!=undefined && parseInt(n)<parseInt(iMin)) {
			return false;
		}
		if(iMax!=undefined && parseInt(n)>parseInt(iMax)) {
			return false;
		}    
		return true;
	},
	/**
	 * �Ƿ�ĳһ��Χ������
	 * @param {float} n ��ֵ
	 * @param {float} fMin ��Χ��ֵ
	 * @param {float} fMax ��Χ��ֵ
	 * @return {bool} 
	 */
	isFloat : function(n, fMin, fMax){
		if(!isFinite(n)) {
			return false;
		}
		if(fMin!=undefined && parseFloat(n)<parseFloat(fMin)) {
			return false;
		}
		if(fMax!=undefined && parseFloat(n)>parseFloat(fMax)) {
			return false;
		}
		return true;
	},
	/**
	 * �Ƿ�QQ����
	 * @param {int} qq qq��
	 * @return {bool} 
	 */
	isQQ : function(qq){
		return /^[1-9]{1}\d{4,11}$/.test(qq); 
		// /^[1-9]\d{4,11}$/.test(qq) && parseInt(qq)<=4294967294;   
	},
	/**
	 * ȡ�������
	 * @param {int} n ����
	 * @return {int} 0~n����������
	 */
	randomInt : function(n){
		return Math.floor(Math.random() * n);
	}
});
})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2011-08-01
 * @demo http://gameact.qq.com/milo/core/ready.html
 * @class milo.event 
 * ���������з������󶨵�milo�����У�ͨ����milo.���������е��á�<br/> 
 * <p>
 * Example:
 * <pre><code>
milo.addEvent(g('getString'),'click',function(e){
	alert(isString(g('string').value))
})
 *</code></pre>
 * </p>
 */
 
namespace("milo.event");

(function(){
var event = milo.event;
extend( event, {
	/**
	 * ֹͣ�¼���������
	 * @param {event} e �¼�
	 * @return {dom} 
	 */
	preventDefault : function(e){
		if (e.preventDefault){
			e.preventDefault();
		}
		else{
			e.returnValue = false;
		}
	},
	/**
	 * ��ֹ�¼�ð�ݴ���
	 * @param {event} e �¼�
	 * @return {dom} 
	 */
	stopPropagation : function(e){
		if (e.stopPropagation){
			e.stopPropagation();			
		}
		else{
			e.cancelBubble = true;
		}
	},
	/**
	 * ΪDOM���������¼�
	 * @param {dom} element dom����
	 * @param {string} type �¼�����
	 * @param {function} type �¼�����
	 * @return {undefined} 
	 */
	addEvent : function(el, type, fn){
		if (window.addEventListener){
			el['e'+type+fn] = fn;
			el[type+fn] = function(e){
				var _e = e || window.event,
					_r = el['e'+type+fn](_e);
				if (_r==false) {
					milo.preventDefault(_e);
					milo.stopPropagation(_e);
				}				
			}			
			el.addEventListener(type, el[type+fn], false);	
		}
		else if (window.attachEvent){
			el['e'+type+fn] = fn;
			el[type+fn] = function(e){
				var _r = el['e'+type+fn](window.event);
				if (_r==false) milo.preventDefault(window.event);
			}
			el.attachEvent( 'on'+type, el[type+fn] );
			return;
		}
		else{
			el['on' + type] = fn;
		}
	},	
	/**
	 * ΪDOM�����Ƴ��¼�
	 * @param {dom} element dom����
	 * @param {string} type �¼�����
	 * @param {function} type �¼�����
	 * @return {undefined} 
	 */
	removeEvent : function (_el, _type, _fn){
		//��󵥸��¼�
		var removeSingle=function(el,type,fn){
			if (window.removeEventListener){
				el.removeEventListener(type, el[type+fn], false);
				el[type+fn] = null;	
			}
			else if (window.detachEvent){		
				el.detachEvent( 'on'+type, el[type+fn] );			
				el[type+fn] = null;			
				return;
			}
			else{
				el['on' + type] = null;
			}
		}
		//��Ҫ�������_type���͵��¼�
		if("undefined" == typeof _fn){
			for(var k in _el){
				if(0==k.indexOf(_type) && "function"==typeof _el[k]){
					removeSingle(_el,_type,k.substring(_type.length));
				}
			}
		}else{
			//��󵥸��¼�
			removeSingle(_el,_type,_fn);
		}
		
	},
	isReady : false,
	readyFn : [],
	/**
	 * dom ready�¼�
	 * @param {dom} element dom����
	 * @param {string} type �¼�����
	 * @param {function} type �¼�����
	 * @return {undefined} 
	 */
	ready : function (fn){	
		bindReadyEvent();	
		if ( milo.isReady ){
			fn.call();
		}
		else {
			if (isFunction(fn)){
				milo.readyFn.push(fn);
			}
		}
	}
});

function bindReadyEvent(){
	if(document.readyState === 'complete'){
		return ready();
	}
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", function(){
			document.removeEventListener("DOMContentLoaded", arguments.callee, false);
			ready();
		},false);
		window.addEventListener("load", ready, false);
	}
	else if(document.attachEvent){
		document.attachEvent("onreadystatechange", function(){
			if (document.readyState === "complete"){
				document.detachEvent("onreadystatechange", arguments.callee);
				ready();
			}
		});
		window.attachEvent("onload",ready);
		if(document.documentElement.doScroll && window == window.top){
			if(milo.isReady) return;
			try{
				document.documentElement.doScroll("left");
			}catch(e){
				setTimeout(arguments.callee, 0);
				return;
			}
			ready();
		}
	}
}

function ready(){
	if(!milo.isReady){
		if(!document.body){
			return setTimeout(ready,13);
		}
		milo.isReady = true;
		
		if(milo.readyFn.length >0){
			var i=0,fn;
			while(fn = milo.readyFn[i++])
				fn.call();
			milo.readyFn.length = 0;
		}
			
	}
}

})();/**
 * @author cathzhang
 * @version 0.1.0.0 
 * @date 2012-06-01
 * @class milo.object  
 * ������ͨ�÷���
 */
 
namespace("milo.object");

(function(){

extend( milo.object, {
	/**
	 * ���л�JSON����
	 * ��objectת��Ϊurl�����ַ����������Լ���&�ָ�����a=1&b=2&c=3
	 * ��������Ϊstring �����encodeURIComponent����
	 * ��������Ϊbool ����0����false 1����true
	 * ��������Ϊ�������������еݹ����л�
	 * ��������Ϊfunction �򷵻�function.toString
	 * @param {object} jsonObj json����
	 * @return {string}
	 */
	serialize : function(jsonObj){
		var newJsonObj = null;
		if (typeof(jsonObj) == 'undefined' || typeof(jsonObj) == 'function') 
			newJsonObj = '';
		if (typeof(jsonObj) == 'number') 
			newJsonObj = jsonObj.toString();			
		if (typeof(jsonObj) == 'boolean') 
			newJsonObj = (jsonObj) ? '1' : '0';
		if (typeof(jsonObj) == 'object') {
			if (!jsonObj) newJsonObj = '';
			if (jsonObj instanceof RegExp) newJsonObj = jsonObj.toString();
		}
		if (typeof(jsonObj) == 'string') 
			newJsonObj = jsonObj;		
		if (typeof(newJsonObj) == 'string') 
			return encodeURIComponent(newJsonObj);
			
		var ret = [];
		if (jsonObj instanceof Array) {
			for (var i = 0; i < jsonObj.length; i++) {
				if (typeof(jsonObj[i]) == 'undefined') 	continue;
				ret.push(typeof(jsonObj[i]) == 'object' ? '' : milo.serialize(jsonObj[i]))
			}
			return ret.join('|')
		} 
		else {
			for (var i in jsonObj) {				
				if (typeof(jsonObj[i]) == 'undefined') 	continue;
				newJsonObj = null;
				if (typeof(jsonObj[i]) == 'object') {
					if (jsonObj[i] instanceof Array) {
						newJsonObj = jsonObj[i];
						ret.push(i + '=' + milo.serialize(newJsonObj));
					} else {
						ret.push(i + '=')
					}
				} else {
					newJsonObj = jsonObj[i];
					ret.push(i + '=' + milo.serialize(newJsonObj));
				}
			}
			return ret.join('&')
		}
	},
	/**
	 * �����л�ΪJSON����
	 * ��url������ʽ�Ķ������л���ΪJSON����
	 * ��serialize���Ӧ
	 * @param {object} jsonObj json����
	 * @return {string}
	 */
	unSerialize : function(jsonStr, de){
		de = de || 0;
		jsonStr = jsonStr.toString();
		if (!jsonStr) return {};
		var retObj = {}, 
			obj1Ret = jsonStr.split('&');
		if (obj1Ret.length == 0) return retObj
		for (var i = 0; i < obj1Ret.length; i++) {
			if (!obj1Ret[i]) continue;
			var ret2 = obj1Ret[i].split('=');
			if (ret2.length >= 2) {
				var ret0 = obj1Ret[i].substr(0, obj1Ret[i].indexOf('=')),
					ret1 = obj1Ret[i].substr(obj1Ret[i].indexOf('=') + 1);
				if (!ret1) ret1 = '';
				if (ret0) retObj[ret0] = de == 0? decodeURIComponent(ret1) : ret1;
			}
		}
		return retObj;
	},
	/**
	 * ������object����utf8��ʽ��url����
	 * @param {object} newopt �������
	 * @return {object} �ѽ������
	 */
	decode : function(newopt) {
		if (typeof(newopt) == 'string') {
			try {
				return decodeURIComponent(newopt)
			} catch(e) {}
			return newopt
		}
		if (typeof(newopt) == 'object') {
			if (newopt == null) {
				return null
			}
			if (newopt instanceof Array) {
				for (var i = 0; i < newopt.length; i++) {
					newopt[i] = milo.decode(newopt[i])
				}
				return newopt
			} else if (newopt instanceof RegExp) {
				return newopt
			} else {
				for (var i in newopt) {
					newopt[i] = milo.decode(newopt[i]);
				}
				return newopt
			}
		}
		return newopt
	}
	
});
})();/**
 * @author cathzhang
 * @version 0.1.0.0 2011-08-12
 */

milo.base.extend(milo, milo.dom); 
milo.base.extend(milo, milo.array); 
milo.base.extend(milo, milo.string); 
milo.base.extend(milo, milo.date); 
milo.base.extend(milo, milo.number); 
milo.base.extend(milo, milo.event); 
milo.base.extend(milo, milo.object); /**
 * @author willpanyang
 * @version 0.1.0.0 
 * @date 2012-05-21
 * @class milo.ams
 * amsͨ�ô�����
 */
 
namespace("https://game.gtimg.cn/images/js/milo/milo.ams");
(function(){

	//��ȡams�����ļ���·��
	function getAmsFileUrl(iActivityId){
		var sActId=iActivityId+"";
		var iActId=Number(iActivityId);
		var _url="";
		if(isString(window['ams_actdesc_secure_'+sActId])){
			//�����߰�ȫ·��
			_url = location.protocol+"//" + window.location.host + "/comm-htdocs/js/ams/actDesc/" + sActId.substr(sActId.length-3) + "/" + window['ams_actdesc_secure_'+sActId] + "/act.desc.js";
		}else{
			if(iActId>=125300){//����·��
				_url = location.protocol+"//" + window.location.host + "/comm-htdocs/js/ams/actDesc/" + sActId.substr(sActId.length-3) + "/" + sActId + "/act.desc.js";
			}else{//����·��
				_url = location.protocol+"//" + window.location.host + "/comm-htdocs/js/ams/v0.2R02/act/" + sActId + "/act.desc.js";
			}
		}
		return _url;
	}
	/**
	 * ��ȡams�ĳ�ʼ��Ϣ
	 * @param {number} amsActivityId ���
	 * @param {function} callback �ص�����
	 * @return {undefined}
	 */
	function getAmsFile(amsActivityId,flowId, callback){
		if(!isFunction(callback)) callback = function(obj){};
		
		var cur_actdesc = window["ams_actdesc_"+amsActivityId];
		
		if(isObject(cur_actdesc)){
			callback(cur_actdesc);
			return;
		}
		if (!amsActivityId || isNaN(amsActivityId) || amsActivityId<=0) return;
		
		var _url=getAmsFileUrl(amsActivityId);
		include(_url, function(loaded){
			if (!loaded) return;
			//if (!isObject(window["ams_actdesc_"+amsActivityId])) return;
			callback(window["ams_actdesc_"+amsActivityId]);
			return;
		});		
	}
	
	/*
	 * init,submit ����
	 */
	function getDesc(obj, callback){
		
		var actDesc = window["ams_actdesc_" + obj.actId];

		var _url=getAmsFileUrl(obj.actId);
		if(isObject(actDesc)){
			callback(obj,actDesc);
			return;
		}
		
		include(_url, function(loaded){
		
			callback(obj,window["ams_actdesc_" + obj.actId]);
			return;
		});		
		
	}
	
	function init(obj){
	
		getDesc(obj, function(obj, descData){
			var flows = descData.flows,
				flow = null,
				cfg = obj;

			// �������̺�ƥ�䵽����
			for(fid in flows){
				if (fid == "f_" + obj.flowId){
					flow = flows[fid];
					break
				}
			}
			
			// û��ƥ�䵽 
			if(flow == null){
				return;
			}
			
			// �ж��Ƿ�Ϊ�Զ�������
			if(flow.functions[0].sExtModuleId == null){
			
				need("ams.flowengine",function(FlowEngine){
				
					// �ύ����
					FlowEngine.submit(window['amsCfg_' + obj.flowId]);
					
				});
			}else{
				
				var modName = flow.functions[0].method;
				
				// ����ģ������(�������·��)
				if(obj.modJsPath && obj.modJsPath.indexOf('http') === -1){
					
				}else if(obj.modJsPath){
					
				}
				
			
				need("ams." + modName, function(){
					var module = modName.split("."),
						mn = module[module.length-1],
						newObj = window[mn+"_" + obj.flowId];
					
					if(isObject(newObj) && isFunction(obj.modSubmit)){
						if(!isFunction(newObj.submit)){
							newObj.init(cfg);
							return false;
						}else if(cfg._everyRead && isFunction(newObj.submit)){
							newObj.init(cfg);
							obj.modSubmit(window[mn+"_" + obj.flowId]);
							return false;
						}else{
							obj.modSubmit(newObj);
							return false;
						}
					}
					
					window[mn+"_" + obj.flowId] = cloneClass(arguments[0]);
					window[mn+"_" + obj.flowId].init(cfg);
					
					// ����ǵ���amsSubmit
					if (isFunction(obj.modSubmit)){
						obj.modSubmit(window[mn+"_" + obj.flowId]);
					}
				});
			}
		});
	}
	
	function submit(obj){
		
		// ���ģ��submit���� 
		obj.modSubmit = function(modObj){
			if(isFunction(modObj.submit)){
				modObj.submit(obj.flowId);
			}
		};
		
		init(obj);	
	}
	
	extend( milo.ams, {
		/**
		 * ��ȡams�ĳ�ʼ��Ϣ
		 * @param {number} amsActivityId ���
		 * @param {function} callback �ص�����
		 * @return {undefined}
		 */
		getActivityConfig:function(iActivityId,callback){
			getAmsFile(iActivityId,'',function(actConfig){
				isFunction(callback) && callback(actConfig);
			})
		},
		amsInit : function(amsActivityId,flowId,callback){
		
			if(arguments.length === 1){
				init(amsActivityId); // amsActivityId ʵ������һ��object
				return;
			}
		
			getAmsFile(amsActivityId,flowId, function(ams_actdesc){
				var flows = ams_actdesc.flows,
					flow = null,
					cfg = window["amsCfg_" + flowId] || {};			
				
				for(fid in flows){
					if (fid == "f_" + flowId){
						flow = flows[fid];
						break
					}
				}
				
				if (flow == null) return;
				
				//�����ж�
				//���ڴ˽��У���Ӱ��ǰ�ڲ���Ҫ�ύֻ��Ҫչʾ�Ĺ���			
				//���Կ�������չʾ��ģ����ύ��ģ��
				
				cfg.iAMSActivityId = amsActivityId;
				cfg.iFlowId = flowId;
				
				if(flow.functions[0].sExtModuleId == null){
					need("ams.flowengine",function(FlowEngine){
						FlowEngine.submit(window['amsCfg_'+flowId]);
					});
				}else{
					var modName = flow.functions[0].method;
					
					if((amsActivityId > 6686 ) && (amsActivityId != 6688) && (amsActivityId != 6701) && (amsActivityId != 6731) && ( modName ==  'share.microblogFix' || modName ==  'share.microblogUser' || modName ==  'share.qqgameFeed' || modName ==  'share.qqSignButton' || modName ==  'share.qqSignQueryTime' || modName ==  'share.qqSignRadio'  || modName ==  'share.qzoneFix'  || modName ==  'share.qzoneUser' || modName ==  'share.shareQueryHistory')){
						flow.functions[0].method = 'share.commShare';
					}
					
					if((amsActivityId == 6370 || amsActivityId == 6241 || amsActivityId == 3733  ) && ( modName ==  'share.microblogFix' || modName ==  'share.microblogUser' || modName ==  'share.qqgameFeed' || modName ==  'share.qqSignButton' || modName ==  'share.qqSignQueryTime' || modName ==  'share.qqSignRadio'  || modName ==  'share.qzoneFix'  || modName ==  'share.qzoneUser' || modName ==  'share.shareQueryHistory')){
						flow.functions[0].method = 'share.commShare';
					}
				
					need("ams." + flow.functions[0].method, function(){
						var module = flow.functions[0].method.split("."),
							mn = module[module.length-1],
							newObj = window[mn+"_"+flowId];
						
						if(isObject(newObj) && isFunction(callback)){
							if(!isFunction(newObj.submit)){
								newObj.init(cfg, flow);
								return false;
							}else if(cfg._everyRead && isFunction(newObj.submit)){
								newObj.init(cfg, flow);
								callback(window[mn+"_"+flowId]);
								return false;
							}else{
								callback(newObj);
								return false;
							}
							
						}
						
						window[mn+"_"+flowId] = cloneClass(arguments[0]);
						window[mn+"_"+flowId].init(cfg, flow);
						if (isFunction(callback)){
							callback(window[mn+"_"+flowId]);
						}
					});
				}		
			});	
			
		},
		/**
		 * ��ȡams�ĳ�ʼ��Ϣ
		 * @param {number} amsActivityId ���
		 * @param {function} callback �ص�����
		 * @return {undefined}
		 */
		amsSubmit : function(amsActivityId, flowId){
			
			if(arguments.length === 1){
				submit(amsActivityId); // amsActivityId ʵ������һ��object
				return;
			}
		
			//��ȡ����Ԫ����action-data���Դ����window["amsCfg_" + flowId].triggerSourceData
			var caller = arguments.callee.caller;
			if((window.event && window.event.srcElement && window.event.srcElement != document) || (caller && caller.arguments[0])){
				var ev = window.event || caller.arguments[0];
				if(ev[0]){
					var target = ev[0];
				}else{
					var target = ev.srcElement || ev.target;
				}
				if(target){
					var data = (target.getAttribute && target.getAttribute('action-data')) || {}
						_amsCFG = window["amsCfg_" + flowId];
					
					try{
						_amsCFG.triggerSourceData = eval("(" + data + ")");
					}catch(e){
						_amsCFG.triggerSourceData = data;
					}
				}
			}
		
			amsInit(amsActivityId,flowId, function(obj){
				if(isFunction(obj.submit)){
					obj.submit(flowId);
				}
			});	
		}
	});
})();

milo.base.extend(window, milo.ams); 



/**
 * @author willpanyang
 * @version 0.1.0.0 
 * @date 2013-10-09
 * @class milo.ui
 * milo.ui ȫ�ַ���(��ʱ)
 */

namespace("https://game.gtimg.cn/images/js/milo/milo.ui");

(function(){
	/**
	 * milo.ui��ʼ��Ϣ
	 * @param {msg} strgin ��Ҫ�������ַ�������
	 * @return {undefined}
	 */
	extend( milo.ui, {
		'alert' : function(msg){
			alert(msg);
		}
	});
})();


/**
 * @author marsboyding
 * @version 0.1.0.0 
 * @date 2016-08-15
 * @class milo.xss  
 * ��������Ҫ����ǰ�˵�XSS©������<br/>
 * <p>
 * Example:
 * <pre><code>
 *ͨ�ù���XSS
milo.xss.filter("javascript:alert(document.cookie)");
 *����΢���ǳ�
molo.xss.filterWxNickName('С<script>alert(document.cookie);</script>��<span class=\"emoji emoji1f42f\"></span>��');
 </code></pre>
 * </p>
 */
 
namespace("https://game.gtimg.cn/images/js/milo/milo.xss");
(function(){
var xss = milo.xss;
extend(xss,{
	/**
	 * ͨ�ù��ˣ��������漰��XSS©���������ַ��ͷ��Ž��й���
	 * @param {oriStr} string �����˵�ԭʼ�ַ���
	 * @return {string} ���˺���ַ���
	 */
	filter:function(oriStr){
		if(!oriStr){
			return oriStr;
		}
		var charCodes=['3c','3e','27','22','28','29','60',{format:'script{}',chr:'3a'}];//Ҫת���ַ���16����ASCII��[1<  2>  3'  4"  5(  6)  7`]
		var xssChars=[],filterChars=[],tmpFormat='{}',tmpChr;
		for(var i=0;i<charCodes.length;i++){
			if('string'==typeof charCodes[i]){
				tmpFormat='{}';
				tmpChr=charCodes[i];
			}else{
				tmpFormat=charCodes[i].format;
				tmpChr=charCodes[i].chr
			}
			xssChars.push(tmpFormat.replace('{}','\\u00'+tmpChr));
			xssChars.push(tmpFormat.replace('{}','%'+tmpChr));//1��encode
			xssChars.push(tmpFormat.replace('{}','%25'+tmpChr));//2��encode
			filterChars.push(tmpFormat.replace('{}','&#x'+tmpChr+';'));
			filterChars.push(tmpFormat.replace('{}','%26%23x'+tmpChr+'%3B'));//1��encode
			filterChars.push(tmpFormat.replace('{}','%2526%2523x' + tmpChr + '%253B'));//2��encode
		}
		for(var i=0;i<xssChars.length;i++){
			oriStr=oriStr.replace(new RegExp(xssChars[i],'gi'),filterChars[i]);
		}
		//Ԥ��script:
		oriStr=oriStr.replace(/script[\u000d\u000a\u0020]+\:/i,'script&#x3a;');
		return oriStr;
	},
	/**
	 * [ר�Ź���]����΢���ǳƣ����˳�emoji����֮��������ַ�
	 * @param {oriStr} string �����˵�ԭʼ�ַ���
	 * @return {string} ���˺���ַ���
	 */
	filterWxNickName:function(oriStr){
		//console.log(this);
		var matchArr=oriStr.match(/\<span\sclass\=\"emoji\semoji[0-9a-z]+\"\>\<\/span\>/g);
		var oriTagStr="",filterTagStr="";
		var tag="{tag_"+(new Date()).getTime()+"}";
		if(!matchArr || !matchArr.length){
			return this.filter(oriStr);
		}else{
			oriTagStr=oriStr.replace(/\<span\sclass\=\"emoji\semoji[0-9a-z]+\"\>\<\/span\>/g,tag);
			filterTagStr=this.filter(oriTagStr);
			for(var i=0;i<matchArr.length;i++){
				filterTagStr=filterTagStr.replace(tag,matchArr[i]);
			}
			return filterTagStr;
		}
	},
	/*
		�ж��Ƿ�ȫurl������������ת���
		@param url  ������url
		@param oSafeConfig {object}�������ͺ����������б�
		{
			whiteDomain:�������б�[array]
			blackDomain:�������б�[array]
		}
	*/
	isSafeUrl:function(_url,oSafeConfig){
		//Ĭ������
		oSafeConfig=oSafeConfig || {
			whiteDomain:['https://game.gtimg.cn/images/js/milo/qq.com','https://game.gtimg.cn/images/js/milo/tencent.com'],//������
			blackDomain:['https://game.gtimg.cn/images/js/milo/p.imtt.qq.com']//������
		}
		//�Ϸ������б�
		var whiteDomain=oSafeConfig.whiteDomain || ['https://game.gtimg.cn/images/js/milo/qq.com','https://game.gtimg.cn/images/js/milo/tencent.com'];//������
		var blackDomain=oSafeConfig.blackDomain || ['https://game.gtimg.cn/images/js/milo/p.imtt.qq.com'];//������
		var isLegalDomain=function(url){
			var isLegal=false;
			var regStr='^(https\\:\\/\\/|http\\:\\/\\/|\\/\\/|)([0-9a-z\-A-Z]+\\.)*reg(\\:[0-9]*){0,1}(\\/{1,2}.*){0,1}$';
			var regWhite=null;
			//�жϰ�����
			for(var i=0;i<whiteDomain.length;i++){
				regWhite=new RegExp(regStr.replace('reg',whiteDomain[i].replace(/\./g,'\\.')));
				if(regWhite.test(url)){
					isLegal=true;
				}
			}
			if(isLegal==false){//���ڰ�����
				return false;
			}
			//�жϺ�����
			var regBlack=null;
			for(var i=0;i<blackDomain.length;i++){
				regBlack=new RegExp(regStr.replace('reg',blackDomain[i].replace(/\./g,'\\.')));
				if(regBlack.test(url)){
					isLegal=false;
				}
			}
			return isLegal;
		}
		return isLegalDomain(_url);
	}
});
})();

/**
 * @author marsboyding
 * @version 0.1.0.0 
 * @date 2018-06-22
 * @class milo.loginStatus  
 * ��������Ҫ����ǰ�˵�¼̬ͬ��<br/>
 * <p>
 * Example:
 *
 */
 
namespace("milo.loginStatus");
(function(){
var loginStatus = milo.loginStatus;
extend(loginStatus,{
	//�洢δִ�е�callback
	arrCallbacks:[],
	//ִ��callback���������callbck����
	doCallback:function(service){
		var self=this;
		for(var i=0;i<self.arrCallbacks.length;){
			var cbObj=self.arrCallbacks[i];
			if(service == cbObj.service){
				var childWin=g('loginStatusSyncFrame_'+cbObj.service).contentWindow || null;
				if(isFunction(cbObj.cb)){
					cbObj.cb(childWin);
				}
				self.arrCallbacks.splice(i,1);
			}else{
				i++;
				continue;
			}
		}
	},
	//iframe���ȶ���
	waitingQueue:{},
	//��ʶ�Ƿ��ʼ����onmessage
	isInitMessage:false,
	//�ж��Ƿ�Ϸ���Դ
	isLegalOrigin:function(url){
		//����Ƿ�Ϸ�����
		//�Ϸ������б�
		var whiteDomain=['https://game.gtimg.cn/images/js/milo/qq.com'];//������
		var blackDomain=['https://game.gtimg.cn/images/js/milo/p.imtt.qq.com'];//������
		var isLegal=false;
		var regStr='^(https\\:\\/\\/|http\\:\\/\\/|\\/\\/|)([0-9a-z\-A-Z]+\\.)*reg(\\:[0-9]*){0,1}(\\/{1,2}.*){0,1}$';
		var regWhite=null;
		//�жϰ�����
		for(var i=0;i<whiteDomain.length;i++){
			regWhite=new RegExp(regStr.replace('reg',whiteDomain[i].replace(/\./g,'\\.')));
			if(regWhite.test(url)){
				isLegal=true;
			}
		}
		if(isLegal==false){//���ڰ�����
			return false;
		}
		//�жϺ�����
		var regBlack=null;
		for(var i=0;i<blackDomain.length;i++){
			regBlack=new RegExp(regStr.replace('reg',blackDomain[i].replace(/\./g,'\\.')));
			if(regBlack.test(url)){
				isLegal=false;
			}
		}
		return isLegal;
	},
	//��ʼ��iFrame
	init:function(service,url,callback){
		var self=this;
		self.arrCallbacks.push({
			cb:callback,
			service:service
		});
		if(2 == self.waitingQueue[service]){
			self.doCallback(service);
			return;
		}else if(1 == self.waitingQueue[service]){
			return;
		}
		self.waitingQueue[service]=1;//1:waiting  2:done 
		
		//��body�� DOM ready֮���ٽ������������������ܻ��޷�����
		milo.ready(function(){
			var iframe = document.createElement('iframe');
			iframe.src = url;
			iframe.id = 'loginStatusSyncFrame_'+service;
			iframe.width = 0;
			iframe.height = 0;
			iframe.frameborder = 0;  
			iframe.style.border = '0';
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
			
			if (iframe.attachEvent){
				iframe.attachEvent("onload", function(){
					self.waitingQueue[service]=2;
					self.doCallback(service);
				});
			} 
			else {
				iframe.onload = function(){
					self.waitingQueue[service]=2;
					self.doCallback(service);
				};
			}
		})
		
		if(self.isInitMessage){
			return;
		}
		if('function' == typeof window.postMessage){
			window.addEventListener('message',function(e){
				//console.log(e.data);
				//�ж���Դ
				if(!self.isLegalOrigin(e.origin)){
					//��Դ�Ƿ�
					return;
				}
				var eData={};
				if(!e.data){
					return;
				}
				if('string' == typeof e.data){
					eval('eData='+e.data);
				}else{
					eData=e.data
				}
				if(eData && eData.callbackName && 'done' == eData.action){
					isFunction(window[eData.callbackName]) && window[eData.callbackName]();
				}
			},false)
		}
		self.isInitMessage=true;
	},
	/**
	 * ͬ����¼̬��xx.qq.com
	 * @param {domain} ����
	 * @param {oCookie} object ��¼̬����{openid:"xxx",acctype:"xxx"}
	 * @param {callback} ͬ��֮��Ļص�����
	 */
	syncToQQ:function(domain,oCookie,callback){
		if(!oCookie || 'qc' != oCookie.acctype){
			//Ŀǰֻ֧��qc��¼̬ͬ��
			return;
		}
		var service=domain.split('.')[0];
		this.init(service,location.protocol+'//'+domain+'/comm-htdocs/login/asyncLoginStatus.html',function(){
			var iframe=g('loginStatusSyncFrame_'+service);
			var newCookie={};
			for(var k in oCookie){
				newCookie[k]=[oCookie[k],'/',600];
			}
			if('function' == typeof window.postMessage){
				var callbackName='syncToQQ_'+Math.ceil(100000*Math.random());
				window[callbackName]=function(){
					isFunction(callback) && callback();
				}
				iframe.contentWindow.postMessage(JSON.stringify({
					action:'loginStatus',
					cookieObj:newCookie,
					callbackName:callbackName
				}),'*')
			}
		})
	},
	/**
	 * �ύAME����ǰ��ͬ����¼̬
	 * @param callback ��¼̬ͬ��֮��Ļص�
	 */
	syncToAME:function(callback){
		//Ŀǰ����qc��wegame��¼̬ͬ��
		//ͬ����¼̬֮ǰ������һ��ɵĵ�¼̬
		var self=this;
		self.clearAME(function(){
			if('qc' != milo.cookie.get('acctype') && 'wg' != milo.cookie.get('acctype')){
				isFunction(callback) && callback();
				return;
			}
			//�ص�����
			var callbackName='syncToAME_'+Math.ceil(100000*Math.random());
			window[callbackName]=function(){
				isFunction(callback) && callback();
			}
			//cookie
			var oCookie={
				acctype:milo.cookie.get('acctype') || '',
				openid:milo.cookie.get('openid') || '',
				access_token:milo.cookie.get('access_token') || '',
				appid:milo.cookie.get('appid') || '',
				refresh_token:milo.cookie.get('refresh_token') || ''//wegame��¼̬�õ�
			};

			/*
				QQ������¼̬�����ڼ䣬��ʱ����pt��qc���棬��PT���ߺ�ɾ�����߼��� -----Start-----
			*/
			if('qc' == milo.cookie.get('acctype') && window.iUseQQConnect != 1){
				oCookie={
					acctype:'',
					openid:'',
					access_token:'',
					appid:''
				};
			}
			/*
				QQ������¼̬�����ڼ䣬��ʱ����pt��qc���棬��PT���ߺ�ɾ�����߼��� -----End-----
			*/
			if("function" != typeof window.postMessage){//��֧��postMessage
				var newCookie={};
				for(var k in oCookie){
					newCookie[k]=[oCookie[k],'/',600];
				}
				self.init('ams_ame',location.protocol+'//'+'apps.game.qq.com/ams/asyncCookie.html',function(childWin){
					childWin.syncCookie({
						action:'ame',
						cookieObj:newCookie
					},function(){
						isFunction(callback) && callback();
					});
				})
			}else{
				self.init('ams_ame',location.protocol+'//'+'apps.game.qq.com/ams/asyncCookie.html',function(){
					var iframe=g('loginStatusSyncFrame_ams_ame');
					var newCookie={};
					for(var k in oCookie){
						newCookie[k]=[oCookie[k],'/',600];
					}
					iframe.contentWindow.postMessage(JSON.stringify({
						action:'ame',
						cookieObj:newCookie,
						callbackName:callbackName
					}),'*')
				})
			}
		})
		
	},
	/**
	 * ���game.qq.com�ϵ�¼̬
	 * @param callback ��¼̬���֮��Ļص�
	 * @param arrCookies ָ�������cookie��
	 */
	clearAME:function(callback,arrCookies){
		//�ص�����
		var callbackName='syncToAME_'+Math.ceil(100000*Math.random());
		window[callbackName]=function(){
			isFunction(callback) && callback();
		}
		//cookie
		var oCookie={
			acctype:'',
			openid:'',
			access_token:'',
			appid:''
		};
		//ָ�������cookie
		if(arrCookies && arrCookies.length){
			oCookie={};
			for(var i=0;i<arrCookies.length;i++){
				oCookie[arrCookies[i]]='';
			}
		}
		if("function" != typeof window.postMessage){//��֧��postMessage
			var newCookie={};
			for(var k in oCookie){
				newCookie[k]=[oCookie[k],'/',-600];
			}
			this.init('ams_ame',location.protocol+'//'+'apps.game.qq.com/ams/asyncCookie.html',function(childWin){
				childWin.syncCookie({
					action:'onlygame',
					cookieObj:newCookie
				},function(){
					isFunction(callback) && callback();
				});
			})
		}else{
			this.init('ams_ame',location.protocol+'//'+'apps.game.qq.com/ams/asyncCookie.html',function(){
				var iframe=g('loginStatusSyncFrame_ams_ame');
				var newCookie={};
				for(var k in oCookie){
					newCookie[k]=[oCookie[k],'/',-600];
				}
				iframe.contentWindow.postMessage(JSON.stringify({
					action:'onlygame',
					cookieObj:newCookie,
					callbackName:callbackName
				}),'*')
			})
		}
	}
});
})();


if(typeof window.onbeforeunload == "function"){
	var temp_onbeforeunload = window.onbeforeunload;
}

window.onbeforeunload = function(){
	if(typeof temp_onbeforeunload == "function"){
		temp_onbeforeunload();
	}
	milo.cookie.clear('lg_source', 'https://game.gtimg.cn/images/js/milo/qq.com', '/');
	milo.cookie.clear('ams_game_appid', 'https://game.gtimg.cn/images/js/milo/qq.com', '/');
}


//=======================ȫ�ִ������߼�		Start ========================
//1.console����
//desp:milo������js����п����в����ڵ���console.log������
//�˷����ڵͰ汾IE����Ч�����ᵼ�±�������ҳ���߼�������,
//Ϊ�˱����������⣬����console.log���ݣ�Ϊû��console.log����
//���������Ӵ˷���
!function(){
	if("object" != typeof window.console){
		window.console={};
	}
	if("function" != typeof window.console.log){
		window.console.log=function(){};
	}
}()


//2.����EAS�ϱ��߼�
//desc:milo����EAS�ϱ�����milo.js��Ϊ��ڣ��Զ�����ossweb-img.qq.com/images/js/eas/eas.js
//���ϱ��߼����ں���milo��ģ���п���ֱ�ӵ�����ط��������ϱ��������Ҳ���Զ�����Ĭ���ع�
!function(){
	loadScript(location.protocol + '//ossweb-img.qq.com/images/js/eas/eas.js');
}()


//=======================ȫ�ִ������߼�		End ========================
/*  |xGv00|9d63699537a561f91642e3638f68d8ff */