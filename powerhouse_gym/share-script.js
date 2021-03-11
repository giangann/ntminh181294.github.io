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

function deleteProduct() {
  var x = document.getElementById("delete");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
