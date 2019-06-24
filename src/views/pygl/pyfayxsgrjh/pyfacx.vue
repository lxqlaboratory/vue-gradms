<template>
  <div class="app-container">
    <!--<div>-->
    {{ $t('cultivatingSchemeQuery.studentType')}}:
    <el-select v-model="stuTypecode"  @change="getMajor" style="width: 15%" filterable placeholder="请选择">
      <el-option
        v-for="item in stuTypeList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    {{ $t('cultivatingSchemeQuery.school') }}:
    <el-select  v-model="collegeType" @change="getMajor" style="width: 15%" filterable placeholder="请选择">
      <el-option
        v-for="item in collegeNameList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    {{ $t('cultivatingSchemeQuery.major') }}:
    <el-select v-model="majorTypeCode"  style="width: 15%" filterable placeholder="请选择">
      <el-option
        v-for="item in majorList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    {{ $t('cultivatingSchemeQuery.year') }}:
    <el-input v-model="year" placeholder="请输入年份" style="width: 15%"></el-input>
    <el-button size="mini" @click="getTableList" type="primary">查询</el-button>

    <el-table
      :data="cultivateFormList"
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
          <el-button @click="pushInfo(scope.row.schemeId , scope.row.majorName, scope.row.studentType )" type="text">详细</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { cultivateSchemeShow , getMajorList ,getCultivateTableList } from '@/api/user'
  export default {
    data() {
      return {
        tablelist: [],
        cultivateFormList: '',
        collegeNameList: [],
        majorList: [],
        stuTypeList: [],
        stuTypecode: '',
        year: '',
        collegeType: '',
        majorTypeCode: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        cultivateSchemeShow().then(res => {
          this.cultivateFormList = res.data.cultivateFormList
          this.stuTypeList = res.data.stuTypeList
          this.collegeNameList = res.data.collegeNameList
        })
      },
      pushInfo(id,majorName,studentType){
        this.$router.push({ name: 'showCultivate', params: { id ,majorName,studentType}})
      },
      getMajor(){
        if(this.stuTypecode&&this.collegeType)
          getMajorList({'stuTypecode': this.stuTypecode , 'collegeType': this.collegeType}).then(res => {
            this.majorList = res.data.majorList
            console.log(res)
          }).catch(e => {

          })
      },
      getTableList(){
        getCultivateTableList({'stuTypecode': this.stuTypecode , 'collegeType': this.collegeType ,'majorTypeCode': this.majorTypeCode ,'year': this.year }).then(res =>{
          this.cultivateFormList = res.data.cultivateFormList
          console.log(res)
        }).catch(e => {

        })
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
