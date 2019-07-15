<template>
<div class="app-container">
  <table  cellspacing="0" width="100%">
    <tbody><tr>
      <td class="head" colspan="11">
        <div align="center"  style="color: #5a5e66">
          {{$t('patent.note')}}
          <input type="hidden" name="isTea" value="0">
        </div>
      </td>
    </tr>
    <tr><td colspan="11">
      <font color="red">
        {{$t('patent.note1')}}
      </font>
    </td>
    </tr>
    <tr>
      <td align="left" colspan="3" style="color: #5a5e66">
        {{$t('publishThesis.publicationTime')}}:
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="to"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini">
        </el-date-picker>
      </td>
      <td align="left" colspan="3" style="color: #5a5e66" width="30%">
        {{$t('patent.authorRanking')}}
        <el-select v-model="value" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </td>
      <td colspan="2">
        <el-button type="primary" size="mini">{{$t('publishThesis.query')}}</el-button>
      </td>
    </tr>
    </tbody></table>
  <el-table
    :data="tableData"
    border
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
</div>
</template>

<script>
  export default {
    name: 'patent'
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
