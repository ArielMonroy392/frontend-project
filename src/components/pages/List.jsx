import { usePokemon } from "../../hooks/usePokemon";
import Search from "../molecules/Search";
import PokemonList from "../organisms/PokemonList";

export default function List() {
  const {
    filteredPokemons,
    loading,
    fetchMore,
    searchValue,
    limits,
    updateLimits,
    maxAvailable,
    resetLimits,
    filterPokemons
  } = usePokemon();

  return (
    <>
      <Search searchValue={searchValue} onChangeSearch={filterPokemons} />
      <PokemonList
        pokemons={filteredPokemons}
        loading={loading}
        fetchMore={fetchMore}
        updateLimits={updateLimits}
        limits={limits}
        maxAvailable={maxAvailable}
        resetLimits={resetLimits}
      />
    </>
  );
}
