import { createApp } from 'vue'
// import './style.css'
import router from './router'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(Antd);
app.use(router)
app.use(store)
app.mount('#app')
