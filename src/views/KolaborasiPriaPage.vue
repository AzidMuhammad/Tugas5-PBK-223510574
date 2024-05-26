<template>
    <div>
        <Banner />
        <NavbarManPage />
        <div>
        <KolaborasiPria />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarManPage from '@/components/NavbarManPage.vue';
    import KolaborasiPria from '@/components/KolabPria.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            KolaborasiPria,
            Banner,
            NavbarManPage,
            Footer
        }
    };
</script>