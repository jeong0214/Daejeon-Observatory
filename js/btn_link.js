const $btn_rs_link = document.querySelector(".btn_reservation");
$btn_rs_link.addEventListener("click", () => {
  window.location.href = "../html/reservation_page1.html";
});

const $btn_app_link = document.querySelector(".btn_application");
$btn_app_link.addEventListener("click", () => {
  window.location.href = "../html/reservation_page2.html";
});

const $btn_prev_step = document.querySelector(".btn_prev_Step");
$btn_prev_step.addEventListener("click", () => {
  window.location.href = "../html/reservation_page1.html";
});
