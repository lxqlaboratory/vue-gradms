import request from '@/utils/request'

export function thesisReviewAndReplyInfoShow() {
  return request({
    url: '/api/degree/thesisReviewAndReplyInfoShow',
    method: 'POST',
    data: {}
  })
}
