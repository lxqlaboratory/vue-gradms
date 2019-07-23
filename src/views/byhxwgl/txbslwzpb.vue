<template>
  <div class="container">
    <div>
      <table class="content">
        <tr>
          <td colspan="8" class="noticeSpan">请确认学生表现信息中的已发表论文已经通过学院秘书审核，并认真填写完成与学位论文相关信息，以确保自评表信息完整</td>
        </tr>
        <tr>
          <td colspan="8" style="text-align: center;font-size: 15px;font-weight: bold">山东大学博士学位论文自评表（匿名评审专用）</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">论文题目</td>
          <td width="75%" class="colspan2" >
            <el-input v-model="input" type="text" size="mini" class="elinput"></el-input>
          </td>
        </tr>
        <tr>
          <td class="colspan1">学科专业（二级学科名称）</td>
          <td class="colspan2">
            <el-input v-model="input" size="mini" class="elinput"></el-input>
          </td>
        </tr>
        <tr>
          <td class="colspan1">研究方向</td>
          <td class="colspan2">
            <el-input v-model="input" size="mini" class="elinput"></el-input>
            <span class="noticeSpan"> 研究方向可以在学生上传学位论文页面维护</span>
          </td>
        </tr>
      </table>
      <table class="content">
        <tr>
          <td width="25%" class="colspan1">序号</td>
          <td width="75%" class="colspan1">论文主要创新点（每点不超过100字）</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">创新点1</td>
          <td width="75%" class="colspan2" >
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td class="colspan1">创新点2</td>
          <td class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td class="colspan1">创新点3</td>
          <td class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="colspan1">论文的不足之处（含原因及改进方法）</td>
        </tr>
        <tr>
          <td class="colspan1">不足之处</td>
          <td class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini">提交</el-button>
            <el-button class="allBtn" size="mini">自评表下载查看</el-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .noticeSpan{
    color: #A50001;
    padding: 12px;
    line-height: 18px;
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
    width: 100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    font-size: 12px;
  }
  .content td .el-input{
    width: 60%;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    text-align: center;
  }
  .colspan2{
    color:  #606266;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 60%;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }

</style>
