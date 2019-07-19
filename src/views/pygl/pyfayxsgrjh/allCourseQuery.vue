<template>
<div class="app-container">
  <!--第一行-->
  <el-row>
    <el-col :span="4" class="colstyle1" style="padding-top: 10px;">
      <label class="title">学院</label>
    </el-col>
    <el-col :span="8" class="colstyle2">
      <el-select style="width: 70%" size="mini" placeholder="请选择">
        <!--<el-option
          v-for="item in statusArr"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>-->
      </el-select>
    </el-col>
    <el-col :span="4" class="colstyle3" style="padding-top: 10px;">
      <label class="title">选课学期</label>
    </el-col>
    <el-col :span="8" class="colstyle4">
      <el-select style="width: 70%" size="mini" placeholder="请选择">
        <!--<el-option
          v-for="item in statusArr"
          :key="item.code"
          :label="item.name"
          :value="item.code">
        </el-option>-->
      </el-select>
    </el-col>
  </el-row>
  <!--第二行-->
  <el-row style="border-bottom: 1px solid black">
    <el-col :span="4" class="colstyle1" style="padding-top: 10px;" >
      <label class="title">课程号	</label>
    </el-col>
    <el-col :span="8" class="colstyle2">
      <el-input style="width: 70%" size="mini" />
    </el-col>
    <el-col :span="4" class="colstyle1" style="padding-top: 10px;" >
      <label class="title">课程名</label>
    </el-col>
    <el-col :span="8" class="colstyle2">
      <el-input style="width: 70%" size="mini" />
    </el-col>
  </el-row>
  <!--第三行-->
  <el-row style="padding-top:10px;border: 0px">
    <el-button type="primary" class="allBtn" style="width: 25%">查询 </el-button>
  </el-row>

</div>
</template>

<script>
  export default {
    name: 'allCourseQuery'
  }
</script>

<style scoped>
  .container{
    padding: 100px;
  }
  .el-row {
    border: 1px solid black;
    border-bottom:1px solid #FFF;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
  }
  .colstyle1,.colstyle2,.colstyle3,.colstyle4{
    height: 100%;
    font-size: 14px;
    padding-top: 5px;
  }
  .colstyle1,.colstyle2,.colstyle3{
    border-right: 1px solid black;
  }
  .colstyle2,.colstyle4{
    color: #9b0d14;
  }
  .colstyle1,.colstyle3{
    font-weight:bold;
  }
  el-input{
    border-radius: 0px;
  }
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
</style>
