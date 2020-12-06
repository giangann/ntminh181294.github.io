// Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.

// function moneyExchange(usd) {
//   let vnd = usd * 23000;
//   return vnd;
// }
// moneyExchange(usd);

// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).

// function sphereVolume(rad) {
//   if (rad >= 0) {
//     let Volume = (4 * Math.PI * rad ** 3) / 3;
//     return Volume;
//   } else {
//     return "bán kính phải là số nguyên dương";
//   }
// }
// sphereVolume(rad);

// Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// function sumBetween(num1, num2) {
//   let sum = 0;
//   for (let i = num1 + 1; i < num2; i++) {
//     sum += i;
//   }
//   return sum;
// }
// sumBetween(num1, num2);

// Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
// function sumUocSo(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// sumUocSo(num);
