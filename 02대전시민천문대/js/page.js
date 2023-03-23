// 메인화면 풀페이지 기능
const $sections = document.querySelectorAll(".section");
const $pg_dt = document.querySelectorAll(".pagenation > a");
window.addEventListener("resize", () => {
  setTimeout(() => {
    location.reload();
  }, 2500);
});
//풀페이지 모션
if (window.innerWidth > 1100) {
  $sections.forEach((section) => {
    section.addEventListener("mousewheel", (e) => {
      e.preventDefault();
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
      const nextSection =
        delta < 0 ? section.nextElementSibling : section.previousElementSibling;
      if (nextSection) {
        const moveTop =
          window.pageYOffset + nextSection.getBoundingClientRect().top;
        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
      }
    });
  });
}
// pagenation
$pg_dt.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    const moveTop = section.offsetTop;
    window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    $pg_dt.forEach((a) => {
      a.classList.remove("on");
    });
    link.classList.add("on");
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  $sections.forEach((section, i) => {
    if (scrollTop >= section.offsetTop - 200) {
      $pg_dt.forEach((a) => {
        a.classList.remove("on");
      });
      $pg_dt[i].classList.add("on");
    }
  });
});
