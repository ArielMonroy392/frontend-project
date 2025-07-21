import Text from "../atoms/Text";
import "./PokemonStats.css";

export default function PokemonStats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-stats">
      <Text className={`text-${pokemon.types[0]} capitalize font-bold`}>Base Stats</Text>
      <ul className="pokemon-stats-list">
        {pokemon.stats.map((stat) => (
          <li key={stat.name}>
            <Text className={`text-black capitalize font-bold`}>{stat.name}</Text>: {stat.base}
          </li>
        ))}
      </ul>
    </div>
  );
}