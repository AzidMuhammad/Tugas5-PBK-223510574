<template>
    <div id="tas-wanita">
        <Banner />
        <NavbarWomanPage />
        <div>
        <TasWanita />
        <Footer />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner.vue';
    import NavbarWomanPage from '@/components/NavbarWomanPage.vue';
    import TasWanita from '@/components/TasWanita.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            TasWanita,
            Banner,
            NavbarWomanPage,
            Footer
        }
    };
</script>