// Toán tử
function tong(x, y) {
  alert("tổng: " + (x + y));
}
function toanbo(x, y) {
  alert("tổng: " + (x + y));
  alert("hiệu: " + (x - y));
  alert("nhân: " + x * y);
  alert("chia: " + x / y);
  alert("dư: " + (x % y));
  alert("mũ: " + x ** y);
}
function chuvi(x, y) {
  alert("chu vi: " + (x + y) * 2);
}
function dientich(x, y) {
  alert("diện tích: " + x * y);
}
function hinhtron(x) {
  alert("chu vi hình tròn: " + 2 * 3.14 * x);
  alert("diện tích hình tròn: " + 3.14 * x ** 2);
}
function cm(x) {
  alert("m: " + x / 100);
  alert("km: " + x / 100000);
}
function Celsius(x) {
  alert("Fahrenheit: " + (x * 1.8 + 32));
}

// Cấu trúc điều khiển
// Viết chương trình cho phép nhập 2 số, tìm số lớn nhất trong 2 số
let x = prompt("số thứ nhất", "");
let y = prompt("số thứ hai", "");
if (x > y) {
  alert(x + " là số lớn nhất");
} else {
  alert(y + " là số lớn nhất");
}

// // Viết chương trình cho phép nhập 3 số, tìm số lớn nhất trong 3 số
let a = prompt("số thứ nhất", "");
let b = prompt("số thứ hai", "");
let c = prompt("số thứ ba", "");
if (a > b && a > c) {
  alert(a + " là số lớn nhất");
} else if (b > a && b > c) {
  alert(b + " là số lớn nhất");
} else {
  alert(c + " là số lớn nhất");
}

// Viết chương trình cho phép nhập 1 số, kiểm tra xem một số là số âm, dương, hay bằng 0
let amduong = prompt("nhập số", "");
if (amduong > 0) {
  alert("đây là số dương");
} else if (amduong < 0) {
  alert("đây là số am");
} else {
  alert("giá trị này bằng 0");
}

//  Viết chương trình cho phép nhập 1 số, kiểm tra số đó có chia hết cho 5 và 11 hay không
let so1 = prompt("nhập số", "");
if (so1 % 5 == 0) {
  alert(so1 + " chia hết cho 5");
} else if (so1 % 11 == 0) {
  alert(so1 + " chia hết cho 11");
} else {
  alert(so1 + " không chia hết cho 5 và 11");
}

// Viết chương trình cho phép nhập 1 số, kiểm tra số đó là chẵn hay lẻ
let so2 = prompt("nhập số", "");
if (so2 % 2 == 0) {
  alert(so2 + " là số chẵn");
} else {
  alert(so2 + " là số lẻ");
}

// Viết chương trình cho phép nhập 1 năm, kiểm tra số đó là năm nhuận hay không
let nam = prompt("nhập năm", "");
if (nam % 4 == 0) {
  alert(nam + " là năm nhuận");
} else {
  alert(nam + " không phải năm nhuận");
}

// Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó có thuộc bảng alphabe hay không (a-zA-Z)
let chu = prompt("nhập chữ", "");
switch (chu) {
  case "a":
    alert("thuộc bảng chữ cái");
    break;
  case "b":
    alert("thuộc bảng chữ cái");
    break;
  case "c":
    alert("thuộc bảng chữ cái");
    break;
  case "d":
    alert("thuộc bảng chữ cái");
    break;
  case "e":
    alert("thuộc bảng chữ cái");
    break;
  case "f":
    alert("thuộc bảng chữ cái");
    break;
  case "g":
    alert("thuộc bảng chữ cái");
    break;
  case "h":
    alert("thuộc bảng chữ cái");
    break;
  case "i":
    alert("thuộc bảng chữ cái");
    break;
  case "j":
    alert("thuộc bảng chữ cái");
    break;
  case "k":
    alert("thuộc bảng chữ cái");
    break;
  case "l":
    alert("thuộc bảng chữ cái");
    break;
  case "m":
    alert("thuộc bảng chữ cái");
    break;
  case "n":
    alert("thuộc bảng chữ cái");
    break;
  case "o":
    alert("thuộc bảng chữ cái");
    break;
  case "p":
    alert("thuộc bảng chữ cái");
    break;
  case "q":
    alert("thuộc bảng chữ cái");
    break;
  case "r":
    alert("thuộc bảng chữ cái");
    break;
  case "s":
    alert("thuộc bảng chữ cái");
    break;
  case "t":
    alert("thuộc bảng chữ cái");
    break;
  case "u":
    alert("thuộc bảng chữ cái");
    break;
  case "v":
    alert("thuộc bảng chữ cái");
    break;
  case "w":
    alert("thuộc bảng chữ cái");
    break;
  case "x":
    alert("thuộc bảng chữ cái");
    break;
  case "y":
    alert("thuộc bảng chữ cái");
    break;
  case "z":
    alert("thuộc bảng chữ cái");
    break;
  case "A":
    alert("thuộc bảng chữ cái");
    break;
  case "B":
    alert("thuộc bảng chữ cái");
    break;
  case "C":
    alert("thuộc bảng chữ cái");
    break;
  case "D":
    alert("thuộc bảng chữ cái");
    break;
  case "E":
    alert("thuộc bảng chữ cái");
    break;
  case "F":
    alert("thuộc bảng chữ cái");
    break;
  case "G":
    alert("thuộc bảng chữ cái");
    break;
  case "H":
    alert("thuộc bảng chữ cái");
    break;
  case "I":
    alert("thuộc bảng chữ cái");
    break;
  case "J":
    alert("thuộc bảng chữ cái");
    break;
  case "K":
    alert("thuộc bảng chữ cái");
    break;
  case "L":
    alert("thuộc bảng chữ cái");
    break;
  case "M":
    alert("thuộc bảng chữ cái");
    break;
  case "N":
    alert("thuộc bảng chữ cái");
    break;
  case "O":
    alert("thuộc bảng chữ cái");
    break;
  case "P":
    alert("thuộc bảng chữ cái");
    break;
  case "Q":
    alert("thuộc bảng chữ cái");
    break;
  case "R":
    alert("thuộc bảng chữ cái");
    break;
  case "S":
    alert("thuộc bảng chữ cái");
    break;
  case "T":
    alert("thuộc bảng chữ cái");
    break;
  case "U":
    alert("thuộc bảng chữ cái");
    break;
  case "V":
    alert("thuộc bảng chữ cái");
    break;
  case "W":
    alert("thuộc bảng chữ cái");
    break;
  case "X":
    alert("thuộc bảng chữ cái");
    break;
  case "Y":
    alert("thuộc bảng chữ cái");
    break;
  case "Z":
    alert("thuộc bảng chữ cái");
    break;
  default:
    alert("không thuộc bảng chữ cái");
}

// Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là nguyên âm hay phụ âm
let nguyenam = prompt("nhập chữ", "");
switch (nguyenam) {
  case "a":
    alert("là nguyên âm");
    break;
  case "e":
    alert("là nguyên âm");
    break;
  case "i":
    alert("là nguyên âm");
    break;
  case "o":
    alert("là nguyên âm");
    break;
  case "u":
    break;
  default:
    alert("là phụ âm");
}

// Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là chữ thường hay chữ hoa
let thuonghoa = prompt("nhập chữ", "");
switch (thuonghoa) {
  case "a":
    alert("là chữ thường");
    break;
  case "b":
    alert("là chữ thường");
    break;
  case "c":
    alert("là chữ thường");
    break;
  case "d":
    alert("là chữ thường");
    break;
  case "e":
    alert("là chữ thường");
    break;
  case "f":
    alert("là chữ thường");
  case "g":
    alert("là chữ thường");
    break;
  case "h":
    alert("là chữ thường");
    break;
  case "i":
    alert("là chữ thường");
    break;
  case "j":
    alert("là chữ thường");
    break;
  case "k":
    alert("là chữ thường");
    break;
  case "l":
    alert("là chữ thường");
    break;
  case "m":
    alert("là chữ thường");
    break;
  case "n":
    alert("là chữ thường");
    break;
  case "o":
    alert("là chữ thường");
    break;
  case "p":
    alert("là chữ thường");
    break;
  case "q":
    alert("là chữ thường");
    break;
  case "r":
    alert("là chữ thường");
    break;
  case "s":
    alert("là chữ thường");
    break;
  case "t":
    alert("là chữ thường");
    break;
  case "u":
    alert("là chữ thường");
    break;
  case "v":
    alert("là chữ thường");
    break;
  case "w":
    alert("là chữ thường");
    break;
  case "x":
    alert("là chữ thường");
    break;
  case "y":
    alert("là chữ thường");
    break;
  case "z":
    alert("là chữ thường");
    break;
  case "A":
    alert("là chữ hoa");
    break;
  case "B":
    alert("là chữ hoa");
    break;
  case "C":
    alert("là chữ hoa");
    break;
  case "D":
    alert("là chữ hoa");
    break;
  case "E":
    alert("là chữ hoa");
    break;
  case "F":
    alert("là chữ hoa");
    break;
  case "G":
    alert("là chữ hoa");
    break;
  case "H":
    alert("là chữ hoa");
    break;
  case "I":
    alert("là chữ hoa");
    break;
  case "J":
    alert("là chữ hoa");
    break;
  case "K":
    alert("là chữ hoa");
    break;
  case "L":
    alert("là chữ hoa");
    break;
  case "M":
    alert("là chữ hoa");
    break;
  case "N":
    alert("là chữ hoa");
    break;
  case "O":
    alert("là chữ hoa");
    break;
  case "P":
    alert("là chữ hoa");
    break;
  case "Q":
    alert("là chữ hoa");
    break;
  case "R":
    alert("là chữ hoa");
    break;
  case "S":
    alert("là chữ hoa");
    break;
  case "T":
    alert("là chữ hoa");
    break;
  case "U":
    alert("là chữ hoa");
    break;
  case "V":
    alert("là chữ hoa");
    break;
  case "W":
    alert("là chữ hoa");
    break;
  case "X":
    alert("là chữ hoa");
    break;
  case "Y":
    alert("là chữ hoa");
    break;
  case "Z":
    alert("là chữ hoa");
    break;
  default:
    alert("không thuộc bảng chữ cái");
}

