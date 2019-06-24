<template >
  <div>
    <el-table
      :data="requiredList"
      border
      style="width: 100%">
      <el-table-column
        :label="$t('projectParticipation.number')"
        width="80">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="课程号"
        width="180">
        <template slot-scope="scope">
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名"
        width="280">
        <template slot-scope="scope">
          {{  $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="开课学期"
        width="120"
      >
        <template slot-scope="scope">
          {{  $t(scope.row.term) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="总学时"
        width="120"
      >
        <template slot-scope="scope">
          {{ (scope.row.classHour) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="学分"
        width="120"
      >
        <template slot-scope="scope">
          {{ (scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="任课教师"
        width="200"
      >
        <template slot-scope="scope">
          {{ (scope.row.teacherGroup) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="考核方式"
      >
        <template slot-scope="scope">
          {{  $t(scope.row.examStyle) }}
        </template>
      </el-table-column>
    </el-table>


    <div>
      <el-table
      :data="optionalList"
      border
      style="width: 100%">
      <el-table-column
        :label="$t('projectParticipation.number')"
        width="80">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="课程号"
        width="180">
        <template slot-scope="scope">
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名"
        width="280">
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="开课学期"
        width="120"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.term) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="总学时"
        width="120"
      >
        <template slot-scope="scope">
          {{ (scope.row.classHour) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="学分"
        width="120"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="任课教师"
        width="200"
      >
        <template slot-scope="scope">
          {{ (scope.row.teacherGroup) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="考核方式"
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
        style="width: 100%">
        <el-table-column
          :label="$t('projectParticipation.number')"
          width="80">
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="课程号"
          width="180">
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名"
          width="280">
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="开课学期"
          width="120"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.term) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="总学时"
          width="120"
        >
          <template slot-scope="scope">
            {{ (scope.row.classHour) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="学分"
          width="120"
        >
          <template slot-scope="scope">
            {{ (scope.row.credit) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="任课教师"
          width="200"
        >
          <template slot-scope="scope">
            {{ (scope.row.teacherGroup) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="考核方式"
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
      buxiuList: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      console.log(this.$route.params.schemeId)
      showCourse({ 'schemeId': this.$route.params.schemeId }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
         this.requiredList = res.data.requiredList
          this.optionalList = res.data.optionalList
          this.buxiuList = res.data.buxiuList
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
