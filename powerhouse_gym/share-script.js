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

// window.onscroll = function () {
//   myFunction();
// };

// const navbar = document.getElementById("sticky-nav");
// const sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

jQuery(".carousel-main").flickity({
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});
