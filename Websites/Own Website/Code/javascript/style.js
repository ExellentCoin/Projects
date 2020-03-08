window.onload = function onLoad() {
    changeShowcaseHeight();
}

function changeShowcaseHeight(){
    let headerHeight = document.getElementById('header').offsetHeight;
    document.getElementById("showcase").style.height = `${window.innerHeight - headerHeight}px`;
}