import request from '@/utils/request'

export function uploadCheckThesisInit() {
  return request({
    url: '/api/degree/uploadCheckThesisInit',
    method: 'POST',
    data: {}
  })
}

export function uploadCheckThesis(data) {
  return request({
    url: '/api/degree/uploadCheckThesis',
    method: 'POST',
    data
  })
}
