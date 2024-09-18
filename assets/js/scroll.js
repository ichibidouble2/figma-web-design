document.addEventListener("scroll", function() {
  const header = document.querySelector("#header");
  if(window.scrollY > 50) {
    header.classList.add("scrolled");
  }
  else {
    header.classList.remove("scrolled");
  }
});

const menuMobi = document.querySelector(".inner-wrapMobi");
const menuPC = document.querySelector(".inner-wrap");
const buttonClose = document.querySelector("#close-button");
document.querySelector(".inner-iconMobi").addEventListener("click", function() {
  menuMobi.style.display = "block";
  menuPC.style.display = "none";
});
buttonClose.addEventListener("click", function () {
  menuMobi.style.display = "none";
  menuPC.style.display = "flex";
});

