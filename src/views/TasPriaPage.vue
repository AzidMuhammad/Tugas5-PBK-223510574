<template>
    <div id="tas-pria">
        <Banner />
        <NavbarManPage />
        <div>
        <TasPria />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarManPage from '@/components/NavbarManPage.vue';
    import TasPria from '@/components/TasPria.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            TasPria,
            Banner,
            NavbarManPage,
            Footer
        }
    };
</script>