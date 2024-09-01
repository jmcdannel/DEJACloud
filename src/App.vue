<script setup>
import DejaCloudLayout from './components/Core/Layout/DejaCloudLayout.vue'
import DejaCloudApp from '@/components/Core/App/DejaCloud.ce.vue'
import DejaAuthProtected from './components/Users/DejaAuthProtected.ce.vue'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import '@/assets/overrides.css'
</script>
<template>
  <DejaAuthProtected>
    <template v-slot:authenticated>
      <DejaCloudLayout>
        <DejaCloudApp />
      </DejaCloudLayout>
    </template>
  </DejaAuthProtected>
</template>
