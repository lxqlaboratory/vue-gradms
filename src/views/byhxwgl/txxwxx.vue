<template >
  <div class="app-container">
    <table  width="100%" class="content">
      <tbody>
      <tr>
        <td style="text-align:left; color: #9b0d14" >
          {{$t('fillInTheDegreeInfo.note1')}}<br>
          {{$t('fillInTheDegreeInfo.note2')}}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="content"  width="100%" >
      <tbody>
      <tr>
        <td class="head" height="25" colspan="6">
          <div class="titlable">{{$t('fillInTheDegreeInfo.degreeThesisInfo')}}</div>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="colstyle1" >{{$t('fillInTheDegreeInfo.thesisDissertation')}}</td>
        <td colspan="4" class="colstyle2"> <el-input v-model="thesisEngName"  size="mini"></el-input>  </td>
      </tr>
      <tr>
        <td colspan="2" class="colstyle1">{{$t('fillInTheDegreeInfo.thesisKeyWords')}}</td>
        <td colspan="4" class="colstyle2"> <el-input v-model="englishTheme"  size="mini"></el-input>  </td>
      </tr>
      <tr>
        <td colspan="1" class="colstyle1" >{{$t('fillInTheDegreeInfo.thesisType')}}</td>
        <td width="20%" class="colstyle2">
          <el-select v-model="gradThesisTypeCode" placeholder="pleaseChoose" size="mini">
            <el-option
              v-for="item in gradThesisTypeCodeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td colspan="1" class="colstyle1" >{{$t('fillInTheDegreeInfo.thesisTopicSource')}}</td>
        <td width="30%" class="colstyle2">
          <el-select v-model="gradThesisTopicSourceCode" placeholder="pleaseChoose" size="mini">
            <el-option
              v-for="item in gradThesisTopicSourceCodeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td colspan="1" class="colstyle1">{{$t('fillInTheDegreeInfo.thesisWords')}} </td>
        <td  width="10%" class="colstyle2"> <el-input v-model="gradWordCount"  size="mini"></el-input>  </td>
      </tr>
      <tr>
        <td colspan="1" class="colstyle1">{{$t('fillInTheDegreeInfo.thesisStartDate')}}</td>
        <td width="20%" class="colstyle2">
          <el-input v-model="gradThesisStartDate"  size="mini"></el-input>
        </td>
        <td colspan="1" class="colstyle1">{{$t('fillInTheDegreeInfo.thesisEndDate')}}</td>
        <td  class="colstyle2">
          <el-input v-model="gradThesisEndDate"  size="mini" style="width: 70%"></el-input>
        </td>
        <td colspan="1" class="colstyle1">{{$t('fillInTheDegreeInfo.feesPaidByTutor')}}</td>
        <td  class="colstyle2">
          <el-input v-model="thesisFee"  size="mini" ></el-input>
        </td>
      </tr>
      </tbody></table>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr >
        <td  width="20%" align="left" style="color: #909399">&nbsp;&nbsp;论文介绍(包括<br>&nbsp;&nbsp;论文选题的来源、<br>&nbsp;&nbsp;理论意义和应用价值；<br>&nbsp;&nbsp;论文的创新性及意义；<br>&nbsp;&nbsp;论文的不足之处)<br>&nbsp;&nbsp;(500-800字)
        </td>
        <td ></td>
      </tr>
      </tbody></table>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <table  width="100%">
      <tbody>
      <tr>
        <td style="text-align:center" >
          <el-button size="mini" class="allBtn">填写</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { degreeInfoSubmitInit } from '@/api/degreeInfoSubmit'
export default {
  name: 'Txxwxx',
  data() {
    return {
      gradThesisIntroduction: '',
      gradThesisTopicSourceCode: '',
      gradThesisTopicSourceCodeList: [],
      gradThesisTypeCode: '',
      gradThesisTypeCodeList: [],
      thesisEngName: '',
      gradWordCount: '',
      gradThesisStartDate: '',
      gradThesisEndDate: '',
      thesisFee: '',
      englishTheme: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeInfoSubmitInit().then(res => {
        this.gradThesisTopicSourceCodeList = res.data.gradThesisTopicSourceCodeList
        this.gradThesisIntroduction = res.data.gradThesisIntroduction
        this.gradThesisTopicSourceCode = res.data.gradThesisTopicSourceCode
        this.gradThesisTypeCode = res.data.gradThesisTypeCode
        this.gradThesisTypeCodeList = res.data.gradThesisTypeCodeList
      })
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
    max-height: 60px;
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
