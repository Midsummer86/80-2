var nav2 =$('.nav2').offset().top;
// console.log($('li'))
$(window).scroll(function () {
    var nav = $(window).scrollTop();
    if (nav >= nav2) {
        $('.nav2').addClass('active');
        $('.nav2').removeClass('abs')
    } else {
        $('.nav2').removeClass('active');
        $('.nav2').addClass('abs');
    }
})
var nav3 =$('.nav3').offset().top;
console.log(nav3)
$(window).scroll(function () {
    var nav = $(window).scrollTop();
    if (nav >= nav2) {
        $('.nav3').addClass('active1');
        $('.nav3').removeClass('abs1')
    } else {
        $('.nav3').removeClass('active1');
        $('.nav3').addClass('abs1');
    }
})
var box2 = $('.box2').offset().top;
$('li').eq(0).click(function () {
    $(window).scrollTop(box2);
})
var box3 = $('.box3').offset().top;
$('li').eq(1).click(function () {
    $(window).scrollTop(box3);
})
var box4 = $('.box4').offset().top;
$('li').eq(3).click(function () {
    $(window).scrollTop(box4);
})
var box5 = $('.box5').offset().top;
$('li').eq(4).click(function () {
    $(window).scrollTop(box5);
})


//手风琴
console.log($('.text1'))//show
    $('.text1').click(function () {
        // $(this).animate({width:1114},10)
        // .siblings('li');
        $(this).parent()
        .animate({ width: '100%' }, 50)
        .siblings('li')
        .animate({ width: '0' }, 50); 
    })
    $('.gx').click(function () {
        // alert(1)
        $('.lis > li').animate({width:276},0.1);
    })
    