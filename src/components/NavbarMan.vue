<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }" v-if="!searchResultsVisible">
    <div class="navbar-hamburger" v-if="isScrolled && !isSidebarVisible" @mouseover="showSidebarContent" @mouseleave="hideSidebarContent">
      <div class="hamburger">
        <div class="hamburger-icon"></div>
        <div class="hamburger-icon"></div>
        <div class="hamburger-icon"></div>
      </div>
    </div>
    <div class="sidebar" v-else>
      <ul class="main-links">
        <li>
          <router-link to="/wanita">WANITA</router-link>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <router-link to="/pria">PRIA</router-link>
        </li>
      </ul>
      <ul class="kategori">
        <li>
          <router-link to="/pakaian">PAKAIAN</router-link>
        </li>
        <li>
          <router-link to="/aksesoris-pria">AKSESORIS</router-link>
        </li>
        <li>
          <router-link to="/tas-pria">TAS | RANSEL</router-link>
        </li>
        <li>
          <router-link to="/kolaborasi-pria">KOLABORASI</router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-content" :class="{ 'show-sidebar': isSidebarVisible || isHovered }">
      <ul class="main-links">
        <li>
          <router-link to="/wanita">WANITA</router-link>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <router-link to="/pria">PRIA</router-link>
        </li>
      </ul>
      <ul class="kategori">
        <li>
          <router-link to="/man">PAKAIAN</router-link>
        </li>
        <li>
          <router-link to="/man">AKSESORIS</router-link>
        </li>
        <li>
          <router-link to="/man">TAS | RANSEL</router-link>
        </li>
        <li>
          <router-link to="/man">KOLABORASI</router-link>
        </li>
      </ul>
      <ul class="kategori2">
        <li>
          <router-link to="/man">TANYA JAWAB</router-link>
        </li>
        <li>
          <router-link to="/man">Cara Melakukan Pengembalian</router-link>
        </li>
        <li>
          <router-link to="/man">TOKO</router-link>
        </li>
        <li>
          <router-link to="/man">NEWSLETTER</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-brand" v-if="!isScrolled">
      <router-link to="/wanita" class="navbar-item">
        FILZ DU DIABLE
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="search-box">
          <div class="search-input-container" @click="showSearchResults">
            <button class="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input type="text" placeholder="Cari" class="search-input">
          </div>
        </div>
        <div class="navbar-item" @click="toggleCartModal('profile')">
          <img src="@/assets/svg/profile.svg" alt="Profile" class="icon">
        </div>
        <div class="navbar-item" @click="toggleCartModal('cart')">
          <img src="@/assets/svg/bucket.svg" alt="Cart" class="icon">
        </div>
      </div>
    </div>
  </nav>

    <div v-if="isProfileModalVisible" class="modal-overlay2" @click="toggleCartModal('profile')">
      <div class="modal2" @click.stop>
        <button class="modal-close-btn" @click="toggleCartModal('profile')">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div class="modal-content">
        <img src="@/assets/image/404.jpg">
        <h6>Sedang Dalam Pengembangan</h6>
        <button class="profile-btn" @click="toggleCartModal('profile')">Halaman Utama</button>
        </div>
      </div>
    </div>

    <div v-if="isCartModalVisible" class="modal-overlay" @click="toggleCartModal('cart')">
      <div class="modal" @click.stop>
        <button class="modal-close-btn" @click="toggleCartModal('cart')">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24V0H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div class="modal-content">
        <h1>Keranjang Belanja (0)</h1>
        <hr>
        <img src="@/assets/image/shopcart.png">
        <h6>Keranjang Belanja Anda Kosong</h6>
        <p>Periksa apakah ada produk di daftar keinginan Anda, dan dapatkan produk tersebut sebelum kehabisan! Anda juga dapat memeriksa barang yang baru tiba ;)</p>
        <button class="shopcart-btn" @click="toggleCartModal('cart')">Lihat Barang Baru</button>
        </div>
      </div>
    </div>
  
  <div v-if="searchResultsVisible" class="bg-white fixed inset-0 z-50 overflow-y-auto">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0 bg-white">
      <div class="search-results-container fixed inset-0 z-50 overflow-y-auto pt-10 bg-white">
        <div class="fixed top-0 inset-x-0 z-50 bg-white px-4 py-4 border-b border-gray-200">
          <div class="searchbar-modal relative">
            <input type="text" v-model="searchQuery" placeholder="Apa Yang Anda Cari?" class="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-opacity-20 text-3xl font-semibold font-sans text-gray-500 placeholder-opacity-100">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
          </div>          
        </div>
        <div class="mt-28 px-4">
          <button @click="searchResultsVisible = false" class="close-search-results text-black hover:text-gray-800 focus:outline-none absolute top-24 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h2 class="text-xl font-bold text-gray-700 mb-4 font-sans">Disarankan Untuk Anda</h2>
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 bg-white">
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/man-search1.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Kaos STWD Tie-Dye</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR299.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/woman-search2.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Gaun Midi</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR299.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/man-search3.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Set Gelang Manik</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR179.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/woman-search4.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Jaket Suede</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR479.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/man-search2.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Hoodie Oversize</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR499.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/woman-search1.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Celana Kargo Wanita</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR399.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/man-search4.jpg" class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Celana Rajut Pria</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR799.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/woman-search3.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Blus Tekstur Pita</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR479.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/man-search5.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Kemeja Motif</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR649.000</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="@/assets/image/woman-search5.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-black text-center font-sans">Biker Jaket Wanita</h3>
              <p class="mt-1 text-md font-bold text-black font-sans text-center">IDR1.299.000</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isSidebarVisible: false,
      isHovered: false,
      isScrolled: false,
      isProfileModalVisible: false,
      isCartModalVisible: false,
      searchResultsVisible: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    showSidebarContent() {
      this.isHovered = true;
    },
    hideSidebarContent() {
      this.isHovered = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleCartModal(type) {
      if (type === 'profile') {
        this.isProfileModalVisible = !this.isProfileModalVisible;
      } else if (type === 'cart') {
        this.isCartModalVisible = !this.isCartModalVisible;
      }
      if (this.isCartModalVisible | this.isProfileModalVisible) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    },
    showSearchResults() {
      this.searchResultsVisible = true;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    },
    hideSearchResults() {
      this.searchResultsVisible = false;
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
  color: white;
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  z-index: 1000;
  position: fixed;
}

.navbar-scrolled .hamburger {
  position: fixed;
  top: 0;
  margin-top: 20px;
  left: 10;
  right: 10;
  z-index: 999;
}

.navbar-hamburger {
  width: 500px;
  height: 700px;
}

.navbar-scrolled .navbar-end {
  position: fixed;
  top: 0;
  margin-top: 20px;
  margin-right: 10px;
  left: 5;
  right: 0;
  z-index: 999;
} 

.navbar-brand {
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 100px;
  margin-bottom: 200px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  margin-bottom: 200px;
}

.navbar-end {
  display: flex;
  align-items: center;
}

.navbar-item {
  padding: 0.6rem;
  text-decoration: none;
  color: black;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.hamburger {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  z-index: 20;
  margin-bottom: 200px;
}

.hamburger-icon {
  width: 100%;
  height: 3px;
  background-color: black;
  border-radius: 2px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
}

.main-links {
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

.main-links li p {
  margin: 0;
  color: black;
  font-size: 24px;
}

.main-links li a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 0.3rem;
  border-radius: 3px;
  transition: background-color 0.5s;
  font-size: 15px;
  font-weight: bold;
}

.kategori {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
}

.kategori2 {
  list-style-type: none;
  padding: 0;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: bolder;
}

.kategori2 li {
  padding: 0.1rem;
}

.sidebar-content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: whitesmoke;
  color: black;
  width: 800px;
  height: 1920px;
  padding: 1rem;
  transform: translateX(-150%);
  transition: transform 0.5s ease;
  z-index: 1100;
  margin-top: -40px;
}

.show-sidebar {
  transform: translateX(0);
}

.search-box {
  display: flex;
  align-items: center;
  padding-right: 5px;
  cursor: pointer;
}

.search-input-container {
  position: relative;
  color: black !important;
  cursor: pointer;
}

.search-input {
  padding: 0.8rem;
  border: 1px solid #2a2a2a;
  background-color: transparent;
  color: black !important;
  border-radius: 15px;
  padding-right: 1rem;
  width: 180px;
  font-size: 14px;
  cursor: pointer;
}

.search-input::placeholder {
  color: #000;
}

.search-button {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.search-button svg {
  width: 20px;
  height: 20px;
  stroke: #333;
  margin-top: 8px;
  margin-right: 4px;
}

.modal-overlay {
  position: fixed;
  top: -1%;
  left: 0;
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.3);
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1000;
  overflow: visible;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 380px;
  height: 680px;
  text-align: center;
  margin-top: 50px;
  margin-right: 10px;
  overflow: visible;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-overlay2 {
  position: fixed;
  top: -1%;
  left: 0;
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.3);
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1000;
  overflow: visible;
}

.modal2 {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 350px;
  height: 300px;
  text-align: center;
  margin-top: 50px;
  margin-right: 10px;
  overflow: visible;
}

.modal h1 {
  font-weight: 500;
  font-family: "Graphik", Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  margin-top: -20px;
  font-size: 15px;
}

.modal hr {
  width: 120%;
  border: none;
  height: 0.1px;
  background-color: #000;
}

.modal img {
  width: 120px;
  height: 90px;
  margin-top: 100px;
}

.modal h6 {
  font-weight: 600;
  font-family: "Graphik", Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
}

.modal2 img {
  width: 150px;
  height: 150px;
}

.modal2 h6 {
  font-weight: 600;
  font-family: "Graphik", Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 19px;
}

.modal p {
  font-family: "Graphik", Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-align: center;
}

.shopcart-btn {
  width: 300px;
  background-color: black;
  color: whitesmoke;
  border: solid 1px rgb(255, 255, 255);
  border-radius: 25px;
  height: 50px;
  margin-top: 50px;
}

.profile-btn {
  width: 300px;
  background-color: black;
  color: whitesmoke;
  border: solid 1px rgb(255, 255, 255);
  border-radius: 25px;
  height: 50px;
  margin-top: 10px;
}

.modal-close-btn {
  position: absolute;
  top: 60px;
  right: 20px;
  background: none;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px;
}

.modal-close-btn svg {
  width: 12px;
  height: 12px;
  stroke: whitesmoke;
  border: 1px solid black;
}

.modal-close-btn:hover {
  color: #000;
}

.no-scroll {
  overflow: hidden;
}

.close-search-results {
  background: none;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px;
}

.close-search-results svg {
  width: 18px;
  height: 18px;
  stroke: whitesmoke;
  border: 1px solid black;
}

.search-results-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1100;
  overflow-y: auto;
  padding: 1rem;
}

.searchbar-modal input::placeholder {
  opacity: 0.5;
  font-family: "Graphik", Arial, Helvetica, sans-serif;
}
</style>
