import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import './PokemonList.css'

export default function PokemonList({search}) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const url = search ? `https://pokeapi.co/api/v2/pokemon/${search}` : 'https://pokeapi.co/api/v2/pokemon?limit=10'
        const response = await fetch(url)
        const data = await response.json()
        console.log('Response:', data)
        const { results } = data
        const mappedPokemons = await Promise.all(results.map(async (pokemon) => {
          const newPokemon = await fetch(pokemon.url)
          return newPokemon.json()
        }))
        setPokemons(mappedPokemons)

      } catch (error) {
        console.error('Error fetching pokemons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [search])

  return (<div className="pokemon-list-container">
    <span>{search}</span>
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