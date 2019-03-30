import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemons: ['Bulbasaur', 'Charmander']
    }
  }

  componentDidMount () {
    console.log('mounted')
  }
  render () {
    const { pokemons } = this.state
    const { filter } = this.props
    const filterPokemons = filter ? pokemons.filter(name => name === filter) : pokemons

    return (
      <ul>
        {filterPokemons.map(pokemon => (<li key={pokemon}>{pokemon}</li>))}
      </ul>
    )
  }
}

export default App
