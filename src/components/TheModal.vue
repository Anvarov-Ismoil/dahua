<template>
  <div class="modal w-full max-w-[750px] bg-white mx-auto py-3 p-5 rounded-md shadow-md">

    <!-- modal-content -->
    <div class="modal-content" v-if="!isInfoSent">
      <!-- close -->
      <div class="close flex items-center justify-end">
        <h3 class="text-3xl font-semibold text-center flex-grow">Отправить данные</h3>
        <button class="text-black/80 text-4xl" @click="$emit('action')">
          <i class="fa-solid fa-xmark "></i>
        </button>
      </div>
      <!-- content -->
      <div class="content">
        <form class="form my-5 sm:my-10 w-full sm:w-3/4 mx-auto" @submit.prevent="sendData">
          <div class="input-box flex flex-col justify-center">
            <p class="text-xl" :class="{ 'text-red-500': isEmpty && !modalData.name }">Ваше имя</p>
            <input id="name" type="text"
              class="border-b border-black py-1 pl-1 pr-5 mt-3 text-xl focus:outline-black/70" v-model="modalData.name">
            <label for="name" class="text-lg text-red-600 mb-2 opacity-0"
              :class="{ 'opacity-100': isEmpty && !modalData.name }">
              Поле не должно быть пустым!
            </label>
          </div>
          <div class="input-box flex flex-col justify-center">
            <p class="text-xl" :class="{ 'text-red-500': isEmpty && !modalData.number }">Ваш номер</p>
            <input id="number" type="text" ref="numberInput"
              class="border-b border-black py-1 pl-1 pr-5 mt-3 text-xl focus:outline-black/70"
              v-model="modalData.number">
            <label for="number" class="text-lg text-red-600 mb-2 opacity-0"
              :class="{ 'opacity-100': isEmpty && !modalData.number }">
              Поле не должно быть пустым!
            </label>
          </div>
          <div class="btn-box mt-3 md:mt-7">
            <button class="btn border-2 border-brand-color hover:bg-brand-color text-brand-color hover:text-white transition-all rounded-full
            text-xl py-3 px-10 w-full" @click="sendData">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- thx -->
    <div class="thx" v-else>
      <!-- close -->
      <div class="close flex items-center justify-end">
        <!-- <h3 class="text-3xl font-semibold text-center flex-grow">Отправить данные</h3> -->
        <button class="text-black/80 text-4xl" @click="$emit('action')">
          <i class="fa-solid fa-xmark "></i>
        </button>
      </div>
      <!-- content -->
      <div class="text mt-5 mb-10">
        <h4 class="text-2xl text-center my-1">Ваша информация отправлена.</h4>
        <h4 class="text-2xl text-center my-1">Мы свяжемся с вами в ближайшее время!</h4>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      modalData: {
        name: '',
        number: '+998 '
      },
      isEmpty: false,
      isInfoSent: false,
    }
  },
  computed: {
    isNumberComplete() {
      const digitsOnly = this.modalData.number.replace(/\D/g, '');
      return digitsOnly.length === 12; 
    }
  },
  methods: {
    async sendData() {
      if (this.modalData.name === '' || !this.isNumberComplete) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        const chatId = 596968325; // Directly using the chat ID from the provided response
        await this.sendMessageToTelegram(chatId); // Send message to Telegram
        this.isInfoSent = true;
      }
    },
    async sendMessageToTelegram(chatId) {
      const token = '8073225287:AAFxU9OeXRQd5CWPCtAwvc5aCWs0jLX8SjA';
      const message = `**Контакты от Dahua:**\nИмя: **${this.modalData.name}**\nНомер: **${this.modalData.number}**`;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
          })
        });
        const data = await response.json();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    setMask(event) {
      let matrix = '+998 ## ### ## ##';
      let i = 0;
      const val = this.modalData.number.replace(/\D/g, '');

      event.target.value = matrix.replace(/(?!\+)./g, function (a) {
        return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      this.modalData.number = event.target.value;
    }
  },
  mounted() {
    this.setMask({ target: this.$refs.numberInput });
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>