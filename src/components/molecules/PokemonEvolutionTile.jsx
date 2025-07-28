import PokemonImage from '../atoms/PokemonImage.jsx';
import PokemonIdentity from './PokemonIdentity.jsx';
import TypeBadge from './TypeBadge.jsx';
import styles from './PokemonEvolutionTile.module.css';

export default function PokemonEvolutionTile({ evolution }) {
  if (!evolution) return null;
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return (
    <div className={styles.pokemonEvolutionTile}>
      <img
        src={'/pokeball-lg.svg'}
        alt="Pokemon Image"
        className={styles.pokemonEvolutionImg}
      />
      <div className={styles.pokemonEvolutionContent}>
        <PokemonImage
          src={randomNumber === 3 ? evolution.sprites.shiny : evolution.sprites.official}
          alt={evolution.name}
        />
        <PokemonIdentity pokemon={evolution} color={'black'} />
        <ul className={styles.list}>
          {evolution.types.map((type, index) => (
            <TypeBadge type={type} key={index} onlyIcon rounded={'large'} />
          ))}
        </ul>
      </div>
    </div>
  );
}
