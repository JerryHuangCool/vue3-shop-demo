import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userLogin } from '@/api/login'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async (account, password) => {
      const res = await userLogin(account, password)
      userInfo.value = res.result
    }
    function removeUserInfo() {
      userInfo.value = {}
    }
    // 3. 以对象的格式把state和action return
    return {
      userInfo,
      getUserInfo,
      removeUserInfo
    }
  },
  {
    persist: true // 持久化
  }
)
