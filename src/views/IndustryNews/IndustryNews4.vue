<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-right">
            <h3>四、水晶字在广告行业的作用</h3>
            <p>
              水晶字的特点：
            </p>
            <p>
              1.导光性强
            </p>
            <p>
              2.有水晶质感且具有特殊的颜色饱和度；
            </p>
            <p>
              3.质量轻，运输安装方便；
            </p>
            <p>
              4.可塑性强，表现形式多样。
            </p>
            <p>
              水晶字的上色方式：
            </p>
            <p>
              A.原有色板：制作时直接选用彩色亚克力板，即可做出五颜六色的水晶字。
            </p>
            <p>
              B.不锈钢板烤漆：根据字形切割出对应的不锈钢板，然后烤漆上色，最后粘贴在水晶字表面。
            </p>
            <p>
              C.写真粘贴：对应字形裁切写真，粘贴在水晶字表面。
            </p>
            <p>
              水晶字的应用范围:
            </p>
            <p>
              水晶字常用于专卖店展柜眉头字、公司logo墙、标牌广告、门头店招、等标识导向系统的制作。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryNews4'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 550px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    height: 400px;
    margin: 50px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      text-align: center;
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      .content-left, .content-mid, .content-right {
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
        p {
          text-indent: 40px;
          text-align: left;
          letter-spacing: 2px;
          line-height: 25px;
          color: rgba(0, 0, 0, .8);
        }
      }
    }
  }
}
</style>
