import PokemonTitle from './PokemonTitle.jsx';
import TypeBadge from './TypeBadge.jsx';
import Text from '../atoms/Text.jsx';
import './PokemonInfo.css';
import { useNavigate } from 'react-router';
import Button from '../atoms/Button.jsx';
import Icon from '../atoms/Icon.jsx';
import PokemonStats from './PokemonStats.jsx';
import PokemonData from './PokemonData.jsx';
import TabPanel from '../templates/TabPanel.jsx';
import { useMemo } from 'react';

export default function PokemonInfo({ pokemon }) {
  const navigate = useNavigate();

  const tabs = useMemo(() => [
    {
      name: 'Stats',
      component: PokemonStats,
      props: { pokemon },
    },
    {
      name: 'Data',
      component: PokemonData,
      props: { pokemon },
    },
  ], [pokemon]);

  return (
    <div className="pokemon-info">
      <Button onClick={() => navigate(-1)} variant='secondary'>
        <Icon icon={'chevron_right'} size={24} />
      </Button>
      <PokemonTitle pokemon={pokemon} size={'large'} color={'black'} />
      <Text className={'text-gray text-xxl font-bold'}>
        Generation {pokemon.generation}
      </Text>
      <ul className='type_list'>
        {pokemon.types.map((type, index) => (
          <li key={index}>
            <TypeBadge
              className={`badge ${type}`}
              type={type}
              onlyIcon
              size={24}
              rounded={'large'}
            />
          </li>
        ))}
      </ul>

      <TabPanel tabs={tabs} />
    </div>
  );
}
