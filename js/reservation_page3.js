//예약페이지 3 기능

//체크박스 기능
const $formPage3 = document.querySelector("#form_page3");
const $checkbox = document.querySelector(".ck_caution input");

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

//////////////예약완료 버튼 오버레이
const $btn_reservation_complete = document.querySelector(
  ".btn_reservation_complete"
);
const $reservation_overlay = document.querySelector(
  ".reservation_confirm_overlay"
);
$btn_reservation_complete.addEventListener("click", () => {
  $reservation_overlay.classList.add("on");
});

$reservation_overlay.addEventListener("click", () => {
  window.location.href = "../html/index.html";
});

///////////// input요소 안내문구
const $name = document.querySelector("#input_name"),
  reg = /^[가-힣]/;
$name.addEventListener("input", () => {
  const nameValue = $name.value;
  document.querySelector(".name_log").textContent = !reg.test(nameValue)
    ? "정확히 입력해주세요."
    : "";
}),
  $name.addEventListener("blur", () => {
    document.querySelector(".name_log").textContent = "";
  });

const $number = document.querySelector("#input_number"),
  reg2 = /^\d{2,3}\d{3,4}\d{4}$/;
$number.addEventListener("input", () => {
  const numberValue = $number.value;
  document.querySelector(".number_log").textContent = !reg.test(numberValue)
    ? "'-' 포함한 정확한 연락처를 입력해주세요."
    : "";
}),
  $number.addEventListener("blur", () => {
    document.querySelector(".number_log").textContent = "";
  });

const $email = document.querySelector("#input_email"),
  reg3 = /^[a-zA-Z0-9]+$/;
$email.addEventListener("input", () => {
  const emailValue = $email.value;
  document.querySelector(".email_log").textContent = !reg.test(emailValue)
    ? "사용 중인 이메일을 입력해주세요."
    : "";
}),
  $email.addEventListener("blur", () => {
    document.querySelector(".email_log").textContent = "";
  });

const $password = document.querySelector("#input_pw"),
  reg4 = /^[a-zA-Z0-9]*$/;
$password.addEventListener("input", () => {
  const pwValue = $password.value;
  document.querySelector(".pw_log").textContent = !reg.test(pwValue)
    ? "특수문자를 제외한 숫자,영문으로 구성해주세요."
    : "";
}),
  $password.addEventListener("blur", () => {
    document.querySelector(".pw_log").textContent = "";
  });
