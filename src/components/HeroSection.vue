<template>
  <section class="hero">
    <div class="hero-swiper swiper-container">
      <div class="swiper-wrapper">
        <!-- slide -->
        <div class="swiper-slide">
          <!-- image-desktop -->
          <div class="image-desktop hidden md:block">
            <img src="@/assets/images/banner1.jpg" alt="#">
          </div>
          <!-- image-mobile -->
          <div class="image-mobile block md:hidden">
            <img src="@/assets/images/banner1-mobile.png" alt="">
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <!-- image-desktop -->
          <div class="image-desktop hidden md:block">
            <img src="@/assets/images/banner2.jpg" alt="#">
          </div>
          <!-- image-mobile -->
          <div class="image-mobile block md:hidden">
            <img src="@/assets/images/banner2-mobile.jpg" alt="">
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <!-- image-desktop -->
          <div class="image-desktop hidden md:block">
            <img src="@/assets/images/banner3.jpg" alt="#">
          </div>
          <!-- image-mobile -->
          <div class="image-mobile block md:hidden">
            <img src="@/assets/images/banner3-mobile.png" alt="">
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <!-- image-desktop -->
          <div class="image-desktop hidden md:block">
            <img src="@/assets/images/banner4.jpg" alt="#">
          </div>
          <!-- image-mobile -->
          <div class="image-mobile block md:hidden">
            <img src="@/assets/images/banner4-mobile.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from './TheHeader.vue';
import { register } from 'swiper/element/bundle';
register();
import Swiper from 'swiper';

export default {
  components: {
    Swiper,
    TheHeader
  },
  mounted() {
    new Swiper('.hero-swiper', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      effect: 'fade',
      loop: true,
    });
  },
}
</script>

<style scoped>
.hero {
  position: relative;
}

.hero .swiper-container {
  overflow-x: hidden;
  display: flex;
  align-items: center;
}

.hero .swiper-container .swiper-wrapper {
  display: flex;
  align-items: center;
}

.hero .swiper-container .swiper-wrapper .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>