$(function(){
    $('.menu').on('click',function(){
        $('.g-nav').slideToggle(300);
        $('.menu, .header-box').toggleClass('on');
    });
});