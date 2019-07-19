<template >
<div class="app-container">
  <table  width="100%">
    <tbody>
      <tr>
        <td style="text-align:center" >
          <el-button size="mini" class="allBtn"><a href="/gradms/api/degree/degreeThesisApplyDownload" download="xwsqs.pdf"  >学位申请书</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/degree/degreeThesisApprovalDownload" download="xwsps.pdf" >学位审批书</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf">答辩记录纸</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf">毕业审批表</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >博士申请登记表</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >科研和奖励情况表</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf">博士自评表下载</a></el-button>
          <el-button size="mini" class="allBtn"><a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >学位论文终稿</a></el-button>
        </td>
      </tr>
    </tbody>
  </table>

  <table class="content"  width="100%" >
    <tbody><tr>
      <td class="head" height="25" colspan="6">
        <div class="titlable">学生基本信息</div>
      </td>
    </tr>
    <tr>
      <td width="10%" class="colstyle1">姓 名</td>
      <td width="25%" class="colstyle2"> {{ list.perName }}</td>
      <td width="10%" class="colstyle1">学 号</td>
      <td width="20%" class="colstyle2">{{ list.perNum}}</td>
      <td width="10%" class="colstyle1">学生类型</td>
      <td width="25%" class="colstyle2">{{ $t(list.stuTypeCode) }}</td>
    </tr>
    <tr>
      <td class="colstyle1">所属学院</td>
      <td class="colstyle2">{{ $t(list.college) }}</td>
      <td class="colstyle1">所属专业</td>
      <td class="colstyle2">{{ $t(list.major) }}</td>
      <td class="colstyle1">导师</td>
      <td class="colstyle2">{{ $t(list.tutor) }}</td>
    </tr>
    <tr>
      <td class="colstyle1">论文题目</td>
      <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
      <td class="colstyle1">答辩时间</td>
      <td class="colstyle2">{{ list.answerTime}}</td>
      <td class="colstyle1"> 答辩地点</td>
      <td class="colstyle2">{{ list.answerPlace}}</td>
    </tr>
    </tbody></table>

  <table class="content"  width="100%"  >
    <tbody><tr>
      <td class="head" style="border-bottom: 0px">
        <div class="titlable">学位论文评阅信息</div>
      </td>
    </tr>
    </tbody>
  </table>

  <el-table
    :data="cList"
    border
    size="mini"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="进程"
      width="70"
      align="center">
      <template slot-scope="scope">
        {{ scope.row.proId }}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.auditName) }}
      </template>
    </el-table-column>
    <el-table-column
    prop="address"
    width="120"
    label="专业技术职务"
    align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.duty) }}
      </template>
   </el-table-column>
    <el-table-column
      prop="address"
      width="120"
      label="博/硕导"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.isphDTutor) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="工作单位"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.workUnit) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      width="120"
      label="总体评价等级"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.level) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="总体评价结论"
      align="center"
      width="120">
      <template slot-scope="scope">
        {{ $t(scope.row.rank) }}
      </template>
    </el-table-column>
  </el-table>

  <table class="content" >
    <tbody><tr>
      <td class="head"  style="border-bottom: 0px">
        <div class="titlable">答辩委员会成员</div>
      </td>
    </tr>
    </tbody></table>

  <el-table
    :data="mList"
    border
    size="mini"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="成员身份"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMemberIdentity) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="成员姓名"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMember) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="专业技术职务"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.commitMemberTitle) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="所属单位"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.belongUnit) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="博/硕导"
      align="center">
      <template slot-scope="scope">
        {{ $t(scope.row.isphDTutor) }}
      </template>
    </el-table-column>
  </el-table>

  <table class="content"  >
    <tbody>
    <tr>
      <td class="leftsidespan">学位论文答辩委员会决议(不能少于500字且不能多于800字)
      </td>
      <td class="rightsidespan">{{ list.gradCommitIdea }} </td>
    </tr>
    <tr><td  class="leftsidespan">学位论文答辩记录</td>
      <td class="rightsidespan">{{ list.gradSceneRecord }}</td>
    </tr><tr>
      <td align="center" colspan="2" style="font-size: 12px;color:  #606266">答辩委员会对学位论文及答辩情况的总体评价: {{ $t(list.wholeEvaluate) }}
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <table class="content" width="100%">
          <tbody><tr>
            <td class="titlable" colspan="6" >学位论文答辩委员会表决情况</td>
          </tr>
          <tr>
            <td colspan="1">
              <div class="part_bottom_1" >出席委员人数</div>
            </td>
            <td colspan="2" class="part_bottom_2">{{ list.gradAttendanceNum }}</td>
            <td colspan="1">
              <div class="part_bottom_1" >缺席委员人数</div>
            </td>
            <td colspan="2" class="part_bottom_2">{{ list.gradAbsenceNum }}</td>
          </tr>
          <tr>
            <td colspan="1" width="16%">
              <div class="part_bottom_1">建议授予学位票数</div>
            </td>
            <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradAgreeNum }}</td>
            <td colspan="1" width="16%">
              <div class="part_bottom_1">建议不授予学位票数</div>
            </td>
            <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradDisagreeNum }}</td>
            <td colspan="1" width="16%">
              <div class="part_bottom_1">建议修改论文重新答辩</div>
            </td>
            <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradSuggestModifyNum }}</td>
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
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
  .colstyle1,.colstyle2{
    font-size: 12px;
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
  .titlable{
    text-align: center;
    color: #A50001;
    font-size: 16px;
  }
  .leftsidespan{
    align:center;
    width:13%;
    font-size: 12px;
    color: #909399;
    letter-spacing:2px;
  }
  .rightsidespan{
    align:center;
    font-size: 12px;
    color: #606266;
    letter-spacing:3px;
    text-indent:30px;
    line-height: 18px;
  }
  .part_bottom_1{
    font-size: 12px;
    text-align: center;
    color: #909399;
  }
  .part_bottom_2{
    font-size: 12px;
    text-align: center;
    color: #606266;
  }

</style>
