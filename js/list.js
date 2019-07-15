//头部鼠标进入显示下拉图片 鼠标离开消失
$('.jinian').mouseenter(function(){
    $('.song').css('display','block');

});
$('.song').mouseleave(function(){
    $('.song').css('display','none');
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
$('.daohang').mouseenter(function(){
    $('.jieshao').css('display','block')
});
$('.nav').mouseleave(function(){
    $('.jieshao').css('display','none')
});
//类似于手风琴切换 
$('.zm a').mouseenter(function(){
    $('.zm a>img').css('display','inline-block');
    $(this).children('img').css('display','none');
    $('.zm a span img').css('display','none');
    $(this).find('span img').css('display','inline-block');
});
//tab栏 切换
 
$('.all li input[type="radio"]').click(function () {
    var i= $(this).parents('li').index()
    console.log(i)
    $('.list ul').eq(i).css('display','block').siblings('ul').css('display','none');
 
})

//搜索事件
$('.all .aa input').bind(function(){
    var ab = this.value;
    var cd = $('.qb li p').text();
    console.log(cd);
    
    // if(ab==cd){
    //     // $('')
    // }
});