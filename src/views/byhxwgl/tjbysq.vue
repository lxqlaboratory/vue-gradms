<template>
  <div v-if="message" class="app-container">
    <table cellspacing="0" width="100%">
      <tbody>
        <tr><td colspan="11">
          <font color="#9b0d14" style="font-size: 12px">
            说明：
            <br> *  1. 请申请本学期毕业的学生选择'是',并提交
            <br>*  2. 本学期不申请毕业的学生请不要操作
            <br> *  3. 申请毕业的学生请及时填写并确认学籍信息和学位信息
            <br> *  4. 这些信息用于国家报盘，请认真填写各项信息
            <br> *  5. 填写之前请认真阅读填写说明
          </font>
        </td>
        </tr>
        <tr>
          <td align="center" colspan="3" style="color: #9b0d14;font-size: 12px ">
            提交毕业申请时间为2017-02-22 08：00：00至2019-12-31 17：01：01，请尽快提交毕业申请
          </td>
        </tr>
      </tbody></table>

    <table cellspacing="0" width="100%">
      <tbody><tr>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('baseInformationModal.name') }}
               </td>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('baseInformationModal.studentNumber') }}
               </td>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('CourseQuery.Whether') }}
               </td>
             </tr>
        <tr>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t(perNum) }}
          </td>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t(perName) }}
          </td>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t('CourseQuery.Whether2') }}
          </td>
        </tr>
      </tbody>
    </table>
    <table cellspacing="0" width="100%">
      <tbody><tr>
        <td style="text-align:center">
          <el-button style="background-color:#A50001;color: #ffffff " size="mini" @click="degreeGradApplySubmit">提交</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="app-container">
    <div style="color: #9b0d14">
      毕业状态:不是研究生院同意提交毕业申请状态，不能提交毕业申请!
    </div>
  </div>
</template>

<script>
import { degreeGradApplyInit } from '@/api/degreeGradApply'
import { degreeGradApplyInsert } from '@/api/degreeGradApply'
export default {
  data() {
    return {
      list: [],
      perName: '',
      perNum: '',
      message: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeGradApplyInit().then(res => {
        if (res.code == 1) {
          this.message = false
        } else {
          this.message = true
          this.perName = res.data.perName
          this.perNum = res.data.perNum
        }
      })
    },
    degreeGradApplySubmit() {
      degreeGradApplyInsert().then(res => {
        if (res.msg === '提交成功,不可在申请，可在查看毕业及学位状态功能查看自己的状态') {
          this.$message({
            message: '提交成功,不可在申请，可在查看毕业及学位状态功能查看自己的状态',
            type: 'success'
          })
        } else if (res.msg === '您已提交毕业申请，不能再提交') {
          this.$message({
            message: '您已提交毕业申请，不能再提交',
            type: 'error'
          })
        } else {
          this.$message({
            message: '学院审核已通过，不能再提交',
            type: 'error'
          })
        }
      }).catch(e => {

      })
    }
  }
}
</script>

<style scoped>
  td{
    height:3em;
    padding:5px;
    border:1px solid #f4f4f5;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
  .colstyle1{
    height: 25px;
    color: #909399;
    font-weight: bold;
  }
  .colstyle2{
    height: 25px;
    color: #606266;
  }
</style>
