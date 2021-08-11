import $ from 'jquery';

$(function() {
    $('.toggle .toggle__title').on('click', function(){
        let $toggleTitle = $(this);
        let $toggleParent = $toggleTitle.closest('.toggle');
        let $toggleContent = $toggleParent.find('.toggle__content');

        $toggleTitle.toggleClass('toggle__title--active');
        $toggleParent.toggleClass('.toggle--active');
        $toggleContent.slideToggle();
    })
});