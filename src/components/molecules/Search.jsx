import { useState } from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import "./Search.css"
import { useDebounce } from "use-debounce";

export default function Search({onChangeSearch}) {

  const [search, setSearch] = useState("")
  const [debouncedSearch] = useDebounce(search, 300);


  const handleInputChange = (event) => {
    setSearch(event.target.value);
    if (onChangeSearch) {
      onChangeSearch(event.target.value);
    }
  }
  
  return <div className="banner">
    <Input 
      value={search} 
      onChange={(e) => { handleInputChange(e) }}
      icon="search"
      placeholder="What Pokémon are you looking for?"
    ></Input>
    <Text className={"text-medium text-white"}>Search for Pokémon by name or using the National Pokédex number</Text>
    <Text className={"text-small text-white"}>{debouncedSearch}</Text>
  </div>
}