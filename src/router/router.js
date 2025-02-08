import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '', name: 'Home', component: () => import('@/views/Home.vue')},
    {path: '/Inferno', name:'Inferno', component: () => import('@/views/Inferno.vue')},
    {path: '/Dust2', name:'Dust2', component: () => import('@/views/Dust2.vue')},
    {path: '/Nuke', name:'Nuke', component: () => import('@/views/Nuke.vue')},
    {path: '/Mirage', name:'Mirage', component: () => import('@/views/Mirage.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router