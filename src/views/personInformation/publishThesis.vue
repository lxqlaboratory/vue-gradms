<template>
  <div>
    <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" colspan="11">
          <div align="center"  style="color: #5a5e66">
            {{ $t('publishThesis.thesisInfo') }}
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="11">
        <font color="red">{{$t('publishThesis.note')}}
        </font>
      </td>
      </tr>
      <tr>
        <td align="left" width="40%" style="color: #5a5e66" >
          {{$t('publishThesis.publicationYear')}}:
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
          {{$t('publishThesis.authorRanking')}}:
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
        <td colspan="2" width="25%">
          <el-button type="primary" size="mini">{{$t('publishThesis.query')}}</el-button>
          <el-button type="primary" size="mini">{{$t('publishThesis.export')}}</el-button>
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
    <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td style="text-align:center">
          <el-button type="primary" size="mini" >{{$t('patent.setOpen')}}</el-button>
          <el-button type="primary"  size="mini" >{{$t('patent.setNotOpen')}}</el-button>
          <el-button type="primary"  size="mini" >{{$t('patent.add')}}</el-button>
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
