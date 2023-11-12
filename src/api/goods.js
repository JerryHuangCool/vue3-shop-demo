import request from '../utils/request'

export function getGodosDetail(id) {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export function getHotGoods({ id, type, limit = 3 }) {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
