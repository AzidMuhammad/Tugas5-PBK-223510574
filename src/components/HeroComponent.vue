<template>
    <div class="hero-video">
      <video autoplay muted loop>
        <source src="@/assets/video/man-hero.mp4" type="video/mp4">
      </video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroComponent'
  };
  </script>
  
  <style scoped>
  .hero-video {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  video {
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
  