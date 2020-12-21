function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("hide").style.height = "60px";
  } else {
    x.style.display = "block";
    document.getElementById("hide").style.height = "245px";
    x.style.bottom = "10px";
  }
}
