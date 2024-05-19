<template>
  <section class="products mb-10 lg:mb-10">
    <div class="container">
      <!-- products -->
      <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl mb-10">Товары дня</h2>
        <div
          class="products-wrapper flex items-stretch justify-center flex-wrap gap-1 md:gap-3 lg:gap-5">
          <productCard v-for="product in filteredProducts" :key="product.id" :product="product"
            @action="$router.push({ name: 'details', params: { id: product.id } })" />
        </div>
      
      <!-- btn -->
      <div class="btn-div flex items-center justify-center mt-10">
        <button class="btn bg-brand-color text-white text-xl py-4 px-16 mt-5 w-full mx-auto sm:w-auto rounded-full"
          @click="$router.push({ name: 'catalog' })">
          Все товары
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import productCard from "../components/catalog/productCard.vue"
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    productCard,
    TheHeader
  },
  data() {
    return {
      activeCategory: 1
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    filteredProducts() {
      const allProducts = this.getProducts.flatMap(cat => cat.products);
      for (let i = allProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
      }
      return allProducts.slice(0, 4);
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>