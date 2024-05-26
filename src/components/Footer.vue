<template>
<footer class="bg-white from-gray-100 via-[#bce1ff] to-gray-100">
    <hr class="border-t-2 border-gray-300 mt-10 w-full">
    <div class="max-w-screen-4xl px-4 py-16 ml-96 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <h6 class="max-w-xs mt-4 mb-6 text-sm text-black font-semibold font-sans">
            Aplikasi Kami
          </h6>

          <div class="flex mb-8">

            <a href="">
                <img src="@/assets/image/ios.png" class="mr-5 h-10 sm:h-10" />
            </a>

            <a href="">
                <img src="@/assets/image/android.png" class="mr-5 h-10 sm:h-10" />
            </a>

          </div>

          <h6 class="max-w-xs mt-4 mb-6 text-sm text-black font-semibold font-sans">
            Cara Pembayaran
          </h6>

          <div class="flex mb-8">

            <a href="">
                <img src="@/assets/svg/VISA.svg" class="mr-5 h-10 sm:h-10" />
            </a>

            <a href="">
                <img src="@/assets/svg/MasterCard.svg" class="mr-5 h-10 sm:h-10" />
            </a>

            <a href="">
                <img src="@/assets/svg/COD.svg" class="mr-5 h-10 sm:h-10" />
            </a>

            <a href="">
                <img src="@/assets/svg/VirtualAccount.svg" class="mr-5 h-10 sm:h-10" />
            </a>

          </div>
          
          <h6 class="max-w-xs mt-4 mb-6 text-sm text-black font-semibold font-sans">
            Ikuti Kami!
          </h6>

          <div class="flex space-x-6 text-gray-600">
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Facebook </span>
                <img src="@/assets/image/facebook.png" class="w-10 h-10">
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Instagram </span>
                <img src="@/assets/image/instagram.png" class="w-10 h-10">
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Twitter </span>
                <img src="@/assets/image/twitter.png" class="w-10 h-10">
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Tiktok </span>
                <img src="@/assets/image/tiktok.png" class="w-10 h-10">
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 class="font-medium mt-4 text-sm text-black font-semibold font-sans">
              Bantuan
            </h6>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Kontak Kami </a>
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Tanya Jawab </a>
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Chat Langsung </a>
            </nav>
          </div>
          <div>
            <p class="font-medium mt-4 text-sm text-black font-semibold font-sans">
              Perusahaan
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Kebijakan Privasi </a>
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Terms &amp; Conditions </a>
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Tentang Kami </a>
              <a class="hover:opacity-75 text-sm text-black font-sans" href> Aksebilitas </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-t-2 border-gray-300 mt-2 w-full">

    <div class="flex items-center justify-center">
      <a href="" class="flex items-center">
        <p class="mt-2 text-sm text-black text-center font-sans">
          Preferensi Cookie
        </p>
      </a>

      <a href="" class="flex items-center">
        <p class="mt-2 ml-4 text-sm text-black text-center font-sans"> 
           |
        </p>
      </a>
    
      <a href="" class="flex items-center">
        <p class="mt-2 ml-4 text-sm text-black text-center font-sans"> 
          Kebijakan Cookie 
        </p>
      </a>

      <a href="" class="flex items-center">
        <p class="mt-2 ml-4 text-sm text-black text-center font-sans"> 
           |
        </p>
      </a>

      <a href="" class="flex items-center">
        <p class="mt-2 ml-4 text-sm text-black text-center font-sans"> 
          Syarat Pembelian 
        </p>
      </a>

      <a href="" class="flex items-center">
        <p class="mt-2 ml-4 text-sm text-black text-center font-sans"> 
           |
        </p>
      </a>
    
      <a href="" class="flex items-center">
        <img src="@/assets/image/worldwide.png" class="h-6 w-6 ml-6 mt-2">
        <p class="mt-2 ml-2 text-md text-black text-center font-sans">
          Indonesia | Indonesia
        </p>
      </a>
    </div>    
      
    <hr class="border-t-2 border-gray-300 mt-2 mb-8 w-full">
    <p class="mt-2 text-md text-black text-center font-sans">
      Layanan Pengaduan Konsumen, Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga,</p>
    <p class="mt-2 text-md text-black text-center font-sans">Kementerian Perdagangan Republik Indonesia</p>
    <p class="mt-2 mb-4 text-md text-black text-center font-sans">0895-1302-9235 (WhatsApp)</p>

  </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>