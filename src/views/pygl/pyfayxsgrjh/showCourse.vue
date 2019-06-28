<template>
  <div>
    <el-table
      :data="requiredList"
      border
      style="width: 100%"
      :span-method="rowSpanMethod1"
      width="100%"
    >
      <el-table-column
        label="类别"
        width="70"
        align="center"
        fixed="left"
      >
        <template slot-scope="scope">
          {{ (scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('projectParticipation.number')"
        width="80"
        align="center"
        fixed="left"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="课程号"
        width="110"
        align="center"
        fixed="left"
      >
        <template slot-scope="scope">
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="开课学期"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.term) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="总学时"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.classHour) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="学分"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="任课教师"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.teacherGroup) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="考核方式"
        align="center"
        width="100"
        fixed="right"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.examStyle) }}
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-table
        :data="optionalList"
        border
        style="width: 100%"
        :span-method="rowSpanMethod2"
        :show-header="false"
      >
        <el-table-column
          label="类别"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.type) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('projectParticipation.number')"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="课程号"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="开课学期"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.term) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="总学时"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.classHour) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="学分"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.credit) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="任课教师"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.teacherGroup) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="考核方式"
          align="center"
          width="100"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examStyle) }}
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-table
        :data="buxiuList"
        border
        style="width: 100%"
        :span-method="rowSpanMethod3"
        :show-header="false"
      >
        <el-table-column
          label="类别"
          width="70"
          align="center"
        >
          <template slot-scope="scope" >
            {{ (scope.row.type) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('projectParticipation.number')"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="课程号"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="开课学期"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.term) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="总学时"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.classHour) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="学分"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="任课教师"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.teacherGroup) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="考核方式"
          align="center"
          width="100"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examStyle) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>
<script>
import { showCourse } from '@/api/user'
export default {

  data() {
    return {
      loading: false,
      post: null,
      courseTablelist: '',
      error: null,
      schemeId: '',
      requiredList: [],
      optionalList: [],
      buxiuList: [],
      requiredListLength:'',
      rowspan:'',
      colspan:'',
      row:'',
      column:''

    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData(),
    this.rowSpanMethod1()
    this.rowSpanMethod2()
    this.rowSpanMethod3()
  },

  methods: {

    fetchData() {
      this.error = this.post = null
      this.loading = true
      console.log(this.$route.params.schemeId)
      showCourse({'schemeId': this.$route.params.schemeId}, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
          res.data.requiredList[0].type = "必修课"
          this.requiredList = res.data.requiredList
          this.requiredListLength= this.requiredList.length
          res.data.optionalList[0].type = "选修课"
          this.optionalList = res.data.optionalList
          this.optionalListLength = this.optionalList.length
          res.data.buxiuList[0].type = "补修课"
          this.buxiuList = res.data.buxiuList
          this.buxiuListLength = this.buxiuList.length
        }
      )
    },
    //合并行
    rowSpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.requiredListLength === 0) {
          return {
            rowspan: this.requiredListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    rowSpanMethod2({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.optionalListLength === 0) {
          return {
            rowspan: this.optionalListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    rowSpanMethod3({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.buxiuListLength === 0) {
          return {
            rowspan: this.buxiuListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },




  }
}

</script>

<style scoped>

</style>
