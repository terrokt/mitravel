const swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.swiper-container'),
      burger = document.querySelector('.burger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      playButtonsFirst = document.querySelectorAll('.main-slider__play');
      
  
     
let swiperSlider1 = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper__btn-left',
    prevEl: '.swiper__btn-right',
  },
  // инициализация слайдера, с изменением навигации
});

swiperSlider2.on('transitionEnd', function() {
  let videos = document.querySelectorAll('.hero__slider video');
  videos.forEach((el) => {
    el.pause(); //ставит видео на паузу при перелистывании слайда
    el.curentTime = 0; //возвращает видео к началу
  });
  playButtonsFirst.forEach((el) => {
    el.style.display = 'block'; //возвращает кнопку плей
  });
})

burger.addEventListener('click',() => {
  menu.classList.add('menu--visible');
});

close.addEventListener('click',() => {
  menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    video.play();
  });
});