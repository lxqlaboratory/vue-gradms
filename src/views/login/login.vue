<template>
  <div class="prologin-container">
    <div class="header">
      <img style="width: 150px;height: 45px;" src="@/assets/login/schoollogo.png">
      <span style="margin-left:15px;font-size: 16px;font-weight: bold;color: dimgray">留学生研究生信息管理系统</span>
      <span
        style="margin-left:15px;padding-left:15px;border-left: 1px solid gainsboro;font-size: 16px;font-weight: bold;color: dimgray"
      >{{ $t('route.loginTitle') }}</span>
      <lang-select  style="position: absolute;right: 15%;"/>
    </div>

    <div class="main-content">
      <div class="login-box">
        <div class="input-form">
          <div style="width: 100%;">
            <div style="position: relative;width: 100%;margin-top: 15px;">
              <input v-model="loginForm.telAccount" placeholder="您的学生账户" maxlength="11" class="login-form-input">
            </div>

            <div style="position: relative;width: 100%;margin-top: 30px;">
              <input v-model="loginForm.password" maxlength="12" placeholder="请输入密码" :type="showPassword?'':'password'" class="login-form-input">
              <el-button
                type="text"
                style="position: absolute;top:0;right: 0px;padding-top: 5px;"
                @click="showPassword=!showPassword"
              >{{ !showPassword?'显示密码':'隐藏密码' }}
              </el-button>
            </div>
          </div>
          <div style="width: 100%;">
            <el-button type="primary" style="width: 100%" :loading="loading" @click="login">登录</el-button>
            <div
              style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;margin-top: 25px;"
            >
              <el-checkbox v-model="ydxy"><span
                style="font-size: 13px;"
              >记住密码</span></el-checkbox>
              <el-button type="text" style="padding: 0;" @click="toRegister">忘记密码？</el-button>
            </div>
          </div>
        </div>

      </div>

      <el-carousel indicator-position="none" class="bgflux">
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back1.png') repeat-x; background-size: 100% 100%;" />
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back2.png') repeat-x; background-size: 100% 100%;" />
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back3.png') repeat-x; background-size: 100% 100%;" />
      </el-carousel>
      <img class="rightimg">

    </div>

    <div class="notice">
      <div style="width: 75%;background-color: gainsboro;height: 1px;" />
      <div class="notice-title">友情提示:</div>
      <span style="color: gray;font-size: 14px;line-height: 200%;">

        <dd>{{$t('login.notice1')}}</dd>

        <dd>{{$t('login.notice2')}}</dd>

      </span>

    </div>

    <div class="login-bottom">Copyright © 山东大学研究生院</div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import LangSelect from '@/components/LangSelect'

export default {

  name: 'Prelogin',
  data() {
    return {
      showPassword: false,
      loading: false,
      loginForm: {
        telAccount: '',
        password: '',
        messageCode: ''
      },
      ydxy: true,
      swiperList: ['https://gradms.sdu.edu.cn/applogin/images/back1.png', 'https://gradms.sdu.edu.cn/applogin/images/back2.png', 'https://gradms.sdu.edu.cn/applogin/images/back3.png']
    }
  },
  components: { LangSelect },
  methods: {
    toRegister() {
      this.$router.push({ path: '/preregister' })
    },
    login: function() {
      this.loading = true
      login(this.loginForm.telAccount, this.loginForm.password).then(response => {
        if (response.status) {
          this.$router.push({ path: '/dashboard' })
        } else {
          this.$message({
            type: 'error',
            message: response.message
          })
        }
        this.loading = false
      }).catch(error => {
        this.loading = false
      })
    }
  }

}
</script>

<style lang="scss" scoped>

  .input-form {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .login-form-input {
    width: 100%;
    padding: 5px;
    border: 0 none;
    border-bottom: 2px solid gainsboro;
    font-size: 14px;

    &:focus {
      outline: none;
      border-bottom: 2px solid #409EFF;
    }
  }

  $topcicolor: #059E1F;
  .prologin-container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .notice{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top:2vh;

      .notice-title{
        margin-top: 1vh;
        padding: 5px 15px 5px 15px;
        border-left: 6px solid #409EFF;
        font-weight: bold;
        width: 60%;
        text-align: left;
      }
    }

    .login-bottom{
      color: white;
      font-size: 13px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6vh;
      background-color: #0066b3;
      text-align: center;
      line-height: 6vh;
    }
    .header {
      min-width:100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      border-bottom: 1px solid gainsboro;
      box-shadow:  0px 0px 4px gainsboro;
      padding: 2vh 0 2vh 15%;
      margin-bottom: 2px;
    }

    .main-content {
      position: relative;
       min-height: 30vw;
      width: 100%;
      .bgflux{
        position: absolute;
        top: 0;
        left: 0;
        height: 30vw;
        width: 100vw;
      }
      .login-box {
        position: absolute;
        right: 10%;
        top: 5vh;
        z-index: 99;
        padding: 20px;
        width: 340px;
        height: 340px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
        }
      }

    }

</style>
