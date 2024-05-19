<template>
  <header class="header py-3 sm:py-5 text-black/80 bg-white shadow-md">
    <div class="container">
      <!-- nav -->
      <div class="nav flex items-center justify-between">
        <!-- logo -->
        <div class="logo w-32 sm:w-40">
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="logo" class="w-full h-full object-cover">
          </router-link>
        </div>

        <!-- menu -->
        <ul class="menu hidden sm:flex items-center justify-center gap-10">
          <li v-for="link in menuArray" :key="link" class="text-xl">
            <router-link :to="link.route" class="link">{{ link.name }}</router-link>
          </li>
        </ul>

        <!-- modal-btn -->
        <button class="btn bg-brand-color text-white py-3 px-8 rounded-full hidden sm:block"
          @click="openModal">
          Оставить заявку
        </button>

        <!-- burger -->
        <div class="burger block sm:hidden" @click="openMenu">
          <i class="fa-solid fa-bars-staggered text-3xl sm:text-2xl text-black"></i>
        </div>

        <!-- mobile-menu -->
        <Transition name="fade">
          <div class="mobile-menu fixed left-0 top-0 z-[999] w-full h-screen bg-black/90" v-if="isMenuOpened">
            <!-- <div class="bg-black/90 w-full h-full"> -->
            <div class="close flex items-center justify-end mt-9 mr-10" @click="closeMenu">
              <i class="fa-solid fa-xmark text-white text-4xl"></i>
            </div>
            <ul class="menu flex items-center justify-center flex-col gap-10 text-white text-xl mt-20">
              <li v-for="link in menuArray" :key="link">
                <router-link :to="link.route">{{ link.name }}</router-link>
              </li>
              <button class="btn bg-brand-color text-white py-3 px-8 rounded-full mt-20"
                @click="openModal">
                Оставить заявку
              </button>
            </ul>
            <!-- </div> -->
          </div>
        </Transition>
      </div>
    </div>
  </header>

  <Transition name="fade">
    <div class="modal-bg w-full h-full bg-black/70 fixed left-0 top-0 z-10 flex items-center justify-center px-5"
      v-if="isModalOpened">
      <TheModal @action="closeModal" />
    </div>
  </Transition>
</template>

<script>
import TheModal from './TheModal.vue'
export default {
  components: {
    TheModal
  },
  data() {
    return {
      isMenuOpened: false,
      isModalOpened: false,
      menuArray: [
        {
          name: 'Главная',
          route: '/'
        },
        {
          name: 'Каталог',
          route: '/catalog'
        },
      ]
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpened = !this.isMenuOpened
      document.querySelector('body').classList.add("stop-scroll")
    },
    closeMenu() {
      this.isMenuOpened = !this.isMenuOpened
      document.querySelector('body').classList.remove("stop-scroll")
    },
    openModal() {
      this.isMenuOpened = false
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
.menu .link {
  transition: 0.2s;
  padding-bottom: 1.5px;
}

.menu .link:hover {
  border-bottom: 3px solid #D7150E;
}

a.router-link-exact-active {
  border-bottom: 3px solid #D7150E;
  padding-bottom: 3px;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>