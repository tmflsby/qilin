<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-right">
            <h3>三、为什么迷你字那么贵</h3>
            <p>
              迷你发光字是广告行业流行的一种斜边字，它立体感强，发光均匀没暗点，颜色艳丽美观，而且产品生产效率高。
            </p>
            <p>
              1、先作图，把需要加工的迷你字图纸，用TYPE3软件画出来，编好正面、背面、及底板加工的刀路。然后把后处理程序输入电脑，准备加工。
            </p>
            <p>
              2、然后，加工迷你字外壳的背面，深度根据迷你字刀具的角度及发光效果来决定。
            </p>
            <p>
              3、其次，把背面的槽铣好后，贴上不粘胶，反过来，加工迷你字正面。
            </p>
            <p>
              4、然后，根据外壳的大小，加工相对应大小尺寸的底板（装LED灯）
            </p>
            <p>
              5、接着，迷你字的外壳，就可以拿去油漆房喷漆，要喷3-4层漆。
            </p>
            <p>
              6、最后，底板完成后，就可以装灯，外壳喷漆完了就可以拼接上去，测试发光效果，就完成了。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryNews3'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 400px;
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
