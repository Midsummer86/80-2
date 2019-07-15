// 封装动画

/*
	
	element：代表要移动的元素，传递过来哪个元素就可以移动哪个元素
	targetVal：目标地址，目标距离，这个值是多少就可以移动多少
	speedVal：步长值，每一次移动的距离

*/ 
// 需要全局变量，才可以找到清除定时器
var dsq;
function moveElement (element, targetVal, speedVal) {

	// 清除定时器
	window.clearInterval(dsq);

	// 多次点击，就会启动多个定时器，多个定时器都会控制元素移动，此时元素移动的速度加快
	// 我们想；因为这是多个定时器造成，那如果说要是保证页面只有一个定时器的话，那么不就不存在这个加速的现象
	// 我们要做的就是保证页面只有一个定时器：每次点击先把上一个定时器清除，再启动下一个定时器
	dsq = window.setInterval(function () {
		// 获取左边的距离
		var leftVal = element.offsetLeft;

		// 判断
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}


		// 如果不是成倍数关系的话，会有来回弹动的现象，因为最后一次不足以再走一步
		// 因为不够元素再移动一步，我们直接把目标距离给元素设置上就可以
		if  (Math.abs( targetVal - leftVal ) < speedVal) {//不够移动一次
			element.style.left = targetVal + 'px';// 直接把目标设置给元素
		} else {

			// 改变
			// 如果正方向移动就是加，反方向移动就是减
			if (targetVal > leftVal) {// 正方向
				leftVal = leftVal + speedVal;
			} else {
				leftVal = leftVal - speedVal;
			}
			// 赋值给div的left属性
			element.style.left = leftVal + 'px';

		}

		
	},100);

}
// 1、获取元素左边值加上要移动的距离，再赋值给元素【定时器】
// 2、多次点击，先清除再启动定时器
// 3、设置到目标就让元素停止，反方向
// 4、封装函数【element，targetVal，speedVal】
// 5、调整正反向，再弹动的问题