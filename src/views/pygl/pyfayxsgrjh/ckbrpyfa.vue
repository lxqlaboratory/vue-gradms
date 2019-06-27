<template>
  <div>
    <el-button type="text" @click="showCourseSetting">附：本培养方案的课程设置 </el-button><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      courseTablelist: '',
      error: null,
      schemeId: '',
      requiredList: [],
      optionalList: [],
      buxiuList: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    showCourseSetting(schemeId) {
      schemeId = this.schemeId
      this.$router.push({ name: 'pyfadkcsz', params: { schemeId }})
    }
  }
}
</script>

<style scoped>

</style>
