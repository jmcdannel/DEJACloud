<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFirestore, collection, query, where } from 'firebase/firestore'
import { useCollection, useCurrentUser } from 'vuefire'
import { db } from '@/firebase'
import type { DejaLayout } from '@/types/deja'
import { VaButton, VaCardActions, VaChip } from 'vuestic-ui'

const user = useCurrentUser()
const layoutsRef = collection(db, 'layouts')
const layoutsQuery = query(layoutsRef, where('owner', '==', user.value?.email))
const layouts = useCollection(layoutsQuery)
</script>

<template>
  <main class="px-8 py-4 grid grid-cols-1 gap-4 md:grid-cols-2">
    <pre>{{ user }}</pre>
    <VaCard
      v-for="layout in layouts"
      :key="layout.layoutId"
      color="transparent"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-pink-500 border-dotted border-opacity-50"
    >
      <VaCardTitle class="">
        <h1
          className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
        >
          {{ layout.name }}
        </h1>
      </VaCardTitle>
      <VaCardContent class="flex">
        <VaChip outline class="" size="large">{{ layout.layoutId }}</VaChip>
        <VaDivider vertical />
        <section class="">
          <VaChip class="m-1" outline size="small" v-for="mod in layout.modules" :key="mod">{{
            mod
          }}</VaChip>
        </section>
      </VaCardContent>
      <VaCardActions>
        <VaButton @click="$emit('select', layout)" color="secondary" gradient>Launch</VaButton>
        <VaButton preset="primary" color="info">Edit</VaButton>
        <VaButton preset="primary" color="danger">Delete</VaButton>
      </VaCardActions>
    </VaCard>
  </main>
</template>
