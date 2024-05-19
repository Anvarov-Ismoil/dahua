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
        <h2 class="title text-4xl md:text-5xl my-3 md:my-5 font-semibold">
          Безопаснее общество, Качественнее жизнь
        </h2>
        <p>Zhejiang Dahua Technology Co., Ltd. (Dahua Technology) – мировой лидер среди поставщиков решений и услуг в
          сфере интеллектуальных систем видеонаблюдения и Интернета вещей (AIoT). Следуя своей корпоративной стратегии
          Dahua Think#, Dahua Technology концентрируется на двух ключевых аспектах своей деятельности – муниципальном и
          корпоративном. Компания последовательно развивает свои технологические стратегии, включающие интеллектуальные
          цифровые платформы AloT и IoT.<br><br>
          Штат компании насчитывает более 23 000 сотрудников, из которых более 50% заняты в области исследований и
          разработок. Компания привержена технологическим инновациям и инвестирует в исследования и разработки,
          вкладывая в них ежегодно около 10% выручки от продаж.</p>
        <button class="btn bg-brand-color text-white text-xl py-4 px-10 mt-5 rounded-full" @click="openModal">
          Оставить заявку
        </button>
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