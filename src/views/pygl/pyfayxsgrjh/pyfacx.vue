<template >
  <div class="app-container">
    <div>
      学生类型：
      <el-select v-model="studetTypeCode"  style="width: 15%" filterable placeholder="请选择">
        <el-option
          v-for="item in list"
          :key="item.companyName"
          :label="item.companyName"
          :value="item.companyName"
        />
      </el-select>
      学院：
      <el-select v-model="studetTypeCode"  style="width: 15%" filterable placeholder="请选择">
        <el-option
          v-for="item in list"
          :key="item.companyName"
          :label="item.companyName"
          :value="item.companyName"
        />
      </el-select>
      专业：
      <el-select v-model="studetTypeCode"  style="width: 15%" filterable placeholder="请选择">
        <el-option
          v-for="item in list"
          :key="item.companyName"
          :label="item.companyName"
          :value="item.companyName"
        />
      </el-select>

    </div>
    <div style="text-align: center;">
        培养方案列表
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="培养方案名称"
        width="550">
      </el-table-column>
      <el-table-column
        prop="address"
        label="所属专业"
        width="230">
      </el-table-column>
      <el-table-column
        prop="address"
        label="起始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="详细"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
