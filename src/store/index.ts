import {createLogger, createStore} from 'vuex'
import system from './modules/system'

// const debug = process.env.NODE_ENV !== 'production'
const debug = true

export default createStore({
    modules: {
        system
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
