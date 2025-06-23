import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import './PokemonList.css'

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
        const data = await response.json()
        const { results } = data
        const mappedPokemons = await Promise.all(results.map(async (pokemon) => {
          const newPokemon = await fetch(pokemon.url)
          return newPokemon.json()
        }))
        console.log('mappedPokemons', mappedPokemons)
        setPokemons(mappedPokemons)

      } catch (error) {
        console.error('Error fetching pokemons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [])

  return (<div className="pokemon-list-container">

    {
      loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="pokemon-list">
          {
            pokemons.map((pokemon) => (
              <li key={pokemon.id} className="pokemon-list-item">
                <PokemonCard pokemon={pokemon}></PokemonCard>
              </li>
            ))
          }
        </ul>
      )
    }
  </div>
  )
}