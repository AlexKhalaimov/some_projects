$(function(){
    var $closeButton = $('.close-button');
    var $myForm = $('.my-form');
    var $button = $('button[data-src="#hidden"]');

    $button.on('click', function(){
        $myForm.removeClass('hidden').addClass('visible');
    });

    $closeButton.on('click', function(){
        $myForm.removeClass('visible').addClass('hidden');
    });
});
