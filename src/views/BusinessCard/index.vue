<template>
  <div class="business-card">
    <div class="main-container">
      <div class="container-left">
        <el-image class="images" :src="images1" fit="fill" lazy></el-image>
      </div>
      <div class="container-right">
        <div class="title">
          <div class="zh">企业画册设计方案</div>
          <div class="en">BUSINESS CARD</div>
        </div>
        <div class="content">
          <p>
            产品宣扬画册是各种企业都必弗成少的产品介绍和宣扬品，由于产品宣扬画册可以更好的对相关产品的信息全面的介绍，也可以经过这类介绍起到对产品的宣扬和推广的感化，
            所以近年来，各种的企业都对产品画册有着较大的需求，抵挡一些设计和印刷质量好的印刷设计公司，每一年都承接大批的产品画册生产制作定单，对于产品宣扬画册设计公司来讲，要为用户前进产品设计的时间，怎么去表白设计要素呢？
          </p>
          <p>
            产品宣扬画册设计公司更多的时间会在设计凸起宣扬的主题，宣扬主题是产品画册设计的重要头绪，优秀的企业画册都有好的主题，提炼主题是产品画册设计的第一步。主题是对品牌发展策略、企业形象策略、营销策略的提炼和畅通领悟。
            对产品宣扬画册设计合理的结构和分配也是适当重要的，它偶尔常常抉择着产品画册设计可否合理，然后影响产品画册可否受人迎候，优秀的企业画册必定有一个好的“导演”，这个导演就是对产品画册的编列，有好架构的产品画册，就有了节拍，然后提升产品画册的制作质量。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import images1 from '@/assets/images/businessCard/1.png'
export default {
  name: 'BusinessCard',
  data() {
    return {
      images1
    }
  }
}
</script>

<style lang="scss" scoped>
.business-card {
  width: 100%;
  height: 750px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .container-left {
      width: 250px;
      height: 100%;
      float: left;
      padding-top: 50px;
    }
    .container-right {
      width: 650px;
      height: 100%;
      float: left;
      padding-top: 75px;
      .title {
        font-size: 25px;
        color: #E71B20;
        position: relative;
        height: 100px;
        letter-spacing: 5px;
        margin-bottom: 5px;
        .zh {
          position: absolute;
          width: 400px;
          top: 0;
          left: 0;
        }
        .en {
          position: absolute;
          width: calc(100% - 40px);
          top: 30px;
          left: 30px;
          border-top-style: solid;
          border-top-width: 1px;
          border-top-color: #E71B20;
        }
      }
      .content {
        p {
          text-align: left;
          text-indent: 36px;
          letter-spacing: 2px;
          line-height: 25px;
          color: rgba(0, 0, 0, .8);
        }
      }
    }
  }
}
</style>
