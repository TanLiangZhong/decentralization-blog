import {createI18n} from 'vue-i18n'
import en_us from './lang/en-US'
import zh_cn from './lang/zh-CN'

const messages = {
    'en-US': en_us,
    'zh-CN': zh_cn,
}


const i18n = createI18n({
    locale: 'zh-CN',
    fallbackLocale: '',
    messages,
})

export default i18n
