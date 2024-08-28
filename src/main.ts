import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import DejaHero from './components/DejaHero.ce.vue'

// Define the custom element
const DejaHeroElement = defineCustomElement(DejaHero)

// Register the custom element with the browser
customElements.define('deja-hero', DejaHeroElement)

createApp(App).mount('#app')
