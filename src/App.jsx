import './App.css'
import PokemonCard from './components/organisms/pokemonCard'

const pokemon = {
  name: 'Bulbasaur',
  number: '001',
  types: ['grass', 'poison'],
  image: '01.png',
}

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  )
}

export default App
