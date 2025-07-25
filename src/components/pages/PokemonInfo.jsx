import { useParams } from 'react-router';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonLoader from '../atoms/PokeballLoader';
import PokemonInfo from '../molecules/PokemonInfo.jsx';
import { useNavigate } from 'react-router';
import Button from '../atoms/Button.jsx';
import Icon from '../atoms/Icon.jsx';
import { useCallback } from 'react';

export default function PokemonInfoPage() {
  const params = useParams();
  const { pokemon, loading, error } = usePokemonInfo({ id: params.id });
  const navigate = useNavigate();
  const previousPokemon = useCallback(async () => {
    if (pokemon && pokemon.id > 1) {
      navigate(`/pokemon/${pokemon.id - 1}`);
    }
  }, [pokemon, navigate]);

  const nextPokemon = useCallback(async () => {
    if (pokemon && pokemon.id < 898) {
      navigate(`/pokemon/${pokemon.id + 1}`);
    }
  }, [pokemon, navigate]);

  return (
    <div className="pokemon-info">
      {loading && <PokemonLoader />}
      {error && <p className="error">Error: {error}</p>}
      {pokemon && (
        <>
          <PokemonInfo
            pokemon={pokemon}
            nextPokemon={nextPokemon}
            previousPokemon={previousPokemon}
          />
        </>
      )}
    </div>
  );
}
