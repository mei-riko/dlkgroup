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
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2Vic29obyIsImEiOiJja2d0YnJleGMwOWs4MnJvNjZmeHQ0ZHd5In0.O3SaifC5NcA4dP8eWN1O1w';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/websoho/cks68c6hrdtwx17plnob1kqe7', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
});

import '../items/slider/slider';
import '../items/slider/swiper';
import '../items/toggle/toggle';
import '../items/input/input';
import '../blocks/tabs/tabs';
import '../blocks/filters/filters';
import '../blocks/nav/nav';
import './mouseup';