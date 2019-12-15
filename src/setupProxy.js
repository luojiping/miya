// 通过require引入http-proxy-middleware  因为暴露的方式是module.export
const proxy = require("http-proxy-middleware");  //后台将请求转发给其他服务器的中间件

module.exports =(app)=>{
    // app.use() 第一个参数：要通过哪个路径访问，第二个参数：对象：proxy的配置项
    app.use("/api",proxy({
        target:"https://m.mia.com",
        pathRewrite:{
            "^/api":'/'
        },
        changeOrigin: true,   //是否允许跨域
        secure: true    //允许https请求
    }))
    // 代理首页列表接口数据
    app.use("/list",proxy({
        target:"https://m.mia.com",   //目标点
        pathRewrite:{ 
            "^/list":'/instant/groupon/common_list/1/0/:3000'   //重写请求的访问路径
        },
        changeOrigin: true,   //是否允许跨域
        secure: true    //允许https请求
    }))
}