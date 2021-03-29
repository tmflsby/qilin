<template>
  <div class="shop-sign">
    <div class="main-container">
      <div class="container-left">
        <div class="title">
          <div class="zh">店招门头设计方案</div>
          <div class="en">SHOP SIGN & DESIGN SCHEME</div>
        </div>
        <div class="content">
          <p>
            1.烤漆玻璃：烤漆玻璃英文名称：Paintglass烤漆玻璃，是一种极富表现力的装饰玻璃品种，可以通过喷涂、滚涂、丝网印刷或者淋涂等方式来体现。
          </p>
          <p>
            2.大理石：大理石原指产于云南省大理的白色带有黑色花纹的石灰岩。
          </p>
          <p>
            3.有机板：概述有机片，PS板，PS有机板，PS板材，灯光片，灯箱板，GPPS板，苯板，彩板等，还有一些地方干脆叫有机玻璃。
          </p>
          <p>
            4.铝塑板：由涂覆、挤压、粘接方法制成的两面为铝板，中间层为聚乙烯的三层复合板。表面一般有涂层，主要作为装饰材料。
          </p>
          <p>
            5.防腐木：是采用防腐剂渗透并固化木材以后使木材具有防止腐朽菌腐朽功能、生物侵害功能的木材。
          </p>
          <p>
            6.铝塑复合板是经过了化学处理的铝板为基本材料，然后表层再涂抹一层材料，可以被用于大楼外墙、旧楼改造、室内墙壁装修以及门头设计使用。铝塑复合板是多层的材料复合而成，分为上下层高纯度的铝合金板，中间是没有毒的低密度聚乙烯(PE)芯板。三维扣板是一种新型的广告材料，立体美观安装方便耐腐，成为广告装饰行业的新材料。
          </p>
        </div>
      </div>
      <div class="container-right">
        <el-image class="images" :src="images1" fit="fill" lazy></el-image>
      </div>
    </div>
  </div>
</template>

<script>
import images1 from '@/assets/images/shopSign/1.png'
export default {
  name: 'ShopSign',
  data() {
    return {
      images1
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-sign {
  width: 100%;
  height: 700px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .container-left {
      width: 700px;
      height: 100%;
      float: left;
      padding-top: 75px;
      .title {
        font-size: 25px;
        color: #E71B20;
        position: relative;
        height: 75px;
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
    .container-right {
      width: 250px;
      height: 100%;
      float: left;
      padding-top: 50px;
    }
  }
}
</style>
