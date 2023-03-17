const $btn_shortcuts = document.querySelectorAll(".detail_shortcuts");
const $caption = document.querySelectorAll(".dr_caption");

$btn_shortcuts.forEach((shortcuts) => {
  shortcuts.addEventListener("click", (e) => {
    e.preventDefault();

    let eTarget = e.target;
    if (eTarget.classList.contains("on") == false) {
      $btn_shortcuts.forEach((item) => {
        item.classList.remove("on");
      });
      e.target.classList.add("on");
    } else {
      $btn_shortcuts.forEach((item) => {
        item.classList.remove("on");
      });
    }
  });
});
// $btn_shortcuts.forEach((shortcuts) => {
//   shortcuts.addEventListener("click", () => {
//       $btn_shortcuts.forEach((item) => {
//         item.classList.remove("on");
//       });
//       e.target.classList.add("on");
//     }
//       $btn_shortcuts.forEach((item) => {
//         item.classList.remove("on");
//       });
// }

// $btn_shortcuts.forEach(function (button, index) {
//   button.addEventListener("click", function (e) {
//     e.preventDefault();

//     this.parentNode.classList.toggle("on");

//     buttons.forEach(function (button2, index2) {
//       if (index !== index2) {
//         button2.parentNode.classList.remove("on");
//       }
//     });
//   });
// });
