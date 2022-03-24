import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/main.css';

import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Iscrizioni from './pages/Iscrizioni.vue';
import PGOS from './pages/Pgos.vue';

import Particles from 'particles.vue3';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),

  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/iscrizioni', component: Iscrizioni, name: 'iscrizioni' },
    { path: '/pgos', component: PGOS, name: 'pgos' },
  ],
});

createApp(App).use(router).use(Particles).mount('#app');
