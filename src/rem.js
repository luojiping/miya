window.onload = function(){
    setRem(750)
}
//浏览器尺寸发生变化的时候
window.onresize = function(){
    setRem(750)
}
function setRem(uiPx){
    const html = document.getElementsByTagName("html")[0];
    //获取浏览器的高度
    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = clientWidth / uiPx * 200 + "px"
}