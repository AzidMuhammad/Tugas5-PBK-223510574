<template>
    <div>
        <Banner />
        <NavbarManPage />
        <div>
        <ProductGrid />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarManPage from '@/components/NavbarManPage.vue';
    import ProductGrid from '@/components/ProductGrid.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            ProductGrid,
            Banner,
            NavbarManPage,
            Footer
        }
    };
</script>