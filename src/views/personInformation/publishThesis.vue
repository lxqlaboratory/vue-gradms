<template>
  <div class="container">
    <table  width="100%" class="content">
      <tbody>
      <tr>
        <td class="head" colspan="24">
          <div align="center" style="color: #A50001;font-size: 16px;font-weight: bold">
            {{ $t('publishThesis.thesisInfo') }}
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="24" class="thesisExplain" >
        {{$t('publishThesis.note1')}}
          <br>{{$t('publishThesis.note2')}}
          <br>{{$t('publishThesis.note3')}}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="searchDiv">
      <span class="searchSpan">{{$t('publishThesis.publicationYear')}}:</span>
      <el-select v-model="value" placeholder="请选择" size="mini" style="width: 10%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
      <span class="searchSpan">{{$t('publishThesis.authorRanking')}}:</span>
      <el-select v-model="value" placeholder="请选择" size="mini" style="width: 10%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button class="queryBtn" size="mini">{{$t('publishThesis.query')}}</el-button>
      <el-button class="queryBtn" size="mini">{{$t('publishThesis.export')}}</el-button>
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
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        :label = "$t('publishThesis.choice')"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.thesisName')"
        width="250">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.publicationTime1')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.conferenceTitle')"
        width="230">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.level')"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.inclusion')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.selfRank')"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.openOrNot')"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.status')"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        :label = "$t('publishThesis.operation')"
      >
      </el-table-column>
    </el-table>
    <table  width="100%" style="padding-top: 20px">
      <tbody><tr>
        <td align="center">
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
    margin-left: 10px;
  }
  .setBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
  }
</style>
