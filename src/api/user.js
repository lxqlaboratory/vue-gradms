import request from '@/utils/request'

export function login(jsonForm) {
  return request({
    url: '/api/apiLogin',
    method: 'post',
    data: jsonForm
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function editPassword(passWord) {
  return request({
    url: '/func/web/passWord',
    method: 'POST',
    data: {
      passWord
    }
  })
}

