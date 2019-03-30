/* global HTMLElement */
import bootstrap from './bootstrap'

class PokedexApp extends HTMLElement {
  constructor () {
    super()
    this.customProperties = {}
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <div id="pokedex-app">
      </div>
    `
  }

  static get observedAttributes () {
    return ['src', 'filter']
  }

  static get is () {
    return 'pokedex-app'
  }

  get filter () {
    return this.getAttribute('filter')
  }

  set filter (newValue) {
    this.setAttribute('filter', newValue)
  }

  get src () {
    return this.getAttribute('src')
  }

  set src (newValue) {
    this.setAttribute('src', newValue)
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector('#pokedex-app')
    bootstrap(element, this.src, this.filter)
  }

  connectedCallback () {
    const element = this.shadowRoot.querySelector('#pokedex-app')
    bootstrap(element, this.src, this.filter)
  }
}

window.customElements.define(PokedexApp.is, PokedexApp)
