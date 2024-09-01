<script setup lang="ts">
import { ref } from 'vue'
import { getFirestore, addDoc, setDoc, doc } from 'firebase/firestore'
import { useCurrentUser } from 'vuefire'
import { db } from '../../firebase'

const user = useCurrentUser()
const layoutId = ref('')
const layoutName = ref('')

const layouts = ref([])
const layout = ref(null)

async function handleLayout() {
  console.log('handleLayout', layoutId.value, layoutName.value)

  const newLayout = {
    layoutId: layoutId.value,
    name: layoutName.value,
    modules: ['locos', 'turnouts', 'effects', 'routes', 'sensors'],
    owner: user.value?.email
  }

  try {
    const docRef = doc(db, 'layouts', layoutId.value)
    await setDoc(docRef, newLayout)
    console.log('Document written with ID: ', docRef?.id, newLayout, docRef)
    layout.value = docRef?.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
</script>
<template>
  <template v-if="layout">
    <h2 class="text-xl">Layout</h2>
    <pre>{{ layout }}</pre>
  </template>
  <template v-else>
    <main
      class="px-8 pt-6 pb-8 mb-4 flex flex-col mx-8 p-4 outline-secondary border-secondary rounded-lg bg-gradient-to-b from-gray-800 to bg-gray-950"
    >
      <h2 class="text-xl">
        Connect to your
        <span class="bg-clip-text bg-gradient-to-r text-transparent from-indigo-500 to-pink-400"
          >DEJA.js</span
        >
        powered layout.
      </h2>
      <label class="input input-bordered flex items-center gap-2 my-4">
        <input v-model="layoutId" type="text" class="grow" placeholder="Layout ID" />
        <span class="label-text-alt">
          <pre>.env LAYOUT_ID</pre>
        </span>
      </label>
      <p>
        DEJA Cloud requires a unique identifier for your layout. You can find this in your
        <code>.env</code> file as <code>LAYOUT_ID</code> wher you installed DEJA.js.

        <a
          href="https://github.com/jmcdannel/DEJA.js"
          target="_blank"
          rel="noopener"
          class="link-accent"
          >Learn more</a
        >
      </p>
      <label class="input input-bordered flex items-center gap-2 my-4">
        <input v-model="layoutName" type="text" class="grow" placeholder="Layout name" />
        <span class="badge badge-info">Optional</span>
      </label>
      <fieldset class="form-control my-4 max-w-32">
        <legend>Modules</legend>
        <div class="my-4 join join-vertical m-w-12">
          <input class="btn join-item" type="checkbox" name="modules" aria-label="Locos" checked />
          <input class="btn join-item" type="checkbox" name="modules" aria-label="Turnouts" />
          <input class="btn join-item" type="checkbox" name="modules" aria-label="Effects" />
          <input class="btn join-item" type="checkbox" name="modules" aria-label="Routes" />
          <input class="btn join-item" type="checkbox" name="modules" aria-label="Sensors" />
        </div>
      </fieldset>
      <button @click="handleLayout" class="btn btn-primary">
        Generate DEJA Cloud Layout Instance
      </button>
    </main>
  </template>
</template>
