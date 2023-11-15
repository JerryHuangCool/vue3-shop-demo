import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '../index'
import {
  addCartById,
  getCart,
  mergeCart,
  deleteCart,
  changeCartItem,
  isAllChange
} from '@/api/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => {
      return userStore.userInfo.token ? true : false
    })
    const cartList = ref([])
    async function addCart(goods) {
      if (isLogin.value) {
        await addCartById(goods.skuId, goods.count)
        updateCart()
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count = item.count + goods.count
        } else {
          // 没找到
          cartList.value.push(goods)
        }
      }
    }
    async function delCart(skuId) {
      if (isLogin.value) {
        await deleteCart([skuId])
        updateCart()
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }
    async function singleCheck(i, sel) {
      const item = cartList.value.find((item) => item.skuId === i.skuId)
      item.selected = sel
      await changeCartItem(i.skuId, sel, i.count)
    }
    async function allCheck(sel) {
      cartList.value.forEach((item) => (item.selected = sel))
      const arr = cartList.value.map((item) => {
        return item.skuId
      })
      await isAllChange(arr, sel)
    }
    async function updateCart() {
      const res = await getCart()
      cartList.value = res.result
    }
    async function mergeLocalCart() {
      const arr = cartList.value.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      })
      await mergeCart(arr)
      updateCart()
    }
    async function changeCart(item) {
      if (isLogin.value) {
        await changeCartItem(item.skuId, item.selected, item.count)
        updateCart()
      }
    }
    function clearCart() {
      cartList.value = []
    }
    return {
      cartList,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      updateCart,
      mergeLocalCart,
      changeCart,
      clearCart
    }
  },
  {
    persist: true // 持久化
  }
)
