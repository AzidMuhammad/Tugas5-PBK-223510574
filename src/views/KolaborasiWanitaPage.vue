<template>
    <div id="kolaborasi-wanita">
        <Banner />
        <NavbarWomanPage />
        <div>
        <KolaborasiWanita />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarWomanPage from '@/components/NavbarWomanPage.vue';
    import KolaborasiWanita from '@/components/KolabWanita.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            KolaborasiWanita,
            Banner,
            NavbarWomanPage,
            Footer
        }
    };
</script>