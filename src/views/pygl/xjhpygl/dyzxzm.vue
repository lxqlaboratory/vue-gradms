<template>
  <div>
    <el-button type="primary"  class="filter-item" @click="download()">打印在学证明</el-button>
  </div>
</template>

<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import { downloadzxzm } from '@/api/showPersonCultivate'
export default {
  methods:{
      fetchData(){
        downloadzxzm({ 'schemeId': this.$route.params.schemeId }, (err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        }).then(res => {
            res.data.requiredList[0].type = '必修课'
            this.requiredList = res.data.requiredList
            this.requiredListLength = this.requiredList.length
            res.data.optionalList[0].type = '选修课'
            this.optionalList = res.data.optionalList
            this.optionalListLength = this.optionalList.length
            res.data.buxiuList[0].type = '补修课'
            this.buxiuList = res.data.buxiuList
            this.buxiuListLength = this.buxiuList.length
          }
        )
      }
  }

}
</script>

<style scoped>

</style>
