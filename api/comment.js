import request from '@/utils/request'
export default {
  //查询前两条banner信息
  getPageList(page,limit,courseId) {
    return request({
      url: `/eduservice/comment/${page}/${limit}/${courseId}`,
      method: 'get'
    })
  },

  addComment(comment){
    return request({
      url: `/eduservice/comment/auth/save`,
      method: 'post',
      data: comment
    })
  }
}
