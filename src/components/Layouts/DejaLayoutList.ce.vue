<script setup>
import { ref, onMounted } from 'vue'
import { getFirestore, collection, query, where } from 'firebase/firestore'
import { useCollection, useCurrentUser } from 'vuefire'
import { db } from '../../firebase'

const user = useCurrentUser()
const layoutsRef = collection(db, 'layouts')
const layouts = useCollection(query(layoutsRef, where('owner', '==', user.value?.email)))
</script>

<template>
  <main class="px-8 pt-6 pb-8 mb-4">
    <pre>{{ layouts }}</pre>
    <pre>{{ pending }}</pre>
    <pre>{{ error }}</pre>
    <pre>{{ promise }}</pre>
  </main>
</template>
