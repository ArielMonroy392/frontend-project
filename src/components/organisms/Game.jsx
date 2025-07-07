import { useEffect, useState } from "react";
import PokemonImage from "../atoms/PokemonImage";

export default function Game() {
  const [randomPoke, setRandomPoke] = useState([]);
  const [hiddenPoke, setHiddenPoke] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onSelectPokemon = (pokemon) => {
    console.log(pokemon, hiddenPoke)
    if (pokemon.id === hiddenPoke.id) {
      alert("U Got it!")
    } else {
      alert(`No the pokemon was ${hiddenPoke.name}`)
    }

    setIsFinished(true)
  }

  const fetchRandomPokemon = async () => {
    setIsLoading(true);
    const randomArray = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 151 + 1)
    );

    const randomPokemon = await Promise.all(
      randomArray.map(async (val) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`);
        const data = await res.json();
        return data;
      })
    );
    console.log(randomPokemon);
    setHiddenPoke(randomPokemon[Math.floor(Math.random() * 4 + 1)]);
    setRandomPoke(randomPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          {hiddenPoke && (
            <PokemonImage
              className={`${isFinished ? "" : "filter"}`}
              src={hiddenPoke.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
          )}
          {randomPoke.length > 0 && (
            <>
              {randomPoke.map((poke) => {
                return <button key={poke.id} onClick={() => onSelectPokemon(poke)}>{poke.name}</button>;
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}
