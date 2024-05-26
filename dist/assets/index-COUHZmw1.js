import { createRouter, createWebHistory } from 'vue-router';
import WomanPage from '../views/WomanPage.vue';
import ManPage from '../views/ManPage.vue';
import PakaianPage from '../views/PakaianPage.vue';
import AksesorisPriaPage from '../views/AksesorisPriaPage.vue';
import TasPriaPage from '../views/TasPriaPage.vue';
import KolaborasiPriaPage from '../views/KolaborasiPriaPage.vue';
import PakaianWanitaPage from '../views/PakaianWanitaPage.vue';
import AksesorisWanitaPage from '../views/AksesorisWanitaPage.vue';
import TasWanitaPage from '../views/TasWanitaPage.vue';
import KolaborasiWanitaPage from '../views/KolaborasiWanitaPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/wanita',
    name: 'WomanPage',
    component: WomanPage
  },
  {
    path: '/pria',
    name: 'ManPage',
    component: ManPage
  },
  {
    path: '/pakaian',
    name: 'PakaianPage',
    component: PakaianPage
  },
  {
    path: '/aksesoris-pria',
    name: 'AksesorisPriaPage',
    component: AksesorisPriaPage
  },
  {
    path: '/tas-pria',
    name: 'TasPriaPage',
    component: TasPriaPage
  },
  {
    path: '/kolaborasi-pria',
    name: 'KolaborasiPriaPage',
    component: KolaborasiPriaPage
  },
  {
    path: '/pakaian-wanita',
    name: 'PakaianWanitaPage',
    component: PakaianWanitaPage
  },
  {
    path: '/aksesoris-wanita',
    name: 'AksesorisWanitaPage',
    component: AksesorisWanitaPage
  },
  {
    path: '/tas-wanita',
    name: 'TasWanitaPage',
    component: TasWanitaPage
  },
  {
    path: '/pasific-republic-wanita',
    name: 'KolaborasiWanitaPage',
    component: KolaborasiWanitaPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
