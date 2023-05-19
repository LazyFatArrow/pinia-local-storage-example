<script setup>
  import { storeToRefs } from 'pinia'
  import { useStore } from './store'
  import { computed } from 'vue'

  const store = useStore()

  const { settings } = storeToRefs(store)

  const handleToggleFontSizeClick = () => {
    store.updateSettings({
      fontSize: settings.value.fontSize === 14 ? 24 : 14,
    })
  }

  const fontSize = computed(() => `${settings.value.fontSize}px`)
</script>

<template>
  <div>
    <p :style="{ fontSize: fontSize }">the font size is {{ settings.fontSize }}</p>

    <button @click="handleToggleFontSizeClick">
      <template v-if="settings.fontSize === 14"> Switch to bigger font </template>

      <template v-else> Switch to smaller font </template>
    </button>
  </div>
</template>
