<template >
  <div class="app-container">

  </div>
</template>

<script>
  import { degreeGradApplyInit } from '@/api/degreeGradApply'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeGradApplyInit().then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
