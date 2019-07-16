import request from '@/utils/request'

export function stuGradeQuery() {
  return request({
    url: '/api/cultivate/stuGradeQuery',
    method: 'POST',
    data: {}
  })
}
