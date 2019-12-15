import axios from "./axios";

export const getCon = ()=>{
    return axios.get("");
}

// 登录信息请求的接口
export const getUserLogin = (obj) =>{//(参数 usrname password)
    return axios.post('/api/login',obj)
}