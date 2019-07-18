<template >
<div class="app-container">
  <table class="content" cellspacing="0" width="100%">
    <tbody><tr><td style="color: #9b0d14;text-align:center" >
      <el-button size="mini" ><a href="/gradms/api/degree/degreeThesisApplyDownload" download="xwsqs.pdf" style="color: #9b0d14">学位申请书</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/degree/degreeThesisApprovalDownload" download="xwsps.pdf" style="color: #9b0d14">学位审批书</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">答辩记录纸</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">毕业审批表</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">博士申请登记表</a></el-button>’
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">科研和奖励情况表</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">博士自评表下载</a></el-button>
      <el-button size="mini" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" style="color: #9b0d14">学位论文终稿</a></el-button>
      <!--<button  v-if="s" ><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >{{$t('route.dyzxzm')}}</a></button>-->
      <!--<a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >{{$t('route.dyzxzm')}}</a>-->
    </td>
    </tr>
    </tbody></table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="25" colspan="6">
        <div align="center" style="color: #9b0d14">学生基本信息</div>
      </td>
    </tr>
    <tr>
      <td width="10%" height="25" align="right" style="color: #9b0d14">姓 名</td>
      <td width="30%"> {{ list.perName }}</td>
      <td width="15%" height="25" align="right" style="color: #9b0d14">学 号</td>
      <td width="15%">{{ list.perNum}}</td>
      <td width="15%"><div align="right" style="color: #9b0d14">学生类型</div></td>
      <td width="15%">{{ $t(list.stuTypeCode) }}</td>
    </tr>
    <tr>
      <td height="25" align="right" style="color: #9b0d14">所属学院</td>
      <td>{{ $t(list.college) }}</td>
      <td height="25" align="right" style="color: #9b0d14">所属专业</td>
      <td>{{ $t(list.major) }}</td>
      <td height="25" align="right" style="color: #9b0d14">导师</td>
      <td>{{ $t(list.tutor) }}</td>
    </tr>
    <tr>
      <td height="25" align="right" style="color: #9b0d14">论文题目</td>
      <td height="25">{{ $t(list.thesisTopic) }}</td>
      <td height="25" align="right" style="color: #9b0d14">答辩时间</td>
      <td>{{ list.answerTime}}</td>
      <td height="25" align="right" style="color: #9b0d14"> 答辩地点</td>
      <td>{{ list.answerPlace}}</td>
    </tr>
    </tbody></table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="30" colspan="8">
        <div align="center" style="color: #9b0d14">学位论文评阅信息</div>
      </td>
    </tr>
    </tbody></table>

  <el-table
    :data="cList"
    border
    size="small"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="进程"
      width="80">
      <template slot-scope="scope">
        {{ scope.row.proId }}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="150">
      <template slot-scope="scope">
        {{ $t(scope.row.auditName) }}
      </template>
    </el-table-column>
    <el-table-column
    prop="address"
    width="120"
    label="专业技术职务">
      <template slot-scope="scope">
        {{ $t(scope.row.duty) }}
      </template>
   </el-table-column>
    <el-table-column
      prop="address"
      width="100"
      label="博/硕导">
      <template slot-scope="scope">
        {{ $t(scope.row.isphDTutor) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      width="100"
      label="工作单位">
      <template slot-scope="scope">
        {{ $t(scope.row.workUnit) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      width="230"
      label="总体评价等级">
      <template slot-scope="scope">
        {{ $t(scope.row.level) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="总体评价结论">
      <template slot-scope="scope">
        {{ $t(scope.row.rank) }}
      </template>
    </el-table-column>
  </el-table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="30" colspan="6">
        <div align="center" style="color: #9b0d14">答辩委员会成员</div>
      </td>
    </tr>
    </tbody></table>

  <el-table
    :data="mList"
    border
    size="small"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="成员身份"
      width="200">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMemberIdentity) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="成员姓名"
      width="250">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMember) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      width="250"
      label="专业技术职务">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMemberTitle) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      width="300"
      label="所属单位">

      <template slot-scope="scope">
        {{ $t(scope.row.belongUnit) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="博/硕导">
      <template slot-scope="scope">
        {{ $t(scope.row.isphDTutor) }}
      </template>
    </el-table-column>
  </el-table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td align="center" width="10%" style="color: #9b0d14">学位论文答辩委员会决议(不能少于500字且不能多于800字)
      </td>
      <td>{{ list.gradCommitIdea }} </td>
    </tr>
    <tr><td align="center" width="10%" style="color: #9b0d14">学位论文答辩记录</td>
      <td>{{ list.gradSceneRecord }}</td>
    </tr><tr>
      <td align="center" colspan="2" style="color: #9b0d14">答辩委员会对学位论文及答辩情况的总体评价: {{ $t(list.wholeEvaluate) }}
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <table class="content" cellspacing="0" width="100%">
          <tbody><tr>
            <td align="center" colspan="6" style="color: #9b0d14">学位论文答辩委员会表决情况</td>
          </tr>
          <tr>
            <td colspan="1">
              <div align="right" style="color: #9b0d14">出席委员人数</div>
            </td>
            <td colspan="2">{{ list.gradAttendanceNum }}</td>
            <td colspan="1">
              <div align="right" style="color: #9b0d14">缺席委员人数</div>
            </td>
            <td colspan="2">{{ list.gradAbsenceNum }}</td>
          </tr>
          <tr>
            <td colspan="1" width="17%">
              <div align="right" style="color: #9b0d14">建议授予学位票数</div>
            </td>
            <td colspan="1" width="17%">{{ list.gradAgreeNum }}</td>
            <td colspan="1" width="17%">
              <div align="right" style="color: #9b0d14">建议不授予学位票数</div>
            </td>
            <td colspan="1" width="17%">{{ list.gradDisagreeNum }}</td>
            <td colspan="1" width="17%">
              <div align="right" style="color: #9b0d14">建议修改论文重新答辩</div>
            </td>
            <td colspan="1" width="17%">{{ list.gradSuggestModifyNum }}</td>
          </tr>
          </tbody></table>
      </td>
    </tr>
    </tbody></table>
</div>
</template>

<script>
  import { thesisReviewAndReplyInfoShow } from '@/api/thesisReviewAndReplyInfoShow'
export default {
  data() {
    return {
      list: [],
      mList: [],
      cList: [],
      tableData: []
    }
  },
  created() {
    this.fetchData()

  },
  methods: {
    fetchData() {
      thesisReviewAndReplyInfoShow().then(res => {
        this.list = res.data.form
        this.mList = res.data.mList
        this.cList = res.data.cList
      })
    },
    cfbjcsqb(){

    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
    font-size: small;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
