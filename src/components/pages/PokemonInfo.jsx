import { useParams } from 'react-router';
import PokemonTitle from '../molecules/PokemonTitle';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonLoader from '../atoms/PokeballLoader';
import PokemonStats from '../molecules/PokemonStats.jsx';
import TabPanel from '../templates/TabPanel.jsx';
import TypeBadge from '../molecules/TypeBadge.jsx';
import PokemonInfo from '../molecules/PokemonInfo.jsx';

export default function PokemonInfoPage() {
  const params = useParams();
  const { pokemon, loading, error } = usePokemonInfo({ id: params.id });
  const tabs = [
    {
      name: 'Stats',
      component: props => <PokemonStats {...props} />,
      props: { pokemon },
    },
    {
      name: 'Title',
      component: props => <PokemonTitle {...props} />,
      props: { pokemon },
    },
  ];
  return (
    <div className="pokemon-info">
      <h1>Pokemon Information</h1>
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
