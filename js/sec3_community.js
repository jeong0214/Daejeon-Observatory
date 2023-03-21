// 메인화면 섹션 3 커뮤니티 탭 기능
const $cm_tab = document.querySelectorAll(".cm_tab");
const $cm_detail = document.querySelectorAll(".community_detail_wrap");

$cm_tab.forEach((tab, tab1) => {
  tab.addEventListener("click", function () {
    $cm_detail.forEach((img) => {
      img.classList.remove("on");
    });
    $cm_tab.forEach((tab2) => {
      tab2.classList.remove("on");
    });

    $cm_tab[tab1].classList.add("on");
    $cm_detail[tab1].classList.add("on");
  });
});
