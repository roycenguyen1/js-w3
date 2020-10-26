const image = document.getElementById("image");
let tracker = 0;
image.addEventListener("click", function () {
  var text = document.getElementById("text");
  if (tracker == 0) {
    this.src = "img/lighton.jpg";
    tracker = 1;
    text.innerHTML = Date();
  } else {
    this.src = "img/lightof.jpg";
    tracker = 0;
    text.innerHTML = "";
  }
});

$('.hamburger').click (function(){
  $(this).toggleClass('active');
});

// let btns = document.querySelectorAll(".hamburger");
// btns.forEach(btn => {
//   btn.addEventListener("click", event => {
//     btn.classList.toggle("active");
// })
// });

// let btns = document.querySelectorAll(".hamburger")
// btns.forEach(function(btn){
//   btn.addEventListener("click", function(event){
//     btn.classList.toggle('active');
//   })
// })

// const btns = document.getElementsByClassName('hamburger');
// const menuToggle = function(){
//   this.classList.toggle('active');
// };
// for (let i = 0; i < btns.length; i++){
//   btns[i].addEventListener('click', menuToggle);
// }