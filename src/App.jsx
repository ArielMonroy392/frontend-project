
import './App.css'
import Input from './components/atoms/Input'
import Search from './components/molecules/Search'
import PokemonList from './components/organisms/PokemonList'
import Layout from './components/templates/Layout'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("")

  return (
    <Layout>
      <Search onChangeSearch={setSearch}></Search>
      <PokemonList search={search}/>
    </Layout>
  )
}

export default App
