<template />

<script>
import { showCultivate } from '@/api/user'
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      console.log(this.$route.params.id)
      showCultivate({ 'id': this.$route.params.id }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
