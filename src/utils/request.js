import axios from 'axios'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: baseURL,
  timeout: 10000
})
request.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    return config
  },
  (err) => Promise.reject(err)
)
request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default request
