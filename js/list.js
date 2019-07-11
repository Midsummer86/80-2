//头部鼠标进入显示下拉图片 鼠标离开消失
$('.jinian').mouseenter(function(){
    $('.song').css('diaplay','block');

});
$('.jinian').mouseleave(function(){
    $('.song').css('diaplay','none');
});
//鼠标进入a标签颜色变黄 有下划线
$('.nav a').mouseenter(function(){
    $(this).css('color', 'gold');
    $(this).css('border-bottom', '3px solid gold');

});$('.nav a').mouseleave(function(){
    $(this).css('color', '#c9c9dd');
    $(this).css('border-bottom', '');
});
//鼠标进入导航栏
$('.nav').mouseenter(function(){});
$('.nav').mouseleave(function(){});
//类似于手风琴切换
$('.zm a').mouseenter(function(){
    $(this).children('img').css('display','none');
    $(this).find('span img').css('display','block');
});
$('.zm a').mouseleave(function(){
 $(this).find('span img').css('display','none');
 $(this).siblings('a').children('img').css('display','block');
 $(this).siblings('a').find('span img').css('display','none');
    
});
