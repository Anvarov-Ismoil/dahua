<template>
  <section class="numbers">
    <div
      class="container bg-gray-100">
      <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl py-5 text-black">
        Мы в цифрах
      </h2>
      
      <div class="numbers-wrapper flex items-center justify-center flex-wrap gap-5 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-32">
        <!-- item -->
        <div class="item text-center w-44 py-5 lg:py-10" v-for="(item, index) in numbersArray" :key="item">
          <i :class="item.icon" class="text-brand-color text-4xl"></i>
          <p class="text-4xl font-bold mt-3 text-black/80">{{ item.number }}</p>
          <p>{{ item.text }}</p>
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
          icon: 'fa-regular fa-thumbs-up',
          number: "15+",
          text: 'лет опыта работы'
        },
        {
          icon: 'fa-solid fa-users',
          number: '100000+',
          text: 'доволные клиенты'
        },
        {
          icon: 'fa-solid fa-clipboard-list',
          number: '200000+',
          text: 'установленные камеры'
        },
        {
          icon: 'fa-solid fa-globe',
          number: '12',
          text: 'филиалы в областях'
        },
      ]
    }
  },
}
</script>

<!-- <template>
  <section class="numbers">
    <div class="container bg-gray-100 flex items-center justify-center gap-40">
      item
      <div class="item text-center py-10" v-for="(item, index) in numbersArray" :key="item">
        <i :class="item.icon" class="text-brand-color text-4xl"></i>
        <p class="text-4xl font-bold mt-3 text-black/80">{{ displayedNumbers[index] }}</p>
        <p>{{ item.text }}</p>
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
          icon: 'fa-regular fa-thumbs-up',
          number: 15,
          text: 'лет опыта работы'
        },
        {
          icon: 'fa-solid fa-users',
          number: 100000,
          text: 'доволные клиенты'
        },
        {
          icon: 'fa-solid fa-clipboard-list',
          number: 200000,
          text: 'установленные камеры'
        },
      ]
    }
  },
  computed: {
    displayedNumbers() {
      return this.numbersArray.map(item => {
        let count = 0;
        const targetNumber = item.number;
        const formattedNumber = new Intl.NumberFormat('en-US').format(count) + "+";
        const interval = setInterval(() => {
          if (count < targetNumber) {
            count += Math.ceil(targetNumber / 100);
            // Update the displayed number
            item.number = count;
          } else {
            clearInterval(interval);
          }
        }, 10);
        return formattedNumber;
      });
    }
  }
}
</script> -->