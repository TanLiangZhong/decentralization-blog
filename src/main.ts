import {createApp} from 'vue'
import App from './App.vue'
import router from "./router"
import Antd from 'ant-design-vue'

//
import i18n from "./locales";
// css
import 'ant-design-vue/dist/antd.css'

createApp(App)
    .use(Antd)
    .use(router)
    .use(i18n)
    .mount('#app')
