import PokemonInfo from "../molecules/pokemonInfo";
import TypeBadge from "../molecules/typeBadge";

const PokemonCard = ({pokemon }) => {
    return (
        <article className="card">
            <PokemonInfo pokemon={pokemon} />
            <div className="card-image">
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    />
                {
                pokemon.types.map((type, index) => (
                    <TypeBadge key={index} className={`type ${type}`}>{type}</TypeBadge>
                ))
            }
            </div>
            
        </article>
    )
}

export default PokemonCard;