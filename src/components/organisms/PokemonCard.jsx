import { Link } from 'react-router';
import PokemonImage from '../atoms/PokemonImage';
import PokemonTitle from '../molecules/PokemonTitle';
import TypeBadge from '../molecules/TypeBadge';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <article className={`card bg-${pokemon.types[0]}`}>
        <div className="bg">
          <img src="/dots.svg" alt="Dots" className="dots" />
          <img src="/pokeball-bg.svg" alt="Pokeball" className="pokeball" />
        </div>
        <div className="card-info">
          <PokemonTitle pokemon={pokemon} />
          <ul>
            {pokemon.types.map((type, index) => (
              <li key={index}>
                <TypeBadge className={`type ${type}`} type={type}>
                  {type}
                </TypeBadge>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-image">
          <PokemonImage src={pokemon.sprites.official} alt={pokemon.name} />
        </div>
      </article>
    </Link>
  );
};

export default PokemonCard;
