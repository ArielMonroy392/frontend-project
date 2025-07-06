import { usePokemon } from "../../hooks/usePokemon"
import Search from "../molecules/Search"
import PokemonList from "../organisms/PokemonList"

export default function List() {
  const { setSearchValue, filteredPokemons, searchValue, isLoading, setLimit, fetchMore } = usePokemon()
  return (
    <>
      <Search search={searchValue} onChangeSearch={setSearchValue} />
      <PokemonList
        pokemons={filteredPokemons}
        isLoading={isLoading}
        setLimit={setLimit}
        fetchMore={fetchMore}
      />
    </>
  )
}