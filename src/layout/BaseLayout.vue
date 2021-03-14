<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo"/>
      <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">{{ t('menu.home') }}</a-menu-item>
        <a-menu-item key="2">Bank</a-menu-item>
        <a-menu-item key="3">Bonds</a-menu-item>
      </a-menu>
      <a-radio-group v-model:value="locale" button-style="solid">
        <a-radio-button value="zn-CN">zn-CN</a-radio-button>
        <a-radio-button value="en-US">en-US</a-radio-button>
      </a-radio-group>
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
import {defineComponent, reactive} from 'vue';
import {useI18n} from 'vue-i18n'

export default defineComponent({
  name: 'BaseLayout',
  setup() {
    const {t, locale} = useI18n()

    return reactive({
      t, locale,
      selectedKeys: 0
    })
  },
});
</script>
<style>

</style>
