<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">论文信息添加</td>
      </tr>
      <tr>
        <td  class="colspan1">论文名称</td>
        <td  class="colspan2"><el-input v-model="formData.achName" type="text" size="mini" class="elinput"></el-input></td>
      </tr>

      <tr>
        <td  class="colspan1">期刊或会议名称</td>
        <td  class="colspan2"><el-input v-model="formData.magazineName" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">发表刊物刊号</td>
        <td  class="colspan2">
          <el-input v-model="formData.magazineNum" type="text"  size="mini" class="elinput"></el-input>
          <span class="noticeSpan">没有请填写无</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">论文级别</td>
        <td  class="colspan2">
          <el-select v-model="formData.levelCode"  size="mini" class="elinput">
            <el-option
              v-for="item in levelCodeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">影响因子</td>
        <td  class="colspan2">
          <el-input v-model="formData.impactFactor" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">没有请填写无</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">论文发表时间</td>
        <td  class="colspan2">
          <el-date-picker
            v-model="formData.useTime"
            class="elinput"
            size="mini"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">作者位次</td>
        <td  class="colspan2">
          <el-select v-model="formData.personNum"  size="mini" class="elinput">
            <el-option
              v-for="item in personNumArr"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">第几卷 </td>
        <td  class="colspan2">
          <el-input v-model="formData.publishTome" type="text"  size="mini" class="elinput"></el-input>
          <span class="noticeSpan">没有请填写无</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">第几期</td>
        <td  class="colspan2">
          <el-input v-model="formData.publishVolumn" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">没有请填写无</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">起始页</td>
        <td  class="colspan2"><el-input v-model="formData.beginPage" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">终止页 </td>
        <td  class="colspan2"><el-input v-model="formData.endPage" type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">收录方式</td>
        <td  class="colspan2">
          <el-select v-model="formData.include"  size="mini" class="elinput">
            <el-option
              v-for="item in includeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">录入EI检索号</td>
        <td  class="colspan2">
          <el-input v-model="formData.inputEIIndexNum" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">没有请填写无</span>
        </td>
      </tr>
      <tr>
        <td colspan="8"><el-button class="submitBtn" size="mini" @click="addThesis()">提交</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  //  学生上传论文
  import { saveAchievementWordTypeInfo } from '@/api/getAchievementWordType'
  import { getAchievementWordTypeInfoInitList } from '@/api/getAchievementWordType'
  export default {
    data(){
      return{
        formData:{
          achName: '' ,
          magazineName: '' ,//刊物名称
          magazineNum: '' ,//刊物编号
          qkNum: '' ,//期刊号
          levelCode: '' ,//论文级别
          impactFactor: '' ,//影响因子
          useTime: '' ,//出版日期
          personNum:'' ,//作者位次
          publishTome: '' ,//
          publishVolumn: '' ,//
          beginPage: '' ,//起始页
          endPage: '' ,//终止页
          include: '' ,//收录情况 论文收录方式码
          inputEIIndexNum: '' ,//录入EI检索号
        },
        levelCodeList: [],
        includeList : [],
        personNumArr : [{
            value : '1',
            name : '第一位'
        },{
          value : '2',
          name : '第二位'
        }]
      }
    },
    created() {
        this.fetchData()
    },
    methods: {
      fetchData(){
        getAchievementWordTypeInfoInitList().then(res => {
            this.includeList = res.data.includeList
            this.levelCodeList = res.data.levelCodeList
        })
      },
      addThesis(){
        saveAchievementWordTypeInfo(this.formData).then(res => {
          this.$message({
            type: 'info',
            message: '提交成功'
          });
          this.$router.push({ path: './publishThesis'})
        })
      },
    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .titleSpan{
    font-size: 15px !important;
    color: #A50001;
    font-weight: bold;
  }
  .noticeSpan{
    font-size: 12px;
    color: #A50001;
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
</style>
