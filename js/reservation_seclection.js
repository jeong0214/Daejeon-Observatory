const $rs_tab = document.querySelectorAll(".rs_tab");
const $rs_detail = document.querySelectorAll(".btn_reservation_wrap");

$rs_tab.forEach((tab, tab1) => {
  tab.addEventListener("click", function () {
    $rs_detail.forEach((img) => {
      img.classList.remove("on");
    });
    $rs_tab.forEach((tab2) => {
      tab2.classList.remove("on");
    });

    $rs_tab[tab1].classList.add("on");
    $rs_detail[tab1].classList.add("on");
  });
});
const $buttons = document.querySelectorAll(".btn_s");

function toggleButtonClass(buttons, onButton) {
  buttons.forEach((button) => {
    button.classList.remove("on");
  });
  onButton.classList.add("on");
}

$buttons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleButtonClass($buttons, button);
  });
});
