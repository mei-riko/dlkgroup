import $ from 'jquery';

$(function() {
    if( $(".js-slide").length > 0 ){
        let $slider = $(".js-slide");
        // Инициализация слайда
        $slider.each(function (_, slide) {
            // авто слайд
            var autoSlide = false; // Включить или выключить авто слайд (true-включен, false-выключен) (Разрешено изменять значение)
            var _timer = null; // Таймер авто слайд (Запрещенно изменять значение)
            var time = 10000; // Время переключение слайда (Разрешено изменять значение)
            var pause = time; // Небольшая пауза после того как пользователь перешел сам на слайд (Разрешено изменять значение)
    
            var _slideSwitch = true; // Запр/Разр переключать слайд (Это для ленивой загрузки не трогать значение!!!)
            var activeSlide = 0; // Текущий активный слайд (0 - первый элемент слайда)
            var slideItems = $(slide).find(".js-slide-item") // Массив блоки слайдера (картинки и текст)
            var allSlideLength = slideItems.length; // Количество блоков слайдера (1,2,3,4...)
            var slideLinks = $(slide).find('.js-slide-link'); // Массив кнопок переключений слайда
            var btnPrev = $(slide).find('.js-slide-prev'); //Кнопка переключение слайда (Предыдущий)
            var btnNext = $(slide).find('.js-slide-next'); //Кнопка переключение слайда (Следующий)
    
            console.log(
                slideLinks
            );
            
            // События

            // Событие кнопки переключение слайда (Предыдущий)
            btnPrev.on("click", prevSlide);
            // Событие кнопки переключение слайда (Следующий)
            btnNext.on("click", nextSlide);
    
            slideLinks.each(function (index, btn) {
                $(btn).on("click", function (event) {
                    event.preventDefault();
                    checkedSwitchingSlides(index);
                    resetAutoSlide(event);
                });
            });
    
            // Преключение на предыдущий слайд
            function prevSlide(event) {
                resetAutoSlide(event)
                checkedSwitchingSlides(activeSlide - 1)
            };
            // Преключение на следующий слайд
            function nextSlide(event) {
                resetAutoSlide(event)
                checkedSwitchingSlides(activeSlide + 1)
            };
            // Проверка преключение слайда
            function checkedSwitchingSlides(count) {
                if(_slideSwitch===false) return false
                var length = allSlideLength - 1;
                // Если слайд в диапазоне от 0 до количество блоков слайда
                if (count >= 0 && count <= length) {
                    updateSlide(count)
                }
                // если пользователь перелючает дальше после последнего слайда возврощаю его в 1 слайд
                if (count >= 0 && count > length) {
                    updateSlide(0)
                }
                // если пользователь перелючает на передыдщий слайд после первого слайда возврощаю его на последний слайд
                if (count < 0 && count <= length) {
                    updateSlide(length)
                }
                // иначе не переключаю слайд
            };
            // Обновить слайд 
            function updateSlide(count) {
                var nextBlock = $(slideItems[count]);
                var nextBlockImg = nextBlock.find("img");
                // Ленивая загрузка
                _slideSwitch=false; //запрещаю переключаться
                if(nextBlockImg.attr("data-src")){
                    nextBlockImg.attr("src",nextBlockImg.attr("data-src")).removeAttr("data-src")
                    nextBlockImg.on("load",function(){
                        switching(count ,nextBlock)
                    })
                }else{
                    switching(count ,nextBlock)
                }
            };
            // переключить слайд
            function switching(count ,nextBlock){
                // кнопки
                $(slide).find('.slider__controls-item--active').removeClass("slider__controls-item--active");  // Удаляю класс у переключателя
                $(slideLinks[count]).addClass("slider__controls-item--active");// Присваиваю класс переключателю
                
                $(slide).find('.slider__item--active').removeClass("slider__item--active");
    
                nextBlock.addClass("slider__item--active")
                activeSlide = count; // обновляю счет
                _slideSwitch=true;
            };
            // автовоспроизведение слайдов
            function autoSlideStart(){
                _timer = clearInterval(_timer)
                _timer = setInterval(nextSlide, time);
            };
            // пользователь перешел на другой слайд, автовоспроведение начнеться через некоторое время
            function resetAutoSlide(event){
                if(event && autoSlide){
                    _timer = clearInterval(_timer)
                    setTimeout(autoSlideStart, pause);
                }
            };
    
            // Запуск слайда
            function start(){
                checkedSwitchingSlides(activeSlide);
                
                if(autoSlide){
                    autoSlideStart()
                }
            };
            start()
        });
    }
});