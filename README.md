<<<<<<< Updated upstream
下载：
    create-react-app react-day6  => react-day7
    npm i react-router-dom -S
Ant Design  ui框架
    下载 ： npm install antd --save
使用reset.css处理一些兼容性问题
下载axios:
    npm i axios -D
下载react-redux:
    npm i react-redux -S
下载immutable：
    npm i immutable -S 
下载redux：
    npm i redux -S
下载：redux-thunk
    npm i redux-thunk -D
下载： moment.js
npm install moment --save
下载 ： antd-mobile
npm install antd-mobile --save
下载： better-scroll
npm install better-scroll --save
=======
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
>>>>>>> Stashed changes
