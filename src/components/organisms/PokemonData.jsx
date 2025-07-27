import Text from '../atoms/Text';
import TypeBadge from '../molecules/TypeBadge';
import styles from './PokemonData.module.css';

export default function PokemonData({ pokemon }) {
  return (
    <div className={styles.pokemonData}>
      <Text className={`text-${pokemon.types[0]} capitalize font-bold`}>
        {' '}
        About this pokemon
      </Text>
      <p>{pokemon.flavor_text}</p>
      <ul className={styles.pokemonDataList}>
        <li>
          <Text className={'text-black capitalize font-bold'}>Species: </Text>{' '}
          {pokemon.species}
        </li>
        <li>
          <Text className={'text-black capitalize font-bold'}>Height: </Text>{' '}
          {pokemon.height} m
        </li>
        <li>
          <Text className={'text-black capitalize font-bold'}>Weight: </Text>{' '}
          {pokemon.weight} kg
        </li>
        <li>
          <Text className={'text-black capitalize font-bold'}>Abilities: </Text>{' '}
          {pokemon.abilities.map(ability => {
            return (
              <Text className={'text-black capitalize'} key={ability.name}>
                {ability.name} {ability.hidden ? '(Hidden)' : ''}
              </Text>
            );
          })}
        </li>
        <li>
          <Text className={'text-black capitalize font-bold'}>Weakness: </Text>
          {pokemon.weaknesses.length > 0 ? (
            pokemon.weaknesses.map((weakness, index) => (
              <TypeBadge key={index} onlyIcon type={weakness} />
            ))
          ) : (
            <Text className={'text-black capitalize'}>None</Text>
          )}
        </li>
      </ul>
    </div>
  );
}
