import request from '../utils/request'

export function getCategory(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

export function getSubCategory(id) {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

export function getSubCategoryGoods(data) {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
