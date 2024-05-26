<template>
    <div id="pakaian-wanita">
        <Banner />
        <NavbarWomanPage />
        <div>
        <ProductGridWanita />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarWomanPage from '@/components/NavbarWomanPage.vue';
    import ProductGridWanita from '@/components/ProductGridWanita.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            ProductGridWanita,
            Banner,
            NavbarWomanPage,
            Footer
        }
    };
</script>