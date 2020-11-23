// Viết function cho phép nhập vào key và value tương ứng, gán key và value vào một object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng

// Thêm vào bài tập trên, sau khi nhập thông tin của object, in toàn bộ thông tin ra màn hình console

// let userName = {
//   id: "",
//   password: "",
// };
// while (userName.id !== null || userName.id !== "") {
//   userName.id = prompt("Nhập ID", "");
//   if (userName.id === null || userName.id === "") {
//     break;
//   }
//   userName.password = prompt("Nhập Password", "");
//   console.log(userName);
// }

// Viết hàm lấy liệt kê toàn bộ key của object

// let userName = {
//   name: "ádasdasdasd",
//   age: "oigjeroijger",
//   address: "ádasd",
//   job: "ádasd",
// };
// for (let key in userName) {
//   console.log(key + ": " + userName[key]);
// }

// Viết hàm nhận 2 tham số, một là object, 2 là key, nếu key có tồn tại thì trả về giá trị của key đó, nếu không, trả về false. Sau đó, in ra màn hình giá trị trả về, nếu không có in ra “Không có ‘key’”.

let minhinfo = {
  age: "",
  job: "",
};
function has(a, b) {
  for (let a in minhinfo) if (b == key) return true;
  return false;
}
