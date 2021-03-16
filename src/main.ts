import App from './App.vue'

// vue3 https://www.vue3js.cn/
import {createApp} from 'vue'

// router https://vue3js.cn/router4/
import router from "./router"

// Antd https://2x.antdv.com/
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

// vuex https://next.vuex.vuejs.org/guide/actions.html
import store from './store/index'

// i18n https://vue-i18n.intlify.dev/
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import {createI18n} from 'vue-i18n'

const i18n = createI18n({
    locale: 'zh-CN',
    messages
})

createApp(App)
    .use(Antd)
    .use(router)
    .use(i18n)
    .use(store)
    .mount('#app')
