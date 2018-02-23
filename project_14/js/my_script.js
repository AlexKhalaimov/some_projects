function initMap() {
        var centerMap = {lat: 40.856425, lng: -73.931980};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: centerMap
        });
        var marker = new google.maps.Marker({
          position: centerMap,
          map: map,
          icon: window.innerWidth > 750 ? 'images/hap-seven/marker_map.png' : 'images/hap-seven/marker_map_sm.png'
        });
}

$(function(){

    if ($('.media__slider').length != 0){

        $('#media__slider').slick({
            infinite: false,
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            asNavFor: '#media__carousel',
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        $('#media__carousel').slick({
            infinite: false,
            rtl: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            useTransform: false,
            centerMode: true,
            centerPadding: '50px',
            focusOnSelect: true,
            asNavFor: '#media__slider'
        });

		$('#media__slider').on('afterChange', function(event, slick, direction){
			var currentSlide = $(this).slick('slickCurrentSlide');
			$('#media__carousel .slick-slide').removeClass('slick-current');
			$('#media__carousel .slick-slide:eq('+currentSlide+')').addClass('slick-current');
		});

    }


	if ($('.slickslider').length != 0){

        $('#bottom-slider').slick({
            infinite: false,
            rtl: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });

        $('#top-slider').slick({
            infinite: false,
          slidesToShow: 1,
           rtl: true,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        });
    }

	if ($('.vision-slider').length != 0){

        $('#vision-slider').slick({
            infinite: false,
            rtl: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });
    }

    if ($('.overlay').length != 0) {
        var overlay = $('.overlay');
        var tile = $('.tile');
        var title = $('.tile__title');
        tile.hover(function(){
            $(this).find(overlay).fadeIn('slow');
            $(this).find(title).fadeOut('slow');
        }, function(){
            $(this).find(title).fadeIn('slow');
            $(this).find(overlay).fadeOut('slow');
        });
    }

//Hover on page 4
    if ($('.post').length != 0) {
        var post_link, pic_holder, margin, anim_time;
		var marginTop = 10;
		var marginBottom = 10;
		margin = marginTop + marginBottom;
		anim_time = 200;

        $('.post').hover(function(){
            post_link = $(this).find('.post__text-container > .post__link');
            pic_holder = $(this).find('.post__figure');

			  pic_holder.animate({
				height: pic_holder.height() - margin
			  }, anim_time, function() {
				  post_link.animate({
					marginTop: marginTop,
					marginBottom: marginBottom,
					opacity: 1
				  }, anim_time, function() {
				  });
			  });


        }, function(){
				pic_holder.stop();
				post_link.stop();
				pic_holder.animate({
					height: pic_holder.height() + margin
				}, anim_time, function(){
					$(this).height('auto');
				});

			  post_link.animate({
				marginTop: 0,
				marginBottom: 0,
				opacity: 0
			  }, anim_time, function() {
			  });

        })
    }

////////////// BUTTONS SCROLL DOWN ///////////

    if ($('.scroll-down').length !=0) {
        $('.scroll-down').click( function(event){
			event.preventDefault();
        	var scroll_el = $(this).attr('href');
           if ($(scroll_el).length != 0) {
           $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
           }
           return false;
        });
    }
////////// COUNTDOWN /////////////
	if ($('#countdown').length != 0) {
		var d = new Date();
		d.setHours(d.getHours()+3);
		d.setMinutes(13);
		$('#countdown').countdown({
			until: d,
			layout:'{desc}<span>{snn} : {mnn} : {hnn} </span>',
			padZeroes: true,
			format: 'HMS'
		});
	}
});

$(function(){
///// loading more posts //////
	function Utils() {}

	Utils.prototype = {
		constructor: Utils,
		isElementInView: function (element, fullyInView) {
			var pageTop = $(window).scrollTop();
			var pageBottom = pageTop + $(window).height();
			var elementTop = $(element).offset().top;
			var elementBottom = elementTop + $(element).height();

			if (fullyInView === true) {
				return ((pageTop < elementTop) && (pageBottom > elementBottom));
			} else {
				return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
			}
		}
	};

	var Utils = new Utils();

	var addPostsNum = 2;//page 5
	var addPrNum = 3;//page 10

	window.addEventListener('scroll', function() {
		if ($('#more-post__link').length > 0){
			var isElementInView = Utils.isElementInView($('#more-post__link'), false);

			if (isElementInView) {
				var hiddenPost = $('.post:hidden:lt('+addPostsNum+')');
				//hiddenPost.show(0);
				hiddenPost.each(function () {
					this.style.setProperty('display', 'block', 'important');
				});
				if (hiddenPost.length == 0){
					$('#more-post__link').hide(0);
				}
			} else {
			}
		}
		if ($('.pr__link').length > 0){
			var isElementInView = Utils.isElementInView($('.pr__link'), false);

			if (isElementInView) {
				var hiddenPost = $('.pr-block:hidden:lt('+addPrNum+')');
				console.log('hiddenPost.length=' + hiddenPost.length);
				//hiddenPost.show(0);
				hiddenPost.each(function () {
					this.style.setProperty('display', 'flex', 'important');
				});
				//console.log($('.pr-block:visible').length);
				if (hiddenPost.length == 0){
					$('.pr__link').hide(0);
				}
			} else {
			}
		}


	});
});
