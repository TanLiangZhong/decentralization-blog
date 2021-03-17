<template>
  <nav class="lz-menu">
    <ul>
      <li v-for="menu in menuList" :key="menu.name" :ref="menu.name" @mouseleave="mouseoverMenu(menu,0)"
          @mouseover="mouseoverMenu(menu,1)" @click="to(menu)"
          :class="(menu.name === activeMenu || menu.name === hoverMenu) ? 'active' : ''">
        <router-link :to="menu.path"><span>{{ t(menu.meta.title, menu.name) }}</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import router from '../../router'

export default defineComponent({
  name: 'LzMenu',
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  setup: (props) => {
    let activeMenu = ref<string>('Home')
    let hoverMenu = ref<string>('Home')

    const to = (menu: any) => {
      router.push({path: menu.path})
      activeMenu.value = menu.name
    }

    const mouseoverMenu = (menu: any, flag: number) => hoverMenu.value = (flag === 1 ? menu.name : '')
    const menuList = props.menus.filter((it: any) => !it.meta.hidden)

    const {t} = useI18n()
    return {
      t,
      menuList,
      activeMenu,
      hoverMenu,
      to,
      mouseoverMenu,
    }
  },
})

</script>

<style lang="less" scoped>

.lz-menu ul {
  white-space: nowrap;
  border: 0;
  box-shadow: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: 'tnum';
  line-height: 64px;
  list-style: none;
  outline: none;
  transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  zoom: 1;
}

.lz-menu ul li {
  position: relative;
  top: 1px;
  display: inline-block;
  vertical-align: bottom;
  border-bottom: 2px solid transparent;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
}

.lz-menu ul li a {
  color: #262626;
}

.lz-menu ul li.active a {
  color: #1890ff;
}

</style>
