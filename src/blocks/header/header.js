import $ from 'jquery';


$(function(){
    $('.header__burger').on('click', function(){
        $('.header__main').addClass('header__main--active');
        $('body').css('overflow', 'hidden');
    });
    // Check Windows Size
    // if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
    //     $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
    // }else{
    //     $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    // }

});

// Resize
$(window).on("resize", function(){
    // if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
    //     // Remove Class
    //     $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
    //     // Desktop Navbar
    //     navbarDesktopInitialize( $('.nav.nav--desktop .nav__item.nav__item_has-child') );        
    // }else{
    //     // Remove Class
    //     $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    // }
});