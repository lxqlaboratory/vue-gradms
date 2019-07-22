<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="12">内容的格式必须是：本文的主要工作是.............。本文的不足之处是...........。
          请写在一段话里即可，不用分段，字数请控制在200-300字，以免超出300的部分被删除。
        </td>
      </tr>
      <tr>
        <td style="border-right:0px !important;"></td>
        <td style="border-right:0px !important;">
          <el-input
            class="inputSpan"
            type="textarea"
            v-model="textarea"
            placeholder="请输入内容"
            maxlength="300"
            rows="12"
            show-word-limit
          >
          </el-input>
        </td>
        <td></td>
      </tr>
      <tr>
        <td colspan="12" align="center">
          <el-button class="allBtn" size="mini">保存</el-button>
          <el-button class="allBtn" size="mini">下载学位申请书</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
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
    margin: 60px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    font-size: 12px;
  }
  .inputSpan{
    color: #606266;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
    font-size: 12px;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }

</style>
