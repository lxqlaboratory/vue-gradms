<template >
  <div>
    <el-table
      :data="requiredList"
      border
      style="width: 100%">
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
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
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
         this.requiredList = res.data.list1
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
