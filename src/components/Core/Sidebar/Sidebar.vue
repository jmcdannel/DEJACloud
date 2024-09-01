<script setup lang="ts">
const menu = [
  { icon: 'add', title: 'Add' },
  { icon: 'phone', title: 'Phone' },
  { icon: 'email', title: 'Email' },
  { icon: 'settings', title: 'Settings' },
  { icon: 'logout', title: 'Logout' }
]
</script>
<template>
  <VaSidebar>
    <VaSidebarItem v-for="{ icon, title } in menu" :key="icon">
      <VaSidebarItemContent>
        <VaIcon :name="icon" />
        <VaSidebarItemTitle>
          {{ title }}
        </VaSidebarItemTitle>
      </VaSidebarItemContent>
    </VaSidebarItem>
  </VaSidebar>
</template>
