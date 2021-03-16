<template>
  <p>{{ t('menu.home') }}</p>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>
