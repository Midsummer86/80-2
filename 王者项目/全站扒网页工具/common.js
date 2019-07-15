/**
 * Created by jf on 2016/9/12.
 */

/**
 * 通过id寻找元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * 兼容所有浏览器的获取内部文本的函数
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 兼容所有浏览器的设置内部文本的函数
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}


/**
 * 获取下一个兄弟元素的兼容方法
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 获取上一个兄弟元素的兼容方法
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}

/**
 * 获取第一个子元素的兼容方法
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && 1 !== node.nodeType) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取最后一个子元素的兼容方法
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && 1 !== node.nodeType) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取页面滚动座标的兼容写法
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}
/**
 * 获取网页可视区宽高的兼容写法
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}

/**
 * 处理事件对象兼容问题的工具类
 */
var eventUtils = {
    getEvent: function (event) {
        return event || window.event;
    },
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    addEvent: function (element, eventName, listener) {
        if (element.addEventListener) {//高级浏览器绑定事件的方式
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener);
        } else {
            //如果以上两种都不支持 肯定是支持btn.onclick btn["onclick"]
            element["on" + eventName] = listener;
        }
    },
    removeEvent: function (element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            //如果以上两种都不支持 肯定支持 btn.onclick = null
            element["on" + eventName] = null;
        }
    }
};