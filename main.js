// const image = document.getElementById("image");
// let tracker = 0;
// image.addEventListener("click", function () {
//   var text = document.getElementById("text");
//   if (tracker == 0) {
//     this.src = "img/lighton.jpg";
//     tracker = 1;
//     text.innerHTML = Date();
//   } else {
//     this.src = "img/lightof.jpg";
//     tracker = 0;
//     text.innerHTML = "";
//   }
// });

let btns = document.getElementById("hamburger");
btns.addEventListener("click", function () {
  this.classList.toggle("active");
});
