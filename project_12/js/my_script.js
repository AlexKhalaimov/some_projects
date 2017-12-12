$(function(){

    if ($('.cargo__item').length !=0) {
        var overlay = $('.cargo__overlay');
        var item = $('.cargo__item');
        var height = overlay.height();
        var button = $('.cargo__button');

        item.hover(function(){
            $(this).find(overlay).stop();
            $(this).find(overlay).animate({
                'height': '100%'
            }, 'slow');
            $(this).find(button).css('display', 'block');
        },
        function(){
            $(this).find(overlay).stop();
            $(this).find(overlay).animate({
                'height': height
            }, 'slow',function () {
                $(this).find(button).css('display', 'none');
            });

        });
        // console.log(height);
    };

    if ($('.nav__list').length !=0) {
        var item =  $('.nav__item');
        var submenu = $('.nav__sublist');
        item.mouseover(function(){
            $(this).find(submenu).stop().slideDown('fast');
        });
        submenu.mouseleave(function(){
            $(this).stop().slideUp('fast');
        });
        item.mouseleave(function(){
            $(this).find(submenu).stop().slideUp('fast');
        });
    };
    if ($('.header__language').length !=0 ) {
        var language = $('.header__language');
        var hiddenLang = $('.header__lang_hidden');
        language.hover(function(){
            hiddenLang.css('display', 'block');
        }, function(){
            hiddenLang.css('display', 'none');
        });
    };

    if ($('.phone__list').length !=0) {
        var phoneItem = $('.phone__item');
        var phoneSublist = $('.phone__sublist');

        phoneItem.mouseover(function(){
            $(this).find(phoneSublist).stop().slideDown('fast');
        });
        phoneSublist.mouseleave(function(){
            $(this).stop().slideUp('fast');
        });
        phoneItem.mouseleave(function(){
            $(this).find(phoneSublist).stop().slideUp('fast');
        });
    }

    $("#mobile-menu").mmenu({
               "slidingSubmenus": false,
               "extensions": [
                  "pagedim-black"
               ],
               "offCanvas": {
                  "position": "right"
               },
              //  "navbars": [
              //     {
              //        "position": "top",
              //        "content": [
              //           "searchfield"
              //        ]
              //     }
              // ],
              "navbar": {
                  "title": ""
              }
            });

});
