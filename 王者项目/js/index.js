
    // 顶部图片js
$('#fl-belle').mouseenter (function () {
    $('header .fr').hide();
    $('.fl .fl-img').css({
        display:'block',
        top:'0px',
    })
})
$('.fl .fl-img').mouseleave (function () {
    $('header .fr').show();
    $('.fl .fl-img').css({
        display:'none',
        top:'42px',
    })
})


// 王者logo.nav部分js
$('.fouce .fouce-1').mouseenter(function () {
    $('.fouce .nav-2').stop().slideDown(200);
})
$('.fouce .fouce-1').mouseleave(function () {
    $('.fouce .nav-2').stop().slideUp(200);
})

$('.fouce .fouce-1 .nav-1>div').mouseenter(function () {
    $(this).addClass('nav-active')
})
$('.fouce .fouce-1 .nav-1>div').mouseleave(function () {
    $(this).removeClass('nav-active')
})

$('.fouce .nav-2 .nav-list .list-li li').mouseenter(function () {
    $(this).addClass('nav2-active')
})
$('.fouce .nav-2 .nav-list .list-li li').mouseleave(function () {
    $(this).removeClass('nav2-active')
})



// 主体轮播图右侧列表
$('.main-show .m-right .top a').mouseenter (function () {
    var i=$(this).index();
    $(this).addClass('top-active1').siblings('a').removeClass('top-active1')
    
    $(this).addClass('top-active2').siblings('a').removeClass('top-active2')
    $('.main-show .m-right .foot').eq(i).stop().css('display','block').siblings('.foot').stop().hide()
})





//赛事精品下的列表
$('.both .both-left .left-center li').mouseenter(function () {
    var k = $(this).index();
    $(this).addClass('list-active').siblings('li').removeClass('list-active')
    $('.left-list').eq(k).css('display','block').siblings('.left-list').hide()
})




// 主体底部列表

$('.both .right-center li').mouseenter (function () {
    var i = $(this).index();
    $(this).addClass('both-active').siblings('li').removeClass('both-active');
    $('.both .both-right .f-list').eq(i).show().siblings('.f-list').hide();
})


// 主体底部道具说明
$('.both .both-right #f-list a').mouseenter (function (e) {
    var i = $(this).index();
    $('.both .both-right .tool').eq(i).stop().show();
    window.onmousemove = function (e) {
        var x = e.pageX + 30;
        var y = e.pageY - 30;
        // var x2 = e.clientX;
        // console.log(x2)
        // var y2 = e.clientY;
        // if(x2<300) {
        //     var x = e.pageX - 300;
        //     var y = e.pageY - 30;
        // }else {
        //     var x = e.pageX + 30;
        //     var y = e.pageY - 30;
        // }
        $('.both .both-right .tool').eq(i).css('left',x);
        $('.both .both-right .tool').eq(i).css('top',y);
    }
    
})
$('.both .both-right #f-list a').mouseleave (function () {
    var i = $(this).index();
    $('.both .both-right .tool').eq(i).css('display','none');
})
