import Text from '../atoms/Text';
import styles from './PokemonStats.module.css';
import StatItem from '../molecules/StatItem';

export default function PokemonStats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className={styles.pokemonStats}>
      <Text className={`text-${pokemon.types[0]} capitalize fontBold`}>
        Base Stats
      </Text>
      <ul className={styles.pokemonStatsList}>
        {pokemon.stats.map(stat => (
          <StatItem stat={stat} key={stat.name} />
        ))}
      </ul>
    </div>
  );
}
