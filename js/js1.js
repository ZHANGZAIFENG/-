//导航栏
//css({borderBottom:2px solid #e4e4c7});
var i=0;
$('#firnav li').mouseenter(function () {
    $(this).children('ul').show().siblings();
    i=$(this).index();
    $('#firnav>li').eq(i).addClass('cur').siblings().removeClass('cur');
    $('.senav').css({left:124*i,});
    $('.senav a').css({color:'black'})
});
$('#firnav li').mouseleave(function () {
    $(this).children('ul').hide().siblings();
    i=$(this).index();
    $('#firnav>li').eq(i).removeClass('cur');
});
$('.senav').mouseover(function () {

    $('.senav').css({left:124*i,});
    $('.senav').css('display','block')
});
$('.senav').mouseout(function () {
    $('.senav').css('display','none')
});


//轮播图

var i=1;
var t=0;
function hd() {
    t=setInterval(function () {
        i++;
        if (i > 5) {
            i = 1;
            $('#slider ul').css({'marginLeft': 0})
        }
        $('#slider ul').animate({marginLeft: i * '-1920' + 'px'}, 500);
        $('#slider span').eq(i-1).addClass('cur').siblings().removeClass('cur');
    },4000);
}
hd();
$('#slider').hover(function(){
    clearInterval(t)
},function(){
    hd();
});
$('#slider span').click(function(){
    i=$(this).index();
    $('#slider span').eq(i).addClass('cur').siblings().removeClass('cur');
    $('#slider ul').animate({marginLeft: (i+1) * '-1920' + 'px'}, 500);

});