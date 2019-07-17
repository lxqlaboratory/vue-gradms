<template >
  <div class="app-container">
    <table  cellspacing="0" width="100%">
      <tbody>
      <tr><td colspan="11">
        <font color="#9b0d14">
        说明：
          <br> *  1. 请申请本学期毕业的学生选择'是',并提交
          <br>*  2. 本学期不申请毕业的学生请不要操作
          <br> *  3. 申请毕业的学生请及时填写并确认学籍信息和学位信息
          <br> *  4. 这些信息用于国家报盘，请认真填写各项信息
          <br> *  5. 填写之前请认真阅读填写说明
        </font>
      </td>
      </tr>
      <tr>
        <td align="center" colspan="3" style="color: #9b0d14 " >
         提交毕业申请时间为2017-02-22 08：00：00至2019-12-31 17：01：01，请尽快提交毕业申请
        </td>
      </tr>
      </tbody></table>
    <el-table
      :data="courseExportList"
      border
      size="mini"
      style="width: 100%;"
    >
      <el-table-column
        prop="category"
        width="250"
        label="姓名"
        align="center"
      >

      </el-table-column>
      <el-table-column
        prop="xuhao"
        width="200"
        label="学号"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="kechenghao"
        width="350"
        label="查看个人信息"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="kechenghao"
        label="是否申请毕业"
        align="center"
      >
      </el-table-column>
    </el-table>
    <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td style="text-align:center">
          <el-button type="primary" size="mini" >提交</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { degreeGradApplyInit } from '@/api/degreeGradApply'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeGradApplyInit().then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
