<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane name="first" :label="$t('route.baseInformation')">
        <el-form >
          <table class="content" cellspacing="0" width="100%">
            <tbody><tr>
              <td align="center" valign="top">
                <table class="content" cellspacing="0" width="100%">
                  <tbody><tr>
                           <td class="head" height="25" colspan="5">
                             <div align="center" class="form-label">
                               {{ $t('route.personalInformation') }}
                             </div>
                           </td>
                         </tr>
                    <tr>
                      <td width="15%" height="25" align="right" class="form-label">
                        {{ $t('route.name') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.name">
                      </td>
                      <td v-else width="25%">
                        {{ form.name }}
                      </td>
                      <td width="20%" height="25" align="right" class="form-label">
                        {{ $t('route.englishName') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.englishName">
                      </td>
                      <td v-else width="25%">
                        {{ form.englishName }}
                      </td>
                      <td width="20%" rowspan="4">
                        <img src="/cultivate/stuinfo/stuinfo_downloadPhoto_info.do?personId=1030214&amp;photoType=02" height="120" align="middle" border="0" alt="photo">
                      </td>
                    </tr>
                    <tr>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.studentNumber') }}
                      </td>
                      <td v-if="isEdit">
                        <input v-model="form.studentNumber">
                      </td>
                      <td v-else width="20%">
                        {{ form.studentNumber }}
                      </td>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.sex') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.sex">
                      </td>
                      <td v-else width="25%">
                        {{ form.sex }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.date') }}
                      </td>
                      <td v-if="isEdit" width="20%">
                        <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" :picker-options="pickerOptionsStart" style="margin-right: 10px;" @change="startTimeStatus" />
                      </td>
                      <td v-else width="20%">
                        {{ form.date }}
                      </td>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.nationality') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.nationality">
                      </td>
                      <td v-else width="25%">
                        {{ form.nationality }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" width="15%" class="form-label">
                        {{ $t('route.ID') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.ID">
                      </td>
                      <td v-else width="25%">
                        {{ form.ID }}
                      </td>
                      <td width="15%" height="25" align="right" class="form-label">
                        {{ $t('route.religion') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input v-model="form.religion">
                      </td>
                      <td v-else width="25%">
                        {{ form.religion }}
                      </td>
                    </tr>
                  </tbody></table>
                <table class="content" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td height="25" colspan="4" class="form-label">
                        {{ $t('route.person') }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" align="right" width="20%" class="form-label">
                        {{ $t('route.contact') }}
                      </td>
                      <td v-if="isEdit">
                        <input v-model="form.contactNumber">
                      </td>
                      <td v-else>
                        {{ form.contactNumber }}
                      </td>
                      <td height="25" align="right" width="20%" class="form-label">
                        {{ $t('route.phone') }}
                      </td>
                      <td v-if="isEdit">
                        <input v-model="form.phone">
                      </td>
                      <td v-else>
                        {{ form.phone }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.qq') }}
                      </td>
                      <td v-if="isEdit">
                        <input v-model="form.qq">
                      </td>
                      <td v-else>
                        {{ form.qq }}
                      </td>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.wechat') }}
                      </td>
                      <td v-if="isEdit">
                        <input v-model="form.wechat">
                      </td>
                      <td v-else>
                        {{ form.wechat }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" class="form-label" align="right">
                        {{ $t('route.email') }}
                      </td>
                      <td v-if="isEdit" height="25" colspan="3">
                        <input v-model="form.email">
                      </td>
                      <td v-else height="25" colspan="3">
                        {{ form.email }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.remark') }}
                      </td>
                      <td v-if="isEdit" height="40" colspan="3">
                        <input v-model="form.remark">
                      </td>
                      <td v-else height="25" colspan="3">
                        {{ form.remark }}
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
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('route.cultivationInformation')" name="second" >
        <el-row >
          <el-col  :span="24" ><div  class="grid-content bg-purple row-jz"  >
            学生培养信息
          </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >学生类型</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">所属院系</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >培养方式</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">所属专业</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >学习方式</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">委托培养或定向单位</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >入学年月</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">预计离校时间</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >外语水平</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">准考证号</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >健康状况</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">有何特长</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >经济状况</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">本人经济来源</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >年纪</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">导师</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >学习地点</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">在学状态</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >所在班级</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">所属校区</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >学制</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">研究方向</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >二级培养单位</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">三级培养单位</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >是否华侨</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">是否英烈子女</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple row-jz" >是否有学籍</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple row-jz">上课时间</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-button v-if="!isEdit" type="primary" name="modifyIt" class="submitbutton " style="display:block;margin:0 auto" >{{ $t('route.modify') }}</el-button>
        <el-button v-else type="success" name="modifyIt" class="submitbutton" style="display:block;margin:0 auto" >{{ $t('route.save') }}</el-button>
      </el-tab-pane>
      <el-tab-pane :label="$t('route.beforeSchool')" name="third" />
    </el-tabs>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      isEdit: false,
      form: {
        name: '',
        englishName: '',
        studentNumber: '',
        religion: '',
        sex: '',
        date: '',
        ID: '',
        nationality: '',
        contactNumber: '',
        phone: '',
        qq: '',
        wechat: '',
        email: '',
        remark: ''
      }
    }
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getMessageTemplateList().then(response => {
    //     this.list = response.data
    //   })
    //   this.listLoading = false
    // },
    save() {
      this.isEdit = false
    },
    startTimeStatus: function(value) {
      this.form.date = value
    },
    edit() {
      this.isEdit = true
    }
  }
}

</script>

<style scoped>
  td{
    height: 2.5em;
    padding:5px;
    text-align: center;
    border:1px solid black;
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
  .el-row {
    margin-bottom: 2px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .row-jz{
    display: flex;align-items: center;justify-content: center;
  }
</style>
