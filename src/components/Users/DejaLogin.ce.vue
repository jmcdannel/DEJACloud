<script>
import { GithubAuthProvider } from 'firebase/auth'
export const githubAuthProvider = new GithubAuthProvider()
</script>
<script setup>
import { ref, onMounted } from 'vue'
import { getRedirectResult, signInWithPopup } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { FaGithubAlt, FaGoogle, FaMicrosoft, FaApple, FaFacebook } from 'vue3-icons/fa6'

const auth = useFirebaseAuth()

// display errors if any
const error = ref(null)

function handleGithubSignin() {
  signInWithPopup(auth, githubAuthProvider).catch((reason) => {
    console.error('Failed signinRedirect', reason)
    error.value = reason
  })
}

onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})
</script>

<template>
  <main class="px-8 pt-6 pb-8 mb-4">
    <template v-if="error">
      <div class="alert alert-error">
        {{ error.message }}
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col space-y-4 max-w-64">
        <button @click="handleGithubSignin" class="btn btn-outline btn-github justify-start">
          <FaGithubAlt /> Sign in with GitHub
        </button>
        <button class="btn btn-outline btn-facebook justify-start" disabled>
          <FaFacebook /> Sign in with Facebook
        </button>
        <button class="btn btn-outline btn-google justify-start" disabled>
          <FaGoogle /> Sign in with Google
        </button>
        <button class="btn btn-outline btn-apple justify-start" disabled>
          <FaApple /> Sign in with Apple
        </button>
        <button class="btn btn-outline btn-microsoft justify-start" disabled>
          <FaMicrosoft /> Sign in with Microsoft
        </button>
      </div>
    </template>
  </main>
</template>
