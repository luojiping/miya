import axios from 'axios';

const service = axios.create({
    baseURL:""
})

service.interceptors.request.use(config=>{
    return config;
})
service.interceptors.response.use(res=>{
    return res.data;
})

export default service;