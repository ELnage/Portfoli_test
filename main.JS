let skillsSec = document.querySelector(".skills")
let prog = document.querySelectorAll(".skills .prog span");
console.log(skillsSec);
window.onscroll = function () {
   if(window.scrollY >= skillsSec.offsetTop - 230) {
      prog.forEach((ele) => ele.style.width = ele.dataset.prog);
   }
}