<template>
  <section class="catalog mb-10 lg:mb-10">
    <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl my-5 lg:mb-16">
      Нашы продукты
    </h2>

    <div class="container">
      <!-- content -->
      <div class="content flex items-start justify-center lg:justify-start flex-wrap lg:flex-nowrap gap-5">
        <!-- category -->
        <div class="category w-full md:w-[75%] lg:w-[23%]">
          <h4 class="text-2xl mb-5 font-semibold text-brand-color">Категории</h4>
          <ul class="flex items-center justify-start flex-wrap">
            <li v-for="category in getProducts" :key="category.id" class="flex items-center w-full">
              <button class="button pl-1 text-[18px] border-b border-black/20 w-full py-3 hover:bg-black/10"
                :class="{ 'bg-black/10': activeCategory === category.id }" @click="setActiveCategory(category.id)">
                {{ category.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- products -->
        <div class="products w-full sm:w-full md:w-[80%] lg:w-[75%] mt-5 sm:mt-0">
          <h4 class="text-2xl mb-5 ml-4 font-semibold text-brand-color">Товары</h4>
          <div
            class="products-wrapper flex items-stretch justify-center sm:justify-start flex-wrap gap-1 md:gap-3 lg:gap-5">
            <productCard v-for="product in filteredProducts" :key="product.id" :product="product"
              @action="$router.push({ name: 'details', params: { id: product.id } })" />
          </div>
        </div>
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
      if (this.activeCategory) {
        const category = this.getProducts.find(cat => cat.id === this.activeCategory);
        return category ? category.products : [];
      } else {
        return this.getProducts.flatMap(cat => cat.products);
      }
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style scoped>
.header-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://xsafeassets.airtel.in/wp-content/uploads/2022/03/Frame-28.jpg') no-repeat center / cover;
}
</style>