import request from '@/utils/request'

export function showCultivatePlan() {
  return request({
    url: '/api/cultivate/newPlanSelectCourse',
    method: 'POST',
    data: {}
  })
}
export function selectCourseInsert(data) {
  return request({
    url: '/api/cultivate/selectCourseInsert',
    method: 'POST',
    data
  })
}
