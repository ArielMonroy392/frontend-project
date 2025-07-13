import { useEffect, useState, useCallback } from "react";
import { API_BASE_URL, MAX_TRIES, SUPPORTED_LANGUAGES, API_SPRITE_BASE_URL } from "../constants/game";
import { toast } from "sonner";

export default function useGame() {
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
      toast.success(`Correct! ${pokemon.name.get(language)} is the hidden Pokémon!`);
    } else {
      toast.error(`Wrong! ${pokemon.name.get(language)} wasn´t the hidden Pokémon.`);
    }
    setIsFinished(true);
  }, [hiddenPoke, language]);



  const onSetLanguage = useCallback((lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    } else {
      console.error("Invalid language selected");
    }
  }, []);

  const fetchRandomPokemon = useCallback(async () => {
    setIsLoading(true);
    const randomArray = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 151 + 1)
    );

    try {
      const randomPokemon = await Promise.all(
        randomArray.map(async (val) => {
          const res = await fetch(`${API_BASE_URL}/${val}`);
          const data = await res.json();
          return data;
        })
      );

      const mappedPokemon = await Promise.all(randomPokemon.map(async (pokemon) => {
        const names = new Map();
        pokemon.names.forEach((nameObj) => {
          names.set(nameObj.language.name, nameObj.name);
        });

        return {
          id: pokemon.id,
          name: names,
        };
      }));
      const hiddenPokeIndex = Math.floor(Math.random() * 4);
      const hiddenPokemon = mappedPokemon[hiddenPokeIndex];
      const spriteUrl = `${API_SPRITE_BASE_URL}/${hiddenPokemon.id}.png`
      await new Promise(resolve => {
        const img = new Image();
        img.src = spriteUrl;
        img.onload = resolve;
      })

      hiddenPokemon.sprites = spriteUrl;
      setHiddenPoke(hiddenPokemon);
      setRandomPoke(mappedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);


  const onNextTry = useCallback(() => {
    if (tries < MAX_TRIES) {
      setIsFinished(false);
      fetchRandomPokemon();
    }
  }, [tries, fetchRandomPokemon]);

  const resetGame = useCallback(() => {
    setScore(0);
    setTries(0);
    setIsFinished(false);
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  useEffect(() => {
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  return {
    randomPoke,
    hiddenPoke,
    isLoading,
    isFinished,
    language,
    score,
    tries,
    onSelectPokemon,
    fetchRandomPokemon,
    onSetLanguage,
    onNextTry,
    resetGame
  };
}
