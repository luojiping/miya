const proxy = require("http-proxy-middleware");

module.exports =(app)=>{
    app.use("/api",proxy({
        target:"https://m.mia.com",
        pathRewrite:{
            "^/api":'/search/getCategoryClassify'
        },
        changeOrigin: true,
        secure: true
    }))
}