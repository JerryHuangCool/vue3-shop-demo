import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    function addCart(goods) {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 找到了
        item.count = item.count + goods.count
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }
    function delCart(skuId) {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
    return {
      cartList,
      addCart,
      delCart
    }
  },
  {
    persist: true // 持久化
  }
)
