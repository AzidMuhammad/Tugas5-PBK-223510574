<template>
  <div id="app">
    <router-view />
    <CookiesAlert />
  </div>
</template>

<script>

import CookiesAlert from './components/CookiesAlert.vue';
import { RouterView } from 'vue-router';

export default ({
  name: 'App',
  components: {
    RouterView,
    CookiesAlert
  }
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
