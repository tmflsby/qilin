<template>
  <div class="about">
    <div class="top-logo">
      <el-image class="top-logo-bg" :src="topLogoBg" fit="fill" lazy></el-image>
      <el-image class="top-logo-right" :src="topLogoRight" fit="fill" lazy></el-image>
    </div>
    <div class="main-container">
      <div class="container-left">
        <div class="images">
          <div class="mask"></div>
          <el-image class="about-image" :src="aboutImage" fit="fill" lazy></el-image>
          <el-image class="images1" :src="images1" fit="fill" lazy></el-image>
          <el-image class="images2" :src="images2" fit="fill" lazy></el-image>
          <el-image class="images3" :src="images3" fit="fill" lazy></el-image>
        </div>
      </div>
      <div class="container-right">
        <div class="title">
          <div class="zh">关于麒麟</div>
          <div class="en">ABOUT US</div>
        </div>
        <div class="content">
          <p>
            麒麟广告传媒成立于2021年，座落于富平县城区。
            是一家专注于广告策划设计、企业、机关、学校文化墙建设，店招门头等设计、制作、安装的综合性广告服务公司。
          </p>
          <p>
            公司专注于从市场和消费者的角度出发，糅合商业战略、品牌管理、市场营销、公共关系及信息传播等学科，
            运用市场调研及品牌顾问模式，为客户提供全面而深入的品牌策略咨询及设计服务，帮助企业建立与众不同的卓越品牌。
          </p>
          <p>
            目前，麒麟已与多家富平企事业单位建立长期友好合作关系。拥有了一套完善、成熟的设计营销推广体系人员，并在此基础上建立起完整的设计、
            推广等全程服务，以丰富的市场实践经验和强大的设计营销队伍，为客户提供包括市场分析、设计策略制定及实施的全程设计推广服务。
          </p>
          <br>
          <br>
          <br>
          <br>
          <h3>我们的愿景</h3>
          <p>
            通过持续探索广告领域的前沿理论，不断强化业务技能并提升专业服务水准，以积极热忱的敬业精神和细致周到的服务，
            协助客户打造品牌并提升品牌价值，与客户共同成长，共创美好未来。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topLogoBg from '@/assets/images/about/top-logo.png'
import topLogoRight from '@/assets/images/about/top-logo-right.png'
import images1 from '@/assets/images/about/1.png'
import images2 from '@/assets/images/about/2.png'
import images3 from '@/assets/images/about/3.png'
import aboutImage from '@/assets/images/about/about.jpg'
export default {
  name: 'About',
  data() {
    return {
      topLogoBg,
      topLogoRight,
      images1,
      images2,
      images3,
      aboutImage
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 1100px;
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
    .top-logo-right {
      position: absolute;
      top: 50px;
      right: 125px;
      width: 400px;
      height: 40px;
    }
  }
  .main-container {
    width: 1000px;
    height: 600px;
    margin: 50px auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    .container-left {
      width: 300px;
      height: 100%;
      float: left;
      .images {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        padding: 25px;
        .images1, .images2, .about-image {
          margin-bottom: 10px;
        }
        .mask {
          z-index: 10;
          position: absolute;
          top: 118px;
          right: 0;
          width: 0;
          height: 0;
          border-bottom: 65px solid #F1F1F2;
          border-left: 75px solid transparent;
        }
      }
    }
    .container-right {
      width: 600px;
      height: 100%;
      float: left;
      .title {
        font-size: 25px;
        color: #E71B20;
        position: relative;
        height: 60px;
        letter-spacing: 5px;
        margin-bottom: 5px;
        .zh {
          position: absolute;
          width: 200px;
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

