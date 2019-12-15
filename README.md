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
        <!-- app.use() 第一个参数：要通过那个路径访问，第二个参数：proxy的配置项 -->
        app.use("/api",proxy({
            target:"https://m.mia.com/search/getCategoryClassify?pid=18657:3000",  //目标点
            pathRewrite:{
                "^/api":'/' //重写请求访问路径
            },
            changeOrigin: true, //是否允许跨域
            secure: true   //允许https请求
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



 ### react-lazyload懒加载
    + 下载
        npm install --save react-lazyload
    + 引入
        import LazyLoad from 'react-lazyload';
           

### 配置文件路径 
    通过...找文件，类似于函数中嵌套函数，和回调地狱一样
    通过配置代理文件 通过@来代表当前src的路径。通过webpack做配置
    + 让@代理src的绝对路径
        1. 在paths.js文件中，配置：
            appComponent:resolveApp('src/'),  //在resolve中将src拼成一个绝对路径    
        2. paths.js在webpack.config.js中使用
                2.1 搜索path：查看是否将node中的path模块引入进来  const paths = require('./paths');
                2.2 之后查找alias，在alias中加上我们的写法
                      "@":paths.appComponent   //这时候@就代表的是拼接好的路径
        3.  之后使用即可，只要是src下面的路径，都可以使用@表示

