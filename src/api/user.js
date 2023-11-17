import request from '../utils/request'

export function getLikeList() {
  return request({
    url: '/goods/relevant',
    params: {
      limit: 4
    }
  })
}
