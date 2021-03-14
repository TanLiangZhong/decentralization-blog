import App from './App.vue'

// vue3 https://www.vue3js.cn/
import {createApp} from 'vue'

// router https://vue3js.cn/router4/
import router from "./router"

// Antd https://2x.antdv.com/
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// i18n https://vue-i18n.intlify.dev/
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import {createI18n} from 'vue-i18n'

// css

const i18n = createI18n({
    locale: 'zh-CN',
    messages
})

createApp(App)
    .use(Antd)
    .use(router)
    .use(i18n)
    .mount('#app')
