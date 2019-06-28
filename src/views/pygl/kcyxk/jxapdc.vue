<template >

  <el-table
    :data="tableData"
    border
    style="width: 100%;">
    <el-table-column
      prop="category"
      label="类别"
      width="52"
      align="center">
    </el-table-column>
    <el-table-column
      prop="xuhao"
      label="序号"
      width="52"
      align="center">
    </el-table-column>
    <el-table-column
      prop="kechenghao"
      label="课程号"
      width="102"
      align="center">
    </el-table-column>
    <el-table-column
      prop="kechengming"
      label="课程名"
      width="204"
      align="center">
    </el-table-column>
    <el-table-column
      prop="kaikexueqi"
      label="开课学期"
      width="102"
      align="center">
    </el-table-column>
    <el-table-column
      prop="zongxueshi"
      label="总学时"
      width="102"
      align="center">
    </el-table-column>
    <el-table-column
      prop="xuefen"
      label="学分"
      width="102"
      align="center">
    </el-table-column>
    <el-table-column
      prop="renkejiaoshi"
      label="任课教师"
      width="204"
      align="center">
    </el-table-column>
    <el-table-column
      prop="kaohefangshi"
      label="考核方式"
      width="102"
      align="center">
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>
  body .el-table th.gutter{
    display: table-cell!important;
  }

  body .el-table colgroup.gutter{
    display: table-cell!important;
  }
</style>
