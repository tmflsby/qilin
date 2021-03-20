<template>
  <div class="footer">
    <div class="footer-logo">
      <div class="logo">
        <img src="../../assets/images/footer-logo.png" alt="">
      </div>
    </div>
    <div class="address-email">
      <div class="left"></div>
      <div class="right">
        <div class="title">ADDRESS & EMAIL</div>
        <div class="des">
          <div class="address">地址：渭南市富平县望湖路37号（供电分公司对面）</div>
          <div class="email">邮箱：3464466095@qq.com</div>
          <div class="phone">电话：0913-8211578</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 150px;
  background: #DDDDDD;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .footer-logo {
    width: 600px;
    .logo {
      width: 600px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .address-email {
    width: 600px;
    height: 100px;
    padding-top: 20px;
    position: relative;
    .left {
      position: absolute;
      width: 10px;
      height: 80px;
      background: #3E3A39;
    }
    .right {
      width: 500px;
      position: absolute;
      left: 50px;
      .title {
        font-weight: bold;
      }
      .des {
        margin-top: 15px;
        font-size: 14px;
      }
    }
  }
}
</style>
