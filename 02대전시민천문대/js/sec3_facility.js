// 메인화면 섹션 3 시설안내 탭 기능
const $fi_tab = document.querySelectorAll(".fi_tab");
const $fi_img = document.querySelectorAll(".fi_img");

$fi_tab.forEach((tab, tab1) => {
  tab.addEventListener("click", function () {
    $fi_img.forEach((img) => {
      img.classList.remove("on");
    });
    $fi_tab.forEach((tab2) => {
      tab2.classList.remove("on");
    });

    $fi_tab[tab1].classList.add("on");
    $fi_img[tab1].classList.add("on");
  });
});
