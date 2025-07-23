import { useParams } from 'react-router';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonLoader from '../atoms/PokeballLoader';
import PokemonInfo from '../molecules/PokemonInfo.jsx';
import { useNavigate } from 'react-router';
import Button from "../atoms/Button.jsx";
import Icon from '../atoms/Icon.jsx';

export default function PokemonInfoPage() {
  const params = useParams();
  const { pokemon, loading, error } = usePokemonInfo({ id: params.id });
  const navigate = useNavigate();
  return (
    <div className="pokemon-info">
      <Button onClick={() => navigate(-1)} variant='secondary'>
        <Icon icon={'chevron_right'} size={24} />
      </Button>
      {loading && <PokemonLoader />}
      {error && <p className="error">Error: {error}</p>}
      {pokemon && (
        <>
          <PokemonInfo pokemon={pokemon} />
        </>
      )}
    </div>
  );
}
