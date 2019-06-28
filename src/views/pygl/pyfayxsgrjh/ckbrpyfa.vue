<template>
  <div class="container">
    <!--第一部分-->
    <div>
      <!--第一行-->
      <el-row>
        <p style="color: #9b0d14;margin: 12px">{{ $t('cultivatingScheme.cultivatingSchemeDetail') }}</p>
      </el-row>
      <!--第二行-->
      <el-row>
        <p style="margin: 12px;text-align: left">{{ $t('cultivatingScheme.basicInfomation') }}</p>
      </el-row>
      <!--第三行-->
      <el-row>
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.studentType') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ $t(detail.studentType) }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.major') }}</span>
        </el-col>
        <el-col :span="8"class="colstyle4">
          <span>{{ $t(detail.majorName) }}</span>
        </el-col>
      </el-row>
      <!--第四行-->
      <el-row>
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.schemeName') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ $t(detail.schemeName) }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.startTime') }}</span>
        </el-col>
        <el-col :span="8"class="colstyle4">
          <span>{{ detail.startTime }}</span>
        </el-col>
      </el-row>
      <!--第五行-->
      <el-row style="border-bottom: 1px solid black">
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.compulsoryCredit') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ detail.compulsoryCredit }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.totalCredit') }}</span>
        </el-col>
        <el-col :span="8"class="colstyle4">
          <span>{{ detail.totalCredit }}</span>
        </el-col>
      </el-row>
    </div>
    <!--第二部分-->
    <div class="part2">
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.cultivatingObj') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.goal }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.researchDirection') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.direction }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.cultivatingMeans') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.culWay }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.studyYear') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.studyYears }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.totalCreditAndCourse') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.creditReq }}+{{ detail.middleCheck }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.cultivatingStep') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.practice }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.researchandDissertation') }}</p>
      </el-row>
      <el-row>
        <span style="margin: 12px">{{ detail.thesis }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px">{{ $t('cultivatingScheme.graduationAndDegree') }}</p>
      </el-row>
      <el-row style="border-bottom: 1px solid black">
        <span style="margin: 12px">{{ detail.gradDegree }}</span>
      </el-row>
    </div>
    <!--第三部分-->
    <div class="part3">
      <el-button type="text" @click="showCourseSetting">附：本培养方案的课程设置 </el-button><br>
      <el-button type="text">附：公共选修课模块（科学学位硕士、硕博连读、直博研究生要求至少选修1门，或以1门跨培养单位课程替代） </el-button>
    </div>
  </div>

</template>

<script>
  import { showPersonCultivate } from '@/api/user'
  export default {
    data() {
      return {
        loading: false,
        post: null,
        error: null,
        schemeId: '',
        detail: []
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
        //this.schemeId = this.$route.params.id
        //this.studentType = this.$route.params.studentType
        showPersonCultivate((err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = posts
          }
        }).then(res => {
            this.detail = res.data
          }, function (err) {

          }
        )
      },
      showCourseSetting(schemeId) {
        schemeId = this.schemeId
        this.$router.push({ name: 'pyfadkcsz', params: { schemeId }})
      }
    }
  }

</script>

<style scoped>
  .el-row{
    border: 1px solid black;
    border-bottom:1px solid #FFF;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
  }
  .el-row p{
    font-weight:bold;
  }
  .colstyle1,.colstyle2,.colstyle3,.colstyle4{
    height: 100%;
    font-size: 14px;
    padding-top: 10px;
  }
  .colstyle1,.colstyle2,.colstyle3{
    border-right: 1px solid black;
  }
  .colstyle2,.colstyle4{
    color: #9b0d14;
  }
  .colstyle1,.colstyle3{
    font-weight:bold;
  }
  .part2{
    margin-top: 20px;
  }
  .part2 .el-row{
    text-align: left;
    color: black;
    height: auto;
  }
  .part2 .el-row span{
    font-size: 14px;
    display: inline-block;
    margin: 6px;
  }
  .part3{
    margin-top: 20px;
    margin-bottom: 40px;
    padding-left: 20px;
  }
</style>


