import $ from 'jquery';

// Desktop Navbar   
function navHover( itemNav ){
    let parentHeader = itemNav.closest('.header');
    let item = itemNav.find(".nav__link");
    let nav = item.data("nav");

    if( parentHeader.find(".nav__link.nav__link--active").length > 0 && !item.hasClass("nav__link--active") ){
        let navActive = $(".nav__link.nav__link--active");
        navActive.removeClass("nav__link--active");
        parentHeader.find(".nav .nav__children" + navActive.data("nav")).removeClass("nav__children--active");
    }

    item.addClass("nav__link--active");
    parentHeader.find(".nav .nav__children" + nav).addClass("nav__children--active");
}
function navUnHover(){
    let item = $('.nav').find(".nav__link.nav__link--active");
    let nav = item.data("nav");

    item.removeClass("nav__link--active");
    $(".nav .nav__children" + nav).removeClass("nav__children--active");
}

function navbarDesktopInitialize( itemNav ){
    // Desktop Hover Nav
    let timeout = null;
    // Задержка скрытия меню 0.3сек
    itemNav
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navHover( nav );
            }, 100);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navUnHover , 300);
        });
}

// Mobile Navbar
// function openNavbarOnClick( elem ){
//     const idNavbar = elem.data('navbar');
//     const target = $('.navbar-sidebar#' + idNavbar);

//     // Если есть открытое меню - скрыть его
//     $(".navbar-sidebar").removeClass("navbar-sidebar--active");

//     if ( target.length > 0 ){
//         target.addClass('navbar-sidebar--active');
//         $('.overlay').removeClass('overlay--disable');
//         $('body').addClass('hidden');
//         $('body').addClass('open-navbar');
//     } else{
//         return null;
//     }

//     // Change z-index
//     $('.header.header_sticky').addClass('header_sticky--open-sidebar');
// }

$(function(){
    // Check Windows Size
    if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
    }else{
        $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    }

    // Desktop Navbar
    navbarDesktopInitialize( $('.nav.nav--desktop .nav__item.nav__item_has-child') );
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        // Remove Class
        $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
        // Desktop Navbar
        navbarDesktopInitialize( $('.nav.nav--desktop .nav__item.nav__item_has-child') );        
    }else{
        // Remove Class
        $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    }
});