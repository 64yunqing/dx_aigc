import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'

import {Area,ActionSheet} from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(ActionSheet);



app.use(router)
app.use(Area)

app.mount('#app')
