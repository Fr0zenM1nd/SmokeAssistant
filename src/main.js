import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(router).mount('#app')
