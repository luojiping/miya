
// 等资源加载完毕
window.onload = function(){
    setRem(750)
}
// 窗口大小改变时做的处理
window.onresize = function(){
    setRem(750)
}
function setRem(uiPx){
    // 获取html 元素
    const html = document.getElementsByTagName('html')[0]
    // 获取浏览器的宽度 且处理兼容
    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth
    html.style.fontSize = clientWidth / uiPx * 200 + 'px'
}