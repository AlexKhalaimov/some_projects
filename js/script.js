$(document).ready(function(){
    $('.description').find('.accordion-style').click(function(){
        $(this).next().stop().slideToggle();
    }).next().stop().hide();
    $('.description').find('.accordion-style').click(function(){
        $(this).toggleClass('active');
    });





});
