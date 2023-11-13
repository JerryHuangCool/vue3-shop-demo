import axios from 'axios'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const router = useRouter()
const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: baseURL,
  timeout: 10000
})
request.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    // 1. 从pinia获取token数据
    // 2. 按照后端的要求拼接token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
request.interceptors.response.use(
  (res) => {
    if (res.data.code !== '1') {
      // 错误提示
      ElMessage.error(res.data.message || '服务异常')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    if (err.response?.status === 401) {
      const userStore = useUserStore()
      userStore.removeUserInfo()
      router.push('/login')
    }
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)
export default request
