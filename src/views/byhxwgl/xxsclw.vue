<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <p class="noticeSpan">{{$t('uploadThesisPaper.note')}}
      <br>{{$t('uploadThesisPaper.note1')}}
      <br>{{$t('uploadThesisPaper.note2')}}
    </p>
    <div>
      <table class="content">
        <tr>
          <td class="colspan1">{{$t('uploadThesisPaper.studentNum')}}</td>
          <td class="colspan2"><el-input v-model="input" type="text"  size="mini" class="elinput2" ></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.name')}}</td>
          <td class="colspan2"><el-input v-model="input"  size="mini" class="elinput2"></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.language')}}</td>
          <td class="colspan2"><el-input v-model="input"  size="mini" class="elinput2"></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.typeNum')}}	</td>
          <td class="colspan2"><el-input v-model="input"  size="mini" class="elinput2"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.theisTitle')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="input"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.foreignTitle')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="input"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.researchDirection')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="input"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.ChineseKeyWords')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="input" type="text"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglishKeyWords')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="input"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglilshAbstract')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
            class="elinput"
            type="textarea"
            v-model="textarea"
            maxlength="100"
            rows="4"
            show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.reference')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglilshAbstract')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="textarea"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini" @click="saveBtn">{{$t('uploadThesisPaper.modifyAndSave')}}</el-button>
          </td>
        </tr>
      </table>
      <table class="content">
        <tr>
          <td colspan="8" class="noticeSpan">{{$t('uploadThesisPaper.note3')}}</td>
        </tr>
        <tr>
          <td colspan="8" style="text-align: center;font-size: 15px;font-weight: bold">{{$t('uploadThesisPaper.degreeTheisFinal')}}</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.uploadingResult')}}</td>
          <td width="75%" class="colspan2" >未上传！</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.reviewingResult')}}</td>
          <td width="75%" class="colspan2" >未审核</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.reviewingAdvice')}}</td>
          <td width="75%" class="colspan2" >无</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.upload')}}</td>
          <td width="75%" class="colspan2" >
            <el-upload
              class="fileUpload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="1"
              show-file-list="false"
              :file-list="fileList">
              <el-button size="mini" class="uploadBtn">{{$t('uploadThesisPaper.selectFiles')}}</el-button>
            </el-upload>
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini" @click="submitBtn">{{$t('uploadThesisPaper.submit')}}</el-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//  学生上传论文
  export default {
    data(){
        return{
          fileList: []
        }
    },
    medthods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .noticeSpan{
    border: 1px solid #EBEEF5;
    font-size: 12px;
    color: #A50001;
    padding: 12px;
    line-height: 18px;
    text-align: left !important;
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
  }
  .colspan2{
    color:  #606266;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 70%;
    line-height: 18px;
    color:  #606266;
  }
  .elinput2{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
  .uploadBtn{
    background-color: #ffffff;
    border: 1px solid #A50001;
    color: #A50001;
  }
</style>
