import PokemonEvolutionTile from '../molecules/PokemonEvolutionTile.jsx';
import Text from '../atoms/Text.jsx';
import styles from './PokemonEvolutions.module.css';

export default function PokemonEvolutions({ pokemon }) {
  console.log(pokemon.evolution);
  if (!pokemon || !pokemon.evolution) return null;

  return (
    <div className={styles.pokemonEvolutions}>
      <Text className={`text-${pokemon.types[0]} capitalize fontBold`}>
        Evolution Chart
      </Text>
      <ul className={styles.pokemonEvolutionsList}>
        {pokemon.evolution.chain.map((evolution, index) => (
          <PokemonEvolutionTile evolution={evolution} key={index} />
        ))}
      </ul>
    </div>
  );
}
