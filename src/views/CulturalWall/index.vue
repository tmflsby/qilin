<template>
  <div class="cultural-wall">
    <el-image class="top-logo" :src="topLogo" fit="fill" lazy></el-image>
    <div class="main-container">
      <div class="container-left">
        <div class="images">
          <el-image class="images1" :src="images1" fit="fill" lazy></el-image>
          <el-image class="images2" :src="images2" fit="fill" lazy></el-image>
          <el-image class="images3" :src="images3" fit="fill" lazy></el-image>
        </div>
      </div>
      <div class="container-right">
        <div class="title">
          <div class="zh">文化墙建设</div>
          <div class="en">CULTURAL WALL</div>
        </div>
        <div class="content">
          <p>
            文化墙是企业、单位集文化精髓、职工精神风貌、团队精神风采、开拓创新、奉献社会精神光华等文化元素于一体的文化展示窗口或者文化展示平面。
            文化墙包括LOGO墙、标志墙、文化标语宣传墙等。它在于表达企业或单位的实力，让人留下深刻印象及提高知名度的一种直观方式。
          </p>
          <p>
            构建“文化墙”，不仅可以将企业或单位文化以平面化、规范化、特色化形象展现在人们面前。在视觉上形成冲击力，在心灵上产生共鸣，
            还使企业或单位文化精髓在潜移默化中深植于人们心中，真正实现企业或单位文化全员学习。
          </p>
          <p>
            文化墙是企业文化的良好载体与立体演示，有一种潜移默化、润物无声的文化传播感染力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topLogo from '@/assets/images/culturalWall/top-logo.png'
import images1 from '@/assets/images/culturalWall/1.png'
import images2 from '@/assets/images/culturalWall/2.png'
import images3 from '@/assets/images/culturalWall/3.png'
export default {
  name: 'CulturalWall',
  data() {
    return {
      topLogo,
      images1,
      images2,
      images3
    }
  }
}
</script>

<style lang="scss" scoped>
.cultural-wall {
  width: 100%;
  height: 1000px;
  background: #F1F1F2;
  .top-logo {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }
  .main-container {
    width: 1200px;
    height: 500px;
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
        padding: 25px;
        .images1, .images2 {
          margin-bottom: 10px;
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
