var mleft = document.getElementById('m-left')
var content = document.querySelector('.main-show .content');
var lis = document.querySelectorAll('.main-show .controls li'); 

var width = mleft.offsetWidth;
var index = 0;
window.setInterval(function () {
    if(index==0){
        content.style.left = 0 + 'px';
    }
    lis[index].className = '';
    index++;
    var  m = -index*width;
    animatemove(content,m,100);
    if(index==4) {
        index=0;
    }
    lis[index].className = 'active';

},1000)
for(var i=0;i<lis.length;i++) {
    lis[i].newIndex = i;
    lis[i].onclick = function() {
        lis[index].className = '';
        index = this.newIndex;
        var moveva = -index*width;
        animatemove(content.moveva,100);
        lis[index].classList='avtive';
    }
}