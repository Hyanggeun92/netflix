import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: { //데이터가 어떤 형식으로 들어오는지
        "Content-type": "application/json"
    }
})

api.interceptors.request.use(function (config) {
    //요청이 전달되기 전에 작업 수행
    console.log("request start", config) //개발자가 확인용으로 쓰는 것
    return config
}, function (error) {
    //요청 오류가 작업 수행
    console.llg("request error", error)
    return Promise.reject(error);
}
)

api.interceptors.response.use(function (response) {
    console.log("get response", response);
    return response;
}, function (error) {
    console.log("get error", error)
    return Promise.reject(error)
}
)

export default api;