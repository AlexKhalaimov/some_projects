$(function() {

    /*----- mobile nav toggle -----*/
    if ($('#nav-toggle').length !=0) {

        $('ul.navList > li').hover(function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeIn();
           }, function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeOut();
       });

        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
         $('.navList').slideToggle();
       });
       $('#nav-toggle').on('click', function() {
         this.classList.toggle('active');
         $('.navigation__overlay').toggleClass('visible');
         $('body').toggleClass('overflow-hidden');
       });
    }

        /*----- carousel init -----*/
        $('#carousel').owlCarousel({
            // loop: true,
            rtl: true,
            items: 1,
            nav: true,
            navText: ["<button class = 'carousel__prevArrow'>prev</button>", "<button class = 'carousel__nextArrow'>next</button>"],
            dots: false,
            loop: true
        });

        /*----- popup init -----*/
        if ($('#popupCall').length !=0) {
            $('#popupCall').click(function () {
                $('body').toggleClass('overlay');
                $('#popupWrapper').slideToggle();
            });
        }
        if ($('#popupWrapper').length !=0) {
            $('#popupCancel').click(function () {
                $('#popupWrapper').slideToggle();
                $('body').toggleClass('overlay');
            });
            $('#popupFormSubmit').click(function () {
                $('#popupWrapper').slideToggle();
                $('body').toggleClass('overlay');
            });
        }

        /*----- scroll to content -----*/

        if ($(".navList").length !=0) {
            var link = $('.navList__link');
            var linkParent = link.parent('li');
            $('.navList__link').click( function(event){
                event.preventDefault();
                var scroll_el = $(this).attr('href');
                linkParent.removeClass('navList__item_active');
                $(this).parent().addClass('navList__item_active');
               if ($(scroll_el).length != 0) {
               $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500);
               }
               if ($('#nav-toggle').hasClass('active')) {
                       $('.navList').slideToggle();
                       $('#nav-toggle').toggleClass('active');
                       $('body').toggleClass('overflow-hidden');
               }
               return false;
            });
        }


});
