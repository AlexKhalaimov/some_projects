window.onload = function () {

    /*-- YT player controls --*/
    var playerVid = document.getElementById('videoPlayer');
    if (playerVid != null) {

        var playButton = document.getElementById('playButton');
        var tagI = playButton.firstElementChild;
        playButton.onclick = function () {
            if (tagI.className == 'icon-pause') {
                player.pauseVideo();
                tagI.className = 'icon-play';
            }
            else {
                player.playVideo();
                tagI.className = 'icon-pause';
            }

        }

    }


    /*-- speakers effect --*/
    window.sr = ScrollReveal();
    sr.reveal('.speaker', {
            duration: 2000,
			distance: '50px',
			scale: 0.7
        }, 100
    );

}

$(function () {


        /*----- speakers popup toggling -----*/

    if ($('.speaker__overlay').length !=0) {

        $('.speaker__overlay').click(function () {
            $('.modal').modal('toggle');
        });

        $('.speaker__name').click(function () {
            $('.modal').modal('toggle');
        });

/*        $('.speaker__name').hover(function () {
            var overlay = $(this).prev($('.speaker__figure')).find($('.speaker__overlay'));
            overlay.fadeIn('slow');
        }, function () {
            var overlay = $(this).prev($('.speaker__figure')).find($('.speaker__overlay'));
            overlay.fadeOut('slow').attr('style', '');
        });
*/
    }

    /*----- dropdown menu hover -----*/

        $('.dropdown').hover(function() {
        $(this).addClass('open show');
        $('.dropdown-menu').addClass(' show');
        },
        function() {
            $(this).removeClass('open show');
            $('.dropdown-menu').removeClass(' show');
        });

        /*----- counter init -----*/

        if ($('#countUp-section').length !=0) {
            var waypoint = new Waypoint({ element: document.getElementById('countUp-section'), handler: function() { $('.countUp__number').countUp(); this.destroy(); }, offset: '100%' })
        }


            /*----- topSlider init -----*/

            if ($(".owl-carousel_top").length !=0) {
                var owlTop = $(".owl-carousel_top");
                owlTop.owlCarousel({
                    dots: false,
                    autoplay: true,
                    items: 1,
                    loop: true
                });

                $('#topSlider__play').click(function () {
					$(this).children($('i')).toggleClass('icon-pause');
					$(this).children($('i')).toggleClass('icon-play');

                    if ($(this).children($('i')).hasClass('icon-play')) {
                        owlTop.trigger('stop.owl.autoplay');
                    }
                    else {
                        owlTop.trigger('play.owl.autoplay');
                    }

                });
            }




            /*----- bottomSlider init -----*/

            if ($(".owl-carousel_btm").length !=0) {
                var owlBtm = $(".owl-carousel_btm");
                var nextBtn = $('.bottomSlider .owl-next button');
                var prevBtn = $('.bottomSlider .owl-prev button');
                $(".owl-carousel_btm").owlCarousel({
                    nav: true,
                    navText: ["<button class = 'bottomSlider__prevArrow'>prev</button>", "<button class = 'bottomSlider__nextArrow'>next</button>"],
                    dots: false,
                    autoplay: true,
                    items: 1,
                    loop: true
                });
                nextBtn.click(function () {
                });
                prevBtn.click(function () {

                });
                $('#bottomSlider__play').click(function () {
					$(this).children($('i')).toggleClass('icon-pause');
					$(this).children($('i')).toggleClass('icon-play');

                    if ($(this).children($('i')).hasClass('icon-play')) {
                        owlTop.trigger('stop.owl.autoplay');
                    }
                    else {
                        owlTop.trigger('play.owl.autoplay');
                    }

                });
            }


            /*----- navigation init -----*/

         if ($('.navigation').length !=0){
             $('ul.navList > li').hover(function() {
                    $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeIn();
                }, function() {
                    $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeOut();
            });

               document.querySelector('#nav-toggle').addEventListener('click', function() {
                 this.classList.toggle('active');
               });
               $('#nav-toggle').click(function() {
                 $('ul.navList').toggle();
                 $('body').toggleClass('overflow-hidden');
                 // $('.wrapper__overlay').toggle();
               });
         }

         /*----- events buttons hovering -----*/
         if ($('.bodyEvents').length !=0) {
            $('.eventItem__button_register').click(function () {
                $(this).toggleClass('eventItem__button_pink');
                $(this).toggleClass('eventItem__button_green');
            });
        }
        /*if ($('.searchTopForm__select_date').length !=0) {
                $('.searchTopForm__select_date').pickadate();
        }*/

        /*----- event page slider init -----*/

        if ($(".eventSlider").length !=0) {
            var owlEventSlider = $(".eventSlider");
            var nextBtn = $('.eventSlider .owl-next button');
            var prevBtn = $('.eventSlider .owl-prev button');
            $(".eventSlider").owlCarousel({
                nav: true,
                navText: ["<button class = 'eventSlider__prevArrow'>prev</button>", "<button class = 'eventSlider__nextArrow'>next</button>"],
                dots: false,
                // autoWidth: true,
                // autoplay: true,
                items: 1,
                loop: true
            });
            nextBtn.click(function () {
            });
            prevBtn.click(function () {

            });
            $('#eventSlider__play').click(function () {
				$(this).children($('i')).toggleClass('icon-pause');
				$(this).children($('i')).toggleClass('icon-play');

				if ($(this).children($('i')).hasClass('icon-play')) {
					owlTop.trigger('stop.owl.autoplay');
				}
				else {
					owlTop.trigger('play.owl.autoplay');
				}
            });
        }
        /*----- About page BUTTONS SCROLL DOWN -----*/

            if ($('.aboutTop__link .buttonCommon__link').length !=0) {
                var link = $('.aboutTop__link .buttonCommon__link');
                var linkParent = link.parent('.buttonCommon');
                $('.aboutTop__link .buttonCommon__link').click( function(event){
        			event.preventDefault();
                	var scroll_el = $(this).attr('href');
                    for (var i = 0; i < linkParent.length; i++) {
                        if (linkParent[i].className = 'buttonCommon buttonCommon_pink') {
                            linkParent[i].className = 'buttonCommon buttonCommon_dark';
                        }
                    }
                    $(this).parent('.buttonCommon').toggleClass('buttonCommon_dark');
                    $(this).parent('.buttonCommon').toggleClass('buttonCommon_pink');
                   if ($(scroll_el).length != 0) {
                   $('html, body').animate({ scrollTop: $(scroll_el).offset().top-60}, 500);
                   }
                   return false;
                });
            }


            /*----- Main Plenary page BUTTONS SCROLL DOWN -----*/

                if ($('.mPlenaryContentAgenda__buttons .buttonCommon__link').length !=0) {
                    var link = $('.mPlenaryContentAgenda__buttons .buttonCommon__link');
                    var linkParent = link.parent('.buttonCommon');
                    $('.mPlenaryContentAgenda__buttons .buttonCommon__link').click( function(event){
            			event.preventDefault();
                    	var scroll_el = $(this).attr('href');

                       if ($(scroll_el).length != 0) {
                       $('html, body').animate({ scrollTop: $(scroll_el).offset().top-60}, 500);
                       }
                       return false;
                    });
                }

                /*----- Gallery page Magnific popup init -----*/
                if ($('.galleryEventAlbum').length !=0) {
                    $('.galleryEventAlbumItem__figure').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        cursor: 0,
                        gallery: {

                             enabled: true,
                             navigateByImgClick: true
                         }

                        });
                }
})
