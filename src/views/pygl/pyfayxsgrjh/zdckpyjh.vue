<template>
  <div class="app-container">
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
            {{ $t('cuiltivatingSchemeCheckAndDrawup.selectedCourses') }}    --  {{ $t('cuiltivatingSchemeCheckAndDrawup.note1') }}
          </div>
        </td>
      </tr>
      </tbody></table>

    <el-table
      :data="cultivateFormList"
      element-loading-text="Loading"
      border
      fit="true"
      size="mini"
      style="width: 100%"
      :header-cell-style="getRowClass"
    >
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.category) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.schemeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.majorName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      >
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNum')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.testTime')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('publishThesis.operation')"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" round style="color: #9b0d14">{{$t('cuiltivatingSchemeCheckAndDrawup.delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      &nbsp;&nbsp;
    </div>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
            {{ $t('cuiltivatingSchemeCheckAndDrawup.cultivationStepList') }}
          </div>
        </td>
      </tr>
      </tbody></table>

    <el-table
      :data="cultSessisonList"
      element-loading-text="Loading"
      border
      fit="true"
      size="mini"
      style="width: 100%"
      max-height="700"
      class="eltable"
      :header-cell-style="getRowClass"
    >
      <el-table-column
        :label="$t('projectParticipation.number')"
        fixed="left"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.form')"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.sessionName) }}
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.setSessionCredit) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="120"
        align="center"
      />
      <el-table-column
        fixed="right"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.statement')"
      />
    </el-table>

    <div>
      &nbsp;&nbsp;
    </div>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
          培养方案课程
          </div>
        </td>
      </tr>
      </tbody></table>

    <div>
      <el-table
        :data="schemeRequiredList"
        element-loading-text="Loading"
        border
        fit="true"
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethod1"
        :header-cell-style="getRowClass"
        v-if="currentRole"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
          width="73"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round style="color: #9b0d14" @click="insertCourse(scope.row.courseNum)">{{$t('publishThesis.add')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-table
        :data="schemeOptionalList"
        element-loading-text="Loading"
        border
        fit="true"
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethod2"
        :header-cell-style="getRowClass"
        :show-header="false"
        v-if="currentRole"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
          width="73"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round style="color: #9b0d14">{{$t('publishThesis.add')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-table
        :data="schemeBuxiuList"
        element-loading-text="Loading"
        border
        fit="true"
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethod3"
        :header-cell-style="getRowClass"
        :show-header="false"
        v-if="currentRole"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
          width="73"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          width="200"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round style="color: #9b0d14">{{$t('publishThesis.add')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
<script>
import { showCultivatePlan } from '@/api/checkCultivationScheme'
import { selectCourseInsert } from '@/api/checkCultivationScheme'
export default {
  name: 'CheckTrainPlan',
  data() {
    return {
      cultSessisonList: [],
      schemeBuxiuList: [],
      schemeOptionalList: [],
      schemeRequiredList: [],
      schemeRequiredListLength: '',
      schemeOptionalListLength: '',
      schemeBuxiuListLength: '',
      currentRole: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      showCultivatePlan().then(res => {
        this.cultSessisonList = res.data.planData.cultSessisonList
        this.schemeBuxiuList = res.data.schemeData.buxiuList
        this.schemeOptionalList = res.data.schemeData.optionalList
        this.schemeRequiredList = res.data.schemeData.requiredList
        this.schemeRequiredListLength = res.data.schemeData.requiredList.length
        this.schemeOptionalListLength = res.data.schemeData.optionalList.length
        this.schemeBuxiuListLength = res.data.schemeData.buxiuList.length
        if(res.data.planState === 1){
          this.currentRole = false
        }
        else{
          this.currentRole = true
        }
      })
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#eef1f6;color:#606266;font-size:14px;font-weight:bold;'
      } else {
        return ''
      }
    },
    insertCourse(courseNum) {
      selectCourseInsert({ 'courseNum': courseNum }).then(res => {
      }).catch(e => {
      })
    },
    //合并行
    rowSpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeRequiredListLength === 0) {
          return {
            rowspan: this.schemeRequiredListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    rowSpanMethod2({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeOptionalListLength === 0) {
          return {
            rowspan: this.schemeOptionalListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    rowSpanMethod3({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeBuxiuListLength === 0) {
          return {
            rowspan: this.schemeBuxiuListLength,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
    font-size: small;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
