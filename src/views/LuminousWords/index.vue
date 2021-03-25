<template>
  <div class="luminous-words">
    <div class="main-container">
      <div class="container-left">
        <el-image class="images" :src="images1" fit="fill" lazy></el-image>
      </div>
      <div class="container-right">
        <div class="title">
          <div class="zh">发光字</div>
          <div class="en">LUMINOUS WORDS</div>
        </div>
        <div class="content">
          <p>一.亚克力发光字</p>
          <p>
            三面亚克力通体发光字，正面以及侧面都是亚克力，底板为PVC围边字：材料为亚克力(进口板和国产板)面板，厚度PVC材料围边，字内芯铺LED光源，优点是夜间发亮、表面光泽、颜色鲜亮、防水、最重要的是节能，缺点就是字不能做得太小，适合室内外，门店招牌、企业大型宣传楼宇字标。
          </p>
          <p>二.吸塑发光字</p>
          <p>
            材料功能与平面发光字相似，只是字的笔画为凸起的有形面，优点更显档次、结实、耐磨损、防水、节能。适合各类户外广告字，而且整块吸塑面板的更适合于专卖店招牌及形象墙。
          </p>
          <p>三.灯箱字</p>
          <p>
            综合了不锈钢及铝字的工艺，最大的突破是文字自身发光，晚间照明无需要借助外打光，具体做法是把文字笔画镂空，换以透光亚克力板材，在文字内腔装上冷光源3.3(日光管)或霓虹灯，这样它在白天就可以利用色彩的自然对比效果，而晚上就像是自身发光，周边墙体又无外照明引起的光斑，文字效果相当明显，但缺点是成本较高，维护也略复杂。
          </p>
          <p>四.LED发光字</p>
          <p>
            LED是近年来刚刚快速发展的一个标识材料，可以替代霓虹灯，可用于饭店、商场、便利店、露天广场和大楼的灯箱招牌及发光字内。它具有高亮度，长寿命(可长达15万小时免维护)，高效率、安装方便、性能可靠，性价比高等优点，使之广泛应用。
          </p>
          <p>五.外露发光字</p>
          <p>
            平面和围边与普通发光字一样，唯一不同就是光源，它是由小的圆点LED灯珠，铺满字的面板上，优点是不管白天和黑夜都能发出强耀的光源，且节能，其它特点与亚克力发光字一样，适合应用于门店招牌、KTV、夜总会、酒店、宾馆等娱乐场所招牌。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import images1 from '@/assets/images/luminousWords/1.png'
export default {
  name: 'LuminousWords',
  data() {
    return {
      images1
    }
  }
}
</script>

<style lang="scss" scoped>
.luminous-words {
  width: 100%;
  height: 900px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    height: 800px;
    padding-top: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .container-left {
      width: 250px;
      height: 100%;
      float: left;
      padding-top: 25px;
      .images {
        width: 250px;
        height: 700px;
        margin-bottom: 10px;
      }
    }
    .container-right {
      width: 800px;
      height: 100%;
      float: left;
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
          letter-spacing: 2px;
          line-height: 25px;
          color: rgba(0, 0, 0, .8);
        }
      }
    }
  }
}
</style>
