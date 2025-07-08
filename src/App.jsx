
import './App.css'
import Layout from './components/templates/Layout'
import List from './components/templates/List'
import { Route, Routes } from 'react-router'
import WhosThatPokemon from './components/templates/WhosThatPokemon'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='list' element={<List/>}></Route>
        <Route path='/' element={ <WhosThatPokemon/>}> </Route>

      </Route>
    </Routes>
  )
}

export default App
