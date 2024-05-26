<template>
  <div id="app">
    <router-view />
    <CookiesAlert />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CookiesAlert from './components/CookiesAlert.vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    CookiesAlert
  }
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
