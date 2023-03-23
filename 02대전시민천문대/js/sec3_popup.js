// 메인화면 섹션 3 스와이퍼 기능
var swiper = new Swiper(".popup", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".sec3_popup_dt",
    clickable: true,
  },
});
