import PokemonImage from "../atoms/PokemonImage";
import PokemonTitle from "../molecules/PokemonTitle";
import TypeBadge from "../molecules/typeBadge";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <article className={`card bg-${pokemon.types[0].type.name}`}>
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
        <PokemonImage
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>
    </article>
  );
};

export default PokemonCard;
