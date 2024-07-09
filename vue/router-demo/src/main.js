import './assets/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import home  from './views/Home.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
