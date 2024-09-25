import { createApp } from 'vue'
import './style.css'
import ELDialog from './components/dialog'
import App from './App.vue'

const app = createApp(App)
app
    .use(ELDialog)
    .mount('#app')
