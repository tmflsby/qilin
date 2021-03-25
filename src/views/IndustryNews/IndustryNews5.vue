<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-right">
            <h3>五、外漏发光字对比其他发光字的优点</h3>
            <p>
              外露发光字与吸塑字相比，具有较高的性价比。经分析，有如下特点：
            </p>
            <p>
              1、外露发光字由于灯是外露的，它不受其它东西的影响，因此，亮度要比吸塑发光字要高。
            </p>
            <p>
              2、成本相对较低，常规的吸塑字也称为灯箱字，它是由两套字和里面的灯构成的。因此，成本相对较高。而LED外发光字它可以由铁皮或者不锈钢做一套字，然后通过打孔装灯，成本节省了。
            </p>
            <p>
              3、发光均匀，由于吸塑字受笔画大小的局限，普通模组装不下去的笔画就没有办法，因此，会出现一个字亮度不一的地方。而外发光字是装LED单颗灯上去，因此，LED外发光字不存在这种现象（除非灯坏了）。
            </p>
            <p>
              4、易维护，外露字的灯珠是可以从外面拆出来的，而吸塑灯箱字侧需要将字拆出来。对于高楼大厦上面，拆开字维修好又装回去，需要一笔很大的成本，如需要搭架子或者租用吊篮才能做到。
            </p>
            <p>
              5、大小限制，一般外露字不用担心字的大小，而吸塑字则受吸塑机的限制。太大的字就需要拼接，这样的话非常影响美观，有一定的接痕。
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
  height: 450px;
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
