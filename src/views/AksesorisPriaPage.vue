<template>
    <div id="aksesoris-pria">
        <Banner />
        <NavbarManPage />
        <div>
        <AksesorisPria />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarManPage from '@/components/NavbarManPage.vue';
    import AksesorisPria from '@/components/AksesorisPria.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            AksesorisPria,
            Banner,
            NavbarManPage,
            Footer
        }
    };
</script>