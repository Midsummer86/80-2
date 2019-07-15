
// 头部固定定位
var v1 = $('.sub-hd').offset().top;
$(window).scroll(function(){
    var v2 = $(window).scrollTop();
    if(v2 >= v1){
        $('.sub-hd').addClass('fixed')
    }else{
        $('.sub-hd').removeClass('fixed')
    }
});


// 手风琴效果
$('.sfq li').mouseenter(function(){
        $(this)
        .stop()
        .animate({width: 750},150)
        .siblings('li')
        .stop()
        .animate({width: 112},150)
})
    
// $('.sfq li').mouseenter(function(){
//     $(this).css('width', '750px')
//     .siblings('li')
//     .css('width','112px')
// });




        
       

