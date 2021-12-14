UIkit.util.on('.btn-edit', 'click', function (e) {
    e.preventDefault();
    e.target.blur();
    UIkit.modal.prompt('Name:',{

    }).then(function (name) {
        console.log('Prompted:', name)
    });
});


UIkit.util.on('.btn-del', 'click', function(e) {
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
        console.log('Confirmed.')
        console.log(e.path[1].id)
    }, function () {
        console.log('Rejected.')
    });
    
  });

UIkit.util.on('.btn-add', 'click', function(e) {
  html=''+
  '<div class="uk-modal-header">'+
'  <legend class="uk-legend">발주 등록</legend>'+
'</div>'+
'<div class="uk-modal-body">'+
'  <button class="uk-modal-close-default" type="button" uk-close></button>'+
'  <form class="uk-form-horizontal" action="/addorder" method="post" id="addForm">'+
'      <div class="uk-margin">'+
'         <div uk-form-custom="target: true">'+
'          <label class="uk-form-label" for="start_date">발주일</label>'+
'          <input class="uk-input" id="start_date" name="start_date" type="text" placeholder="YYYY-MM-DD">'+
'         </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="customer">거래처</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="customer" type="text" placeholder="거래처 이름">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="product">품목</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="product" type="text" placeholder="">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="end_date">납기일</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="end_date" type="text" placeholder="YYYY-MM-DD">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="laser_stat">레이저현황</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="laser_stat" type="text" placeholder="진행중/완료..">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="bending_stat">절곡현황</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="bending_stat" type="text" placeholder="진행중/완료..">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <label class="uk-form-label" for="welding_stat">용접현황</label>'+
'          <div class="uk-form-controls">'+
'              <input class="uk-input" id="welding_stat" type="text" placeholder="진행중/완료..">'+
'          </div>'+
'      </div>'+
'      <div class="uk-margin">'+
'          <div class="uk-form-label">폰트색</div>'+
'          <div class="uk-form-controls uk-form-controls-text">'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label uk-background-default uk-text-emphasis">white</span></label>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label bg-color-white uk-text-emphasis">gray</span></label>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label bg-color-dark">dark</span></label><br>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label">blue</span></label>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label uk-label-success">green</span></label>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label uk-label-warning">orange</span></label><br>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label uk-label-danger">red</span></label>'+
'              <label><input class="uk-radio" type="radio" name="radio1">  <span class="uk-label bg-color-yellow uk-text-emphasis">yellow</span></label>'+
'          </div>'+
'      </div>'+
'      <button class="uk-button uk-button-primary" type="submit">추가</button>'+
'  </form>'+
'</div>';
  e.preventDefault();
  e.target.blur();
  UIkit.modal.dialog(html)
})