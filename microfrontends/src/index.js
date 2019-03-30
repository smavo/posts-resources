import '../apps/pokedex-app/dist/main'
import '../apps/captured-app/dist/main'
import '../apps/search-app/dist/search-app'

const microAngular = document.querySelector('search-app')
const microReact = document.querySelector('pokedex-app')

microAngular.addEventListener('filter-changed', (event) => {
  microReact.filter = event.detail
})
