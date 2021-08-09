import $ from 'jquery';

$(function() {
    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
});

import '../blocks/slider/slider';
import '../blocks/slider/swiper';
import '../blocks/tabs/tabs';
import '../blocks/filters/filters';
import './mouseup';