<template>
    <div>
        <Banner />
        <NavbarWomanPage />
        <div>
        <AksesorisWanita />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarWomanPage from '@/components/NavbarWomanPage.vue';
    import AksesorisWanita from '@/components/AksesorisWanita.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            AksesorisWanita,
            Banner,
            NavbarWomanPage,
            Footer
        }
    };
</script>