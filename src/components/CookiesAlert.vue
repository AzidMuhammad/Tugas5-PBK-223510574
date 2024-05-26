<template>
  <div v-if="isCookiesVisible" class="fixed max-w-md p-6 mx-auto bg-white border border-gray-400 dark:bg-white right-2 bottom-2 dark:border-gray-700 rounded-lg">
    <h6 class="font-semibold text-black dark:text-black text-sm font-sans">Anda melakukan penelusuran dari indonesia</h6>

    <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 font-sans">Ingin menyimpan lokasi anda?<a href="#" class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">Let me choose</a>. </p>
    
    <div class="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button class="text-md border text-gray-800 dark:border-gray-700 dark:text-black font-medium rounded-full px-4 py-2.5 duration-300 transition-colors focus:outline-none" @click="hideCookiesAlert">
            Tidak
        </button>

        <button class="text-md border text-white dark:border-gray-700 bg-black dark:text-white font-medium rounded-full px-4 py-2.5 duration-300 transition-colors focus:outline-none cursor-pointer" @click="hideCookiesAlert">
            Ya
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'CookiesAlert',
  data() {
    return {
      isCookiesVisible: true
    };
  },
  methods: {
    hideCookiesAlert() {
      this.isCookiesVisible = false;
    }
  }
};
</script>
