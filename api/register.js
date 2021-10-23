import request from '@/utils/request'

export default {
  //根据邮箱发送验证码
  sendCode(mail) {
    return request({
      url: `/edumsm/msm/sendMile/${mail}`,
      method: 'get'
    })
  },
  //注册的方法
  registerMember(formItem){
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: formItem
    })
  }

}
