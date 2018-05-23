$(function(){

    /* masonry plagin init */
    if ($('.gallery__container').length !=0) {
        var container = $('.gallery__container');
        container.imagesLoaded( function() {
            container.masonry({
               itemSelector: '.gallery__img',
               gutter: 10,
               percentPosition: true,
               columnWidth: '.percentSize'
           });
       });
    }


   /* top slider init */
   if($('.slider_top').length !=0){

       $('.slider_top').owlCarousel({
           loop: true,
           dots: false,
           items: 1,
           responsive: {
               992: {
                   dots: true
               }
           }
       });
   }

   /* testimonials slider init */
    if ($('.slider_testimonials').length !=0) {

        $('.slider_testimonials').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1
        });
    }

    /* navigation dropdowns toggling */
    if ($('.nav-mobile').outerWidth()==0) {

        $('ul.navList > li').hover(function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeIn();
           }, function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeOut();
       });

        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
         $('nav ul').slideToggle();
       });
       $('#nav-toggle').on('click', function() {
         this.classList.toggle('active');
         $('.navigation__overlay').toggleClass('visible');
         $('body').toggleClass('overflow-hidden');
       });
    }

    /*----- mobile menu toggling ----*/
        if ($('.nav-mobile').outerWidth() !=0 ) {

            $('#mobileToggle').click(function(){
                $(this).toggleClass('active');
                $('.navList').toggleClass('navList_active');
                $('.overlay').toggleClass('overlay_open');

            });
            $('.overlay').click(function() {
              $('.navList').toggleClass('navList_active');
              $('.overlay').toggleClass('overlay_open');
              $('#mobileToggle').toggleClass('active');
          });
            $('nav ul li a:not(:only-child)').click(function (e) {

            $(this).siblings('.nav-dropdown').slideToggle();

            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
            });
            $('html').click(function() {
              $('.nav-dropdown').slideUp();


            });
        }

        /*----- scroll to  -----*/

        if ($('.footer-content__link').length !=0) {
            $('.footer-content__link').click(function(){
                $('html, body').animate({scrollTop: '0px'}, 1000);
            });
        }
        $('.scrollLink').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

});
