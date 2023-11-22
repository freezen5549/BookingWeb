import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import LoginPage from '@/components/LoginPage.vue'; 

const routes = [
  { 
    path: '/main', 
    name:'mainPage' ,
    component: MainPage,
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;