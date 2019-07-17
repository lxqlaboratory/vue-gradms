<template >
<div class="app-container">
  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="25" colspan="6">
        <div align="center">学生基本信息</div>
      </td>
    </tr>
    <tr>
      <td width="10%" height="25" align="right">姓 名</td>
      <td width="30%">ALLEYNE, RENATA</td>
      <td width="15%" height="25" align="right">学 号</td>
      <td width="15%">D2016021</td>
      <td width="15%"><div align="right">学生类型</div></td>
      <td width="15%">外籍博士</td>
    </tr>
    <tr>
      <td height="25" align="right">所属学院</td>
      <td>政治学与公共管理学院</td>
      <td height="25" align="right">所属专业</td>
      <td>国际政治</td>
      <td height="25" align="right">导师</td>
      <td>王学玉</td>
    </tr>
    <tr>
      <td height="25" align="right">论文题目</td>
      <td height="25">China in Integration</td>
      <td height="25" align="right">答辩时间</td>
      <td></td>
      <td height="25" align="right">答辩地点</td>
      <td></td>
    </tr>
    </tbody></table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="30" colspan="8">
        <div align="center">学位论文评阅信息</div>
      </td>
    </tr>
    <tr height="25">
      <td class="head" align="right" width="15%" nowrap="" colspan="2">学位论文题目</td>
      <td colspan="3">China in Integration</td>
      <td class="head" align="right" width="15%" nowrap="" colspan="1">论文检测结果</td>
      <td colspan="2"></td>
    </tr>
    <tr class="head">
      <td height="35" align="center" colspan="1" width="4%">进程</td>
      <td height="35" align="center" colspan="1" width="6%">姓名</td>
      <td height="35" align="center" colspan="1" width="15%">专业技术职务</td>
      <td height="35" align="center" colspan="1" width="8%">博/硕导</td>
      <td height="35" align="center" colspan="1" width="20%">工作单位</td>
      <td height="35" align="center" colspan="1" width="10%">总体评价等级</td>
      <td height="35" align="center" colspan="1" width="10%">总体评价结论</td>
      <td height="35" align="center" colspan="1" width="15%">操作</td>
    </tr>
    </tbody></table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" height="30" colspan="6">
        <div align="center">答辩委员会成员</div>
      </td>
    </tr>
    <tr class="head">
      <td align="center">成员身份</td>
      <td align="center">成员姓名</td>
      <td align="center">专业技术职务</td>
      <td align="center">所属单位</td>
      <td align="center" colspan="2">博/硕导</td>
    </tr>
    <tr>
      <td height="35" align="center" width="15%">答辩委员会主席</td>
      <td height="35" align="center" width="20%"></td>
      <td height="35" align="center" width="20%"></td>
      <td height="35" align="left" width="30%">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td colspan="2" height="35" align="left" width="15%">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
    </tr>
    </tbody></table>

  <table class="content" cellspacing="0" width="100%">
    <tbody><tr>
      <td align="center" width="10%">学位论文答辩委员会决议(不能少于500字且不能多于800字)
      </td>
      <td></td>
    </tr>
    <tr><td align="center" width="10%">学位论文答辩记录</td>
      <td></td>
    </tr><tr>
      <td align="center" colspan="2">答辩委员会对学位论文及答辩情况的总体评价:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <table class="content" cellspacing="0" width="100%">
          <tbody><tr>
            <td align="center" colspan="6">学位论文答辩委员会表决情况</td>
          </tr>
          <tr>
            <td colspan="1">
              <div align="right">出席委员人数</div>
            </td>
            <td colspan="2"></td>
            <td colspan="1">
              <div align="right">缺席委员人数</div>
            </td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td colspan="1" width="17%">
              <div align="right">建议授予学位票数</div>
            </td>
            <td colspan="1" width="17%"></td>
            <td colspan="1" width="17%">
              <div align="right">建议不授予学位票数</div>
            </td>
            <td colspan="1" width="17%"></td>
            <td colspan="1" width="17%">
              <div align="right">建议修改论文重新答辩</div>
            </td>
            <td colspan="1" width="17%"></td>
          </tr>
          </tbody></table>
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2"><input type="button" class="btn1" value="后退" name="btnBack" onclick="history.go(-1)"></td>
    </tr>
    </tbody></table>
</div>
</template>

<script>
  import { thesisReviewAndReplyInfoShow } from '@/api/thesisReviewAndReplyInfoShow'
export default {
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
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
