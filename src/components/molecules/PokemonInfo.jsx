import PokemonTitle from './PokemonTitle.jsx';
import TypeBadge from './TypeBadge.jsx';
import Text from '../atoms/Text.jsx';
import './PokemonInfo.css';
import PokemonStats from './PokemonStats.jsx';
import PokemonData from './PokemonData.jsx';
import PokemonImage from '../atoms/PokemonImage.jsx';
import TabPanel from '../templates/TabPanel.jsx';
import { useMemo } from 'react';
import Background from '../atoms/Background.jsx';
import Button from '../atoms/Button.jsx';
import { useNavigate } from 'react-router';
import Icon from '../atoms/Icon.jsx';

export default function PokemonInfo({ pokemon, previousPokemon, nextPokemon }) {
  const navigate = useNavigate();
  const tabs = useMemo(
    () => [
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
    ],
    [pokemon]
  );

  return (
    <div className="info-container">
      <div className="pokemon-info">
        <Button onClick={() => navigate(-1)} variant="secondary">
          <Icon icon={'chevron_right'} size={24} />
        </Button>
        <PokemonTitle pokemon={pokemon} size={'large'} color={'black'} />
        <Text className={'text-gray text-xxl font-bold'}>
          Generation {pokemon.generation}
        </Text>
        <ul className="type_list">
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
        <Background size={'lg'} />
        <PokemonImage
          src={pokemon.sprites.official}
          alt={`${pokemon.name} official artwork`}
        />
        <Button onClick={previousPokemon}>
          Previous #{(pokemon.id - 1).toString().padStart(3, '0')}
        </Button>
        <Button onClick={nextPokemon}>
          Next #{(pokemon.id + 1).toString().padStart(3, '0')}
        </Button>
      </div>
    </div>
  );
}
