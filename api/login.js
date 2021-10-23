import request from '@/utils/request'

export default {
  //根据登录信息登录
  submitLogin(userInfo) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },

  //根据token值获取用户信息
  getLoginUserInfo(){
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  }

}
