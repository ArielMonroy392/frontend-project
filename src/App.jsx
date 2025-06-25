
import './App.css'
import Input from './components/atoms/Input'
import Search from './components/molecules/Search'
import PokemonList from './components/organisms/PokemonList'
import Layout from './components/templates/Layout'

function App() {
  

  return (
    <Layout>
      <Search></Search>
      <PokemonList/>
    </Layout>
  )
}

export default App
