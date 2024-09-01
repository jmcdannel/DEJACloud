<script setup lang="ts">
import type { PropType } from 'vue'
import { getFirestore, addDoc, setDoc, doc } from 'firebase/firestore'
import { useDocument } from 'vuefire'
import DejaLocoRoster from '@/components/Locos/DejaLocoRoster.ce.vue'
import type { DejaLayout } from '@/types/deja'
import { db } from '@/firebase'
const props = defineProps({
  layout: Object as PropType<DejaLayout>
})
const layoutDoc = useDocument(props.layout ? doc(db, 'layouts', props.layout.layoutId) : null)

function handleOn() {
  console.log('On', layoutDoc.value.layoutId)

  setDoc(
    doc(db, 'layouts', layoutDoc.value.layoutId),
    {
      dccEx: { powerStatus: '1 MAIN' }
    },
    { merge: true }
  )
}
function handleOff() {
  console.log('Off', layoutDoc.value.layoutId)
  setDoc(
    doc(db, 'layouts', layoutDoc.value.layoutId),
    {
      dccEx: { powerStatus: '0' }
    },
    { merge: true }
  )
}
</script>
<template>
  <main class="px-8 py-4" v-if="layoutDoc">
    <VaButton @click="$emit('back')" size="small" preset="secondary">Back</VaButton>
    <h1
      className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
    >
      {{ layoutDoc.name }}
    </h1>
    <p>{{ layoutDoc.layoutId }}</p>
    <VaButton @click="handleOn" preset="primary" color="pink-500">On</VaButton>
    <VaButton @click="handleOff" preset="primary" color="pink-500">Off</VaButton>
    <pre>{{ layoutDoc.dccEx }}</pre>
    <section class="my-4 grid gap-4 grid-cols-1">
      <VaCard
        v-for="mod in layoutDoc.modules"
        :key="mod"
        color="transparent"
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-pink-500 border-dotted border-opacity-50"
      >
        <VaCardTitle>{{ mod }}</VaCardTitle>
        <VaCardContent>
          <DejaLocoRoster v-if="mod.toString() === 'locos'" :layout="layoutDoc" />
        </VaCardContent>
        <VaCardActions>
          <VaButton preset="primary" color="pink-500">Manage</VaButton>
          <VaButton preset="primary" color="pink-500">Add</VaButton>
        </VaCardActions>
      </VaCard>
    </section>
  </main>
</template>
