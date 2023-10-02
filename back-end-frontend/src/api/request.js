import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.1.8:3000"
})

request.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/x-www-form-urlencoded"
  if (config.method === "POST" || config.method === "post") {
    let paramsString = '';
    for (let key in config.data) {
      paramsString += `${key}=${config.data[key]}&`;
    }
    //重新赋值config.data
    config.data = paramsString.slice(0, -1);
  } else if ((config.method === "GET" || config.method === "get") && Object.keys(config.data).length !== 0) {
    // 参数序列号
    let paramsSrt = "";
    for (let key in config.data) {
      paramsSrt += `${key}=${config.data[key]}&`;
    }
    // 重新赋值config.url地址
    config.url = config.url + '?' + paramsSrt.slice(0, -1);
  }
  return config
}, err => {
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  return response
}, async(error) => {
  return Promise.reject(error)
})

export default request;