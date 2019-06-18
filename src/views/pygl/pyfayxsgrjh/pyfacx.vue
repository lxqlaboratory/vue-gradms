<template>
  <div class="app-container">
    <!--<div>-->
    <!--{{ $t('cultivatingSchemeQuery.studentType')}}:-->
    <!--<el-select   style="width: 15%" filterable placeholder="请选择">-->
    <!--<el-option-->
    <!--&lt;!&ndash;v-for="item in list"&ndash;&gt;-->
    <!--&lt;!&ndash;:key="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:label="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:value="item.companyName"&ndash;&gt;-->
    <!--/>-->
    <!--</el-select>-->
    <!--{{ $t('cultivatingSchemeQuery.school') }}:-->
    <!--<el-select   style="width: 15%" filterable placeholder="请选择">-->
    <!--<el-option-->
    <!--&lt;!&ndash;v-for="item in list"&ndash;&gt;-->
    <!--&lt;!&ndash;:key="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:label="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:value="item.companyName"&ndash;&gt;-->
    <!--/>-->
    <!--</el-select>-->
    <!--{{ $t('cultivatingSchemeQuery.major') }}:-->
    <!--<el-select  style="width: 15%" filterable placeholder="请选择">-->
    <!--<el-option-->
    <!--&lt;!&ndash;v-for="item in list"&ndash;&gt;-->
    <!--&lt;!&ndash;:key="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:label="item.companyName"&ndash;&gt;-->
    <!--&lt;!&ndash;:value="item.companyName"&ndash;&gt;-->
    <!--/>-->
    <!--</el-select>-->
    <!--{{ $t('cultivatingSchemeQuery.year') }}:-->
    <!--<el-input  placeholder="请输入内容" style="width: 15%"></el-input>-->
    <!--</div>-->
    <!--<el-row>-->
    <!--<el-col :span="24"><div class="grid-content bg-purple-light" style="text-align: center;">-->
    <!--{{ $t('cultivatingSchemeQuery.ListOfCultivation') }}-->
    <!--</div>-->
    <!--</el-col>-->
    <!--</el-row>-->
    <!--<el-table-->
    <!--:data="tablelist"-->
    <!--border-->
    <!--style="width: 100%">-->
    <!--<el-table-column-->
    <!--:label="$t('projectParticipation.number')"-->
    <!--width="80">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--:label="$t('cultivatingSchemeQuery.cultivatingSchemeName')"-->
    <!--width="550">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--:label="$t('cultivatingSchemeQuery.major1')"-->
    <!--width="230">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--:label="$t('cultivatingSchemeQuery.startTime')"-->
    <!--width="180">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--:label="$t('cultivatingSchemeQuery.detail')"-->
    <!--&gt;-->
    <!--</el-table-column>-->
    <!--</el-table>-->
  </div>
</template>
<script>
import { cultivateSchemeShow } from '@/api/user'
export default {
  data() {
    return {
      tablelist: []
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
