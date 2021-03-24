<template>
  <div class="contact">
    <div class="main-container">
      <div class="title">
        <div class="content">
          <div class="content-mid">
            <h3>二、广告宣传的重要性</h3>
            <p>
              如今，市场竞争日益激烈，“酒香也怕巷子深”要靠广告敲开门。广告宣传是企业在营销过程中的一个重要的环节，是向消费者推荐自己的不可或缺的模式，在传递经济信息方面，是最迅速、最节省、最有效的手段之一。
            </p>
            <p>
              “怕上火，喝王老吉！”此广告语把王老吉这个品牌深深的印在了消费者的心中，大家只要听到上火这两个字，自然而然的就想到了王老吉，亲朋好友之间甚至会相互调侃：上火了，去喝瓶王老吉！王老吉的品牌宣传效果如此之好，"怕上火，喝王老吉"这句广告语功不可没。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact2'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 300px;
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
