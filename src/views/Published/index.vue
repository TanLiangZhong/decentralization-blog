<template>
  <a-result
      status="success"
      title=""
      sub-title="发布成功！"
  >
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <router-link to="/story">Story Title</router-link>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Next</a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { SmileTwoTone } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Published',
  components: {
    SmileTwoTone,
  },
  setup: (props, {attrs, slots, emit}) => {
  }
})
</script>

<style scoped>

</style>
