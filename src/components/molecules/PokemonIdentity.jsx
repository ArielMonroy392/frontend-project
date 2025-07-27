import Text from '../atoms/Text';
import styles from './PokemonIdentity.module.css';

const PokemonIdentity = ({ pokemon, size = 'normal', color = 'white' }) => {
  return (
    <div className={styles.pokemonIdentity}>
      <Text
        className={`${size === 'normal' ? 'text-large' : 'text-xxl'} ${color === 'white' ? `text-white` : 'text-black'} font-bold`}
      >
        #{pokemon.id.toString().padStart(3, '0')}
      </Text>
      <Text
        className={`capitalize font-bold ${size === 'normal' ? 'text-xxl' : 'text-mamouth'} ${color === 'white' ? 'text-white' : 'text-black'}`}
      >
        {pokemon.name}
      </Text>
    </div>
  );
};

export default PokemonIdentity;
