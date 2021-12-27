function load_and_load() {

  var currentLocation = window.location;
  $("#gen_order_table").load(currentLocation + ' #gen_reload');
  $("#mas_order_table").load(currentLocation + ' #mas_reload');

  console.log("reloaded")
}

function interval_loader() {
  setInterval(load_and_load, 5000);
}

function getorder() {}


function make_form_dlg(isnew,id,start_date,customer, product,end_date,laser_stat,bending_stat,welding_stat,color,font_color) {
  html = '' +
    '<div class="uk-modal-header">' +
    '  <legend class="uk-legend">발주 ';
  if (isnew == true) {
    html += '등록';
  } else {
    html += '수정';
  }
  html += '</legend>' +
    '</div>' +
    '<div class="uk-modal-body">' +
    '  <button class="uk-modal-close-default" type="button" uk-close></button>';
  if (isnew == true) {
    html += '  <form class="uk-form-horizontal" action="/addorder" method="post" id="addForm">';
  } else {
    html += '  <form class="uk-form-horizontal" action="/updateorder" method="post" id="updateForm">' +
      '          <label class="uk-form-label" for="id">ID</label>' +
      '         <div class="uk-form-controls">' +
      '           <input class="uk-input" id="id" name="id" type="text" required value="' + id + '" readonly>' +
      '         </div>';
  }
  html += '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="start_date">발주일</label>' +
    '         <div class="uk-form-controls">' +
    '          <input class="uk-input" id="start_date" name="start_date" type="text" placeholder="YYYY-MM-DD" required value="' + start_date + '" >' +
    '         </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="customer">거래처</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="customer" name="customer" type="text" placeholder="거래처 이름" required value="' + customer + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="product">품목</label>' +
    '          <div class="uk-form-controls">' +
    '              <textarea class="uk-textarea" id="product" name="product" type="text" placeholder="" required>' + product + '</textarea>' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="end_date">납기일</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="end_date" name="end_date" type="text" placeholder="YYYY-MM-DD" value="' + end_date + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="laser_stat">레이저현황</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="laser_stat" name="laser_stat" type="text" placeholder="진행중/완료.." value="' + laser_stat + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="bending_stat">절곡현황</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="bending_stat" name="bending_stat" type="text" placeholder="진행중/완료.." value="' + bending_stat + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="welding_stat">용접현황</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="welding_stat" name="welding_stat" type="text" placeholder="진행중/완료.." value="' + welding_stat + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="color">도장색상</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="color" name="color" type="text" placeholder="노란색/빨간색/보라색.."  value="' + color + '" >' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <div class="uk-form-label">폰트색</div>' +
    '          <div class="uk-form-controls uk-form-controls-text">' +
    '              <label><input class="uk-radio" type="radio" name="font_color" value="uk-background-default uk-text-emphasis" ';
  if (font_color == "uk-background-default uk-text-emphasis" || font_color == "") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label uk-background-default uk-text-emphasis">white</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-white uk-text-emphasis" ';
  if (font_color == "bg-color-white uk-text-emphasis") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-white uk-text-emphasis">gray</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-dark" ';
  if (font_color == "bg-color-dark") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-dark">dark</span></label><br>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-blue" ';
  if (font_color == "bg-color-blue") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-blue">blue</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-green" ';
  if (font_color == "bg-color-green") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-green">green</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-orange" ';
  if (font_color == "bg-color-orange") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-orange">orange</span></label><br>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-danger" ';
  if (font_color == "bg-color-danger") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-danger">red</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-yellow" ';
  if (font_color == "bg-color-yellow") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-yellow uk-text-emphasis">yellow</span></label>' +
    '          </div>' +
    '      </div>' +
    '      <button class="uk-button uk-button-primary" type="submit">';
  if (isnew == true) {
    html += '추가';
  } else {
    html += '수정';
  }
  html += '</button>' +
    '  </form>' +
    '</div>';

  return html
}




