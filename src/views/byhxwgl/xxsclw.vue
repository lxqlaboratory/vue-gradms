<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <p class="noticeSpan">
      注意：
      <br>1、论文基本信息主要用于论文评审，学位报盘、图书馆收录等，论文主题词须以英文逗号（“,”）隔开，3-5个，不能少于3个，也不能多于5个，信息完善后点击修改保存，并随时可以修改，以最后一次修改为准。
      <br> 2、学位论文终稿用于毕业后论文审核和学术不端检测，请在上传后及时联系导师进行审核，导师审核通过后，可以进行学术不端检测，导师审核通过后，不能再上传论文。
    </p>
    <div>
      <table class="content">
        <tr>
          <td class="colspan1">{{$t('uploadThesisPaper.studentNum')}}</td>
          <td><el-input v-model="input" type="text"  size="mini" class="colspan2" ></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.name')}}</td>
          <td><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.language')}}</td>
          <td><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.typeNum')}}	</td>
          <td><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
        </tr>
        <tr style="width: 100%">
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.theisTitle')}}</td>
          <td colspan="6" ><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
        </tr>
        <tr style="width: 100%">
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.foreignTitle')}}</td>
          <td colspan="6" ><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
        </tr>
        <tr style="width: 100%">
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.researchDirection')}}</td>
          <td colspan="6"><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
        </tr>
        <tr style="width: 100%">
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.ChineseKeyWords')}}</td>
          <td colspan="6"><el-input v-model="input" type="text"  size="mini" class="colspan2"></el-input></td>
        </tr>
        <tr style="width: 100%">
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglishKeyWords')}}</td>
          <td colspan="6"><el-input v-model="input"  size="mini" class="colspan2"></el-input></td>
        </tr>
      </table>
    </div>
    <div></div>
  </div>
</template>

<script>
//  学生上传论文
  export default {
    name: 'Xwxxhd'
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
  }
  .content{
    width:100%;
    /*border-top: 1px solid #EBEEF5;*/
    /*border-left: 1px solid #EBEEF5;*/
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content td {
    padding: 10px 20px;
    /*border-bottom: 1px solid #EBEEF5;*/
    /*border-right: 1px solid #EBEEF5;*/
    text-align: center;
    font-size: 12px;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
  }
  .colspan2{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
  }

</style>
