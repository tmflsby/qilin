<template>
  <div class="contact">
    <div class="main-container">
      <div class="content">
        <h3>一、为什么一个好的企业要做VI系统</h3>
        <p>
          VI俗称视觉识别系统，视觉识别系统是运用系统的、统一的视觉符号系统。视觉识别是静态的识别符号具体化、视觉化的传达形式，项目最多，层面最广，效果更直接。视觉识别系统属于CIS中的VI，用完整、体系的视觉传达体系，将企业理念、文化特质、服务内容、企业规范等抽象语意转换为具体符号的概念，塑造出独特的企业形象。视觉识别系统分为基本要素系统和应用要素系统两方面。基本要素系统主要包括：企业名称、企业标志、标准字、标准色、象征图案、宣传口语、市场行销报告书等。应用系统主要包括：办公事务用品、生产设备、建筑环境、产品包装、广告媒体、交通工具、衣着制服、旗帜、招牌、标识牌、橱窗、陈列展示等。视觉识别（VI）在CIS系统大众所接受，具有主导的地位。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryNews1'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 250px;
  background: #F1F1F2;
  .main-container {
    width: 1200px;
    height: 250px;
    margin: 50px auto;
    padding: 0 20px;
    display: flex;
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      h3 {
        text-align: center;
      }
      p {
        text-align: left;
        text-indent: 40px;
        letter-spacing: 2px;
        line-height: 25px;
        color: rgba(0, 0, 0, .8);
      }
    }
  }
}
</style>
