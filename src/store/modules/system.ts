import menuConf from '../../router/conf'
import { SystemState } from '../../core-entity'

/**
 * initial state
 * Vuex使用 single state tree 即，该单个对象包含您所有应用程序级别的状态
 */
const state = (): SystemState => ({
  menu: menuConf,
})

/**
 * actions
 * 动作类似于突变，不同之处在于。
 * 动作不会改变状态，而是执行突变。
 * 动作可以包含任意异步操作。
 */
const actions = {
  setMenu({ commit }: any) {
    commit('setMenu')
  },
}

/**
 * mutations
 * 实际更改Vuex存储中状态的唯一方法是提交突变。Vuex变异与事件非常相似：每个变异都有一个字符串类型和一个handler。
 */
const mutations = {
  setMenu({ menu }: any) {
    console.log(menu)
  },
}

/**
 * getters
 * 获取 state, 有时我们可能需要根据存储状态来计算状态
 */
const getters = {
  getMenu({ menu }: any) {
    console.log('getters: ', menu)
    return menu
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
