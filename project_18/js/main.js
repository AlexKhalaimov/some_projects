$(function(){
    var buttonPlus = $('button[name=valueUp]');
    var buttonMinus = $('button[name=valueDown]');
    buttonPlus.click(function(){
        var input = $(this).parent().prev('input');
        var inputVal = parseInt(input.val(), 10);
        if (!inputVal) {
            inputVal = 0;
        }
         ++inputVal;
        input.val(inputVal +' шт');
    });
    buttonMinus.click(function(){
        var input = $(this).parent().prev('input');
        var inputVal = parseInt(input.val(), 10);
        if (!inputVal) {
            inputVal = 0;
        }
         --inputVal;
         if (inputVal<0) {
             inputVal = 0;
         }
        input.val(inputVal +' шт');
    });
});
