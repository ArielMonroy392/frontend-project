import useGame from "../../hooks/useGame";
import Game from "../organisms/Game";
import LanguageSelection from "../organisms/LanguageSelection";

export default function WhosThatPokemon() {

  const { isLoading, randomPoke, hiddenPoke, isFinished, onSelectPokemon, languages, language, onSetLanguage } = useGame();
  return (
    <>
      <LanguageSelection languages={languages} onLanguageChange={onSetLanguage} />
      <Game
        isLoading={isLoading}
        randomPoke={randomPoke}
        hiddenPoke={hiddenPoke}
        isFinished={isFinished}
        onSelectPokemon={onSelectPokemon}
        language={language}
      />
    </>
  )
}