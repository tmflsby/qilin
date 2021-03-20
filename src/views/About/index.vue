<template>
  <div class="about">
    <div class="top-logo">
      <img src="../../assets/images/about/top-logo.png" alt="">
      <div class="top-logo-right">
        <img src="../../assets/images/about/top-logo-right.png" alt="">
      </div>
    </div>
    <div class="main-container">
      <div class="container-left">
        <div class="images">
          <div class="images1">
            <img src="../../assets/images/about/1.png" alt="">
          </div>
          <div class="images2">
            <img src="../../assets/images/about/2.png" alt="">
          </div>
          <div class="images3">
            <img src="../../assets/images/about/3.png" alt="">
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="title">
          <div class="zh">关于麒麟</div>
          <div class="en">ABOUT US</div>
        </div>
        <div class="content">
          <p>
            麒麟广告传媒成立于2021年，坐落于富平。是一家专注于广告策划设计、企业、机关、学校文化墙建设，
            店招门头等设计、制作、安装的综合性广告服务供应商。
          </p>
          <p>
            公司专注于从市场和消费者的角度出发，糅合商业战略、品牌管理、市场营销、公共关系及信息传播等学科，
            运用市场调研及品牌顾问模式为客户提供全面而深入的品牌策略咨询及设计服务，帮助企业建立与众不同的卓越品牌。
          </p>
          <p>
            目前，麒麟已与多家富平知名企业建立长期友好的合作关系。麒麟已形成了一套完善、成熟的设计营销推广体系人员，并在此基础上建立起完整的设计、推广等全程服务，
            以丰富的市场实践经验和强大的设计营销队伍，为客户提供包括市场分析、设计策略制定及实施的全程设计推广服务。
          </p>
          <h3>我们的愿景</h3>
          <p>
            通过持续探索广告领域的前沿理论，不断强化业务技能并提升专业服务水准，以积极热忱的敬业精神和细致周到的服务协助
            客户打造美好的品牌并提升品牌价值，与客户共同成长、共创美好未来。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 950px;
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
    .top-logo-right {
      position: absolute;
      top: 75px;
      right: 200px;
      width: 400px;
      height: 50px;
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        padding: 25px;
        .images1 {
          width: 200px;
          height: 100px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images2 {
          width: 150px;
          height: 100px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .images3 {
          width: 200px;
          height: 100px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
          }
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
          letter-spacing: 2px;
          line-height: 25px;
          color: rgba(0, 0, 0, .8);
        }
      }
    }
  }
}
</style>

