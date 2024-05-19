<template>
  <section class="license my-10">
    <div class="container">
      <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl mb-10 lg:mb-20">Мы работаем
        законно</h2>
        <div class="swiper-license swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="image">
                <img src="../assets/images/l1.png" alt="">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="image">
                <img src="../assets/images/l1.png" alt="">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="image">
                <img src="../assets/images/l1.png" alt="">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="image">
                <img src="../assets/images/l1.png" alt="">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="image">
                <img src="../assets/images/l1.png" alt="">
              </div>
            </div>
          </div>


          <!-- <div class="swiper-button-prev">
            <button class="btn btn-prev bg-brand-color w-20 h-10 relative z-10">prev</button>
          </div>
          <div class="swiper-button-next">
            <button class="btn btn-next bg-brand-color w-20 h-10 relative z-10">next</button>
          </div> -->
        </div>
      <!-- <div class="swiper-license"> -->
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import { register } from 'swiper/element/bundle';
register();
import Swiper from 'swiper';

export default {
  components: {
    Swiper,
  },
  mounted() {
    new Swiper('.swiper-license.swiper-container', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      },
    });
  },
}
</script>

<style scoped>
.license .container .swiper-container {
  overflow-x: hidden;
  display: flex;
  align-items: center;
}

.license .container .swiper-container .swiper-wrapper {
  display: flex;
  align-items: center;
}

.license .container .swiper-container .swiper-wrapper .swiper-slide .image {
  width: 200px;
  margin: 0 auto;
}

.license .container .swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>