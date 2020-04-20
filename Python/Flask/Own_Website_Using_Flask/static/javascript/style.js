window.onload = function onLoad() {
    changeShowcaseHeight();
    allignButton();
}

function changeShowcaseHeight(){
    let headerHeight = document.getElementById('header').offsetHeight;
    document.getElementById("showcase").style.height = `${window.innerHeight - headerHeight}px`;
}

function allignButton() {
    let showcaseHeight = document.getElementById('showcase').offsetHeight;
    document.getElementById('button').style.marginTop = `${(showcaseHeight/2) - 50}px`
}