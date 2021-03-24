function loadDoc() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      let content = "";
      for (let i = 0; i < users.length; i++) {
        content += `<tr>
          <td>${users[i].name}</td>
          <td>${users[i].birthday.substr(-4)}</td>
          <td>${users[i].email}</td>
          <td>${users[i].phone}</td>
          <td>
                <button data-toggle="modal" data-target="#myModal" class="edit">
                  <i class="fas fa-edit"></i>Chỉnh sửa
                </button>
                <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <form>
                        <div class="form-input">
                          <label for="name">Họ tên<span>*</span></label>
                          <input type="text" id="name" name="name" />
                        </div>
                        <div class="form-input">
                          <label for="birthday">Năm sinh</label>
                          <input
                            type="date"
                            id="birthday"
                            name="birthday"
                          />
                        </div>
                        <div class="form-input">
                          <label for="email">Email<span>*</span></label>
                          <input type="email" id="email" name="email" />
                        </div>
                        <div class="form-input">
                          <label for="phone">Phone<span>*</span></label>
                          <input type="tel" id="phone" name="phone" />
                        </div>
                        <button>Sửa</button>
                      </form>
                    </div>
                  </div>
                </div><span>|</span
                ><button class="delete" onclick='productDelete(this)'
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

function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}
productDelete(ctl);

