import Text from "../atoms/Text";
import './PokemonTitle.css';

const PokemonTitle = ({ pokemon }) => {
    return (
        <div className="pokemon-info font-bold">
            <Text className="text-large">#{pokemon.number}</Text>
            <Text className="capitalize text-xxl font-bold">{pokemon.name}</Text>
        </div>
    )
}

export default PokemonTitle;