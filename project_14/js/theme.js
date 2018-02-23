jQuery(document).ready(function($){

	// main nav
	(function(){

		$(window).on('resize', function(){});

		$('#main-nav-btn').on('click', function(e){
			var nav = $('#main-nav');

			if ( nav.hasClass('active') ) {
				nav.removeClass('active');
				//$('body').css('overflow', 'auto');
			}
			else {
				nav.addClass('active');
				//$('body').css('overflow', 'hidden');
			}
		});

		$('#main-nav-close').on('click', function(e){
			var nav = $('#main-nav');
			nav.removeClass('active');
		});
	})();

	// video
	(function(){
		if ( ! $.magnificPopup ) return;

		$('.video-play-btn').magnificPopup({
			type: 'iframe',
		});
		$('.video-play-link').magnificPopup({
			type: 'iframe'
		});
	})();
});
