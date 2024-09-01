import './assets/main.css'

import { createApp } from 'vue'
import { createVuestic, createIconsConfig } from 'vuestic-ui'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import vuesticConfig from '../vuestic.config'
import { firebaseApp } from './firebase'

const app = createApp(App)
app.use(createVuestic({ config: vuesticConfig }))
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.mount('#app')
