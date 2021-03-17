<template>
  <a-layout class="layout">
    <a-layout-header class="lz-layout-header">
      <a-row :gutter="[16,16]">
        <a-col :span="8">
          <div class="lz-logo">Tan</div>
        </a-col>
        <a-col :span="6" class="lz-menu-col">
          <a-menu mode="horizontal" class="lz-menu">
            <a-menu-item v-for="menu in menuList" :key="menu.name">
              <router-link :to="menu.path">{{ t(menu.meta.title, menu.name) }}</router-link>
            </a-menu-item>
          </a-menu>
          <!--          <lz-menu :menus="system.menu"/>-->
        </a-col>
        <a-col :span="10">
          <a-input-search class="lz-search"/>
          <router-link to="/editor">
            <a-button>{{ t('btn.writeStory') }}</a-button>
          </router-link>
          <div class="lz-language-conf">
            <a-button shape="circle" @click="switchLanguage">
              <TranslationOutlined/>
            </a-button>
          </div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ minHeight: '1200px' }">
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {useI18n} from 'vue-i18n'
import {mapState, useStore} from 'vuex'
import {SystemState} from '../core-entity'
import LzMenu from '../components/LzMenu/index.vue'
import {TranslationOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {LzMenu, TranslationOutlined},
  computed: {
    ...mapState({
      system: (state: any): SystemState => state.system,
    }),
  },
  setup() {
    const {t, locale} = useI18n()
    const switchLanguage = () => {
      locale.value = locale.value === 'en-US' ? 'zh-CN' : 'en-US'
      localStorage.setItem("language", locale.value)
    }
    const {state} = useStore();
    console.log(state.system.menu.filter((it: any) => !it.meta.hidden))
    const menuList = state.system.menu.filter((it: any) => !it.meta.hidden)

    return reactive({
      locale, t, menuList,
      switchLanguage
    })
  },
})
</script>
<style lang="less" scoped>

.lz-layout-header {
  background: #fafafa;
  @shadow-1-down: rgba(0, 0, 0, 0.16) 0px, 1px 2px -2px;
}

.lz-layout-header .lz-menu-col {
  //text-align: center;
}

.lz-layout-header .lz-menu {
  line-height: 62px;
  background: #fafafa;
  font-weight: bold;
}

.lz-layout-header .lz-language-conf {
  float: right;
}

.lz-layout-header .lz-logo {
  float: right;
  font-size: 64px;
  font-weight: bold;
  font-family: 'Brush Script MT', cursive;
  background: linear-gradient(to right, #000000, #434343, #8c8c8c, #d9d9d9);
  -webkit-background-clip: text;
  color: transparent;
  padding-right: 20px;
}

.lz-layout-header .lz-search {
  width: 180px;
  margin-right: 20px;
}

</style>
