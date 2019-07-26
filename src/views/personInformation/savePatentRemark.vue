<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">专利/著作权信息添加</td>
      </tr>
      <tr>
        <td class="colspan1">{{ $t('patent.patentInfo') }}</td>
        <td class="colspan2"><el-input v-model="patentName" type="text" size="mini" class="elinput" /></td>
      </tr>

      <tr>
        <td class="colspan1">专利/著作权类别</td>
        <td class="colspan2"> <el-select v-model="patentType" placeholder="pleaseChoose" size="mini" style="width: 70%;">
          <el-option
            v-for="item in patentTypeList"
            :key="item.value"
            :label="$t(item.name)"
            :value="item.value"
          />
        </el-select></td>
      </tr>

      <tr>
        <td class="colspan1">{{ $t('patent.patentNo') }}</td>
        <td class="colspan2"><el-input v-model="applyNum" type="text" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td class="colspan1">{{ $t('patent.typeNo') }}</td>
        <td class="colspan2"><el-input v-model="typeNum" type="text" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td class="colspan1">颁证日/登记日期 </td>
        <td class="colspan2"><el-input v-model="applyTime" type="text" size="mini" class="elinput" />
          <span class="noticeSpan">格式为：yyyy-MM-DD</span>
        </td>
      </tr>

      <tr>
        <td class="colspan1">作者位次</td>
        <td class="colspan2"> <el-select v-model="personNum" placeholder="pleaseChoose" size="mini" style="width: 70%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /></el-select></td>
      </tr>

      <tr>
        <td class="colspan1">备注</td>
        <td class="colspan2"> <el-input
          v-model="remark"
          class="elinput"
          type="textarea"
          placeholder="请输入内容"
          maxlength="300"
          rows="5"
          show-word-limit
        /></td>
      </tr>

      <tr>
        <td colspan="8"><el-button class="submitBtn" size="mini" @click="submitPatent">提交</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { saveAchievementPatentRemarkInit } from '@/api/getAchievementPatent'
export default {
  name: 'SavePatentRemark',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      bzw: '',
      textarea: '',
      patentName: '',
      achPanId: '',
      patentType: '',
      typeNum: '',
      applyTime: '',
      patentTypeName: '',
      applyNum: '',
      isCheck: '',
      personNum: '',
      remark: '',
      patentTypeList: [],
      options: [{
        value: 1,
        label: '第一位'
      }, {
        value: 2,
        label: '第二位'
      }]
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
      saveAchievementPatentRemarkInit({ 'achPanId': this.$route.params.achPanId }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {

        }
      )
    }
  }
}
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .titleSpan{
    font-size: 16px;
    color: #A50001;
    font-weight: bold;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content tr{
    width:100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    width : 30%;
  }
  .colspan2{
    color:  #606266;
    width: 70%;
    text-align:left !important;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 70%;
    line-height: 18px;
    color:  #606266;
    font-size: 12px;
  }
  .submitBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
  .noticeSpan{
    font-size: 12px;
    color: #A50001;
  }
</style>
