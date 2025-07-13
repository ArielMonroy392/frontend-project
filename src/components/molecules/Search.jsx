import { useEffect } from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import "./Search.css"
import { useDebounce } from "use-debounce";

export default function Search({ search, onChangeSearch }) {

  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    onChangeSearch(debouncedSearch);
  }, [debouncedSearch, onChangeSearch]);

  return <div className="banner">
    <Input
      value={search}
      onChange={(e) => { onChangeSearch(e.target.value) }}
      icon="search"
      placeholder="What Pokémon are you looking for?"
    ></Input>
    <Text className={"text-medium text-white"}>Search for Pokémon by name or using the National Pokédex number</Text>
    <Text className={"text-small text-white"}>{debouncedSearch}</Text>
  </div>
}