<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
<!--        ,{validator: checkPhone, trigger: 'blur'}-->
        <el-form-item class="input-prepend restyle" prop="mobile" :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' }]">
          <div >
            <el-input type="text" placeholder="手机号" v-model="user.mobile"/>
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://localhost:8160/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import cookie from 'js-cookie'
import loginApi from '@/api/login'
export default {
  layout: 'sign',

  data () {
    return {
      //封装登陆信息
      user:{
        mobile:'',
        password:''
      },
      //登陆后获取用户信息
      loginInfo:{}
    }
  },

  methods: {
    //登陆
    submitLogin(){
      //调用接口登陆
      loginApi.submitLogin(this.user)
      .then(response=>{
        //获取token字符串,放入cookie
        //参数：cookie名称，参数值，参数作用范围
        cookie.set('guli_token',response.data.data.token,{domain: 'localhost'})

        //调用接口，根据header中token获取用户信息
        //之前创建了一个request拦截器，判断cookie中是否有token，有token就将其放入request的header中
        loginApi.getLoginUserInfo()
        .then(response=>{
          this.loginInfo = response.data.data.userInfo
          //获取用户信息，放入cookie
          cookie.set('guli_ucenter',this.loginInfo,{domain: 'localhost'})
        })
        //跳转
        window.location.href = '/'

      })
    },

    checkPhone (rule, value, callback) {
      //debugger
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机号码格式不正确'))
      }
      return callback()
    }
  }
}
</script>
<style>
.el-form-item__error{
  z-index: 9999999;
}
</style>
