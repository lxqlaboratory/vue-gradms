<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane name="first" :label="$t('baseInformationModal.baseInformation')">
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
                        <el-select v-model="list.religion" placeholder="please choose" size="mini" class="el-w">
                          <el-option
                            v-for="item in list.zjxy"
                            :key="item.value"
                            :label="$t(item.name)"
                            :value="$t(item.value)"
                          />
                        </el-select>
                      </td>
                      <td v-else width="25%">
                        {{ $t(list.religion) }}
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
      </el-tab-pane>
      <el-tab-pane :label="$t('baseInformationModal.cultivationInformation')" name="second">
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
                    <td width="25%" >
                      {{$t(list2.stuTypeCode)}}
                    </td>
                    <td align="right" width="25%" class="form-label">
                      {{ $t('cultivationInformationModal.department') }}
                    </td>
                    <td width="25%" >
                      {{$t(list2.collegeName)}}
                    </td>
                  </tr>
                <tr>
                  <td class="form-label">
                    {{ $t('cultivationInformationModal.sedCultivation') }}
                  </td>
                  <td>
                    {{list2.collegeName1?$t(list2.collegeName1):''}}
                  </td>
                  <td class="form-label">
                    {{ $t('cultivationInformationModal.thirdCultivation') }}
                  </td>
                  <td >
                    {{list2.collegeName2?$t(list2.collegeName2):''}}
                  </td>
                </tr>
                  <tr>
                    <td align="right" class="form-label">
                      {{ $t('cultivationInformationModal.major') }}
                    </td>
                    <td >
                      {{$t(list2.majorName)}}
                    </td>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.direction') }}
                    </td>
                    <td >
                      {{list2.researchName}}
                    </td>
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.tutor') }}
                    </td>
                    <td >
                      {{$t(list2.tutor)}}
                    </td>
                  <td class="form-label">
                    {{ $t('cultivationInformationModal.grade') }}
                  </td>
                  <td >
                    {{list2.grade}}
                  </td>
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.entranceDate') }}
                    </td>
                    <td >
                      {{list2.entrYearMon}}
                    </td>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.dapartTime') }}
                    </td>
                    <td >
                      {{list2.leaveYearMon}}
                    </td>
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.system') }}
                    </td>
                    <td >
                      {{list2.classYear}}
                    </td>
                    <td class="form-label">
                      {{ $t('cultivationInformationModal.studyStatus') }}
                    </td>
                    <td >
                      {{$t(list2.studyStateName)}}
                    </td>
                  </tr>
                 <tr>
                  <td class="form-label" >
                    {{ $t('cultivationInformationModal.campus') }}
                  </td>
                  <td colspan="3" >
                    {{$t(list2.campusName)}}
                  </td>
                </tr>
                </tbody></table>
            </td>
          </tr>
          </tbody></table>
      </el-tab-pane>
      <el-tab-pane :label="$t('baseInformationModal.beforeSchool')" name="third">
        <table class="content" cellspacing="0" width="100%">
          <tbody><tr>
            <td height="300" colspan="8" align="center" valign="top">
              <table class="content" cellspacing="0" width="100%">
                <tbody><tr>
                         <td class="form-label" colspan="4">
                           <div align="center">
                             {{ $t('preSchoolInfoModal.preSchoolInfoDisplay') }}
                           </div>
                         </td>
                       </tr>
                  <tr>
                    <td colspan="4" class="form-label">
                      {{ $t('preSchoolInfoModal.undergraduate') }}
                    </td>
                  </tr>
                  <tr>
                    <td align="right" width="25%" class="form-label">
                      {{ $t('preSchoolInfoModal.undergraduateType') }}
                    </td>
                    <td width="25%" >
                    </td>
                    <td align="right" width="25%" class="form-label">
                      {{ $t('preSchoolInfoModal.undergraduateMajor') }}
                    </td>
                    <td v-if="isEdit2" width="25%" >
                          <el-autocomplete
                            v-model="state"
                            size="mini"
                            style="width: 200px"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            @select="handleSelect">
                            <template slot-scope="{ item }">
                              <div class="show-autocomplete" ><div style="color: #409EFF">
                                {{ item.value }}
                              </div> <div>-</div><div >{{ item.address }}</div></div>
                            </template>
                          </el-autocomplete>
                    </td>
                    <td v-else width="25%">
                    </td>
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.undergraduateDate') }}
                    </td>
                    <td />
                    <td align="right" class="form-label">
                      {{ $t('preSchoolInfoModal.undergraduateThesisTitle') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.bachelarDegree') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.bachelarDegreeMajor') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.bachelarDegreeType') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.bachelarDegreeGrantedDate') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td colspan="4" class="form-label">
                      {{ $t('preSchoolInfoModal.postgraduate') }}
                    </td>
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.postgraduateType') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.postgraduateMajor') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.postgraduateDate') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.postgraduateThesisTitle') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.MasterDegree') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.MasterDegreeMajor') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.MasterSubjectType') }}
                    </td>
                    <td />
                    <td class="form-label">
                      {{ $t('preSchoolInfoModal.MasterDegreeDate') }}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td height="25" align="right" class="form-label">
                      {{ $t('preSchoolInfoModal.remark') }}
                    </td>
                    <td colspan="3" />
                  </tr>
                </tbody>
                <tr>
                  <td height="28" colspan="4">
                    <div align="center">
                      <el-button v-if="!isEdit2" type="primary" name="modifyIt" class="submitbutton" @click="edit2">{{ $t('route.modify') }}</el-button>
                      <el-button v-else type="success" name="modifyIt" class="submitbutton" @click="save2">{{ $t('route.save') }}</el-button>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          </tbody></table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getStudentBaseicInfo, updateStudentBaseicInfo, getStudentTrainInfo, getStudentPreSchoolInfo } from '@/api/user'
export default {
  data() {
    return {
      state: '',
      restaurants: [],
      list: [],
      list2: [],
      list3: [],
      list4: [],
      activeName: 'first',
      isEdit: false,
      isEdit2: false
    }
  },
  created() {
    this.fetchData()
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
      getStudentTrainInfo().then(res => {
        console.log(res)
        this.list2 = res.data
      })
      getStudentPreSchoolInfo().then(res => {
        console.log(res)
        this.list3 = res.data
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
    },
    save2() {
      this.isEdit2 = false
    },
    edit2() {
      this.isEdit2 = true
    },



    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return ((restaurant.address.toLowerCase().indexOf(queryString.toLowerCase()) === 0)||(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0));
      };
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
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
