import { useParams } from 'react-router';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonLoader from '../atoms/PokeballLoader';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import "./PokemonInfo.css"
import { useMemo } from 'react';
import PokemonStats from '../molecules/PokemonStats.jsx';
import PokemonData from '../molecules/PokemonData.jsx';
import './PokemonInfo.css';
import Button from '../atoms/Button.jsx';
import Icon from '../atoms/Icon';
import PokemonTitle from '../molecules/PokemonTitle.jsx';
import TypeBadge from '../molecules/TypeBadge.jsx';
import TabPanel from '../templates/TabPanel.jsx';
import Background from '../atoms/Background.jsx';
import PokemonImage from '../atoms/PokemonImage';
import Text from '../atoms/Text.jsx';

export default function PokemonInfoPage() {
  const params = useParams();
  const { pokemon, loading, error } = usePokemonInfo({ id: params.id });
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
    <>
      {loading && <PokemonLoader />}
      {error && <p className="error">Error: {error}</p>}
      {pokemon && (
        <>
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
              <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
                <Button onClick={previousPokemon} variant='secondary'>
                  Previous #{(pokemon.id - 1).toString().padStart(3, '0')}
                </Button>
                <Button onClick={nextPokemon}>
                  Next #{(pokemon.id + 1).toString().padStart(3, '0')}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
