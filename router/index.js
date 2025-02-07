import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
];

const router = createRouter({
  history: createWebHistory(),  // Uses the HTML5 history API for navigation
  routes
});

export default router;
