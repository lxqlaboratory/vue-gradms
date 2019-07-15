<template>
  <div class="app-container">
    <el-form>
      <table class="content" cellspacing="10" width="100%">
        <tbody><tr>
          <td align="center" valign="top">
            <table class="content" cellspacing="0" width="100%">
              <tbody><tr>
                       <td class="head" height="25" colspan="5">
                         <div align="center" class="form-label">
                           {{ $t('baseInformationModal.personalInformation') }}
                         </div>
                       </td>
                     </tr>
                <tr>
                  <td width="15%" height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.name') }}
                  </td>
                  <td>
                    {{ list.perName }}
                  </td>
                  <td width="20%" height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.englishName') }}
                  </td>
                  <td v-if="isEdit" width="25%">
                    <input v-model="list.perEnglishName">
                  </td>
                  <td v-else width="25%">
                    {{ list.perEnglishName }}
                  </td>
                  <td width="20%" rowspan="4">
                    <img src="/gradms/api/student/getStudentPhotoData" height="120" align="middle" border="0" alt="photo">
                  </td>
                </tr>
                <tr>
                  <td height="25" width="15%" align="right" class="form-label">
                    {{ $t('baseInformationModal.studentNumber') }}
                  </td>
                  <td>
                    {{ list.perNum }}
                  </td>
                  <td height="25" width="15%" align="right" class="form-label">
                    {{ $t('baseInformationModal.sex') }}
                  </td>
                  <td>
                    {{ $t(list.genderCode) }}
                  </td>
                </tr>
                <tr>
                  <td height="25" width="15%" align="right" class="form-label">
                    {{ $t('baseInformationModal.date') }}
                  </td>
                  <td>
                    {{ list.perBirthday }}
                  </td>
                  <td height="25" width="15%" align="right" class="form-label">
                    {{ $t('baseInformationModal.nationality') }}
                  </td>
                  <td width="25%">
                    {{ $t(list.nationName) }}
                  </td>
                </tr>
                <tr>
                  <td height="25" width="15%" class="form-label">
                    {{ $t('baseInformationModal.ID') }}
                  </td>
                  <td>
                    {{ list.perIdCard }}
                  </td>
                  <td width="15%" height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.religion') }}
                  </td>
                  <td v-if="isEdit" width="25%">
                    <el-select v-model="religionshow" placeholder="please choose" size="mini" class="el-w">
                      <el-option
                        v-for="item in list.zjxy"
                        :key="item.value"
                        :label="$t(item.name)"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%">
                    {{ religionshow }}
                  </td>
                </tr>
              </tbody></table>
            <table class="content" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td height="25" colspan="4" class="form-label">
                    {{ $t('baseInformationModal.person') }}
                  </td>
                </tr>
                <tr>
                  <td height="25" align="right" width="20%" class="form-label">
                    {{ $t('baseInformationModal.contact') }}
                  </td>
                  <td v-if="isEdit">
                    <input v-model="list.perTelephone">
                  </td>
                  <td v-else>
                    {{ list.perTelephone }}
                  </td>
                  <td height="25" align="right" width="20%" class="form-label">
                    {{ $t('baseInformationModal.phone') }}
                  </td>
                  <td v-if="isEdit">
                    <input v-model="list.mobilePhone">
                  </td>
                  <td v-else>
                    {{ list.mobilePhone }}
                  </td>
                </tr>
                <tr>
                  <td height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.qq') }}
                  </td>
                  <td v-if="isEdit">
                    <input v-model="list.qq">
                  </td>
                  <td v-else>
                    {{ list.qq }}
                  </td>
                  <td height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.wechat') }}
                  </td>
                  <td v-if="isEdit">
                    <input v-model="list.wechat">
                  </td>
                  <td v-else>
                    {{ list.wechat }}
                  </td>
                </tr>
                <tr>
                  <td height="25" class="form-label" align="right">
                    {{ $t('baseInformationModal.email') }}
                  </td>
                  <td v-if="isEdit" height="25" colspan="3">
                    <input v-model="list.email" style="width: 30%">
                  </td>
                  <td v-else height="25" colspan="3">
                    {{ list.email }}
                  </td>
                </tr>
                <tr>
                  <td height="25" align="right" class="form-label">
                    {{ $t('baseInformationModal.remark') }}
                  </td>
                  <td v-if="isEdit" height="40" colspan="3">
                    <input v-model="list.remark" style="width: 50%">
                  </td>
                  <td v-else height="25" colspan="3">
                    {{ list.remark }}
                  </td>
                </tr>
                <tr>
                  <td height="28" colspan="4">
                    <div align="center">
                      <el-button v-if="!isEdit" type="primary" name="modifyIt" class="submitbutton" @click="edit">{{ $t('route.modify') }}</el-button>
                      <el-button v-else type="success" name="modifyIt" class="submitbutton" @click="save">{{ $t('route.save') }}</el-button>
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </td>
        </tr>
        </tbody></table>
      <a href="/gradms/api/student/printStudyProve" download="k.pdf">download PDF</a>
      <el-upload
        name="file"
        drag
        action="/gradms/api/student/uploadFile"
        :limit="1"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">拖动上传文件</div>
      </el-upload>
    </el-form>
  </div>
</template>

<script>
  import { getStudentBaseicInfo, updateStudentBaseicInfo} from '@/api/studentBaseicInfo'
export default {
  data() {
    return {
      list: [],
      length1: [],
      activeName: 'first',
      isEdit: false
    }
  },
  created() {
    this.fetchData()
  },
  computed:{
    religionshow : {
      get: function() {
        let zjxy = this.list.zjxy
        let religion = this.list.religion
        if(zjxy){
          this.length1 = zjxy.length
        }
        for (let i = 0; i <  this.length1; i++) {
          let item = zjxy[i]
          if (item.value === religion) {
            return this.$t(item.name)
          }
        }
      },
      set: function (newValue) {
        this.list.religion = newValue
      }
    }
  },
  methods: {
    downLoadPDF() {
      window.location.href = '/gradms/api/student/printStudyProve'
    },
    fetchData() {
      getStudentBaseicInfo().then(res => {
        console.log(res)
        this.list = res.data
      })
    },
    save() {
      this.isEdit = false
      updateStudentBaseicInfo(this.list).then(res => {
      }).catch(e => {
      })
    },
    edit() {
      this.isEdit = true
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

