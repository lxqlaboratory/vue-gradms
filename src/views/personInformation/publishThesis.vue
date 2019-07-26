<template>
  <div class="container">
    <table width="100%" class="content">
      <tbody>
        <tr>
          <td class="head" colspan="24">
            <div align="center" style="color: #A50001;font-size: 16px;font-weight: bold">
              {{ $t('publishThesis.thesisInfo') }}
              <input type="hidden" name="isTea" value="0">
            </div>
          </td>
        </tr>
        <tr><td colspan="24" class="thesisExplain">
          {{ $t('publishThesis.note1') }}
          <br>{{ $t('publishThesis.note2') }}
          <br>{{ $t('publishThesis.note3') }}
        </td>
        </tr>
      </tbody>
    </table>

    <el-table
      :data="formData"
      border
      size="mini"
      class="eltable"
      :header-cell-style="getRowClass"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        :label="$t('publishThesis.number')"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.thesisName')"
        width="350"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.achName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.publicationTime1')"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.useTime }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.conferenceTitle')"
        width="220"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.magazineName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.level')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.levelCodeNmae) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.inclusion')"
        width="90"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.includeNmae) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.selfRank')"
        width="95"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.orderCode }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.status')"
        width="80"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.isCheck }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="150"
        align="center"
        :label="$t('patent.operation')"
      >
        <template slot-scope="scope">
          <el-button size="mini"  class="operateBtn" type="text" >编辑</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini"  class="operateBtn" type="text" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <table width="100%" style="padding-top: 20px">
      <tbody><tr>
        <td align="center">
          <el-button size="mini" class="setBtn" @click="thesisAdd()">{{ $t('patent.add') }}</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getAchievementWordTypeInfoList } from '@/api/getAchievementWordType'
export default {
  data() {
    return {
      formData: '' ,
    }
  },
  created() {
    this.fetchData()
    this.getRowClass()
  },
  methods: {
    fetchData() {
      getAchievementWordTypeInfoList().then(res => {
        this.formData = res.data
      })
    },
    thesisAdd(){
      this.$router.push({ path: './thesisAdd'})
    },

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
  .setBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
  }
  .operateBtn{
    color: #A50001;
  }
</style>
