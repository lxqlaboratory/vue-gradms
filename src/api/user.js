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

export function editPassword(data) {
  return request({
    url: '/api/changePassword',
    method: 'POST',
    data
  })
}

