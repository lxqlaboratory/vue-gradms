<template>
<div class="container">
  <table   width="100%" class="content">
    <tbody><tr>
      <td class="head" colspan="24">
        <div align="center"  style="color: #A50001;font-size: 16px;font-weight: bold">
          {{$t('patent.note')}}
          <input type="hidden" name="isTea" value="0">
        </div>
      </td>
    </tr>
    <tr><td colspan="24" class="thesisExplain">
      {{$t('patent.note11')}}
        <br>{{$t('patent.note1')}}
        <br>{{$t('patent.note2')}}
        <br>{{$t('patent.note3')}}
    </td>
    </tr>
    </tbody>
  </table>
  <div class="searchDiv">
    <span class="searchSpan">{{$t('publishThesis.publicationTime')}}:</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      size="mini"
      style="width: 20%">
    </el-date-picker>
    <span class="searchSpan">{{$t('patent.authorRanking')}}</span>
    <el-select v-model="value" placeholder="请选择" size="mini" style="width: 16%">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button class="queryBtn" size="mini">{{$t('publishThesis.query')}}</el-button>
  </div>
  <el-table
    :data="tableData"
    border
    size="mini"
    class="eltable"
    :header-cell-style="getRowClass"
    style="width: 100%">
    <el-table-column
      prop="date"
      :label = "$t('publishThesis.number')"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      :label = "$t('patent.choice')"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.patentInfo')"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.type')"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.patentNo')"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.typeNo')"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.grantingDate')"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.selfRank')"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.openOrNot')"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      :label = "$t('patent.status')"
      width="100"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      width="150"
      :label = "$t('patent.operation')"
    >
    </el-table-column>
  </el-table>
  <table width="100%" style="padding-top: 20px">
    <tbody><tr>
    <td style="text-align:center">
      <el-button size="mini" class="setBtn">{{$t('patent.setOpen')}}</el-button>
      <el-button size="mini" class="setBtn">{{$t('patent.setNotOpen')}}</el-button>
      <el-button size="mini" class="setBtn" >{{$t('patent.add')}}</el-button>
    </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value1: ''
      }
    },
    created(){
      this.getRowClass()
    },
    methods:{
      getRowClass({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background:#eef1f6;color:#606266;font-size:14px;font-weight:bold;'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: left;
    font-size: 12px;
  }
  .thesisExplain{
    color: black;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
  }
  .searchDiv{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .searchSpan{
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 15px !important;
    padding-bottom: 15px;
  }
  .eltable{
    margin-top: 20px;
  }
  .queryBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
    margin-left: 15px;
  }
  .setBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
  }
</style>
