import request from '../utils/request'

export function addCartById(skuId, count) {
  return request({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}
export function getCart() {
  return request({
    url: '/member/cart'
  })
}

export function mergeCart(arr) {
  return request({
    url: '/member/cart/merge',
    method: 'post',
    data: arr
  })
}

export function deleteCart(arr) {
  return request({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids: arr
    }
  })
}

export function changeCartItem(skuId, selected, count) {
  return request({
    url: `/member/cart/${skuId}`,
    method: 'put',
    data: {
      selected,
      count
    }
  })
}

export function isAllChange(arr, isAll) {
  return request({
    url: '/member/cart/selected',
    method: 'put',
    data: {
      ids: arr,
      selected: isAll
    }
  })
}
