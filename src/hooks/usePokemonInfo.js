import { useState, useCallback, useEffect, useMemo } from 'react';
import { fetchPokemonById, fetchPokemonSpecies } from '../services/PokemonServices';
import { formatPokemonData } from '../utils/Utils';

const usePokemonInfo = ({ id }) => {

  const [formattedPokemon, setFormattedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const findFormattedPokemon = useCallback(async () => {
    try {
      setLoading(true);
      const pokemonData = await fetchPokemonById(id);
      const speciesData = await fetchPokemonSpecies(id);
      const formattedPokemon = formatPokemonData(pokemonData, speciesData);
      setFormattedPokemon(formattedPokemon);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      findFormattedPokemon();
    }
  }, [id, findFormattedPokemon]);

  const data = useMemo(() => {
    if (loading) return { loading: true };
    if (error) return { error };
    return { pokemon: formattedPokemon };
  }, [loading, error, formattedPokemon]);

  return data;
}
export default usePokemonInfo;
