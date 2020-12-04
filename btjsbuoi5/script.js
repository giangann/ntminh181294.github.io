// 1.
// let daySo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function trungBinhcong() {
//   let sum = 0;
//   for (let i = 0; i <= daySo.length; i++) {
//     sum += i;
//   }
//   console.log(sum / (daySo[8] - daySo[0] + 1));
// }
// trungBinhcong();

// 2.
// let daySo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function timIndext(a) {
//   console.log(daySo.indexOf(a));
// }
// timIndext();

// 3.
// let daySo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function copy(a) {
//   a = daySo;
//   console.log(a);
// }
// copy();

// 4.
// let daySo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function giaTriLonNhat() {
//   let max = 0;
//   for (let i = 0; i <= daySo.length; i++) {
//     if (daySo[i] > max) {
//       max = daySo[i];
//     }
//   }
//   console.log(max + "là số lớn nhất");
// }
// giaTriLonNhat();

// 5.
// let a = ["cá", "bò", "lợn", "gà", "tôm", "cua"];
// function swap() {
//     a.splice(4, 1, "bò");
//     a.splice(1, 1, "tôm");
//     console.log(a)
// }
// swap();

// 6.
// let daySo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function giaTriLonNhi() {
//   let max = 0;
//   for (let i = 0; i < daySo.length - 1; i++) {
//     if (daySo[i] > max) {
//       max = daySo[i];
//     }
//   }
//   console.log(max + "là số lớn thứ hai");
// }
// giaTriLonNhi();

// 7.
// function chuHoa() {
//   let a = "hello world!";
//   let b = a.slice(0, 1);
//   let c = a.slice(6, 7);
//   let f = a.slice(1, 6);
//   let g = a.slice(7, 12);
//   let d = b.toUpperCase();
//   let e = c.toUpperCase();
//   let h = d + f + e + g;
//   console.log(h);
// }
// chuHoa();

// 8.

// 9.
// thực hành b6 trên lớp

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// forEach(a, (i) => console.log(i * i));

// function filter(arr, condition) {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (condition(arr[i])) {
//             temp[temp.length] = arr[i]
//         }
//     }
//     return temp;
// }

// function map(arr, callback) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp[temp.length] = callback(arr[i]);
//   }
//   return temp;
// }

function isValidDate(value) {
  return new Date(value).toString() != "Invalid Date";
}
