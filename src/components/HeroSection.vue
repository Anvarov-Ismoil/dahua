<template>
  <section class="hero">
    <!-- <TheHeader /> -->
    <!-- <TheHeader class="relative z-10" /> -->
    <div class="hero-swiper swiper-container">
      <div class="swiper-wrapper">
        <!-- slide -->
        <div class="swiper-slide">
          <div class="text-content text-white text-center">
            <h3 class="uptitle text-2xl lg:text-2xl">
              <span class="text-brand-color">Безопасность</span> – вещь высшего уровня
            </h3>
            <h1 class="title text-4xl lg:text-6xl mt-4 mb-14 lg:w-[75%] lg:mx-auto">Закрепите свое место сверху донизу</h1>
            <button class="btn bg-brand-color text-white py-4 px-10 rounded-full hover:bg-white hover:text-brand-color transition-all" 
            @click="$router.push({ name: 'catalog' })">
              Посмотреть товары
            </button>
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <div class="text-content text-white text-center">
            <h3 class="uptitle text-xl lg:text-2xl">
              <span class="text-brand-color">Безопасность</span> – вещь высшего уровня
            </h3>
            <h1 class="title text-4xl lg:text-6xl mt-3 mb-14 lg:w-[75%] mx-auto">Закрепите свое место сверху донизу</h1>
            <button class="btn bg-brand-color text-white py-4 px-10 rounded-full hover:bg-white hover:text-brand-color transition-all" 
            @click="$router.push({ name: 'catalog' })">
              Посмотреть товары
            </button>
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <div class="text-content text-white text-center">
            <h3 class="uptitle text-xl lg:text-2xl">
              <span class="text-brand-color">Безопасность</span> – вещь высшего уровня
            </h3>
            <h1 class="title text-4xl lg:text-6xl mt-3 mb-14 lg:w-[75%] mx-auto">Закрепите свое место сверху донизу</h1>
            <button class="btn bg-brand-color text-white py-4 px-10 rounded-full hover:bg-white hover:text-brand-color transition-all" 
            @click="$router.push({ name: 'catalog' })">
              Посмотреть товары
            </button>
          </div>
        </div>
        <!-- slide -->
        <div class="swiper-slide">
          <div class="text-content text-white text-center">
            <h3 class="uptitle text-xl lg:text-2xl">
              <span class="text-brand-color">Безопасность</span> – вещь высшего уровня
            </h3>
            <h1 class="title text-4xl lg:text-6xl mt-3 mb-14 lg:w-[75%] mx-auto">Закрепите свое место сверху донизу</h1>
            <button class="btn bg-brand-color text-white py-4 px-10 rounded-full hover:bg-white hover:text-brand-color transition-all" 
            @click="$router.push({ name: 'catalog' })">
              Посмотреть товары
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="text-content">
    <h3 class="uptitle">Безопасность – вещь высшего уровня</h3>
    <h1 class="title">Закрепите свое место сверху донизу</h1>
    <button class="btn">Посмотреть товары</button>
  </div> -->
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
  /* position: absolute;
  top: 0;
  left: 0;
   z-index: -2 !important; */
  /* width: 100%; */
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

.swiper-wrapper .swiper-slide:first-child {
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../assets/images/banner1.jpg') no-repeat top / cover;
}

.swiper-wrapper .swiper-slide:nth-child(2) {
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../assets/images/banner2.jpg') no-repeat center / cover;
}

.swiper-wrapper .swiper-slide:nth-child(3) {
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../assets/images/banner3.jpg') no-repeat center / cover;
}

.swiper-wrapper .swiper-slide:nth-child(4) {
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../assets/images/banner4.png') no-repeat center / cover;
}
</style>