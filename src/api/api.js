import axios from "./axios";





export const getClassifyData = ()=>{
    return axios.get("");
}

export const getClassifyList = ()=>{
    return axios.get("");
}

// 登录信息请求的接口
export const getUserLogin = (obj) =>{//(参数 usrname password)
    return axios.post('/api/login',obj)
}