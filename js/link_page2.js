// 예약페이지2 버튼 링크
const $btn_prev_step = document.querySelector(".btn_prev_step");
$btn_prev_step.addEventListener("click", () => {
  window.location.href = "../html/reservation_page1.html";
});

const $btn_next_step = document.querySelector(".step_individual");
$btn_next_step.addEventListener("click", () => {
  window.location.href = "../html/reservation_page3.html";
});

const $btn_next_step2 = document.querySelector(".step_organization");
$btn_next_step2.addEventListener("click", () => {
  window.location.href = "../html/reservation_page4.html";
});
