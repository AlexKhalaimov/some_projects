$(document).ready(function(){
    $('.container').find('.accordion-style').click(function(){
        $(this).next().stop().slideToggle();
    }).next().stop().hide();
    $('.container').find('.accordion-style').click(function(){
        $(this).toggleClass('active');
    });





});
