<template>
  <div class="navbar">


<!--    <breadcrumb class="breadcrumb-container" />-->

    <div class="right-menu">
      <img style="margin:-8px 3% 0 3%;height: 48px;vertical-align: middle" src="@/assets/login/logo.png">
      <span style="font-size: 20px;">{{ $t('login.manaegerTitle') }}</span>
      <lang-select style="position: absolute;right: 15%;top:-2px" />
      <el-dropdown class="avatar-container" style="position: absolute;right: 1%;top:-2px" trigger="click">
        <div class="avatar-wrapper" >
          <img src="http://service.sdu.edu.cn/tp_up/resource/image/common/user2.jpg" class="user-avatar" style="vertical-align: middle;">
          <span style="font-size: 16px;color: white">徐鹏涛</span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown" style="margin-top: 0px">
          <router-link to="/dashboard">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import LangSelect from '@/components/LangSelect'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    LangSelect
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  overflow: hidden;
  position: relative;
  background: #a50001;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);



  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: left;
    height: 100%;
    line-height: 64px;
    color: #fff;

    .setting-icon{
      height: 48px;
    }


    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: center;

      &.hover-effect {
        /*cursor: pointer;*/
        transition: background .3s;

        &:hover {
          background: rgba(214, 180, 78, 0.91)
        }
      }
    }

    .avatar-container {
      margin-right: 0px;
      &:hover{
        background: #590305;
      }
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 0px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;

        &:hover{
          background: #590305;
        }
        .user-avatar {
          /*cursor: pointer;*/
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }

}
</style>
