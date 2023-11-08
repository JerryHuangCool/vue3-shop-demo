import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
