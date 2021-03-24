function loadDoc() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      let content = "";
      for (let i = 0; i < users.length; i++) {
        content += `<tr>
          <td>${users[i].name}</td>
          <td>${users[i].birthday}</td>
          <td>${users[i].email}</td>
          <td>${users[i].phone}</td>
          <td>
                <a href="#" class="edit"><i class="fas fa-edit"></i>Chỉnh sửa</a
                ><span>|</span
                ><button class="delete" onclick="productDelete(this,${users[i].id})"
                  ><i class="fas fa-trash-alt"></i>Xóa</button
                >
              </td>
        </tr>`;
      }
      $("tbody").html(content);
    }
  };
  xhttp.open("GET", "https://faketaxi.herokuapp.com/users", true);
  xhttp.send();
}
loadDoc();

function productDelete(ctl, id) {
  $(ctl).parents("tr").remove();
  $.ajax(
    {
      url: "https://faketaxi.herokuapp.com/users" + "/" + id,
      method: "DELETE"
    }
  )
}
