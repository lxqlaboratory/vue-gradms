import request from '@/utils/request'

export function getAchievementWordTypeInfoList() {
  return request({
    url: '/api/student/getAchievementWordTypeInfoList',
    method: 'POST',
    data: {}
  })
}

export function saveAchievementWordTypeInfoInit() {
  return request({
    url: '/api/student/saveAchievementWordTypeInfoInit',
    method: 'POST',
    data: {}
  })
}

export function saveAchievementWordTypeInfo(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeInfo',
    method: 'POST',
    data
  })
}
