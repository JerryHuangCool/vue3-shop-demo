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
    function singleCheck(skuId, sel) {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = sel
    }
    function allCheck(sel) {
      cartList.value.forEach((item) => (item.selected = sel))
    }
    return {
      cartList,
      addCart,
      delCart,
      singleCheck,
      allCheck
    }
  },
  {
    persist: true // 持久化
  }
)
