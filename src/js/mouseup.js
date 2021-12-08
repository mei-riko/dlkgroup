import $ from 'jquery';
$(document).on('mouseup', function (e){
    let $headerActive = $('.header__main.header__main--active')
    if (!$headerActive.is(e.target) // клик был не по блоку
          && $headerActive.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
        $('.header__main').removeClass('header__main--active');
        $('body').removeAttr('style');
    }
});