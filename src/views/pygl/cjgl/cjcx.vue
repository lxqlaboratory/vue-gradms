<template>
<div class="container">
  <div ><span>姓名：</span><span></span></div>
  <div class="tableStyle">
    <el-table
      :data="gradeList"
      border
      style="width: 100%">
      <el-table-column
        label="序号"
        fixed = "left"
        width="80"
        align="center">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程号"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="任课教师"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.teaName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="学分"
        width="100"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程属性"
        width="120"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.dataName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="成绩"
        width="100"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.subItemScorePrint) }}
        </template>
      </el-table-column>
      <el-table-column
        label="考试时间"
        width="120"
        align="center">
        <template slot-scope="scope">
          {{ $t(scope.row.examTime) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>

</template>

<script>
  import { stuGradeQuery } from '@/api/stuGradeQuery'
export default {
  data() {
    return {
      gradeList : '',
      courseNum : '',
      courseName : '',
      teaName : '',
      credit : '',
      dataName : '',
      subItemScorePrint : '',
      examTime : ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      stuGradeQuery().then(res => {
        this.gradeList = res.data
        console.log(this.gradeList)
      })
    },
  }
}
</script>

<style scoped>
  .container{
    margin: 20px;
  }
  .tableStyle{
    margin-top: 20px;
  }

</style>
