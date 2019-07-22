<template >
  <div class="app-container">
    <table class="content"  width="100%" >
      <tbody>
      <tr>
        <td class="head" height="25" colspan="6">
          <div class="titlable">学生论文信息</div>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="colstyle1">学位论文题目</td>
        <td colspan="4" class="colstyle2"> <el-input v-model="thesisEngName"  size="mini"></el-input>  </td>
      </tr>
      <tr>
        <td colspan="2" class="colstyle1">论文主题词</td>
        <td colspan="4" class="colstyle2"> <el-input v-model="englishTheme"  size="mini"></el-input>  </td>
      </tr>
      <tr>
        <td colspan="1" class="colstyle1">论文类型</td>
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
        <td colspan="1" class="colstyle1">论文选题来源</td>
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
        <td colspan="1" class="colstyle1">论文字数(万) </td>
        <td  width="10%" class="colstyle2"> <el-input v-model="englishTheme"  size="mini"></el-input>  </td>
      </tr>
      </tbody></table>
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
