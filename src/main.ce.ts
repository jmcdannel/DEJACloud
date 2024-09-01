import './assets/main.css'
import { defineCustomElement } from 'vue'
import DejaHero from './components/DejaHero.ce.vue'
import DejaUsername from './components/DejaUsername.ce.vue'
import DejaLogin from './components/Users/DejaLogin.ce.vue'

// Define the custom element
const DejaHeroElement = defineCustomElement(DejaHero)
const DejaUsernameElement = defineCustomElement(DejaUsername)
const DejaLoginElement = defineCustomElement(DejaLogin)

// Register the custom element with the browser
customElements.define('deja-hero', DejaHeroElement)
customElements.define('deja-username', DejaUsernameElement)
customElements.define('deja-login', DejaLoginElement)
