
import './App.css'
import Input from './components/atoms/Input'
import Search from './components/molecules/Search'
import PokemonList from './components/organisms/PokemonList'
import Layout from './components/templates/Layout'
import { usePokemon } from './hooks/usePokemon'

function App() {
  const { setSearchValue, filteredPokemons, searchValue, isLoading, setLimit, fetchMore} = usePokemon()

  return (
    <Layout>
      <Search onChangeSearch={setSearchValue} search={searchValue} />
      <PokemonList pokemons={filteredPokemons} loading={isLoading} setLimit={setLimit} fetchMore={fetchMore} />
    </Layout>
  )
}

export default App
