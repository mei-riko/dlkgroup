import $ from 'jquery';

$(document).on("click", ".filters .filters__item", function(){
    let $filterItem = $(this);
    let $filtersParent = $filterItem.closest(".filters");
    let $filterItemActive = $filtersParent.find(".filters__item--active");
    // let $filtersHeading = $filterItem.find(".filters__heading");
    let $filtersOptions = $filterItem.find(".filters__options");

    if( !$filterItem.hasClass("filters__item--active") ){
        if( $filterItem != $filterItemActive ){
            $filterItemActive.removeClass("filters__item--active");
            $filterItemActive.find(".filters__options").removeClass("filters__options--active");
    
            $filterItem.addClass("filters__item--active");
            $filtersOptions.addClass("filters__options--active");
        }
    }else{
        $filterItem.removeClass("filters__item--active");
        $filtersOptions.removeClass("filters__options--active");
    }

});

$(document).on('mouseup', function (e){
    let $filterActive = $(".filters .filters__item.filters__item--active");

    if (!$filterActive.is(e.target) // клик был не по фильтру
        && $filterActive.has(e.target).length === 0 // и не по его опциям
    ) {
        $filterActive.removeClass("filters__item--active");
        $filterActive.find(".filters__options").removeClass("filters__options--active");
    }
});