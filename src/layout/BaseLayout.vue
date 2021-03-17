<template>
  <a-layout class="layout">
    <a-layout-header class="lz-layout-header">
      <a-row :gutter="[16,16]">
        <a-col :span="6">
        </a-col>
        <a-col :span="12">
          <a-row>
            <a-col :span="4" class="lz-logo">Tan</a-col>
            <a-col :span="10" class="lz-menu-col">
              <a-menu mode="horizontal" class="lz-menu" v-model:selectedKeys="current">
                <a-menu-item v-for="menu in menuList" :key="menu.name">
                  <router-link :to="menu.path">{{ t(menu.meta.title, menu.name) }}</router-link>
                </a-menu-item>
              </a-menu>
            </a-col>
            <a-col :span="10">
              <div style="float:right;">
                <a-input-search class="lz-search" placeholder="input search text"/>
                <router-link to="/editor">
                  <a-button>{{ t('btn.writeStory') }}</a-button>
                </router-link>
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="6">
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
        <a-row :gutter="[16,16]">
          <a-col :span="6"></a-col>
          <a-col :span="12" class="lz-content">
            <router-view/>
          </a-col>
          <a-col :span="6"></a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {useStore} from 'vuex'
import {TranslationOutlined} from '@ant-design/icons-vue'
import {useRoute} from 'vue-router'

export default defineComponent({
  name: 'BaseLayout',
  components: {TranslationOutlined},
  setup() {
    const {name} = useRoute()
    const current = ref<string[]>([name as string])
    const {t, locale} = useI18n()
    const switchLanguage = () => {
      locale.value = locale.value === 'en-US' ? 'zh-CN' : 'en-US'
      localStorage.setItem("language", locale.value)
    }
    const {state} = useStore();
    const menuList = state.system.menu.filter((it: any) => !it.meta.hidden)

    return reactive({
      locale, t, menuList, current,
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

.lz-layout-header .lz-menu {
  line-height: 62px;
  background: #fafafa;
  font-weight: bold;
}

.lz-layout-header .lz-language-conf {
  float: right;
}

.lz-layout-header .lz-logo {
  font-size: 64px;
  font-weight: bold;
  font-family: 'Brush Script MT', cursive;
  background: linear-gradient(to right, #096dd9, #1890ff, #40a9ff, #69c0ff);
  -webkit-background-clip: text;
  color: transparent;
  padding-right: 20px;
}

.lz-layout-header .lz-search {
  width: 180px;
  margin-right: 20px;
}

.lz-content {
  margin-top: 30px;
  background-color: #fafafa;
}
</style>
