<template>
  <div id="pria">
    <Banner />
    <Navbar />
    <div>
      <HeroComponent />
      <ManProduct />
      <HeroVideo />
      <KolaborasiPria />
      <NewsLetter />
      <Footer />
    </div>
  </div>
</template>

<script>
  import HeroComponent from '@/components/HeroComponent.vue';
  import Navbar from '@/components/NavbarMan.vue';
  import Banner from '@/components/Banner.vue';
  import ManProduct from '@/components/ManProduct.vue';
  import HeroVideo from '@/components/ProductVideo.vue';
  import KolaborasiPria from '@/components/KolaborasiPria.vue';
  import NewsLetter from '@/components/NewsLetter.vue';
  import Footer from '@/components/Footer.vue';

  export default {
      components: {
      Navbar,
      HeroComponent,
      Banner,
      ManProduct,
      HeroVideo,
      KolaborasiPria,
      NewsLetter,
      Footer
      }
  };
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-y: auto;
}
</style>
