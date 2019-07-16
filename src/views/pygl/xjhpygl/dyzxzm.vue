<template>
  <div class="container">
    <el-button type="primary" icon="el-icon-download" class="filter-item" @click="upload()">打印在学证明</el-button>
    <div name="downloadfile" onclick="upload()">DownLoader</div>
  </div>
</template>

<script>
  import { uploadFile } from '@/api/uploadFile'
export default {
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods:{
    upload(){
      let a = document.createElement('a');
      uploadFile().then(res => {
        console.log(file)
        var elemIF = document.createElement('iframe')
        elemIF.src =  file

        //window.location.href = urls;


        var elemIF = document.createElement('iframe')
        elemIF.src = 'user/downloadExcel?snapshotTime=' + formatDate(new Date(row.snapshotTime), 'yyyy-MM-dd hh:mm')
        elemIF.style.display = 'none'
        document.body.appendChild(elemIF)

      })
    },


  }

}
</script>

<style scoped>

</style>
