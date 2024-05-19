<template>
  <section class="about my-10 lg:my-14">
    <div class="container flex items-center justify-between flex-wrap">
      <!-- left -->
      <div class="left w-full md:w-[70%] md:mx-auto lg:w-[40%] relative">
        <img src="../assets/images/about-img.jpg" alt="image" class="w-full h-full object-cover">
      </div>
      <!-- right -->
      <div class="right w-full lg:w-[50%] mt-3 md:mt-5">
        <h3 class="uptitle text-2xl md:text-3xl text-brand-color">О Нас</h3>
        <h2 class="title text-4xl md:text-6xl my-3 md:my-5 font-semibold">
          Смотри вперед, достигай большего
        </h2>
        <p>Компания Hikvision стремится обслуживать различные отрасли промышленности с помощью передовых технологий машинного восприятия, искусственного интеллекта, и больших данных, лидируя в сфере AIoT, с помощью комплексных технологий машинного восприятия, мы помогаем людям лучше взаимодействовать с окружающим миром. Mы стремимся дать каждому человеку возможность насладиться лучшим будущим, создавая более удобный интеллектуальный мир в условиях безопасности. </p>
        <button class="btn bg-brand-color text-white text-xl py-4 px-10 mt-5 rounded-full" @click="openModal">Оставить
          заявку</button>
      </div>
    </div>
  </section>

  <Transition name="fade">
    <div class="modal-bg w-full h-full bg-black/70 fixed left-0 top-0 z-10 flex items-center justify-center px-5"
      v-if="isModalOpened">
      <TheModal @action="closeModal" />
    </div>
  </Transition>
</template>

<script>
import TheModal from './TheModal.vue';

export default {
  components: {
    TheModal,
  },
  data() {
    return {
      isModalOpened: false,
    }
  },
  methods: {
    openModal() {
      this.isModalOpened = true
      document.body.classList.add('stop-scroll')
    },
    closeModal() {
      this.isModalOpened = false
      document.body.classList.remove('stop-scroll')
    }
  }
}
</script>

<style scoped>
/* .about .container .left::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: -70px;
  top: -40px;
  z-index: -1;
  background: rgba(13, 178, 132, 0.5);
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>