
import './App.css'
import Layout from './components/templates/Layout'
import List from './components/templates/List'

import { Route, Routes } from 'react-router'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='list' element={<List/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
