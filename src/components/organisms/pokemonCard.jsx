import PokemonImage from "../atoms/PokemonImage";
import PokemonTitle from "../molecules/PokemonTitle";
import TypeBadge from "../molecules/typeBadge";
import './PokemonCard.css'; // Assuming you have a CSS file for styling

const PokemonCard = ({ pokemon }) => {
    return (
        <article className={`card card-${pokemon.types[0]}`}>
            <div className="card-info">
                <PokemonTitle pokemon={pokemon} />
                <ul>
                    {
                        pokemon.types.map((type, index) => (
                            <li key={index}>
                                <TypeBadge className={`type ${type}`} type={type}>{type}</TypeBadge>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="card-image">
                <PokemonImage
                    src={pokemon.image}
                    alt={pokemon.name}
                />
            </div>

        </article>
    )
}

export default PokemonCard;