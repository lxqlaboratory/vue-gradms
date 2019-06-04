<template>
  <div class="app-container">
    <el-tabs v-model="activeName" >
      <el-tab-pane name="first" :label="$t('route.baseInformation')">
        <el-form>
          <table class="content" cellspacing="10" width="100%">
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
                        <input v-model="form.perName">
                      </td>
                      <td v-else width="25%">
                        {{ form.perName }}
                      </td>
                      <td width="20%" height="25" align="right" class="form-label">
                        {{ $t('route.englishName') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input >
                      </td>
                      <td v-else width="25%">

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
                        <input v-model="form.perNum">
                      </td>
                      <td v-else width="20%">
                        {{ form.perNum }}
                      </td>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.sex') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input >
                      </td>
                      <td v-else width="25%">

                      </td>
                    </tr>
                    <tr>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.date') }}
                      </td>
                      <td v-if="isEdit" width="20%">
                        <el-date-picker  type="date" value-format="yyyy-MM-dd" placeholder="chooseBirthDate"  style="margin-right: 10px; " @change="startTimeStatus" />
                      </td>
                      <td v-else width="20%">

                      </td>
                      <td height="25" width="15%" align="right" class="form-label">
                        {{ $t('route.nationality') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input >
                      </td>
                      <td v-else width="25%">

                      </td>
                    </tr>
                    <tr>
                      <td height="25" width="15%" class="form-label">
                        {{ $t('route.ID') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                      </td>
                      <td v-else width="25%">
                      </td>
                      <td width="15%" height="25" align="right" class="form-label">
                        {{ $t('route.religion') }}
                      </td>
                      <td v-if="isEdit" width="25%">
                        <input >
                      </td>
                      <td v-else width="25%">
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
                        <input >
                      </td>
                      <td v-else>
                      </td>
                      <td height="25" align="right" width="20%" class="form-label">
                        {{ $t('route.phone') }}
                      </td>
                      <td v-if="isEdit">
                        <input >
                      </td>
                      <td v-else>
                      </td>
                    </tr>
                    <tr>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.qq') }}
                      </td>
                      <td v-if="isEdit">
                        <input >
                      </td>
                      <td v-else>

                      </td>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.wechat') }}
                      </td>
                      <td v-if="isEdit">
                        <input >
                      </td>
                      <td v-else>

                      </td>
                    </tr>
                    <tr>
                      <td height="25" class="form-label" align="right">
                        {{ $t('route.email') }}
                      </td>
                      <td v-if="isEdit" height="25" colspan="3">
                        <input v-model="form.email" style="width: 30%">
                      </td>
                      <td v-else height="25" colspan="3" >
                        {{ form.email }}
                      </td>
                    </tr>
                    <tr>
                      <td height="25" align="right" class="form-label">
                        {{ $t('route.remark') }}
                      </td>
                      <td v-if="isEdit" height="40" colspan="3" >
                        <input  style="width: 50%">
                      </td>
                      <td v-else height="25" colspan="3">
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
      <el-tab-pane :label="$t('route.cultivationInformation')" name="second">
        <table class="content" cellspacing="0" width="100%">
          <tbody><tr>
            <td height="300" colspan="8" align="center" valign="top">
              <table class="content" cellspacing="0" width="100%">
                <tbody><tr>
                  <td class="head"  colspan="4">
                    <div align="center">
                      学生培养信息
                    </div>
                  </td>
                </tr>
                <tr>
                  <td  align="right" width="25%">
                    学生类型
                  </td>
                  <td v-if="isEdit2" width="25%">
                    <el-select v-model="value" disabled placeholder="外籍博士" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%">
                    外籍博士
                  </td>
                  <td  align="right" width="25%">
                    所属院系
                  </td>
                  <td v-if="isEdit2" width="25%">
                    <el-select v-model="value" disabled placeholder="微生物技术国家重点实验室" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%">
                    微生物技术国家重点实验室
                  </td>
                </tr>
                <tr>
                  <td  align="right">
                    培养方式
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="非定向" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    非定向
                  </td>
                  <td  align="right">
                    所属专业
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value" disabled placeholder="071005-微生物学" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    071005-微生物学
                  </td>
                </tr>
                <tr>
                  <td  align="right">
                    学习方式
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value" disabled placeholder="半脱产" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    半脱产
                  </td>
                  <td >
                    委托培养或定向单位
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td   >
                    入学年月
                  </td>
                  <td v-if="isEdit2" >
                    <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" size="mini" style="width: 80%; " @change="startTimeStatus" />
                  </td>
                  <td v-else >
                    2015-09-01
                  </td>
                  <td  >
                    预计离校时间
                  </td>
                  <td v-if="isEdit2" >
                    <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" size="mini" style="width: 80%; " @change="startTimeStatus" />
                  </td>
                  <td v-else >
                    1997-09-01
                  </td>
                </tr>
                <tr>
                  <td >
                    外语水平
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    准考证号
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    健康状况
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td>
                    有何特长
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td>
                    经济状况
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    本人经济来源
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    年级
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="半脱产" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    2015
                  </td>
                  <td  >
                    导师
                  </td>
                  <td v-if="isEdit2" >
                    <input   :disabled="true"  >
                  </td>
                  <td v-else>
                    史玉龙
                  </td>
                </tr>
                <tr>
                  <td  >
                    学习地点
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    在学状态
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    在学
                  </td>
                </tr>
                <tr>
                  <td >
                    所在班级
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    所属校区
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    学制
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    研究方向
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    二级培养单位
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  disabled placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    三级培养单位
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  disabled placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    是否有学籍
                  </td>
                  <td v-if="isEdit2">
                    <el-radio v-model="radio2" label="1">是</el-radio>
                    <el-radio v-model="radio2" label="2">否</el-radio>
                  </td>
                  <td v-else>
                    是
                  </td>
                  <td >
                    上课时间
                  </td>
                  <td >
                    正常
                  </td>
                </tr>
                <tr>
                  <td  colspan="4">
                    <div align="center">
                      <el-button v-if="!isEdit2" type="primary" name="modifyIt" class="submitbutton " style="display:block;margin:0 auto" @click="edit2">{{ $t('route.modify') }}</el-button>
                      <el-button v-else type="success" name="modifyIt" class="submitbutton" style="display:block;margin:0 auto" @click="save2">{{ $t('route.save') }}</el-button>
                    </div>
                  </td>
                </tr>
                </tbody></table>
            </td>
          </tr>
          </tbody></table>
      </el-tab-pane>
      <el-tab-pane :label="$t('route.beforeSchool')" name="third" >
        <table class="content" cellspacing="0" width="100%">
          <tbody><tr>
            <td height="300" colspan="8" align="center" valign="top">
              <table class="content" cellspacing="0" width="100%">
                <tbody><tr>
                  <td class="head"  colspan="4">
                    <div align="center">
                      学生培养信息
                    </div>
                  </td>
                </tr>
                <tr>
                  <td  align="right" width="25%">
                    学生类型
                  </td>
                  <td v-if="isEdit2" width="25%">
                    <el-select v-model="value" disabled placeholder="外籍博士" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%">
                    外籍博士
                  </td>
                  <td  align="right" width="25%">
                    所属院系
                  </td>
                  <td v-if="isEdit2" width="25%">
                    <el-select v-model="value" disabled placeholder="微生物技术国家重点实验室" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%">
                    微生物技术国家重点实验室
                  </td>
                </tr>
                <tr>
                  <td  align="right">
                    培养方式
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="非定向" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    非定向
                  </td>
                  <td  align="right">
                    所属专业
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value" disabled placeholder="071005-微生物学" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    071005-微生物学
                  </td>
                </tr>
                <tr>
                  <td  align="right">
                    学习方式
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value" disabled placeholder="半脱产" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    半脱产
                  </td>
                  <td >
                    委托培养或定向单位
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td   >
                    入学年月
                  </td>
                  <td v-if="isEdit2" >
                    <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" size="mini" style="width: 80%; " @change="startTimeStatus" />
                  </td>
                  <td v-else >
                    2015-09-01
                  </td>
                  <td  >
                    预计离校时间
                  </td>
                  <td v-if="isEdit2" >
                    <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" size="mini" style="width: 80%; " @change="startTimeStatus" />
                  </td>
                  <td v-else >
                    1997-09-01
                  </td>
                </tr>
                <tr>
                  <td >
                    外语水平
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    准考证号
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    健康状况
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td>
                    有何特长
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td>
                    经济状况
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    本人经济来源
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    年级
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="半脱产" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    2015
                  </td>
                  <td  >
                    导师
                  </td>
                  <td v-if="isEdit2" >
                    <input   :disabled="true"  >
                  </td>
                  <td v-else>
                    史玉龙
                  </td>
                </tr>
                <tr>
                  <td  >
                    学习地点
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    在学状态
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                    在学
                  </td>
                </tr>
                <tr>
                  <td >
                    所在班级
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    所属校区
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    学制
                  </td>
                  <td v-if="isEdit2" >
                    <input  >
                  </td>
                  <td v-else>
                  </td>
                  <td >
                    研究方向
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    二级培养单位
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  disabled placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                  <td  >
                    三级培养单位
                  </td>
                  <td v-if="isEdit2">
                    <el-select v-model="value"  disabled placeholder="" size="mini" class="el-w">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else>
                  </td>
                </tr>
                <tr>
                  <td >
                    是否有学籍
                  </td>
                  <td v-if="isEdit2">
                    <el-radio v-model="radio2" label="1">是</el-radio>
                    <el-radio v-model="radio2" label="2">否</el-radio>
                  </td>
                  <td v-else>
                    是
                  </td>
                  <td >
                    上课时间
                  </td>
                  <td >
                    正常
                  </td>
                </tr>
                <tr>
                  <td  colspan="4">
                    <div align="center">
                      <el-button v-if="!isEdit2" type="primary" name="modifyIt" class="submitbutton " style="display:block;margin:0 auto" @click="edit2">{{ $t('route.modify') }}</el-button>
                      <el-button v-else type="success" name="modifyIt" class="submitbutton" style="display:block;margin:0 auto" @click="save2">{{ $t('route.save') }}</el-button>
                    </div>
                  </td>
                </tr>
                </tbody></table>
            </td>
          </tr>
          </tbody></table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { getStudentInfo , setStudentInfo } from '@/api/user'
export default {
  data() {
    return {
      radio: '1',
      radio1: '1',
      radio2: '1',
      activeName: 'first',
      isEdit: false,
      isEdit2: false,
      options: [{
        value: '选项1',
        label: '外籍博士'
      }
      ],
      form: {
        perNum: '',
        perName: '',
        collegeName: '',
        collegeName1: '',
        collegeName2: '',
        stuTypeCode: '',
        majorName: '',
        mobilePhone: '',
        email: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentInfo().then(res => {
        console.log(res)
        this.form = res.data
      })
    },
    save() {
      this.isEdit = false
      setStudentInfo(this.form).then(res=>{
      }).catch(e=>{
      })
    },
    startTimeStatus: function(value) {
      this.form.date = value
    },
    edit() {
      this.isEdit = true

    },
    save2() {
      this.isEdit2 = false
    },
    edit2() {
      this.isEdit2 = true
    }
  }
}

</script>

<style scoped>
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
  .el-w{
    width: 80%;
  }
</style>
