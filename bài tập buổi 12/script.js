//  Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100
// for (i = 0; i < 101; i++) {
//   if (i % 3 == 0) {
//     console.log(i + ": Fizz");
//   } else if (i % 5 == 0) {
//     console.log(i + ": Buzz");
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log(+": FizzBuzz");
//   } else if (i % 3 != 0 && i % 5 != 0) {
//     console.log(i + ": BuzzFizz");
//   } else {
//     console.log("không có giá trị");
//   }
// }

// Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000
// let sum = 0;
// for (i = 1; i < 1001; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không
// function nguyento(nt) {
//   let count = 0;
//   for (i = 2; i < nt - 1; i++) {
//     if (nt % i == 0) {
//       count++;
//     }
//   }
//   if (count == 0) {
//     console.log(nt + " là số nguyên tố");
//   } else {
//     console.log(nt + " không phải là số nguyên tố");
//   }
// }

//  Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”
// function nguyento(nt) {
//   for (j = 0; j < nt + 1; j++) {
//     let count = 0;
//     for (i = 2; i < nt + 1; i++) {
//       if (j % i == 0) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       console.log(j);
//     }
//   }
// }

// Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b
// function nguyento(a, b) {
//   let sum = 0;
//   for (j = a; j < b + 1; j++) {
//     let count = 0;
//     for (i = 2; i < b + 1; i++) {
//       if (j % i == 0) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       sum += j;
//     }
//   }
//   console.log(sum);
// }

//  Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)

// let nguyento = (nt) => {
//   let count = 0;
//   for (i = 2; i < nt - 1; i++) {
//     if (nt % i == 0) {
//       count++;
//     }
//   }
//   return count == 0;
// };

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let minh = {
//   name: "Minh",
//   age: "26",
//   date: "18.12.1994",
//   job: "nhân viên văn phòng",
// };
// function thongtin(a) {
//  for (a = 0, )
// }

// while (true) {
//   let key = prompt("nhập key", "");
//   if (key === null || key === "") {
//     break;
//   }
//   let value = prompt("nhập value", "");
//   obj[key] = value;
// }
