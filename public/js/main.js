var swiper = new Swiper(".mySwiper-hot-sale", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-rubros", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2-rubros", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-rubros",
    prevEl: ".swiper-button-prev-rubros",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoint: {

      768: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 50,
      }
  }
});

var swiper = new Swiper(".mySwiper-marcas", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination-marcas",
  },
});
