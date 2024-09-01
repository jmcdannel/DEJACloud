<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue'
import { getFirestore, collection, doc, query, where } from 'firebase/firestore'
import { useCollection, useCurrentUser, useDocument } from 'vuefire'
import { db } from '@/firebase'
import { VaButton, VaCardActions, VaChip } from 'vuestic-ui'
import type { DejaLayout } from '@/types/deja'

const props = defineProps({
  layout: Object as PropType<DejaLayout>
})

const locos = props?.layout
  ? useCollection(collection(db, `layouts/${props.layout.layoutId}/locos`))
  : null
</script>

<template>
  <main class="px-8 py-4 grid grid-cols-1 gap-4 md:grid-cols-2">
    <VaCard
      v-for="loco in locos"
      :key="loco.locoId"
      color="transparent"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-pink-500 border-dotted border-opacity-50"
    >
      <VaCardTitle class="">
        <h1
          className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
        >
          {{ loco.name }}
        </h1>
      </VaCardTitle>
      <VaCardContent class="flex">
        <VaChip outline class="" size="large">{{ loco.locoId }}</VaChip>
      </VaCardContent>
      <VaCardActions>
        <VaButton preset="primary" color="info">Edit</VaButton>
        <VaButton preset="primary" color="danger">Delete</VaButton>
      </VaCardActions>
    </VaCard>
  </main>
</template>
