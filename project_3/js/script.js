$(document).ready(function(){
    $('#accordion-js').find('div').click(function(){
        $(this).next().stop().slideToggle();
    }).next().stop().hide();
    $('#accordion-js').find('div').click(function(){
        $(this).toggleClass('accordion_active');
    });

    $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    itemWidth: 1168,
    slideshow: false
    });

    $('.our_service > figure').hover(function () {
        $(this).find('.overlay').fadeIn("fast");

        $(this).find('span').css('color', '#f4b60d');
        },
        function() {
        $(this).find('.overlay').fadeOut("fast");
        $(this).find('span').css('color', 'white');

        });



});