// Viết chương trình cho phép nhập 1 số là ngày trong tuần, in ra thứ tương ứng
let ngay = prompt("nhập ngày", "");
switch (ngay) {
  case "1":
    alert("đây là thứ 2");
    break;
  case "2":
    alert("đây là thứ 3");
    break;
  case "3":
    alert("đây là thứ 4");
    break;
  case "4":
    alert("đây là thứ 5");
    break;
  case "5":
    alert("đây là thứ 6");
    break;
  case "6":
    alert("đây là thứ 7");
    break;
  case "7":
    alert("đây là Chủ Nhật");
    break;
  default:
    alert("không phải ngày trong tuần");
}

// Viết chương trình cho phép nhập 1 tháng, in ra số ngày trong tháng
let thang = prompt("nhập tháng", "");
switch (thang) {
  case "1":
    alert("tháng này có 31 ngày");
    break;
  case "2":
    alert("tháng này có 30 ngày");
    break;
  case "3":
    alert("tháng này có 31 ngày");
    break;
  case "4":
    alert("tháng này có 30 ngày");
    break;
  case "5":
    alert("tháng này có 31 ngày");
    break;
  case "6":
    alert("tháng này có 30 ngày");
    break;
  case "7":
    alert("tháng này có 31 ngày");
    break;
  case "8":
    alert("tháng này có 31 ngày");
    break;
  case "9":
    alert("tháng này có 30 ngày");
    break;
  case "10":
    alert("tháng này có 31 ngày");
    break;
  case "11":
    alert("tháng này có 30 ngày");
    break;
  case "12":
    alert("tháng này có 31 ngày");
    break;
  default:
    alert("không có tháng này");
}

// Viết chương trình cho phép nhập 3 số a b c, in ra nghiệm phương trình bậc 2 tương ứng
let s1 = prompt("giá trị của a", "");
let s2 = prompt("giá trị của b", "");
let s3 = prompt("giá trị của c", "");
let delta = s2 ** 2 - 4 * s1 * s3;
if ((delta = 0)) {
  alert("S = " + (-s2 / 2) * s1);
} else if (delta < 0) {
  alert("Vô nghiệm");
} else {
  alert(
    "S = " +
      ((-s2 - Math.sqrt(delta)) / 2) * s1 +
      " và " +
      ((-s2 + Math.sqrt(delta)) / 2) * s1
  );
}

// Viết chương trình đổi điểm từ hệ số 10 sang hệ chữ cho sinh viên, điểm nhập từ bàn phím
let diem = prompt("nhập điểm", "");
if (diem < 4) {
  alert("bạn được điểm F");
} else if (diem < 5.5) {
  alert("bạn được điểm D");
} else if (diem < 7) {
  alert("bạn được điểm C");
} else if (diem < 8.5) {
  alert("bạn được điểm B");
} else if (diem <= 10) {
  alert("bạn được điểm A");
} else {
  alert("không có thang điểm này");
}

// Viết chương trình cho phép nhập lương cơ bản, tính tổng lương của nhân viên theo công thức: Lương = Lương cơ bản + HRA + DA
let luongcb = prompt("nhập lương", "");
if (luongcb < 2000000) {
  alert(luongcb * 2);
} else if (luongcb < 5000000) {
  alert(luongcb * 2.15);
} else if (luongcb >= 5000000) {
  alert(luongcb * 2.3);
} else {
  alert("không có mức lương này");
}
