<template >
<div class="app-container">

</div>
</template>

<script>
  import { thesisReviewAndReplyInfoShow } from '@/api/thesisReviewAndReplyInfoShow'
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
      thesisReviewAndReplyInfoShow().then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
