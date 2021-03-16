<template>
  <a-layout class="layout">
    <a-layout-header class="lz-layout-header">
      <a-row :gutter="[16,16]">
        <a-col :span="8">
          Logo
        </a-col>
        <a-col :span="8" class="lz-menu-col">
          <lz-menu :menus="system.menu"/>
        </a-col>
        <a-col :span="8">
          <a-select v-model:value="locale">
            <a-select-option value="zh-CN">zh-CN</a-select-option>
            <a-select-option value="en-US">en-US</a-select-option>
          </a-select>
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
import {mapState} from "vuex"
import {SystemState} from '../core-entity'
import LzMenu from "../components/LzMenu/index.vue";

export default defineComponent({
  name: 'BaseLayout',
  components: {LzMenu},
  computed: {
    ...mapState({
      system: (state: SystemState) => state.system
    })
  },
  setup() {
    const {locale} = useI18n()


    return reactive({
      locale,
      selectedKeys: 0
    })
  },
});
</script>
<style lang="less" scoped>

.lz-layout-header {
  background: #fafafa;
  @shadow-1-down: rgba(0, 0, 0, 0.16) 0px, 1px 2px -2px;
}

.lz-menu-col {
  text-align: center;
}

</style>
