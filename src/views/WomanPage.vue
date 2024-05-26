<template>
  <div id="wanita">
    <Banner />
    <Navbar />
    <div>
      <HeroComponent />
      <WomanProduct />
      <WomanHero />
      <KolaborasiWanita />
      <NewsLetter />
      <Footer />
    </div>
  </div>
</template>
  
  <script>
  import HeroComponent from '@/components/HeroWomen.vue';
  import Navbar from '@/components/NavbarWoman.vue';
  import Banner from '@/components/Banner.vue';
  import WomanProduct from '@/components/WomanProduct.vue';
  import WomanHero from '@/components/WomanHero.vue';
  import KolaborasiWanita from '@/components/KolaborasiWanita.vue';
  import NewsLetter from '@/components/NewsLetter.vue';
  import Footer from '@/components/Footer.vue';

  export default {
      components: {
      Navbar,
      HeroComponent,
      Banner,
      WomanProduct,
      WomanHero,
      KolaborasiWanita,
      NewsLetter,
      Footer
      }
  };
</script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    background-color: transparent !important;
  }
  </style>
  