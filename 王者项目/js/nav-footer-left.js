// $('#imgs .li-1').mouseenter(function () {
//     $(this).children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
// })



// $('#imgs .li-2').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.2.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-2').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.2.2.jpg')
//     .css({width:69,height:69})
// })



// $('#imgs .li-3').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.3.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-3').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.3.3.jpg')
//     .css({width:69,height:69})
// })


// $('#imgs .li-4').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.4.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-4').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.4.4.jpg')
//     .css({width:69,height:69})
// })


// $('#imgs .li-5').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.5.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-5').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.5.5.jpg')
//     .css({width:69,height:69})
// })


// $('#imgs .li-6').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.6.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-6').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.6.6.jpg')
//     .css({width:69,height:69})
// })

// $('#imgs .li-7').mouseenter(function () {
//     $('#imgs .li-1').children('img').attr('src','./img/2.1.1.jpg')
//     .css({width:69,height:69}).end().css({width:69,height:69})
//     $(this).children('img').attr('src','./img/2.7.png')
//     .css({width:223,height:69}).end().css({width:223,height:69})
//     .siblings('li').css({width:69})
// })
// $('#imgs .li-7').mouseleave(function () {
//     $(this).children('img').attr('src','./img/2.7.7.jpg')
//     .css({width:69,height:69})
// })


// // $('#imgs .li-1').mouseenter(function () {
// //     $(this).children('img').stop().hide().end().addClass('li-11').css({width:69,height:69}).show();
// // })



$('#imgs a').mouseenter (function () {
    // $('#imgs a').css('display','inline-block');
    // $(this).children('img').css('display','none');
    // $('#imgs a span img').css('display','none');
    // $(this).find('span img').css('display','inline-block')
    // .css('width',223);
    $('#imgs a').css('display','inline-block');
    $(this).children('img').css('display','none')
    .parent().siblings('a').children('img').css('display','block')
    $(this).find('span img').css('display','block')
    .css('width',223)
    .parent().parent().siblings('a').find('span img').css('display','none')
})
