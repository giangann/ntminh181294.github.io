function changeColor() {
  document.getElementById("p1").style.color = "blue";
  document.getElementById("p2").style.color = "yellow";
  document.getElementById("p3").style.color = "red";
}
function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}
function copyContent(paragraph1, paragraph2) {
  document.getElementById(paragraph1).innerHTML = document.getElementById(
    paragraph2
  ).innerHTML;
}
function changeFontSize(x) {
  document.body.style.fontSize = x;
  //   document.getElementById("p2").style.fontSize = x;
  //   document.getElementById("p3").style.fontSize = x;
}
