import Text from '../atoms/Text';
import styles from './PokemonIdentity.module.css';

const PokemonIdentity = ({ pokemon, size = 'normal', color = 'white' }) => {
  return (
    <div className={styles.pokemonIdentity}>
      <Text
        className={`${size === 'normal' ? 'textLarge' : 'textXxl'} ${color === 'white' ? `textWhite` : 'textBlack'} fontBold`}
      >
        #{pokemon.id.toString().padStart(3, '0')}
      </Text>
      <Text
        className={`capitalize fontBold ${size === 'normal' ? 'textXxl' : 'textMamouth'} ${color === 'white' ? 'textWhite' : 'textBlack'}`}
      >
        {pokemon.name}
      </Text>
    </div>
  );
};

export default PokemonIdentity;
