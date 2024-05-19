<template>
  <div class="card w-full max-w-[280px] p-5 shadow-lg relative rounded-lg overflow-hidden cursor-pointer"
    @click="$emit('action')">
    <div class="image-block py-5 w-[200px] mx-auto md:w-full">
      <img :src="product.image" alt="product-image" class="w-full h-full object-cover transition-all duration-300">
    </div>
    <div class="text-content mt-5">
      <p class="name text-lg text-center font-medium capitalize">{{ product.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: [Object, String],
      required: true
    }
  }
}
</script>

<style scoped>
.card::after {
  content: 'Посмотреть';
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  opacity: 0;
}

.card:hover::after {
  opacity: 1;
}

.card:hover .image-block img {
  transform: scale(1.15);
}
</style>