import { useParams } from "react-router";
import PokemonTitle from "../molecules/PokemonTitle";
import usePokemonInfo from "../../hooks/usePokemonInfo";
import PokemonLoader from "../atoms/PokeballLoader";
import PokemonStats from "../molecules/PokemonStats.jsx";
import TabPanel from "../templates/TabPanel.jsx";

export default function PokemonInfo() {
  const params = useParams();
  const { pokemon, loading, error } = usePokemonInfo({ id: params.id });
  console.log("PokemonInfo", pokemon, loading, error);
  return (
    <div className="pokemon-info">
      <h1>Pokemon Information</h1>
      {loading && <PokemonLoader />}
      {error && <p className="error">Error: {error}</p>}
      {pokemon && (
          <>
            <PokemonTitle pokemon={pokemon} />
            <TabPanel components={[ <PokemonStats pokemon={pokemon} />, <PokemonTitle pokemon={pokemon} /> ]} names={["Stats", "Title"]} />
          </>
      )}
    </div>
  );
}
