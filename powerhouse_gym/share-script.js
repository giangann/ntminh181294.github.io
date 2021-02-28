/* search box */
const search = document.querySelector(".search"),
  btn = document.querySelector(".search-btn"),
  input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
/* search box */
AOS.init({
  offset: 400,
  duration: 1000,
});

window.onscroll = function () {
  myFunction();
};

const navbar = document.getElementById("sticky-nav");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}