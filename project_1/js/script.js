$(document).ready(function(){

        $('.multiple-items').slick({

      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1
        });

    $('.slick-current').next('.slick-active').next('div').children().addClass('visible');
    $('.visible').next('img').css('left', '0');

    $('.slick-arrow').click(function(){
        var $target = $('.slick-current').next('.slick-active').next('div');
        $('.slick-slide').children().removeClass('visible');

        $target.children().addClass('visible');
        $('.visible').next('img').css('left', '0');

    });



});
