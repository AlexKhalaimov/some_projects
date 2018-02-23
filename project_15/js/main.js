$(function(){


    /*----- search form toggle -----*/

    if ($('#form-wrapper').length !=0) {
        $('#open-form').click(function(){
            $('#form-wrapper').slideToggle();
			$('.header__list-link_search').toggleClass('s-close');
			$('.header__list-link_phone').toggleClass('p-close');
        });
    }

    /*----- dropdown menu hover -----*/
    if ($('.dropdown').length !=0) {
        $('.dropdown').hover(function() {
        $(this).addClass('open');
        $('.dropdown-menu').prop('aria-expanded', true);
        },
        function() {
            $(this).removeClass('open');
            $('.dropdown-menu').prop('aria-expanded', false);
        });
    }



    /*----- top-slider init -----*/
    if ($('.top-slider').length !=0) {
        $('.top-slider').owlCarousel({
            loop: true,
            items: 1,
            rtl:true,
            nav:true,
            dots:false,
            navText: ["<button class = 'top-slider__prevArrow'>prev</button>", "<button class = 'top-slider__nextArrow'>next</button>"]
        });
    }
    /*---- mobile menu init ----*/

    if ($('.navbar-toggle').length !=0) {
        $('.navbar-toggle').click(function () {
			$('.wrapper').toggleClass('mobile_open');
        });
    }


    /*---- contacts page overlay show ----*/

    if ($('.contactForm__submit').length !=0) {

        $('.contactForm__submit').click(function () {
            $('#TnxModal').modal();
        })
    }
    /*----- Contact page  for input type file -----*/

    if ($('.contactForm__input_file').length !=0) {
        $( '.contactForm__input_file' ).each( function()
    	{
    		var $input	 = $( this ),
    			$label	 = $input.next( 'label' ),
    			labelVal = $label.html();

    		$input.on( 'change', function( e )
    		{
    			var fileName = '';

    			if( this.files && this.files.length > 1 )
    				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    			else if( e.target.value )
    				fileName = e.target.value.split( '\\' ).pop();

    			if( fileName )
    				$label.find( 'span' ).html( fileName );
    			else
    				$label.html( labelVal );
    		});

    		// Firefox bug fix
    		$input
    		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    	});
    }

    /*------- Personal Area page Modal togling --------*/
    if ($('.logIn__link').length !=0) {
        $('.logIn__link').click(function () {
            $('#loginModal').modal();
        });
        $('.loginModalForm__submit').click(function () {
            $('#loginModal').toggleClass('modalTextHidden');
        });
        $('#loginModal').on('hidden.bs.modal', function () {

            $('#loginModal').toggleClass('modalTextHidden');
        });

    }

        /*----- Jobs page Modal toggling -----*/
    if ($('.jobFindItem__button').length !=0) {
        $('.jobFindItem__button').click(function () {
            $('#jobsModal').modal();
        });
        $('.jobsModalForm__submit').click(function () {
            $('#jobsModal').toggleClass('modalTextHidden');
        });
        $('#jobsModal').on('hidden.bs.modal', function () {

            $('#jobsModal').toggleClass('modalTextHidden');
        });
    }

    /* Jobs page input type file*/
    if ($('.jobsModalForm__input_file').length !=0) {
        $( '.jobsModalForm__input_file' ).each( function()
    	{
    		var $input	 = $( this ),
    			$label	 = $input.next( 'label' ),
    			labelVal = $label.html();

    		$input.on( 'change', function( e )
    		{
    			var fileName = '';

    			if( this.files && this.files.length > 1 )
    				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    			else if( e.target.value )
    				fileName = e.target.value.split( '\\' ).pop();

    			if( fileName )
    				$label.find( 'span' ).html( fileName );
    			else
    				$label.html( labelVal );
    		});

    		// Firefox bug fix
    		$input
    		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    	});
    }


    /*----- Jobs page Masonry init -----*/
    if ($('.jobFind-section').length !=0) {

        function masonry_y(){ var masonryTarget = $('div.masonryContainer'); var hasMasonry = masonryTarget.data('masonry') ? true : false; if ($(window).innerWidth() <= 768 && hasMasonry) { $('div.masonryContainer').masonry('destroy'); } else if (!hasMasonry){ $('div.masonryContainer').masonry({ itemSelector: 'div.masonryItem', percentPosition: true }); } };

        $(window).ready(function () { masonry_y(); });
        $(window).resize(function () { masonry_y(); });
    }

});
