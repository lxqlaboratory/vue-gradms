<template>
  <div class="app-container">
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td height="300" colspan="8" align="center" valign="top">
          <table class="content" cellspacing="0" width="100%">
            <tbody><tr>
                     <td class="form-label" colspan="4">
                       <div align="center">
                         {{ $t('cultivationInformationModal.studentCultivationInfo') }}
                       </div>
                     </td>
                   </tr>
              <tr>
                <td align="right" width="25%" class="form-label">
                  {{ $t('cultivationInformationModal.studentType') }}
                </td>
                <td width="25%">
                  {{ $t(list2.stuTypeCode) }}
                </td>
                <td align="right" width="25%" class="form-label">
                  {{ $t('cultivationInformationModal.department') }}
                </td>
                <td width="25%">
                  {{ $t(list2.collegeName) }}
                </td>
              </tr>
              <tr>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.sedCultivation') }}
                </td>
                <td>
                  {{ list2.collegeName1?$t(list2.collegeName1):'' }}
                </td>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.thirdCultivation') }}
                </td>
                <td>
                  {{ list2.collegeName2?$t(list2.collegeName2):'' }}
                </td>
              </tr>
              <tr>
                <td align="right" class="form-label">
                  {{ $t('cultivationInformationModal.major') }}
                </td>
                <td>
                  {{ $t(list2.majorName) }}
                </td>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.direction') }}
                </td>
                <td>
                  {{ list2.researchName }}
                </td>
              </tr>
              <tr>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.tutor') }}
                </td>
                <td>
                  {{ $t(list2.tutor) }}
                </td>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.grade') }}
                </td>
                <td>
                  {{ list2.grade }}
                </td>
              </tr>
              <tr>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.entranceDate') }}
                </td>
                <td>
                  {{ list2.entrYearMon }}
                </td>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.dapartTime') }}
                </td>
                <td>
                  {{ list2.leaveYearMon }}
                </td>
              </tr>
              <tr>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.system') }}
                </td>
                <td>
                  {{ list2.classYear }}
                </td>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.studyStatus') }}
                </td>
                <td>
                  {{ $t(list2.studyStateName) }}
                </td>
              </tr>
              <tr>
                <td class="form-label">
                  {{ $t('cultivationInformationModal.campus') }}
                </td>
                <td colspan="3">
                  {{ $t(list2.campusName) }}
                </td>
              </tr>
            </tbody></table>
        </td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
import { getStudentTrainInfo } from '@/api/studentTrainInfo'
export default {
  data() {
    return {
      list2: []
    }
  },
   created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentTrainInfo().then(res => {
        console.log(res)
        this.list2 = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  td{
    height: 2.3em;
    padding:5px;
    text-align: center;
    border:1px solid #99a9bf;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
    border-bottom: 1px solid black;
  }
  td input:focus{
    padding: 2px;
    box-sizing: border-box;
    margin: 0 !important;
    border: none;
    border-bottom: 1px solid blue;
  }
  .submitbutton{
    width: 12em;
  }
  .form-label{
    color: #20a0ff;
  }
  .show-autocomplete{
    display: flex;
    flex-direction: row;
  }
</style>
