import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import 'lib-flexible/flexible.js'

import { Button } from 'vant'
import 'vant/lib/index.css'
import { Form, Field, CellGroup,Icon,Uploader,Picker,Popup } from 'vant';

const app = createApp(App)

app.use(createPinia())


app.use(router)
app.use(Button)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon)
app.use(Uploader)
app.use(Picker)
app.use(Popup)
app.mount('#app')
