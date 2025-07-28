import Text from '../atoms/Text';
import TypeBadge from '../molecules/TypeBadge';
import styles from './PokemonData.module.css';

export default function PokemonData({ pokemon }) {
  return (
    <div className={styles.pokemonData}>
      <Text className={`text-${pokemon.types[0]} capitalize fontBold`}>
        {' '}
        About this pokemon
      </Text>
      <p>{pokemon.flavor_text}</p>
      <ul className={styles.pokemonDataList}>
        <li>
          <Text className={'text-black capitalize fontBold'}>Species: </Text>{' '}
          {pokemon.species}
        </li>
        <li>
          <Text className={'text-black capitalize fontBold'}>Height: </Text>{' '}
          {pokemon.height} m
        </li>
        <li>
          <Text className={'text-black capitalize fontBold'}>Weight: </Text>{' '}
          {pokemon.weight} kg
        </li>
        <li>
          <Text className={'text-black capitalize fontBold'}>Abilities: </Text>{' '}
          <ul className={styles.list}>
            {pokemon.abilities.map(ability => {
              return (
                <Text className={'text-black capitalize'} key={ability.name}>
                  {ability.name} {ability.hidden ? '(Hidden)' : ''}
                </Text>
              );
            })}
          </ul>
        </li>
        <li>
          <Text className={'text-black capitalize fontBold'}>Weakness: </Text>
          <ul className={styles.list}>
            {pokemon.weaknesses.length > 0 ? (
              pokemon.weaknesses.map((weakness, index) => (
                <TypeBadge key={index} onlyIcon type={weakness} />
              ))
            ) : (
              <Text className={'text-black capitalize'}>None</Text>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
