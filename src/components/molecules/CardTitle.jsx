import Label from "../atoms/label";

const CardTitle = ({ pokemon }) => {
    return (
        <div className="pokemon-info">
            <Label>#{pokemon.number}</Label>
            <Label className="capitalize">{pokemon.name}</Label>
        </div>
    )
}

export default CardTitle;