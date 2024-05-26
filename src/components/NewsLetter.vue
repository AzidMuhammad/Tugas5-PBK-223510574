<template>
    <div class="mx-auto max-w-full">
        <div
            class="relative isolate overflow-hidden bg-gray-500 px-6 py-24 shadow-2xl sm:px-24 xl:py-32">
           
            <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl font-sans">SIPALING DI MUSIM INI ADA DI NEWSLETTER KAMI!
            </h2>
    
            <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300 font-sans">
                Bersiaplah untuk menemukan semua tren, kolaborasi, dan promosi eksklusif terbaru!.
            </p>
    
            <form class="mx-auto mt-10 flex max-w-md gap-x-4">
    
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-lg border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Masukkan Email Anda">
    
                <button type="submit" class="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-sans">BERITAHU SAYA</button>
            </form>  
        </div>
    </div>
</template>

<script>
    export default {
        name: "Newsletter"
    }

</script>