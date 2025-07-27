import { Link } from 'react-router';
import PokemonImage from '../atoms/PokemonImage';
import PokemonIdentity from '../molecules/PokemonIdentity.jsx';
import TypeBadge from '../molecules/TypeBadge';
import styles from './PokemonCard.module.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className={`${styles.link}`}>
      <article className={`${styles.card} bg-${pokemon.types[0]}`}>
        <div className="bg">
          <img src="/dots.svg" alt="Dots" className={`${styles.dots}`} />
          <img
            src="/pokeball-bg.svg"
            alt="Pokeball"
            className={`${styles.pokeball}`}
          />
        </div>
        <div className={`${styles.cardInfo}`}>
          <PokemonIdentity pokemon={pokemon} />
          <ul className={`${styles.typeList}`}>
            {pokemon.types.map((type, index) => (
              <li key={index}>
                <TypeBadge className={`type ${type}`} type={type}>
                  {type}
                </TypeBadge>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.cardImage}`}>
          <PokemonImage src={pokemon.sprites.official} alt={pokemon.name} />
        </div>
      </article>
    </Link>
  );
};

export default PokemonCard;
