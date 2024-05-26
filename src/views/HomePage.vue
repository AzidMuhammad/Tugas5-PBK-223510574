<template>
    <div>
      <div class="container">
        <div class="image-container woman" @click="goToWomanPage">
          <img src="../assets/image/woman-model.jpg">
          <div class="text">Wanita</div>
        </div>
        <div class="image-container man" @click="goToManPage">
          <img src="../assets/image/man-model.jpg">
          <div class="text">Pria</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToWomanPage() {
        this.$router.push({ name: 'WomanPage' });
      },
      goToManPage() {
        this.$router.push({ name: 'ManPage' });
      }
    }
  };
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    cursor: pointer;
  }
  
  .image-container {
    position: relative;
    width: 50%;
    height: 100%;
  }
  
  .image-container img {
    width: 100%;
    height: 130%;
    object-fit: cover;
    -webkit-filter: contrast(1.2) brightness(0.9);
    filter: contrast(1.2) brightness(0.9);
  }
  
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -45%) rotate(-90deg);
    font-size: 72px;
    color: whitesmoke;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    padding: 0.2em;
    text-shadow: 
      -0.2px -0.2px 0 #000,  
      0.2px -0.2px 0 #000,
      -0.2px 0.2px 0 #000,
      0.2px 0.2px 0 #000;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  