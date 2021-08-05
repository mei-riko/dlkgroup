import $ from 'jquery';

$(function() {
    if( $(".swiper-container").length > 0 ){
        var swiperProject = new Swiper(".swiper-container_project", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: ".swiper-button__next",
              prevEl: ".swiper-button__prev",
            },
        });
    }
});