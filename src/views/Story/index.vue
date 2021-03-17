<template>
  <h1>Story</h1>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Story',
  setup: (props, {attrs, slots, emit}) => {
  }
})
</script>

<style scoped>

</style>
