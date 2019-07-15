<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
      <el-form-item :label="$t('modifyPasswordModal.oldPassword')" prop="oldPass">
        <el-input v-model="ruleForm.oldPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item :label="$t('modifyPasswordModal.inputNewPassword')" prop="newPass">
        <el-input v-model="ruleForm.newPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item :label="$t('modifyPasswordModal.retypePassword')" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">{{ $t('route.submit')}}</el-button>
        <el-button @click="resetForm('ruleForm')">{{ $t('modifyPasswordModal.reset')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import { editPassword } from '@/api/editPassword'
const Base64 = require('js-base64').Base64

export default {

  data() {
    var validateOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('旧密码不能为空'))
      }
      callback()
    }
    var validateNewPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      }
      setTimeout(() => {
        if (value.length > 20) {
          callback(new Error('密码长度最大为20'))
        } else {
          callback()
        }
      }, 10)
    }
    var validateNewPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('两次输入密码不一致!'))
      }
      setTimeout(() => {
        if (value.length > 20) {
          callback(new Error('密码长度最大为20'))
        } else {
          callback()
        }
      }, 10)
    }
    return {
      ruleForm: {
        oldPass: '',
        newPass: '',
        checkPass: '',
        msg: ''
      },
      rules: {
        oldPass: [
          { validator: validateOldPass, trigger: 'blur' }
        ],
        newPass: [
          { validator: validateNewPass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validateNewPass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      const newPass = Base64.encode(this.ruleForm.newPass)
      const oldPass = Base64.encode(this.ruleForm.oldPass)
      const jsonForm = JSON.stringify({ oldPwd: oldPass, newPwd: newPass })
      editPassword(jsonForm).then(res => {
        this.msg = res.msg
        if (this.msg === 'passwordError') {
          this.$message({
            type: 'error',
            message: '旧密码不正确'
          })
      } else if (this.msg === 'userError'){
          this.$message({
            type: 'error',
            message: '用户不存在'
          })
        } else {
          this.$message({
            type: 'sucess',
            message: '修改成功'
          })
        }
      }).catch(e => {
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
