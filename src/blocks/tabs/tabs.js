import $ from 'jquery';

$(document).on("click", ".tabs .tabs__item", function(){
    let $tabParent = $(this).parent();
    let $tabContainer = $tabParent.closest(".tabs-container");
    let tabContentId = $(this).data("content");
    let $tabContent = $(".tabs-content" + tabContentId);

    let count = $(this).index();
    if( $tabParent.find(".tabs__heading").length > 0 ){
        count = count - 1;
    }

    $tabParent.find(".tabs__item").removeClass("tabs__item--active").eq( count ).addClass("tabs__item--active");
    $tabContainer.find(".tabs-content").removeClass("tabs-content--show").removeClass("tabs-content--active");
    
    $tabContent.addClass("tabs-content--active");

//     if( tabContent.hasClass("tabs-content_has-slider") && !tabContent.find(".owl-carousel").hasClass("owl-loaded") ){
//         tabContent.addClass("tabs-content--show");
//         let bLazy = new Blazy();
//         bLazy.revalidate;
//     }
});