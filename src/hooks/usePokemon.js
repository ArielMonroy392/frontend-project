import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
const limit = 25;

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [limits, setLimits] = useState([1, 0]);


  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(prev =>
        offset === 0 ? pokemonDetails : [...prev, ...pokemonDetails]
      );
      setLimits(prev => [1, prev[1] + pokemonDetails.length]);
      setFilteredPokemons(prev =>
        offset === 0 ? pokemonDetails : [...prev, ...pokemonDetails]
      );
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
    } finally {
      console.log("Pokemons fetched:");
      setLoading(false);
    }
  }, [offset]);


  const filterPokemons = useCallback((search) => {
    setSearchValue(search);
    const rangePokemon = pokemons.slice(limits[0] - 1, limits[1]);
    if (!search) {
      setFilteredPokemons(rangePokemon);
      return;
    }
    const filtered = rangePokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
      pokemon.id.toString().includes(search)
    );
    setFilteredPokemons(filtered);
  }, [pokemons, limits]);


  const fetchMore = useCallback(() => {
    if (loading || searchValue || limits[0] !== 1 || limits[1] !== pokemons.length) {
      return;
    }
    setOffset(prev => prev + limit);
  }, [loading, searchValue, limits, pokemons.length]);



  const updateLimits = useCallback((newLimits) => {

    if (newLimits.length !== 2 || newLimits.some(isNaN)) {
      toast.error("Please enter valid minimum and maximum values.");
      return;
    }
    if (newLimits[0] < 1 || newLimits[1] > pokemons.length || newLimits[0] >= newLimits[1]) {
      toast.error("Invalid range. Please ensure the minimum is less than the maximum and within the available Pokémon range.");
      return;
    }
    const min = Number(newLimits[0]);
    const max = Number(newLimits[1]);
    setLimits([min, max]);
    setFilteredPokemons(pokemons.slice(min - 1, max));
    setSearchValue('');
  }, [pokemons]);



  const maxAvailable = useMemo(() => pokemons.length, [pokemons]);


  const resetLimits = useCallback(() => {
    setLimits([1, maxAvailable]);
    setFilteredPokemons(pokemons.slice(0, maxAvailable));
    setSearchValue('');
  }, [maxAvailable, pokemons]);




  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);


  return {
    pokemons,
    filteredPokemons,
    loading,
    searchValue,
    fetchMore,
    updateLimits,
    limits,
    maxAvailable,
    resetLimits,
    filterPokemons
  };
};
