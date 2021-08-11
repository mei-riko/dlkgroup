import $ from 'jquery';

$(function() {
    // Input mask
    if( $('input[type="tel"]').length > 0 ) {
        $('input[type="tel"]').inputmask({
            mask: "+9 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: false,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('input__field--error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('input__field--error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
            },
        })
    }
});

$('input[type="tel"]').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});