async function getorder(id) {
  var raw = {
    "id": id
  };

  var requestOptions = {
    method: 'POST',
    headers: {

      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(raw)
  };

  var res = await fetch("/getorder", requestOptions).then(
    async (response) => {
      json = await response.json();

      var values = json.result
      console.log(values)
      const html = make_form_dlg(false,
        values['id'], values['start_date'], values['customer'],
        values['product'], values['end_date'], values['laser_stat'],
        values['bending_stat'], values['welding_stat'], values['color'], values['font_color'])

      return html
    }
  )
  return res
}

UIkit.util.on('.btn-edit', 'click', async function (e) {

  var id = e.path[1].id
  if (id == "") {
    id = e.path[2].id
  }
  try {
    var html = await getorder(id);

    e.preventDefault();
    e.target.blur();
    UIkit.modal.dialog(html)
  } catch (error) {
    console.log(error);
  }

});



UIkit.util.on('.btn-del', 'click', function (e) {
  e.preventDefault();
  e.target.blur();
  console.log(e)
  // add options to manipulate confirm dialog
  UIkit.modal.confirm('삭제하시겠습니까?', {
    labels: {
      cancel: '취소',
      ok: '삭제'
    }
  }).then(function () {
    var id = e.path[1].id
    var formdata = new FormData();
    formdata.append("id", id);

    var requestOptions = {
      method: 'DELETE',
      body: formdata,
      redirect: 'follow'
    };

    fetch("/delorder", requestOptions)
      .then(response => response.text())
      .then(function (result) {
        UIkit.modal.alert("삭제하였습니다.").then(function () {
          location.reload()
        });
      })
      .catch(function (error) {
        UIkit.modal.alert("삭제 실패 : \n" + error)
      });
  }, function () {
    console.log('Rejected.')
  });

});

UIkit.util.on('.btn-add', 'click', function (e) {
  html = make_form_dlg(true, "","","","","","","","","","")
  e.preventDefault();
  e.target.blur();
  UIkit.modal.dialog(html)
})




function make_mas_form_dlg(isnew, id, start_date, customer,project_name, product, product_type, amount, end_date, meterial_order, welding_stat, color_stat, release_date, font_color) {
  html = '' +
    '<div class="uk-modal-header">' +
    '  <legend class="uk-legend">발주 ';
  if (isnew == true) {
    html += '등록';
  } else {
    html += '수정';
  }
  html += '</legend>' +
    '</div>' +
    '<div class="uk-modal-body">' +
    '  <button class="uk-modal-close-default" type="button" uk-close></button>';
  if (isnew == true) {
    html += '  <form class="uk-form-horizontal" action="/addmasorder" method="post" id="addForm">';
  } else {
    html += '  <form class="uk-form-horizontal" action="/updatemasorder" method="post" id="updateForm">' +
      '          <label class="uk-form-label" for="id">ID</label>' +
      '         <div class="uk-form-controls">' +
      '           <input class="uk-input" id="id" name="id" type="text" required value="' + id + '" readonly>' +
      '         </div>';
  }
  html += '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="start_date">발주일</label>' +
    '         <div class="uk-form-controls">' +
    '          <input class="uk-input" id="start_date" name="start_date" type="text" placeholder="YYYY-MM-DD" required value="' + start_date + '">' +
    '         </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="customer">수요기관</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="customer" name="customer" type="text" placeholder="수요기관 이름" required value="' + customer + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="project_name">사업명</label>' +
    '          <div class="uk-form-controls">' +
    '              <textarea class="uk-textarea" id="project_name" name="project_name" type="text" placeholder="" required>' + project_name + '</textarea>' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="product">품목</label>' +
    '          <div class="uk-form-controls">' +
    '              <textarea class="uk-textarea" id="product" name="product" type="text" placeholder="" required>' + product + '</textarea>' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="product_type">규격</label>' +
    '          <div class="uk-form-controls">' +
    '              <textarea class="uk-textarea" id="product_type" name="product_type" type="text" placeholder="" required>' + product_type + '</textarea>' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="amount">수량</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="amount" name="amount" type="text" placeholder="0" required value="' + amount + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="end_date">납기일</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="end_date" name="end_date" type="text" placeholder="YYYY-MM-DD" value="' + end_date + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="meterial_order">자재발주</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="meterial_order" name="meterial_order" type="text" placeholder="진행중/완료.." value="' + meterial_order + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="welding_stat">용접진행</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="welding_stat" name="welding_stat" type="text" placeholder="진행중/완료.." value="' + welding_stat + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="color_stat">도장현황</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="color_stat" name="color_stat" type="text" placeholder="진행중/완료.." value="' + color_stat + '">' +
    '          </div>' +
    '      </div>' +
    '      <div class="uk-margin">' +
    '          <label class="uk-form-label" for="release_date">출고/날짜</label>' +
    '          <div class="uk-form-controls">' +
    '              <input class="uk-input" id="release_date" name="release_date" type="text" placeholder="YYYY-MM-DD" value="' + release_date + '">' +
    '          </div>' +
    '      <div class="uk-margin">' +
    '          <div class="uk-form-label">폰트색</div>' +
    '          <div class="uk-form-controls uk-form-controls-text">' +
    '              <label><input class="uk-radio" type="radio" name="font_color" value="uk-background-default uk-text-emphasis" ';
  if (font_color == "uk-background-default uk-text-emphasis" || font_color == "") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label uk-background-default uk-text-emphasis">white</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-white uk-text-emphasis" ';
  if (font_color == "bg-color-white uk-text-emphasis") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-white uk-text-emphasis">gray</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-dark" ';
  if (font_color == "bg-color-dark") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-dark">dark</span></label><br>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-blue" ';
  if (font_color == "bg-color-blue") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-blue">blue</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-green" ';
  if (font_color == "bg-color-green") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-green">green</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-orange" ';
  if (font_color == "bg-color-orange") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-orange">orange</span></label><br>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-danger" ';
  if (font_color == "bg-color-danger") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-danger">red</span></label>' +

    '              <label><input class="uk-radio" type="radio" name="font_color" value="bg-color-yellow" ';
  if (font_color == "bg-color-yellow") {
    html += 'checked="true"'
  }
  html += '>  <span class="uk-label bg-color-yellow uk-text-emphasis">yellow</span></label>' +
    '          </div>' +
    '      </div>' +
    '      <button class="uk-button uk-button-primary" type="submit">';
  if (isnew == true) {
    html += '추가';
  } else {
    html += '수정';
  }
  html += '</button>' +
    '  </form>' +
    '</div>';

  return html
}

async function getmasorder(id) {
  var raw = {
    "id": id
  };

  var requestOptions = {
    method: 'POST',
    headers: {

      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(raw)
  };

  var res = await fetch("/getmasorder", requestOptions).then(
    async (response) => {
      json = await response.json();

      var values = json.result
      const html = make_mas_form_dlg(false,
        values['id'], values['start_date'], values['customer'], values['project_name'],
        values['product'], values['product_type'], values['amount'],
        values['end_date'], values['meterial_order'], values['welding_stat'],
        values['color_stat'], values['release_date'], values['font_color'])

      return html
    }
  )
  return res
}

UIkit.util.on('.btn-edit-mas', 'click', async function (e) {

  var id = e.path[1].id
  if (id == "") {
    id = e.path[2].id
  }
  try {
    var html = await getmasorder(id);

    e.preventDefault();
    e.target.blur();
    UIkit.modal.dialog(html)
  } catch (error) {
    console.log(error);
  }

});


UIkit.util.on('.btn-del-mas', 'click', function (e) {
  e.preventDefault();
  e.target.blur();
  console.log(e)
  // add options to manipulate confirm dialog
  UIkit.modal.confirm('삭제하시겠습니까?', {
    labels: {
      cancel: '취소',
      ok: '삭제'
    }
  }).then(function () {
    var id = e.path[1].id
    if (id == "") {
      id = e.path[2].id
    }
    var formdata = new FormData();
    formdata.append("id", id);

    var requestOptions = {
      method: 'DELETE',
      body: formdata,
      redirect: 'follow'
    };

    fetch("/delmasorder", requestOptions)
      .then(response => response.text())
      .then(function (result) {
        UIkit.modal.alert("삭제하였습니다.").then(function () {
          load_and_load();
        });
      })
      .catch(function (error) {
        UIkit.modal.alert("삭제 실패 : \n" + error)
      });
  }, function () {
    console.log('Rejected.')
  });

});

UIkit.util.on('.btn-add-mas', 'click', function (e) {
  html = make_mas_form_dlg(true, "", "", "", "", "", "", "", "", "", "", "", "", "")
  e.preventDefault();
  e.target.blur();
  UIkit.modal.dialog(html)
})