<template>
  <section class="numbers my-20">
    <div
      class="container">
      <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl my-10 text-black">
        Наша статистика
      </h2>
      
      <div class="numbers-wrapper flex items-center justify-center flex-wrap sm:gap-y-5 md:gap-10 lg:gap-20 xl:gap-32">
        <!-- item -->
        <div class="item text-center w-[220px] md:w-auto py-5 lg:py-10" v-for="(item, index) in numbersArray" :key="item">
          <!-- icon -->
          <div class="icon w-24 h-24 rounded-full flex items-center justify-center mx-auto bg-brand-color">
            <i :class="item.icon" class="text-white text-5xl"></i>
          </div>
          <p class="text-4xl font-bold my-3 text-black/80">{{ item.number }}</p>
          <p class="text-black">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numbersArray: [
        {
          icon: 'fa-solid fa-chart-pie',
          number: "№ 2",
          text: 'доля мирового рынка'
        },
        {
          icon: 'fa-solid fa-users',
          number: '23,000+',
          text: 'все сотрудники'
        },
        {
          icon: 'fa-solid fa-city',
          number: '67+',
          text: 'зарубежные филиалы'
        },
        {
          icon: 'fa-solid fa-globe',
          number: '180+',
          text: 'распространение по странам'
        },
      ]
    }
  },
}
</script>