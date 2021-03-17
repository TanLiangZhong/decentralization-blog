<template>
  <div style="padding-left: 10px">
    <a-list item-layout="vertical" size="large"
            :loading="loading" :data-source="listData">
      <template #loadMore>
        <div v-if="showLoadingMore"
             :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
          <a-spin v-if="loadingMore"/>
          <a-button v-else @click="onLoadMore">loading more</a-button>
        </div>
      </template>
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component v-bind:is="type" style="margin-right: 8px"/>
            {{ text }}
          </span>
          </template>
          <template #extra>
            <span style="color: rgba(0, 0, 0, 0.45);font-size: 14px;line-height: 22px;">5小时前</span>
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <router-link to="story" target="_blank">
                <span style="font-weight: bold">{{ item.title }}</span>
              </router-link>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>

</template>
<script lang="ts">
import {EyeOutlined, LikeOutlined, MessageOutlined} from '@ant-design/icons-vue';
import {defineComponent, nextTick, ref} from 'vue';

const listData: Record<string, string>[] = [];

for (let i = 0; i < 5; i++) {
  listData.push({
    addr: '',
    title: `Windows WSL2 开发环境配置${i}`,
    description: '记录 wsl2 开发环境配置文档. 官方有文档就不造轮子了',
  });
}

export default defineComponent({
  components: {
    LikeOutlined,
    MessageOutlined,
    EyeOutlined
  },
  setup() {
    const loading = ref<boolean>(false);
    const loadingMore = ref<boolean>(false);
    const showLoadingMore = ref<boolean>(true);

    const actions: Record<string, string>[] = [
      {type: 'EyeOutlined', text: '666'},
      {type: 'LikeOutlined', text: '156'},
      {type: 'MessageOutlined', text: '2'},
    ];

    const onLoadMore = () => {
      loadingMore.value = true;

      for (let i = 0; i < 5; i++) {
        listData.push({
          addr: '',
          title: `Windows WSL2 开发环境配置${i}`,
          description: '记录 wsl2 开发环境配置文档. 官方有文档就不造轮子了',
        });
      }
      setTimeout( () => loadingMore.value = false, 1000)
      nextTick(() => {
        window.dispatchEvent(new Event('resize'));
      })
    }

    return {
      listData,
      loading,
      loadingMore,
      showLoadingMore,
      actions,
      onLoadMore
    }
  },
});
</script>

