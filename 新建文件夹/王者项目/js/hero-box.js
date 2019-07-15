$('#h-left li').mouseenter (function () {
    var i = $(this).index();
    $(this).addClass('hero-p-active').siblings('li').removeClass('hero-p-active')
    $('#h-left li .hero-p-list').eq(i).css('display','block')
    .parent('li').siblings('li').children('.hero-p-list').css('display','none')
    $('.hero-box').eq(i).css('display','block')
    .siblings('.hero-box').css('display','none');
})

// $('#h-left li img').mouseenter (function () {
//     $(this).stop().animate({width:60,height:60},100)//.parent()
//     //.siblings('li').children('img').stop().animate({width:51,height:51},100)
// })
// $('#h-left li img').mouseleave (function () {
//     $(this).stop().animate({width:51,height:51},100)
// })



// 更多下拉列表部分
$('#h-right').mouseenter (function () {
    $('#h-more').stop().show();
})
$('#h-right').mouseleave(function () {
    $('#h-more').stop().hide();
})

$('#h-more .m-l a').mouseenter (function () {
    $(this).addClass('m-active2').children('img').addClass('m-active')
})
$('#h-more .m-l a').mouseleave (function () {
    $(this).removeClass('m-active2').children('img').removeClass('m-active')
} )

$('#h-more .m-r li').mouseenter (function () {
    $(this).addClass('m-r-active')
})
$('#h-more .m-r li').mouseleave (function () {
    $(this).removeClass('m-r-active')
})

// $('#h-left li').mouseenter(function(){
//     $(this).addClass('bk');
// })