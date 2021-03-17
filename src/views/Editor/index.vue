<template>
  <header class="lz-layout-header">
    <a-row :gutter="[16,16]">
      <a-col :span="12">
        <div class="lz-title">
          <a-input v-model:value="story.title" placeholder="输入标题..."/>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="lz-btns">
          <div class="lz-text">{{ t('editor.text_1') }}</div>
          <a-button type="primary" @click="publish">{{ t('btn.publish') }}</a-button>
        </div>
      </a-col>
    </a-row>
  </header>
  <v-md-editor class="lz-editor" v-model="story.content" height="auto"
               :autofocus="true"
               :disabled-menus="[]"
               @change="editorChange"
               @upload-image="handleUploadImage"
  />
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {useI18n} from 'vue-i18n'

export default defineComponent({
  name: 'Editor',
  setup: (props, {attrs, slots, emit}) => {
    const story = reactive({
      title: '',
      content: ''
    })
    const {t} = useI18n()

    const editorChange = (text: string, html: string) => {
      console.log('saveDraft --- ', story)
    }

    const handleUploadImage = (event: any, insertImage: any, files: symbol) => {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      // 此处只做示例
      insertImage({
        url:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    }

    const publish = () => {
      console.log('publish , ', story)
    }

    return {
      t, story,
      editorChange,
      handleUploadImage,
      publish
    }
  },
})
</script>

<style lang="less" scoped>
.lz-layout-header {
  user-select: none;
  padding: 0 20px 0 0;
  height: 64px;
  line-height: 64px;
  background: #fff;
  @shadow-1-down: rgba(0, 0, 0, 0.09) 5px, 0px, 12px, 4px;
}

.lz-editor {
  position: fixed;
  top: 64px;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px #dddddd solid;
  box-shadow: none;
}

.lz-layout-header .lz-title input {
  height: 45px;
  font-size: 26px;
  border: none;
  margin-top: 10px;
}

.lz-layout-header .lz-title input:focus {
  border: none;
  box-shadow: none;
}

.lz-layout-header .lz-btns {
  float: right;
}

.lz-layout-header .lz-text {
  display: inline;
  color: #bfbfbf;
  font-size: 16px;
  margin-right: 30px;
}

</style>
