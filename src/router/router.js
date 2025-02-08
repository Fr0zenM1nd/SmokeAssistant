import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '', name: 'Home', component: () => import('@/views/Home.vue')},
    {path: '/Inferno', name:'Inferno', component: () => import('@/views/Inferno.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router