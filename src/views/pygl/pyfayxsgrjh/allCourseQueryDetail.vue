<template>
  <div class="app-container">

    <table class="content" width="100%">
      <tbody>
        <tr>
          <td width="15%" class="colstyle1">{{$t('CourseQuery.creator')}}</td>
          <td width="20%" class="colstyle2" />
          <td width="20%" class="colstyle1">{{$t('CourseQuery.college1')}}</td>
          <td width="20%" class="colstyle2" />
          <td width="10%" class="colstyle1">{{$t('CourseQuery.courseType')}}</td>
          <td width="25%" class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.courseName')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.courseEName')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.college3')}}</td>
          <td class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.semester')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.total')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1"> {{$t('CourseQuery.credit')}}</td>
          <td class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.lectureLesson')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.experimentalLesson')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1"> {{$t('CourseQuery.computerLesson')}}</td>
          <td class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.courseProperty')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.teachingWays')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1"> {{$t('CourseQuery.teachingLanguage')}}</td>
          <td class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.semesterNumber')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.examWays')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1"> {{$t('CourseQuery.gradeConfiguration')}}</td>
          <td class="colstyle2" />
        </tr>
        <tr>
          <td class="colstyle1">{{$t('CourseQuery.CoursePerson')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1">{{$t('CourseQuery.TypeForStu')}}</td>
          <td class="colstyle2" />
          <td class="colstyle1"> {{$t('CourseQuery.CourseApplyingType')}}	</td>
          <td class="colstyle2" />
        </tr>
      </tbody>
    </table>
    <table class="content" width="100%">
      <tbody>
        <tr>
          <td class="colstyle1" width="10%">其他</td>
          <td />
        </tr>
        <tr>
          <td class="colstyle1" width="10%">备注</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'AllCourseQueryDetail',
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
      thesisReviewAndReplyInfoShow().then(res => {
        this.list = res.data.form
      })
    }
  }
}
</script>

<style scoped>
  .colstyle1,.colstyle2{
    font-size: 13px;
    text-align: center;
    height: 30px;
  }
  .colstyle1{
    color: #909399;
    font-weight: bold;
  }
  .colstyle2{
    color: #606266;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }

</style>
