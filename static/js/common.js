

function load_and_load(){
    var container = document.querySelector(".uk-active").contentWindow.location.reload(true);
    // var content = container.innerHTML;
    // container.innerHTML= content;

    console.log("reloaded")
}

setInterval(load_and_load, 5000)