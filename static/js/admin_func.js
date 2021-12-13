UIkit.util.on('.btn-del', 'click', function (e) {
    e.preventDefault();
    e.target.blur();
    UIkit.modal.prompt('Name:', 'Your name').then(function (name) {
        console.log('Prompted:', name)
    });
});



function adm_GeneralOrder() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("/api/generalorder", requestOptions)
        .then(response => response.json())
        .then(function (json_result) {
            var table_str = '<table class="uk-table uk-table-middle uk-table-condensed uk-table-large">\
    <thead>\
        <tr>\
            <th>번호</th>\
            <th>발주일</th>\
            <th>거래처</th>\
            <th>품목</th>\
            <th>납기일</th>\
            <th>도장현황</th>\
            <th>절곡현황</th>\
            <th>용접현황</th>\
            <th>도장</th>\
            <th></th>\
        </tr>\
    </thead>\
    <tbody>'
            order_list = json_result['result'];
            for (var i = 0; i < order_list.length; i++) {
                table_str += "<tr>"
                table_str += "<td>" + order_list[i]['id'] + "</td>"
                table_str += "<td>" + order_list[i]['start_date'] + "</td>"
                table_str += "<td>" + order_list[i]['customer'] + "</td>"
                table_str += "<td>" + order_list[i]['product'] + "</td>"
                table_str += "<td>" + order_list[i]['end_date'] + "</td>"
                table_str += "<td>" + order_list[i]['laser_stat'] + "</td>"
                table_str += "<td>" + order_list[i]['bending_stat'] + "</td>"
                table_str += "<td>" + order_list[i]['welding_stat'] + "</td>"
                table_str += "<td>" + order_list[i]['color'] + "</td>"

                table_str += "</tr>"
            }

            table_str += '</tbody>\
                </table>';
            
            table = document.querySelector("#general_order_table")
            table.innerHTML = ''
            table.insertAdjacentHTML( 'beforeend', table_str);
        })
        .catch(error => console.log('error', error));
};

function reload(){
    var container = document.querySelector(".uk-active")
    var content = container.innerHTML;
    container.innerHTML= content; 
}

adm_GeneralOrder();
setInterval(reload, 5000)