// $(document).ready(function () {

//    $("#owl-first").owlCarousel({

//       navigation: true, // Show next and prev buttons

//       slideSpeed: 300,
//       paginationSpeed: 400,

//       items: 1,
//       itemsDesktop: false,
//       itemsDesktopSmall: false,
//       itemsTablet: false,
//       itemsMobile: false

//    });

// });

$(document).ready(function () {
   $('#owl-first').owlCarousel({
      loop: true, //Зацикливаем слайдер
      margin: 155, //Отступ от картино если выводите больше 1
      nav: true, //Отключил навигацию
      navText: [
         '<svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54 27H2M2 27L26.96 2M2 27L26.96 52" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>',
         '<svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54 27L29.04 52M2 27H54H2ZM54 27L29.04 2L54 27Z" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>'
      ],
      dots: true, //Показать многоточия навигации
      autoplay: true, //Автозапуск слайдера
      smartSpeed: 1000, //Время движения слайда
      autoplayTimeout: 5000, //Время смены слайда
      autoplayHoverPause: true, //Пауза при наведении курсора мыши
      responsive: { //Адаптация в зависимости от разрешения экрана
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   });
});

$(document).ready(function () {
   $('#owl-second').owlCarousel({
      loop: true, //Зацикливаем слайдер
      margin: 163, //Отступ от картино если выводите больше 1
      nav: true, //Отключил навигацию
      navText: [
         '<svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54 27H2M2 27L26.96 2M2 27L26.96 52" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>',
         '<svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54 27L29.04 52M2 27H54H2ZM54 27L29.04 2L54 27Z" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>'
      ],
      dots: true, //Показать многоточия навигации
      autoplay: true, //Автозапуск слайдера
      smartSpeed: 1000, //Время движения слайда
      autoplayTimeout: 5000, //Время смены слайда
      autoplayHoverPause: true, //Пауза при наведении курсора мыши
      responsive: { //Адаптация в зависимости от разрешения экрана
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   });
});