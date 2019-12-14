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

反向代理：
    http-proxy-middleware用于后台将请求转发给其他服务器
    例如：我们将主机A为http://localhost:3000/,现在浏览器发送一个请求，请求接口/api,这个请求的数据在另外一台服务器B上（http://10.119.168.87:4000),这时，就可以通过在A主机设置代理，直接将请求发送到B主机
安装：
    npm install --save-dev http-proxy-middleware
    这是require引入得，modele.export暴露。





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


###  styled-components
    +  下载
        npm install --save styled-components
    +  引入
        import styled from 'styled-components'

### elementui 使用   
    + 下载
        npm i element-ui -S
    + 引入
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';    
    +      