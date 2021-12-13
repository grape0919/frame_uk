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