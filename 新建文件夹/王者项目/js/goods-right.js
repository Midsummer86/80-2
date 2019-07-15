$('.goods .goods-box .left li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('g-active').siblings('li').removeClass('g-active');
    
    $('.goods .right').eq(i).css('display','block').siblings('.right').hide()
})


$('.goods2 .goods-box .left li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('g-active').siblings('li').removeClass('g-active');
    
    $('.goods2 .right').eq(i).css('display','block').siblings('.right').hide()
})
