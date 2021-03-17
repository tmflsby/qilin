<template>
  <div class="home">
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide class="slide-1">
          <img src="./images/1.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-2">
          <img src="./images/2.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="./images/3.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-4">
          <img src="./images/4.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1">
          <img src="./images/1.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-2">
          <img src="./images/2.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="./images/3.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-4">
          <img src="./images/4.jpg" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Home',
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptionTop: {
        direction: 'vertical',
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
      swiperOptionThumbs: {
        direction: 'vertical',
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .thumb-example {
    height: 380px;
    width: 660px;
    border-radius: 4px;
    background-color: gray;
    .gallery-top {
      height: 100%;
      width: 520px;
      float: left;
      img {
        width: 480px;
        height: 360px;
        margin: 10px;
        border-radius: 4px;
      }
    }
    .gallery-thumbs {
      height: 100%;
      width: 140px;
      box-sizing: border-box;
      float: right;
      img {
        width: 120px;
        height: 90px;
        margin: 0 10px;
        border-radius: 4px;
      }
    }
    .swiper {
      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
      &.gallery-thumbs .swiper-slide {
        width: 100%;
        height: 25%;
      }
    }
  }
}
</style>
