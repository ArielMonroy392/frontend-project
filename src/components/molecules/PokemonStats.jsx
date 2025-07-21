export default function PokemonStats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="pokemon-stats">
      <h2>Base Stats</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.name}>
            {stat.name}: {stat.base}
          </li>
        ))}
      </ul>
    </div>
  );
}