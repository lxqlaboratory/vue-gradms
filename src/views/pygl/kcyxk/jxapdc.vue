<template>
 <div class="app-container">
   <el-select v-model="value"  size="mini">
     <el-option
       v-for="item in termList"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
   <el-button :loading="downloadLoading"  @click="handleDownload" type="primary" size="mini">{{$t('achievement.export')}}</el-button>
  <el-table
    :data="courseExportList"
    border
    size="mini"
    style="width: 100%;"
  >
    <el-table-column
      prop="category"
      :label = "$t('courseExport.courseNumber')"
      width="150"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.courseIndex }}
      </template>
    </el-table-column>
    <el-table-column
      prop="xuhao"
      :label = "$t('courseExport.courseName')"
      width="300"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.courseName }}
      </template>
    </el-table-column>
    <el-table-column
      prop="kechenghao"
      :label = "$t('courseExport.courseNo')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.courseNum }}
      </template>
    </el-table-column>
    <el-table-column
      prop="kechengming"
      :label = "$t('courseExport.YearSemester')"
      width="204"
      align="center"
    >
    <template slot-scope="scope">
      {{ scope.row.courseNum }}
    </template>
    </el-table-column>
    <el-table-column
      prop="kaikexueqi"
      :label = "$t('courseExport.coursePlace')"
      width="300"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.roomName }}
      </template>
    </el-table-column>
    <el-table-column
      prop="zongxueshi"
      :label = "$t('courseExport.OddOrEvenWeek')"
      width="150"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.isOddEvenWeek }}
      </template>
    </el-table-column>
    <el-table-column
      prop="xuefen"
      :label = "$t('courseExport.courseDate')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.weekDay }}
      </template>
    </el-table-column>
    <el-table-column
      prop="renkejiaoshi"
      :label = "$t('courseExport.startWeek')"
      width="204"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.startWeek }}
      </template>
    </el-table-column>
    <el-table-column
      prop="kaohefangshi"
      :label = "$t('courseExport.startWeekNumber')"
      width="250"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.startWeek }}
      </template>
    </el-table-column>
    <el-table-column
    prop="kaohefangshi"
    :label = "$t('courseExport.courseSection')"
    width="150"
    align="center"
  />
    <el-table-column
      prop="kaohefangshi"
      :label = "$t('courseExport.teacher')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.personName }}
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>
<script>
  import { newCultivateCourseExportInit } from '@/api/exportTeachingArrangement'
export default {
  data() {
    return {
      courseExportList: [],
      termList: [],
      downloadLoading: false,
      value: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      newCultivateCourseExportInit().then(res => {
        this.termList = res.data.termList
        this.courseExportList = res.data.courseExportList
      })
    },
    // handleDownload() {
    //   this.downloadLoading = true
    //   import('@/vendor/Export2Excel').then(excel => {
    //     const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
    //     const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
    //     const list = this.list
    //     const data = this.formatJson(filterVal, list)
    //     excel.export_json_to_excel({
    //       header: tHeader,
    //       data,
    //       filename: this.filename,
    //       autoWidth: this.autoWidth,
    //       bookType: this.bookType
    //     })
    //     this.downloadLoading = false
    //   })
    // }
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
