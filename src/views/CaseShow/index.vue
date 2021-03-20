<template>
  <div class="case-show">
    <div class="main-container">
      <div class="container-left">
        <div class="header">
          <div class="title">
            <div>案例展示</div>
          </div>
          <div class="des">
            店招门头 灯箱 显示屏定制
          </div>
        </div>
        <div class="image">
          <img src="../../assets/images/caseShow/1.png" alt="">
        </div>
      </div>
      <div class="container-mid">
        <div class="header">
          <div class="title">
            <div>案例展示</div>
          </div>
          <div class="des">
            图文 印刷 包装 UV 文化墙
          </div>
        </div>
        <div class="image">
          <img src="../../assets/images/caseShow/2.png" alt="">
        </div>
      </div>
      <div class="container-right">
        <div class="header">
          <div class="title">
            <div>案例展示</div>
          </div>
          <div class="des">
            舞台 舞美 木工特装
          </div>
        </div>
        <div class="image">
          <img src="../../assets/images/caseShow/3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseShow'
}
</script>

<style lang="scss" scoped>
.case-show {
  width: 100%;
  height: 900px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    height: 800px;
    padding-top: 50px;
    margin: 0 auto;
    .container-left, .container-mid, .container-right {
      width: 400px;
      background: #DCDDDD;
      padding-bottom: 20px;
      color: #939393;
      float: left;
      .header {
        background: #3E3A39;
        height: 50px;
        position: relative;
        .title {
          width: 325px;
          height: 30px;
          position: absolute;
          top: 10px;
          left: 35px;
          border-bottom-color: #595857;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          div {
            background: #595857;
            height: 30px;
            width: 100px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .des {
          position: absolute;
          top: 20px;
          left: 165px;
        }
      }
      .image {
        width: 300px;
        height: 700px;
        margin: 20px auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .container-mid {
      border-left-width: 2px;
      border-right-width: 2px;
      border-left-style: dashed;
      border-right-style: dashed;
      border-left-color: #C5C5C6;
      border-right-color: #C5C5C6;
      box-sizing: border-box;
    }
  }
}
</style>
