import { createApp } from 'vue'
import './style.css'
import App from '../views/App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(autoAnimatePlugin).mount('#app')
