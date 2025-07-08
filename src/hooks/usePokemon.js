import { useState, useEffect, useCallback } from 'react'

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(25)
  const [offset, setOffset] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
       
          const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
          console.log('Fetching URL:', url) 
          const response = await fetch(url)
          const data = await response.json()
        
          localStorage.setItem('pokemonData', JSON.stringify(data))
        
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url)
            return pokemonResponse.json()
          })
        )

        setPokemons(prev =>
          offset === 0 ? pokemonDetails : [...prev, ...pokemonDetails]
        )
      

      } catch (error) {
        console.error('Error fetching pokemons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [offset, limit])

  const filterPokemons = useCallback((search) => {
    if (!search) {
      setFilteredPokemons(pokemons)
      return
    }

    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
      pokemon.id.toString().includes(search)
    )

    setFilteredPokemons(filtered)
  }, [pokemons])

  useEffect(() => {
    filterPokemons(searchValue)
  }, [searchValue, filterPokemons])

  const fetchMore = useCallback(() => {
    if (loading || searchValue) return
    setOffset(prevOffset => prevOffset + limit)
  }, [loading, limit, searchValue])

  return {
    pokemons,
    filteredPokemons,
    loading,
    setLimit,
    setOffset,
    setSearchValue,
    searchValue,
    limit,
    offset,
    filterPokemons,
    fetchMore,
  }
}
