import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import PokemonIdentity from './PokemonIdentity';
import Text from '../atoms/Text';
import TypeBadge from './TypeBadge';
import styles from './PokemonHeaderSection.module.css';

export default function PokemonHeaderSection({ pokemon, onBack }) {
  return (
    <div className={styles.headerContainer}>
      <Button onClick={onBack} variant="secondary" size={"fit"}>
        <Icon icon={'left_arrow'} size={24} />
      </Button>
      <PokemonIdentity pokemon={pokemon} size={'large'} color={'black'} />
      <Text className="textGray textXxl fontBold">
        Generation {pokemon.generation}
      </Text>
      <ul className={styles.typeList}>
        {pokemon.types.map((type, i) => (
          <li key={i}>
            <TypeBadge
              className={`badge ${type}`}
              type={type}
              onlyIcon
              size={24}
              rounded="large"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
