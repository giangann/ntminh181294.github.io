function getNumber(num) {
  let printScreenValue = document.getElementById("input");
  switch (num) {
    case 1:
      printScreenValue.value += "1";
      break;
    case 2:
      printScreenValue.value += "2";
      break;
    case 3:
      printScreenValue.value += "3";
      break;
    case 4:
      printScreenValue.value += "4";
      break;
    case 5:
      printScreenValue.value += "5";
      break;
    case 6:
      printScreenValue.value += "6";
      break;
    case 7:
      printScreenValue.value += "7";
      break;
    case 8:
      printScreenValue.value += "8";
      break;
    case 9:
      printScreenValue.value += "9";
      break;
    case 0:
      printScreenValue.value += "0";
      break;
  }
}
function clearScreen() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
}
function getMath(math) {
  let printScreenValue = document.getElementById("input");
  switch (math) {
    case "+":
      printScreenValue.value += "+";
      break;
    case "-":
      printScreenValue.value += "-";
      break;
    case "x":
      printScreenValue.value += "*";
      break;
    case "÷":
      printScreenValue.value += "/";
      break;
  }
}
function compute() {
  let printScreenValue = document.getElementById("input");
  let ans = Math.floor(+eval(printScreenValue.value));
  document.getElementById("answer").value = ans;
}
