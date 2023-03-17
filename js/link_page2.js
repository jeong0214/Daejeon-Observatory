const $btn_prev_step = document.querySelector(".btn_prev_step");
$btn_prev_step.addEventListener("click", () => {
  window.location.href = "../html/reservation_page1.html";
});

const $btn_next_step = document.querySelector(".btn_next_step");
$btn_next_step.addEventListener("click", () => {
  window.location.href = "../html/reservation_page3.html";
});
