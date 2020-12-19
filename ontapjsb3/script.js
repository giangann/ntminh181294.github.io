// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function upperCase(line) {
  let lowercase = line.toLowerCase();
  let spiltline = lowercase.split(" ");
  let ans1 = "";
  for (let i = 0; i < spiltline.length; i++) {
    spiltline[i] = spiltline[i].charAt(0).toUpperCase() + spiltline[i].slice(1);
    ans1 += spiltline[i] + " ";
  }
  return ans1.trim();
}
upperCase(line);

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(line2) {
  return line2.toLowerCase().replaceAll(" ", "-");
}
spinalCase(line2);

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function doiXung(line3) {
  let ans3 = line3.toLowerCase().replaceAll(" ", "");
  let reverse = ans3.split("").reverse().join("");
  if (reverse === ans3) {
    return true;
  } else {
    return false;
  }
}
doiXung(line3);
