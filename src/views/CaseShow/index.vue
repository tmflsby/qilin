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
        <div class="content">
          <el-image :src="left_1" :preview-src-list="leftSrcList" fit="fill" lazy></el-image>
          <el-image :src="left_2" :preview-src-list="leftSrcList" fit="fill" lazy></el-image>
          <el-image :src="left_3" :preview-src-list="leftSrcList" fit="fill" lazy></el-image>
          <el-image :src="left_4" :preview-src-list="leftSrcList" fit="fill" lazy></el-image>
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
        <div class="content">
          <el-image :src="mid_1" :preview-src-list="midSrcList" fit="fill" lazy></el-image>
          <el-image :src="mid_2" :preview-src-list="midSrcList" fit="fill" lazy></el-image>
          <el-image :src="mid_3" :preview-src-list="midSrcList" fit="fill" lazy></el-image>
          <el-image :src="mid_4" :preview-src-list="midSrcList" fit="fill" lazy></el-image>
          <el-image :src="mid_5" :preview-src-list="midSrcList" fit="fill" lazy></el-image>
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
        <div class="content">
          <el-image :src="right_1" :preview-src-list="rightSrcList" fit="fill" lazy style="margin-bottom: 10px;"></el-image>
          <el-image :src="right_2" :preview-src-list="rightSrcList" fit="fill" lazy style="margin-bottom: 10px;"></el-image>
          <el-image :src="right_3" :preview-src-list="rightSrcList" fit="fill" lazy style="margin-bottom: 10px;"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import left_1 from '@/assets/images/caseShow/left_1.jpg'
import left_2 from '@/assets/images/caseShow/left_2.jpg'
import left_3 from '@/assets/images/caseShow/left_3.jpg'
import left_4 from '@/assets/images/caseShow/left_4.jpg'
import mid_1 from '@/assets/images/caseShow/mid_1.jpg'
import mid_2 from '@/assets/images/caseShow/mid_2.jpg'
import mid_3 from '@/assets/images/caseShow/mid_3.jpg'
import mid_4 from '@/assets/images/caseShow/mid_4.jpg'
import mid_5 from '@/assets/images/caseShow/mid_5.jpg'
import right_1 from '@/assets/images/caseShow/right_1.jpg'
import right_2 from '@/assets/images/caseShow/right_2.jpg'
import right_3 from '@/assets/images/caseShow/right_3.jpg'
export default {
  name: 'CaseShow',
  data() {
    return {
      left_1,
      left_2,
      left_3,
      left_4,
      leftSrcList: [left_1, left_2, left_3, left_4],
      mid_1,
      mid_2,
      mid_3,
      mid_4,
      mid_5,
      midSrcList: [mid_1, mid_2, mid_3, mid_4, mid_5],
      right_1,
      right_2,
      right_3,
      rightSrcList: [right_1, right_2, right_3]
    }
  }
}
</script>

<style lang="scss" scoped>
.case-show {
  width: 100%;
  height: 900px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
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
      .content {
        width: 300px;
        height: 700px;
        margin: 20px auto;
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
