import $ from 'jquery';

$(function() {
    if( $(".swiper-container").length > 0 ){
      var swiperIndexMain = new Swiper(".content_filters-tab__slider .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
    });
        var swiperProject = new Swiper(".swiper-container_projects", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: ".swiper-button_next",
              prevEl: ".swiper-button_prev",
            },
            observer: true,
            observeParents: true
        });
        var swiperElite = new Swiper(".swiper-container_elites", {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
              nextEl: ".swiper-button_next",
              prevEl: ".swiper-button_prev",
            },
            observer: true,
            observeParents: true
        });
    }
});