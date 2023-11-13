import request from '../utils/request'

export function userLogin(account, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}
