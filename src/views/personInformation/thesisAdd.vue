<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">论文信息添加</td>
      </tr>
      <tr>
        <td  class="colspan1">论文名称</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>

      <tr>
        <td  class="colspan1">期刊或会议名称</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">发表刊物刊号(没有请填写无)</td>
        <td  class="colspan2"><el-input  type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">论文级别</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">影响因子 **(没有请填写无)</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">是否清样 </td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">论文发表时间</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">第几卷 </td>
        <td  class="colspan2"><el-input  type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">第几期</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">起始页</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">终止页 </td>
        <td  class="colspan2"><el-input  type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">收录方式</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">录入EI检索号</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td colspan="8"><el-button class="submitBtn" size="mini">提交</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  //  学生上传论文
  import { saveAchievementWordTypeInfo } from '@/api/getAchievementWordType'
  export default {
    data(){
      return{
        formData:{

        },
        /*languageKinds: [{
          value: '01',
          label: '中文'
        }, {
          value: '02',
          label: '英文'
        }, {
          value: '03',
          label: '日文'
        }, {
          value: '04',
          label: '韩文'
        }],
        value: ''*/
      }
    },
    created() {

    },
    methods: {
      submitBtn(){
        console.log(this.formData)
        saveAchievementWordTypeInfo(this.formData).then(res => {
          this.$message({
            type: 'info',
            message: '提交成功'
          });
        })
      },
    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .titleSpan{
    font-size: 16px;
    color: #A50001;
    font-weight: bold;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content tr{
    width:100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    width : 30%;
  }
  .colspan2{
    color:  #606266;
    width: 70%;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 70%;
    line-height: 18px;
    color:  #606266;
    font-size: 12px;
  }
  .submitBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
</style>
