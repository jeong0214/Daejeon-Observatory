// 메인화면 섹션 2 스와이퍼 기능
var swiper = new Swiper(".sec2_slide", {
  loop: true,
  // loopAdditionalSlides: 1,
  // loopedSlides: 1,
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
