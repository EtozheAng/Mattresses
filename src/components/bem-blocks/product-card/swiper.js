let swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    410: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1230: {
      slidesPerView: 3.5,
    },
    1600: {
      slidesPerView: 4,
    },
  },
})
