const proxy = require("http-proxy-middleware");

module.exports =(app)=>{
    app.use("/api",proxy({
        target:"https://m.mia.com/search:3000",
        pathRewrite:{
            "^/api":'/'
        },
        changeOrigin: true,
        secure: true
    }))
}