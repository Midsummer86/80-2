// 最顶部
$('#top2').mouseenter(function () {
    $('.top3').slideDown(200);
});
$('.top3').mouseleave(function () {
    $('.top3').slideUp(200);
});
// header
$('.nav').mouseenter(function () {
    $('.hidebox').slideDown(300);
});
$('.header').mouseleave(function () {
    $('.hidebox').slideUp(300);
});
// 导航
$('.nav ul').on('mouseenter','li',function(){
    $(this).addClass('active1');
});
$('.nav ul').on('mouseleave','li',function(){
    $(this).removeClass('active1');
});



