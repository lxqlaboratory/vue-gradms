<template >
  <div class="container">
    <div class="tableStyle">
      <el-table
        :data="gradeList"
        border
        size="mini"
        style="width: 100%;"
        :header-cell-style="getRowClass"
      >
        <el-table-column
          :label="$t('selectCourse.courseNum')"
          fixed="left"
          width="73"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseName')"
          width="125"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseSeq')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseProperty')"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.teaName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.exammeans')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.credit) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.teacher')"
          width="130"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseSort) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.semester')"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.subItemScorePrint) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.restCourse')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examTime) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.examPlace')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examTime) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.examTime')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examTime) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.remark')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examTime) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseArrangement')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
      {{ $t(scope.row.examTime) }}
      </template>
      </el-table-column>
        <el-table-column
          :label="$t('selectCourse.operation')"
          width="110"
          align="center"
        >
          <el-button size="mini" class="setBtn">{{ $t('cuiltivatingSchemeCheckAndDrawup.delete') }}</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { coursenewStuSelectInit } from '@/api/studentSelectCourse'
  import { newcultivateCourseOperation } from '@/api/studentSelectCourse'
export default {
  name: 'Xsxk',
  data() {
    return {
      gradeList: '',
      courseNum: '',
      courseName: '',
      teaName: '',
      credit: '',
      dataName: '',
      subItemScorePrint: '',
      examTime: ''
    }
  },
  created() {
    this.fetchData()
    this.getRowClass()
  },
  methods: {
    fetchData() {
      coursenewStuSelectInit().then(res => {
        this.gradeList = res.data
      })
    },
    deleteCourse(){

    }
    // getRowClass({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex === 0) {
    //     return 'background:#eef1f6;color:#606266;font-size:14px;font-weight:bold;'
    //   } else {
    //     return ''
    //   }
    // }
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
