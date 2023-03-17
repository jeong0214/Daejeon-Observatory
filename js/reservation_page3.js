const $formPage3 = document.querySelector("#form_page3");
const $checkbox = document.querySelector(".ck_caution input");
const $btn_reservation_complete = document.querySelector(
  ".btn_reservation_complete"
);
const $reservation_overlay = document.querySelector(
  ".reservation_confirm_overlay"
);

const agreements = {
  check: false,
};

$formPage3.addEventListener("submit", (e) => e.preventDefault());

$checkbox.addEventListener("change", () => {
  if ($checkbox.checked) {
    $btn_reservation_complete.disabled = false;
  } else {
    $btn_reservation_complete.disabled = true;
  }
});

$btn_reservation_complete.addEventListener("click", () => {
  $reservation_overlay.classList.add("on");
});

$reservation_overlay.addEventListener("click", () => {
  window.location.href = "../html/index.html";
});
