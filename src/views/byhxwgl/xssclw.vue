<template>

  <div>

    <el-upload
      action="http://localhost:9528/gradms/api/student/testUpload"
      ref="upload"
      :multiple="false"
      :data="formData"
      :file-list="fileList"
      :with-credentials="true"
      :auto-upload="false"
      :limit="1"
      accept=".doc,.pdf,.txt"
      :on-success="uploadSuccess"
      :on-change="onChange"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传.doc/.pdf/.txt文件</div>
    </el-upload>

    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitBtn">提交</el-button>


  </div>
</template>
<script>

  export default {
    data(){
      return{
        fileList:[],
        formData:{
          title: 'uyjg',
          desc: 'fjfj',
          priority: '',
          occurDate: '',
          file:''
        }
      }
    },
    created() {


    },
    methods: {
      onChange(file,fileList){
        this.fileList[0]=file
      },

      //上传完表单后 回调方法。response是返回值
      uploadSuccess:function (response) {

      },

      submitBtn(){
        console.log("submit")
        this.$refs.upload.submit()
      }

    }
  }

</script>
<style scoped>


</style>
