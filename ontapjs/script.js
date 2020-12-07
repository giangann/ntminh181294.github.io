// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.
function celciusToFarenheit(doC) {
  let doF = doC * 1.8 + 32;
  return doF;
}
celciusToFarenheit();

// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

let numbers = [4, 3, 24, 9, 57, 8, 6, 45, 65, 7, 36, 13, 59];
numbers.sort(function (a, b) {
  return a - b;
});
function secondHighest() {
  let ndmax = numbers[numbers.length - 2];
  return ndmax;
}
secondHighest();

// Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
// let arr = [
//   "chuỗi thứ nhất",
//   "chuỗi thứ hai",
//   "chuỗi thứ ba dài hơn",
//   "chuỗi thứ tư dài hơn nữa",
//   "chuỗi thứ năm dài nhất hơn cả chuỗi thứ tư",
// ];
// function longestArr() {
//   let longest = "";
//   let long = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > long) {
//       long = arr[i].length;
//       longest = arr[i];
//     }
//   }
//   console.log(longest);
// }
// longestArr();

// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết
// thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
let a = "một hai ba bốn năm sáu!";
let b = "sáu!";
function checkText(a, b) {
  return a.endsWith(b);
}
checkText(a, b);

// Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

// let arr = [1, "năm", 2, "sáu", 3, false, 4, true];
// function checkIfArrayIsUnique(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// checkIfArrayIsUnique(arr);
