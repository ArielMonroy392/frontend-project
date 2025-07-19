export default function PokemonStats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-stats">
      <h2>Base Stats</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
