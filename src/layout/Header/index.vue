<template>
  <div class="header">
    <el-image class="header-top" :src="headerTop" fit="fill" lazy></el-image>
    <div class="header-nav">
      <el-image class="logo-bg" :src="headerBg" fit="fill" lazy></el-image>
      <el-image class="logo" :src="logo" fit="fill" lazy></el-image>
      <div class="nav">
        <router-link to="/home">
          <el-button type="primary">
            <div>首页</div>
            <div>HOME</div>
          </el-button>
        </router-link>
        <el-dropdown>
          <el-button type="primary">
            <div>特色产品</div>
            <div>PRODUCT</div>
          </el-button>
          <el-dropdown-menu slot="dropdown" placement="bottom">
            <router-link tag="div" to="/culturalwall">
              <el-dropdown-item>文化墙</el-dropdown-item>
            </router-link>
            <router-link tag="div" to="/shopsign">
              <el-dropdown-item>店招门头</el-dropdown-item>
            </router-link>
            <router-link tag="div" to="/businessCard">
              <el-dropdown-item>画册印刷</el-dropdown-item>
            </router-link>
            <router-link tag="div" to="/luminouswords">
              <el-dropdown-item>发光字</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link to="/about">
          <el-button type="primary">
            <div>关于我们</div>
            <div>ABOUT</div>
          </el-button>
        </router-link>
        <router-link to="/caseshow">
          <el-button type="primary">
            <div>案例展示</div>
            <div>CASE SHOW</div>
          </el-button>
        </router-link>
<!--        <router-link to="/contact">-->
<!--          <el-button type="primary">-->
<!--            <div>联系我们</div>-->
<!--            <div>CONTACT</div>-->
<!--          </el-button>-->
<!--        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import headerBg from '@/assets/images/header-bg.jpg'
import headerTop from '@/assets/images/header-top.png'
import logo from '@/assets/images/header-logo.png'
export default {
  name: 'Header',
  data() {
    return {
      headerBg,
      headerTop,
      logo
    }
  }
}
</script>

<style lang="scss">
.el-dropdown-menu {
  width: 100px;
  background: #C9C9CA !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}
.popper__arrow {
  display: none !important;
}
.el-dropdown-menu__item {
  display: flex !important;
  justify-content: space-around !important;
}
</style>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 150px;
  background: #FFFEFE;
  .header-top {
    width: 100%;
    height: 50px;
  }
  .header-nav {
    width: 100%;
    height: 100px;
    border-bottom-color: #163460;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    position: relative;
    .logo-bg {
      width: 100%;
      height: 100px;
    }
    .logo {
      width: 300px;
      height: 80px;
      position: absolute;
      top: 10px;
      left: 80px;
    }
    .nav {
      position: absolute;
      right: 75px;
      top: 30px;
      width: 500px;
      display: flex;
      justify-content: space-around;
      .el-button {
        width: 100px;
        color: #EBE9EE;
        margin: 0;
        padding: 10px 0;
        div:first-child {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
