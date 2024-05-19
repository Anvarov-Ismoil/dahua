<template>
  <section class="product">
    <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl my-5 lg:mb-16">
      Нашы продукты
    </h2>

    <div class="container">
      <!-- product -->
      <div class="product-div flex items-start justify-center flex-wrap">

        <!-- image -->
        <div class="image-div w-[200px] md:w-[40%] text-center">
          <img :src="oneProduct.image" :alt="oneProduct.name" class="mx-auto object-cover">
        </div>
        <!-- content -->
        <div class="text-content w-full sm:w-[70%] md:w-[50%]">

          <h3 class="text-2xl lg:text-4xl font-semibold my-5 md:mb-5">
            {{ oneProduct.name }}
          </h3>
          <p>
            {{ oneProduct.description }}
          </p>
        </div>
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

  <!-- <ProductsSection /> -->
</template>

<script>
import ProductsSection from '@/components/ProductsSection.vue';
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ProductsSection
  },
  data() {
    return {
      productId: parseInt(this.$route.params.id),
      productDetails: ''
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    oneProduct() {
      this.getProducts.forEach(category => {
        category.products.forEach(item => {
          if (item.id === this.productId) {
            this.productDetails = item;
          }
        });
      });
      return this.productDetails;
    },
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  async mounted() {
    await this.fetchProducts();
  }
}
</script>

<style scoped>
.header-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://fsgroup.co.za/wp-content/uploads/2022/02/FSG-Security-Cameras.png') no-repeat center / cover;
}
</style>