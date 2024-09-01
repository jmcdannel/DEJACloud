<script setup lang="ts">
import { ref } from 'vue'
import DejaLayoutList from '@/components/Layouts/DejaLayoutList.ce.vue'
import DejaAddLayout from '@/components/Layouts/DejaAddLayout.ce.vue'
import DejaLayout from '@/components/Layouts/DejaLayout.ce.vue'

const selected = ref(null)

function handleLayout(layout) {
  if (layout) {
    selected.value = layout
  }
}

function handleClear() {
  selected.value = null
}
</script>
<template>
  <main class="flex flex-col max-w-screen-md mx-auto forest-background">
    <template v-if="selected">
      <DejaLayout @back="handleClear" :layout="selected" />
    </template>
    <template v-else>
      <DejaLayoutList @select="handleLayout" />
      <VaButton class="mx-8 mb-4">Add New Layout</VaButton>
      <DejaAddLayout />
    </template>
  </main>
</template>
