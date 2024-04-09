import axios from "axios";
const basePath = window.location.href.includes("localhost") ?
    "http://localhost:5000"
    :
    ""

const api = axios.create({
    baseURL: `${basePath}/api`
})

api.interceptors.request.use((config)=>{
    config.headers.setAuthorization(localStorage.getItem("sneakerLink"))
    return config
})

export default api;
