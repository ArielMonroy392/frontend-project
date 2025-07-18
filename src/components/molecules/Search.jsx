import Input from "../atoms/Input";
import Text from "../atoms/Text";
import "./Search.css"

export default function Search({ searchValue, onChangeSearch }) {


  const handleSearchChange = (e) => {
    onChangeSearch(e.target.value);
  }

  return <div className="banner">
    <Input
      value={searchValue}
      onChange={handleSearchChange}
      icon="search"
      placeholder="What Pokémon are you looking for?"
      className="box-shadow w-full"
    ></Input>
    <Text className={"text-medium text-white"}>Search for Pokémon by name or using the National Pokédex number</Text>
  </div>
}