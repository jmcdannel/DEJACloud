import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from './firebase'

const app = createApp(App)
app.use(VueFire, {
  firebaseApp,
  modules: [
    // ... other modules
    VueFireAuth()
  ]
})
app.mount('#app')
