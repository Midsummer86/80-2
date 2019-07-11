$('#imgs li').mouseenter(function () {
    $(this).stop().animate({
        width:224
    },500)
    .siblings('li').stop().animate({
        width:70
    },500)
})
$('#imgs ul').mouseleave(function () {
    $('li').stop().animate({
        width:70
    },500)
})