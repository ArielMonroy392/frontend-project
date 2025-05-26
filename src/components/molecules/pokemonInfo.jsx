import Label from "../atoms/label";

const PokemonInfo = ({ pokemon }) => {
    return (
        <div className="pokemon-info">
            <Label>#{pokemon.number}</Label>
            <Label className="capitalize">{pokemon.name}</Label>
        </div>
    )
}

export default PokemonInfo;