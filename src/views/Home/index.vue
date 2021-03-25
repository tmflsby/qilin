<template>
  <div class="home">
    <div class="top-logo">
      <el-image class="top-logo-bg" :src="topLogoBg" fit="fill" lazy></el-image>
      <el-image class="top-logo-left" :src="topLogoLeft" fit="fill" lazy></el-image>
      <el-image class="top-logo-right" :src="topLogoRight" fit="fill" lazy></el-image>
    </div>
    <div class="main-container">
      <div class="container-left">
        <div class="title">
          <div class="title-logo">
            <img src="../../assets/images/home/image-title.png" alt="">
          </div>
          <div>我们能做什么？</div>
        </div>
        <div class="images">
          <el-image class="images1" :src="images1" fit="fill" lazy :preview-src-list="srcList"></el-image>
          <el-image class="images2" :src="images2" fit="fill" lazy></el-image>
          <el-image class="images3" :src="images3" fit="fill" lazy></el-image>
          <el-image class="images4" :src="images4" fit="fill" lazy></el-image>
          <el-image class="images5" :src="images5" fit="fill" lazy></el-image>
        </div>
      </div>
      <div class="container-right">
        <div class="left"></div>
        <div class="right">
          <router-link class="title" to="/contact" tag="div">INDUSTRY NEWS 行业动态</router-link>
          <div class="content">
            <div class="des">
              <router-link class="title" to="/industrynews/1" tag="div">一、为什么一个好的企业要做VI系统</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/2" tag="div">二、制作发光字的优势有哪些</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/3" tag="div">三、为什么迷你字那么贵</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/4" tag="div">四、水晶字在广告行业的作用</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/5" tag="div">五、外漏发光字对比其他发光字的优点</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/6" tag="div">六、楼顶大字安装注意细节</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/industrynews/7" tag="div">七、企业形象墙设计需要注意什么</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topLogoBg from '@/assets/images/home/top-logo.png'
import topLogoLeft from '@/assets/images/home/top-logo-left.png'
import topLogoRight from '@/assets/images/home/top-logo-right.png'
import images1 from '@/assets/images/home/1.png'
import images2 from '@/assets/images/home/2.png'
import images3 from '@/assets/images/home/3.png'
import images4 from '@/assets/images/home/4.png'
import images5 from '@/assets/images/home/5.png'
export default {
  name: 'Home',
  data() {
    return {
      topLogoBg,
      topLogoLeft,
      topLogoRight,
      images1,
      images2,
      images3,
      images4,
      images5,
      srcList: [images1]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 900px;
  background: #F1F1F2;
  .top-logo {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    position: relative;
    .top-logo-bg {
      width: 100%;
      height: 100%;
    }
    .top-logo-left {
      position: absolute;
      top: 80px;
      left: 80px;
      width: 450px;
      height: 100px;
    }
    .top-logo-right {
      position: absolute;
      top: 50px;
      right: 125px;
      width: 400px;
      height: 40px;
    }
  }
  .main-container {
    width: 1200px;
    height: 500px;
    margin: 50px auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    .container-left {
      width: 700px;
      height: 100%;
      float: left;
      padding: 20px;
      box-sizing: border-box;
      .title {
        width: 100%;
        height: 25px;
        font-size: 25px;
        font-weight: bold;
        line-height: 25px;
        .title-logo {
          width: 150px;
          height: 25px;
          float: left;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .images {
        width: 100%;
        height: 400px;
        padding: 20px 0;
        .images1 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          float: left;
        }
        .images2 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          float: left;
        }
        .images3 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          float: left;
        }
        .images4 {
          width: 410px;
          height: 200px;
          padding-right: 10px;
          padding-top: 10px;
          float: left;
        }
        .images5 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          padding-top: 10px;
          float: left;
        }
      }
    }
    .container-right {
      width: 500px;
      height: 100%;
      float: right;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      .left {
        width: 10px;
        height: 400px;
        position: absolute;
        top: 65px;
        left: 0;
        border-left-color: #231916;
        border-right-color: #231916;
        border-left-width: 4px;
        border-right-width: 2px;
        border-left-style: solid;
        border-right-style: solid;
        box-sizing: border-box;
        margin-right: 20px;
      }
      .right {
        .title {
          font-size: 25px;
          color: #E71B20;
          margin-bottom: 15px;
          margin-left: 20px;
          cursor: pointer;
        }
        .content {
          .des {
            margin: 25px 5px;
            .title {
              font-size: 18px;
              font-weight: bold;
              color: #251C19;
              padding-bottom: 5px;
              border-bottom-width: 1px;
              border-bottom-style: dashed;
            }
          }
        }
      }
    }
  }
}
</style>
