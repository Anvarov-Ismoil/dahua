<template>
    <HeroSection />
    <AboutSection />
    <ProductsSection />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from '../components/AboutSection.vue';
import ProductsSection from '../components/ProductsSection.vue';

export default {
  components: {
    TheHeader,
    HeroSection,
    AboutSection,
    ProductsSection,
  }
}
</script>