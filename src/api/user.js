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
    url: '/api/auth/changePassword',
    method: 'POST',
    data
  })
}

export function getStudentBaseicInfo() {
  return request({
    url: '/api/student/getStudentBaseicInfoData',
    method: 'POST',
    data: {}
  })
}

export function updateStudentBaseicInfo(data) {
  return request({
    url: '/api/student/updateStudentBaseicInfo',
    method: 'POST',
    data
  })
}
