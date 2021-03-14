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
        <a-menu-item key="1" v-t="'menu.home'"></a-menu-item>
        <a-menu-item key="2">Bank</a-menu-item>
        <a-menu-item key="3">Bonds</a-menu-item>
      </a-menu>
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

export default defineComponent({
  name: 'BaseLayout',
  setup() {

    return reactive({
      selectedKeys: 0
    })
  },
});
</script>
<style>

</style>
