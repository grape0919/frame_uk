

function load_and_load(){
    
    var currentLocation = window.location;
    $("#gen_order_table").load(currentLocation + ' #gen_reload');
    $("#mas_order_table").load(currentLocation + ' #mas_reload');

    console.log("reloaded")
}
function interval_loader(){
    setInterval(load_and_load, 5000);
}