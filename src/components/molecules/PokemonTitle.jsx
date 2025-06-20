import Text from "../atoms/Text";
import './PokemonTitle.css';

const PokemonTitle = ({ pokemon }) => {
    return (
        <div className="pokemon-info font-bold">
            <Text className="text-large">#{pokemon.id.toString().padStart(3, "0")}</Text>
            <Text className="capitalize text-xxl font-bold">{pokemon.name}</Text>
        </div>
    )
}

export default PokemonTitle;