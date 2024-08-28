import { defineCustomElement } from 'vue'
import DejaHero from './DejaHero.ce.vue'

// Define the custom element
const DejaHeroElement = defineCustomElement(DejaHero)

// Register the custom element with the browser
customElements.define('deja-hero', DejaHeroElement)
