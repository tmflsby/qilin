<template>
  <div class="home">
    <div class="top-logo">
      <img src="../../assets/images/home/top-logo.png" alt="">
      <div class="top-logo-left">
        <img src="../../assets/images/home/top-logo-left.png" alt="">
      </div>
      <div class="top-logo-right">
        <img src="../../assets/images/home/top-logo-right.png" alt="">
      </div>
    </div>
    <div class="main-container">
      <div class="container-left">
        <div class="title">
          <div class="title-logo">
            <img src="../../assets/images/home/image-title.png" alt="">
          </div>
          <div>我们是做什么？</div>
        </div>
        <div class="images">
          <div class="images1">
            <img src="../../assets/images/home/1.png" alt="">
          </div>
          <div class="images2">
            <img src="../../assets/images/home/2.png" alt="">
          </div>
          <div class="images3">
            <img src="../../assets/images/home/3.png" alt="">
          </div>
          <div class="images4">
            <img src="../../assets/images/home/4.png" alt="">
          </div>
          <div class="images5">
            <img src="../../assets/images/home/5.png" alt="">
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="left"></div>
        <div class="right">
          <router-link class="title" to="/contact" tag="div">INDUSTRY NEWS 行业动态</router-link>
          <div class="content">
            <div class="des">
              <router-link class="title" to="/contact/1" tag="div">一、店招门头的重要性</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/contact/2" tag="div">二、广告宣传的重要性</router-link>
            </div>
            <div class="des">
              <router-link class="title" to="/contact/3" tag="div">三、标识标牌导视系统</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
    img {
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
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images2 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images3 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images4 {
          width: 410px;
          height: 200px;
          padding-right: 10px;
          padding-top: 10px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images5 {
          width: 200px;
          height: 200px;
          padding-right: 10px;
          padding-top: 10px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
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
