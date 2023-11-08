import request from '../utils/request'

export function getCategory(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
