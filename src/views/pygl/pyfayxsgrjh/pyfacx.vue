<template>
  <div class="app-container">
    <!--<div>-->
    {{ $t('cultivatingSchemeQuery.studentType')}}:
    <el-select v-model="stuTypecode"   style="width: 15%" filterable placeholder="请选择">
    <el-option
    v-for="item in stuTypeList"
    :key="item.value"
    :label="$t(item.name)"
    :value="item.value"
    />
    </el-select>
    {{ $t('cultivatingSchemeQuery.school') }}:
    <el-select  v-model="collegeType" style="width: 15%" filterable placeholder="请选择">
    <el-option
    v-for="item in collegeNameList"
    :key="item.value"
    :label="$t(item.name)"
    :value="item.value"
    />
    </el-select>
    <!--{{ $t('cultivatingSchemeQuery.major') }}:-->
    <!--<el-select  style="width: 15%" filterable placeholder="请选择">-->
    <!--<el-option-->
    <!--&lt;!&ndash;v-for="item in list"&ndash;&gt;-->
    <!--&lt;!&ndash;:key="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:label="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:value="item.companyName"&ndash;&gt;-->
    <!--/>-->
    <!--</el-select>-->
    {{ $t('cultivatingSchemeQuery.year') }}:
    <el-input v-model="year" placeholder="请输入年份" style="width: 15%"></el-input>
    <!--</div>-->
    <!--<el-row>-->
    <!--<el-col :span="24"><div class="grid-content bg-purple-light" style="text-align: center;">-->
    <!--{{ $t('cultivatingSchemeQuery.ListOfCultivation') }}-->
    <!--</div>-->
    <!--</el-col>-->
    <!--</el-row>-->
    <el-table
      :data="tableData"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
    <el-table-column
    :label="$t('projectParticipation.number')"
    width="80">
      <template slot-scope="scope">
        {{ scope.$index+1 }}
      </template>
    </el-table-column>
    <el-table-column
    :label="$t('cultivatingSchemeQuery.cultivatingSchemeName')"
    width="550">
      <template slot-scope="scope">
        {{ $t(scope.row.schemeName) }}
      </template>
    </el-table-column>
    <el-table-column
    :label="$t('cultivatingSchemeQuery.major1')"
    width="230">
      <template slot-scope="scope">
        {{ $t(scope.row.majorName) }}
      </template>
    </el-table-column>
    <el-table-column
    :label="$t('cultivatingSchemeQuery.startTime')"
    width="180">
      <template slot-scope="scope">
        {{ scope.row.startTimeStr }}
      </template>
    </el-table-column>
    <el-table-column
    :label="$t('cultivatingSchemeQuery.detail')"
    >
      <template slot-scope="scope">
        <el-button @click="pushInfo(scope.row.schemeId )" type="text">详细</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { cultivateSchemeShow , getMajorList } from '@/api/user'
export default {
  data() {
    return {
      tablelist: [],
      cultivateFormList: '',
      collegeNameList: [],
      stuTypeList: [],
      stuTypecode: '',
      year: '',
      collegeType: ''
    }
  },
  computed: {
    'tableData': function() {
      return this.cultivateFormList.filter(item => {
        if (!this.year || (item.startTimeStr.indexOf(this.year)>= 0)){
          return true
        }
        else {
          return false
        }
      })
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      cultivateSchemeShow().then(res => {
        console.log(res)
        this.tablelist = res.data
        this.cultivateFormList = res.data.cultivateFormList
        this.stuTypeList = res.data.stuTypeList
        this.collegeNameList = res.data.collegeNameList
      })
    },
    pushInfo(id){
      this.$router.push({ name: 'showCultivate', params: { id }})
    }
  }
}
</script>

<style scoped>
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
