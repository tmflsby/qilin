<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-right">
            <h3>六、楼顶大字安装注意细节</h3>
            <p>
              1、现场勘察。一般来说现场勘察包括施工地的测量、建筑物的构造等，主要是为制作大型楼顶发光字提供方便，美诺心都是提前了解施工点的具体情况，以免后期安装出现意外事件。当然，有时候并不惜要去现场，主要是针对那些知道自己现场尺寸的客户，一般我们会要求对方告知施工点建筑物的建造材质，或者直接将现场具体情形以照片发给我们即可。
            </p>
            <p>
              2、我们知道，一般做大型楼顶发光字都是先在厂部加工好，然后现场拼接。值得注意的是，发光字的走线要均匀，型号统一，变压器一般安装在中间，保证电流稳定，发光均匀。 3、安装时要注意天气，一般雨雪天气不易安装，尤其是大型楼顶发光字安装，天气原因不用说，焊接的时候也容易出事故，因此，我们在安装之前，都会和客户特别说明的。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact3'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 300px;
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
