$(document).ready(function(){
         $(".owl-carousel").owlCarousel({
             loop:true,
             nav:true,
             rtl:true,
             dots:false,
             center:false,
             margin: 0,
             items:4,
             responsive: {
                 0:{
                     items:1,
                     nav:true
                 },
                 550:{
                    items:2,
                    nav:true
                },
                768:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true,
                }
             }
        });
         $('.owl-next').html('');
         $('.owl-prev').html('');

         $( "a").imageLightbox();

        $(".gallery").imageLightbox(
        {
            selector:       'id="imagelightbox"',   // string;
            allowedTypes:   'png|jpg|jpeg|gif',     // string;
            animationSpeed: 250,                    // integer;
            preloadNext:    true,                   // bool;            silently preload the next image
            enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
            quitOnEnd:      false,                  // bool;            quit after viewing the last image
            quitOnImgClick: true,                  // bool;            quit when the viewed image is clicked
            quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
            onStart:        false,                  // function/bool;   calls function when the lightbox starts
            onEnd:          false,                  // function/bool;   calls function when the lightbox quits
            onLoadStart:    false,                  // function/bool;   calls function when the image load begins
            onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
        });

});
