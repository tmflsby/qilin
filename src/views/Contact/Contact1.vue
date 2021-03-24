<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-left">
            <h3>一、店招门头的重要性</h3>
            <p>
              为什么说必须要重视门头店铺招牌？假如把店铺拟人化，门头就是一个人的外在，好坏成败就在这一瞬间，这是别人对你的接触第一点。
              按照一般人的逻辑就是你外表不好看了可能就没有想要了解的想法了。所以一定必须要重视门头店铺招牌，小编整理下面几点供大家参考：
            </p>
            <p>
              1、拥有自己的品牌印象，增加回头率：
            </p>
            <p>
              大多数的店铺经营内容都是有限的，主要的客源可能就是来自周围小区或者办公楼等。最好是店铺个性化，有自己独特的经营内容，抓住周围顾客的同时也能带动顾客的朋友来。这样就大大增加的回头率，从而达到店铺的盈利。
            </p>
            <p>
              2、品牌店铺招牌风格设计：
            </p>
            <p>
              首先要确认适合自己品牌店铺风格的招牌，也需要考虑所在地的环境，是那种风格的。在结合自己店铺的风格最终确定设计稿。
            </p>
            <p>
              3、店铺招牌的制作方向：
            </p>
            <p>
              ①字体大小的设计，<br>②材质的选择，<br>③发光与否，<br>④字体颜色的选择等等因素都是要考虑进来的。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact1'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 500px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    height: 1450px;
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
