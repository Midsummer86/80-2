var mleft = document.getElementById('m-left')
var content = document.querySelector('.main-show .content');
var lis = document.querySelectorAll('.main-show .controls li'); 

var width = mleft.offsetWidth;
var index = 0;

// 自动轮播
var dsq1 = window.setInterval(function () {
    if(index==0){
        content.style.left = 0 + 'px';
    }
    lis[index].className = '';
    index++;
    var  m = -index*width;
    moveElement(content,m,100);
    if(index==5) {
        index=0;
    }
    lis[index].className = 'active';

},3000)

// 进入li轮播
for(var i=0;i<lis.length;i++) {
    lis[i].newIndex = i;
    lis[i].onclick = function() {
        lis[index].className = '';
        index = this.newIndex;
        var moveva3 = -index*width;
        moveElement(content,moveva3,200);
        lis[index].className='active';
    }
}

// mleft.onmousemove = function () {
//     window.clearInterval(dsq1);
// }
// mleft.onmouseout = function () {
//     dsq1 = window.setInterval((function () {
//         btnRight.onclick();
//     },3000))
// }


        // $(function () {
        //     $('.jcarousel').jcarousel({
        //         wrap:'circular'
        //     }).jcarouselAutoscroll({
        //     interval: 1000,
        //     target: '+=1',
        //     autostart: true
        // })

        //     $('.jcarousel-control-prev')
        //         .on('jcarouselcontrol:active', function () {
        //             $(this).removeClass('inactive');
        //         })
        //         .on('jcarouselcontrol:inactive', function () {
        //             $(this).addClass('inactive');
        //         })
        //         .jcarouselControl({
        //             target: '-=1'
        //         });

        //     $('.jcarousel-control-next')
        //         .on('jcarouselcontrol:active', function () {
        //             $(this).removeClass('inactive');
        //         })
        //         .on('jcarouselcontrol:inactive', function () {
        //             $(this).addClass('inactive');
        //         })
        //         .jcarouselControl({
        //             target: '+=1'
        //         });

        //     $('.jcarousel-pagination')
        //         .on('jcarouselpagination:active', 'a', function () {
        //             $(this).addClass('active');
        //         })
        //         .on('jcarouselpagination:inactive', 'a', function () {
        //             $(this).removeClass('active');
        //         })
        //         .jcarouselPagination();
        // });