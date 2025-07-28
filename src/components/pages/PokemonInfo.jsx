import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonLoader from '../atoms/PokeballLoader';
import PokemonInfoContent from '../organisms/PokemonInfoContent';

export default function PokemonInfoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemonInfo({ id });
  console.log(pokemon);

  const goTo = useCallback(id => navigate(`/pokemon/${id}`), [navigate]);

  const previousId = pokemon ? (pokemon.id > 1 ? pokemon.id - 1 : 1025) : null;
  const nextId = pokemon ? (pokemon.id < 1025 ? pokemon.id + 1 : 1) : null;

  return (
    <>
      {loading && <PokemonLoader />}
      {error && <p className="error">Error: {error}</p>}
      {pokemon && (
        <PokemonInfoContent
          pokemon={pokemon}
          onPrevious={() => goTo(previousId)}
          onNext={() => goTo(nextId)}
          onBack={() => navigate(-1)}
        />
      )}
    </>
  );
}
