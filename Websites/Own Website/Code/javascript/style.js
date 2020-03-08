window.onload = function onLoad() {
    changeShowcaseHeight();
    AllignButton();
}

function changeShowcaseHeight(){
    let headerHeight = document.getElementById('header').offsetHeight;
    document.getElementById("showcase").style.height = `${window.innerHeight - headerHeight}px`;
}

function AllignButton() {
    let showcaseHeight = document.getElementById('showcase').offsetHeight;
    document.getElementById('button').style.
}