<script setup>
import { ref, onMounted } from 'vue'
import { signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import DejaLogin from './DejaLogin.ce.vue'
import DejaSignout from './DejaSignout.ce.vue'

const user = useCurrentUser()
</script>

<template>
  <template v-if="!user">
    <slot name="login-header"></slot>
    <slot>
      <DejaLogin />
    </slot>
  </template>
  <template v-else>
    <slot name="authenticated">
      <div class="alert alert-success">
        Welcome, {{ user.displayName }}
        <DejaSignout />
      </div>
    </slot>
  </template>
</template>
