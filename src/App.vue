<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <TheHeader v-if="showHeader" /> -->
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      showHeader: true
    };
  },
  watch: {
    '$route'(to, from) {
      if (to.name === 'home') {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    }
  }
}
</script>