const $bars = document.querySelector(".bars");
const $M_gnb = document.querySelector(".M_gnb_overlay");
const $gnb = document.querySelector(".M_gnb");
const $push_bar = document.querySelector(".push_bar");

$bars.addEventListener("click", () => {
  $M_gnb.classList.add("on");
});
$push_bar.addEventListener("click", () => {
  $M_gnb.classList.remove("on");
});

$gnb.innerHTML = ` <ul>
<li>
  <span>천문대소개
  <i class="fa-solid fa-caret-down"></i>
  </span>
  <ul class="sub">
    <li><a href="#">인사말</a></li>
    <li><a href="#">현황 및 조직도</a></li>
    <li><a href="#">시설안내</a></li>
    <li><a href="#">홍보자료</a></li>
  </ul>
</li>
<li>
<span>이용안내
  <i class="fa-solid fa-caret-down"></i>
  </span>
  <ul class="sub">
    <li><a href="#">관람안내</a></li>
    <li><a href="#">관측대상</a></li>
    <li><a href="#">오시는길</a></li>
  </ul>
</li>
<li>
<span>예약안내
  <i class="fa-solid fa-caret-down"></i>
  </span>
  <ul class="sub">
    <li><a href="#">관람예약</a></li>
    <li><a href="#">특별프로그램</a></li>
    <li><a href="#">봉사활동</a></li>
  </ul>
</li>
<li>
<span>천문대소식
  <i class="fa-solid fa-caret-down"></i>
  </span>
  <ul class="sub">
    <li><a href="#">행사사진</a></li>
    <li><a href="#">천문정보</a></li>
    <li><a href="#">아스트로갤러리</a></li>
  </ul>
</li>
<li>
<span>커뮤니티
  <i class="fa-solid fa-caret-down"></i>
  </span>
  <ul class="sub">
    <li><a href="#">공지사항</a></li>
    <li><a href="#">방문후기</a></li>
    <li><a href="#">질문과답변</a></li>
    <li><a href="#">자주하는질문</a></li>
  </ul>
</li>
</ul>`;
const $btnM_gnb = document.querySelectorAll(".M_gnb>ul>li>span");
const $M_sub = document.querySelectorAll(".M_gnb>ul>li .sub");

$btnM_gnb.forEach((btn_m) => {
  btn_m.addEventListener("click", (e) => {
    e.preventDefault();

    let eTarget = e.target;
    if (eTarget.classList.contains("on") == false) {
      $btnM_gnb.forEach((item) => {
        item.classList.remove("on");
      });
      e.target.classList.add("on");
    } else {
      $btnM_gnb.forEach((item) => {
        item.classList.remove("on");
      });
    }
  });
});
