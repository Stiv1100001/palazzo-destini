import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/main.css';

import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Iscrizioni from './pages/Iscrizioni.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),

  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/iscrizioni', component: Iscrizioni, name: 'iscrizioni' },
  ],
});

createApp(App).use(router).mount('#app');
