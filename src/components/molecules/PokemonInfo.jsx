import PokemonTitle from './PokemonTitle.jsx';
import TypeBadge from './TypeBadge.jsx';
import Text from '../atoms/Text.jsx';
import './PokemonInfo.css';
import PokemonStats from './PokemonStats.jsx';
import PokemonData from './PokemonData.jsx';
import PokemonImage from '../atoms/PokemonImage.jsx';
import TabPanel from '../templates/TabPanel.jsx';
import { useMemo } from 'react';

export default function PokemonInfo({ pokemon }) {

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
    <div className='info-container'>
      <div className="pokemon-info">
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
      <div className={`pokemon-image bg-${pokemon.types[0]}`}>
        <div className="bg">
          <img src="/dots-lg.svg" alt="Dots" className="dots" />
          <img src="/pokeball-lg.svg" alt="Pokeball" className="pokeball" />
        </div>
        <PokemonImage src={pokemon.sprites.official} alt={`${pokemon.name} official artwork`} />
      </div>
    </div>
  );
}
