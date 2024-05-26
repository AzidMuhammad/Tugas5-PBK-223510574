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
    component: () => import('../views/WomanPage.vue')
  },
  {
    path: '/pria',
    name: 'ManPage',
    component: () => import('../views/ManPage.vue')
  },
  {
    path: '/pakaian',
    name: 'PakaianPage',
    component: () => import('../views/PakaianPage.vue')
  },
  {
    path: '/aksesoris-pria',
    name: 'AksesorisPriaPage',
    component: () => import('../views/AksesorisPriaPage.vue')
  },
  {
    path: '/tas-pria',
    name: 'TasPriaPage',
    component: () => import('../views/TasPriaPage.vue')
  },
  {
    path: '/kolaborasi-pria',
    name: 'KolaborasiPriaPage',
    component: () => import('../views/KolaborasiPriaPage.vue')
  },
  {
    path: '/pakaian-wanita',
    name: 'PakaianWanitaPage',
    component: () => import('../views/PakaianWanitaPage.vue')
  },
  {
    path: '/aksesoris-wanita',
    name: 'AksesorisWanitaPage',
    component: () => import('../views/AksesorisWanitaPage.vue')
  },
  {
    path: '/tas-wanita',
    name: 'TasWanitaPage',
    component: () => import('../views/TasWanitaPage.vue')
  },
  {
    path: '/pasific-republic-wanita',
    name: 'KolaborasiWanitaPage',
    component: () => import('../views/KolaborasiWanitaPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
