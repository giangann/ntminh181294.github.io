// function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
  document.getElementById("p1").style.color = "blue";
  document.getElementById("p2").style.color = "yellow";
  document.getElementById("p3").style.color = "red";
}
// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}
// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).
function copyContent(paragraph1, paragraph2) {
  document.getElementById(paragraph1).innerHTML = document.getElementById(
    paragraph2
  ).innerHTML;
}
// function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
  let arr = document.getElementsByTagName("p");
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.fontSize = x + "px";
  }
}
// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
function increaseFontSize(a) {
  let paragraph = document.getElementById(a);
  let aFontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
  if (aFontSize < 31) {
    aFontSize += 1;
  }
  paragraph.style.fontSize = aFontSize + "px";
}
// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(a) {
  let paragraph = document.getElementById(a);
  let aFontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
  if (aFontSize > 9) {
    aFontSize -= 1;
  }
  paragraph.style.fontSize = aFontSize + "px";
}
