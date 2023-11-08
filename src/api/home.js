import request from '../utils/request'

export function getCategory() {
  return request({
    url: '/home/category/head'
  })
}

export function getBanner(distributionSite) {
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export function getNewGoods() {
  return request({
    url: '/home/new'
  })
}

export function getHotGoods() {
  return request({
    url: '/home/hot'
  })
}

export function getGoods() {
  return request({
    url: '/home/goods'
  })
}
