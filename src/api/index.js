import axios from "axios"

const request = axios.create({
    baseURL:'http://api.cpengx.cn/metashop/api'
}) 

export const getHomePage = (params) => {
    return request({
        method:"GET",
        url:'/homepage',
        params
    })
}

export const getProducts = () => {
    return request({
        method:"GET",
        url:'/products',
    })
}

// 请求拦截响应
request.interceptors.response.use((response) => {
    if(response.status == 200){
        return response.data
    }else{
        return response
    }
},function(err){
    return Promise.reject(err)
})