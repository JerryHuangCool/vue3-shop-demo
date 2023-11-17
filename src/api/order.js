import request from '../utils/request'

export function getCheckoutInfo() {
  return request({
    url: '/member/order/pre'
  })
}

export function generateOrder(data) {
  return request({
    url: '/member/order',
    method: 'post',
    data
  })
}
export function getOrderAPI(id) {
  return request({
    url: `/member/order/${id}`
  })
}

export function getUserOrder(params) {
  return request({
    url: '/member/order',
    params
  })
}
