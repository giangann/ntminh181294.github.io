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