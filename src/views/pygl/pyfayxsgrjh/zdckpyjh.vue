<template>
  <div>
    <el-table
      :data="cultiveList"
      border
      :span-method="objectSpanMethod"
      style="width: 100%"
    >
      <el-table-column
        label="类别"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row['类别']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row['序号']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        width="180"
      >
        <template slot-scope="scope">
          {{ (scope.row['课程号']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="学分"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row['学分']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="开课学期"
        width="280"
      >
        <template slot-scope="scope">
          {{ (scope.row['开课学期']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="所属学院"
        width="210"
      >
        <template slot-scope="scope">
          {{ (scope.row['所属学院']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="是否公选课"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row['是否公选课']) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      />
    </el-table>
  </div>
</template>
<script>
import { showCultivatePlan } from '@/api/user'
export default {
  data() {
    return {
      cultiveList: [],
      requiredLength: 0,
      optionalLength: 0,
      buxiuLength: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      showCultivatePlan().then(res => {
        this.cultiveList = res.data.array[2]
        for (let i = 0; i <= this.cultiveList.length; i++) {
          console.log(this.cultiveList[i]['类别'])
          if (this.cultiveList[i]['类别'] == '必修课') {
            this.requiredLength++
          } else if (this.cultiveList[i]['类别'] == '选修课') {
            this.optionalLength++
          } else {
            this.buxiuLength++
          }
        }
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        console.log(this.requiredLength)
        console.log(this.optionalLength)
        console.log(this.buxiuLength)
        if (rowIndex % this.requiredLength === 0) {
          return {
            rowspan: this.requiredLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (rowIndex % this.optionalLength === 0) {
          return {
            rowspan: this.optionalLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (rowIndex % this.buxiuLength === 0) {
          return {
            rowspan: this.buxiuLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
