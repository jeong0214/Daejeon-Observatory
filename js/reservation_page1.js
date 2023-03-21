// 예약페이지1 기능

// 체크박스 기능
const $formPage1 = document.querySelector("#form_page1");
const $checkbox = document.querySelector(".ck_caution input");
const $btnApplication = document.querySelector(".btn_application");

const agreements = {
  check: false,
};

$formPage1.addEventListener("submit", (e) => e.preventDefault());

$checkbox.addEventListener("change", () => {
  if ($checkbox.checked) {
    $btnApplication.disabled = false;
  } else {
    $btnApplication.disabled = true;
  }
});
