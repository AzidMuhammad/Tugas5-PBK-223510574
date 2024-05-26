<template>
    <div class="hero-image">
        <img src="@/assets/image/woman-hero.webp" alt="">
    </div>
  </template>
  
  <script>
  export default {
    name: 'WomanHero'
  };
  </script>
  
  <style scoped>
  .hero-image {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  img {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
  
  </style>
  