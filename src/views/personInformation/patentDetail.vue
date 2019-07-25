<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">专利/著作权信息添加</td>
      </tr>
      <tr>
        <td  class="colspan1">专利/著作权名称</td>
        <td  class="colspan2"><el-input v-model="patentName" type="text" size="mini" class="elinput"></el-input></td>
      </tr>

      <tr>
        <td  class="colspan1">专利/著作权类别</td>
        <td  class="colspan2"> <el-select v-model="patentType" placeholder="pleaseChoose" size="mini" style="width: 70%;">
          <el-option
            v-for="item in ptsslwlxlist"
            :key="item.value"
            :label="$t(item.name)"
            :value="item.value"
          />
        </el-select></td>
      </tr>
      <tr>
        <td  class="colspan1">专利号/著作登记号</td>
        <td  class="colspan2"><el-input  type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">分类号</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">是否已转让</td>
        <td  class="colspan2"><el-input v-model="formData" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">备注</td>
        <td  class="colspan2"> <el-input
          v-model="gradInnovation2"
          class="elinput"
          type="textarea"
          placeholder="请输入内容"
          maxlength="100"
          rows="5"
          show-word-limit
        /></td>
      </tr>
      <tr>
        <td colspan="8"><el-button class="submitBtn" size="mini">提交</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PatentDetail',
  data() {
    return {
      textarea: '',
      patentName: '',
      achPanId: '',
      patentType: '',
      prospectus: '',
      typeNum: '',
      patentTypeName: '',
      applyNum: '',
      isCheck: '',
      personNum: '',
      remark: ''
    }
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
