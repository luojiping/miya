### 代理配置【可以展开，可以不展开】
#### 不展开
    +  在src目录下，创建setupProxy.js文件
    + 下载 http-proxy-middleware
        npm i http-proxy-middleware -D
    +  配置代理接口
    const proxy = require("http-proxy-middleware");

    module.exports =(app)=>{
        app.use("/api",proxy({
            target:"https://m.mia.com/search/getCategoryClassify?pid=18657:3000",
            pathRewrite:{
                "^/api":'/'
            },
            changeOrigin: true,
            secure: true
        }))
    }
    + 通过axios请求数据，查看是否可以得到数据   
        axios.get('/api')
        .then(res=>{
            console.log(res);
        })