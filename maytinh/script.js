let numberButton = document.getElementsByClassName("number");
let mathButton = document.getElementsByClassName("math");
let equalButton = document.getElementsByClassName("equal");
let screenText = document.getElementsByClassName("screen");

function printValue(num) {
  return (document.getElementById("screen").innerText = num);
}
