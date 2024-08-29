<script setup>
import { ref, onMounted } from 'vue'
import { signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth()
const user = useCurrentUser()

function handleSignOut() {
  signOut(auth).catch((reason) => {
    console.error('Failed signOut', reason)
    error.value = reason
  })
}
</script>

<template>
  <button class="btn btn-primary" @click="handleSignOut" :disabled="!user">Sign out</button>
</template>
