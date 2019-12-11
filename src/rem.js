window.onload = function() {
    setRem(750);
}

window.resize = function() {
    setRem(750);
}

function setRem(uipx) {
    const html = document.getElementsByTagName("html")[0];
    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = clientWidth/750*200 +"px";
}