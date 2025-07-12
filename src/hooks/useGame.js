import { useEffect, useState, useCallback, useMemo } from "react";

export default function useGame() {
  const languages = useMemo(() => ["ja", "en", "fr", "de", "es", "it", "ko", "zh-Hans", "zh-Hant"], []);
  const [randomPoke, setRandomPoke] = useState([]);
  const [hiddenPoke, setHiddenPoke] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [language, setLanguage] = useState("en");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);

  const onSelectPokemon = useCallback((pokemon) => {
    setTries(prev => prev + 1);
    if (pokemon.id === hiddenPoke?.id) {
      setScore(prev => prev + 1);
    }
    setIsFinished(true);
  }, [hiddenPoke]);



  const onSetLanguage = useCallback((lang) => {
    if (languages.includes(lang)) {
      setLanguage(lang);
    } else {
      console.error("Invalid language selected");
    }
  }, [languages]);

  const fetchRandomPokemon = useCallback(async () => {
    setIsLoading(true);
    const randomArray = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 151 + 1)
    );

    try {
      const randomPokemon = await Promise.all(
        randomArray.map(async (val) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${val}`);
          const data = await res.json();
          return data;
        })
      );

      const mappedPokemon = randomPokemon.map((pokemon) => {
        const names = new Map();
        pokemon.names.forEach((nameObj) => {
          names.set(nameObj.language.name, nameObj.name);
        });

        return {
          id: pokemon.id,
          name: names,
          sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        };
      });



      const hiddenPokeIndex = Math.floor(Math.random() * 4);
      setHiddenPoke(mappedPokemon[hiddenPokeIndex]);
      setRandomPoke(mappedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);


  const onNextTry = useCallback(() => {
    if (tries < 3) {
      setIsFinished(false);
      fetchRandomPokemon();
    }
  }, [tries, fetchRandomPokemon]);

  useEffect(() => {
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  return {
    randomPoke,
    hiddenPoke,
    isLoading,
    isFinished,
    onSelectPokemon,
    fetchRandomPokemon,
    language,
    onSetLanguage,
    onNextTry,
    languages,
    score,
    tries,
  };
}
