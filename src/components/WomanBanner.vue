<template>
    <div class="hero-video">
        <img src="@/assets/image/woman-hero.webp" alt="">
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroVideo'
  };
  </script>
  
  <style scoped>
  .hero-video {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
  }
  
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
  
  </style>
  