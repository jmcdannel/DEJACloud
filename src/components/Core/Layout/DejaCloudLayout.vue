<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Sidebar from '../Sidebar/Sidebar.vue'
import { useBreakpoint } from 'vuestic-ui'
import DejaSignout from '@/components/Users/DejaSignout.ce.vue'

const breakpoints = useBreakpoint()

const isSidebarVisible = ref(breakpoints.lgUp)

watchEffect(() => {
  isSidebarVisible.value = breakpoints.lgUp
})
</script>

<template>
  <VaLayout
    :top="{ fixed: true, order: 2 }"
    :left="{
      fixed: true,
      absolute: breakpoints.smDown,
      order: 1,
      overlay: breakpoints.smDown && isSidebarVisible
    }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <VaNavbar shadowed>
        <template #left>
          <header class="flex items-center">
            <VaButton
              class="mr-3"
              preset="secondary"
              :icon="isSidebarVisible ? 'menu_open' : 'menu'"
              @click="isSidebarVisible = !isSidebarVisible"
            />
            <h1
              className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
            >
              DEJA Cloud
            </h1>
          </header>
        </template>
        <template #right>
          <DejaSignout />
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <div style="display: flex; height: 100%">
        <Sidebar v-if="isSidebarVisible" />
      </div>
    </template>

    <template #content>
      <main>
        <article>
          <slot />
        </article>
      </main>
    </template>
  </VaLayout>
</template>
