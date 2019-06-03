<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="旧密码" prop="oldPass"  >
        <el-input v-model="ruleForm.oldPass"  type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="输入新密码" prop="newPass">
        <el-input v-model="ruleForm.newPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="重复输入密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        checkPass: ''
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
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
