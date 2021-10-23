import request from '@/utils/request'

export default {
  //查询热门课程和名师
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },

  //讲师详情
  getTeacherInfo(teacherId){
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
