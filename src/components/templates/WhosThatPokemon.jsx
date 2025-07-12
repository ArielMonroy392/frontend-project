import useGame from "../../hooks/useGame";
import { GameOver } from "../molecules/GameOver";
import Game from "../organisms/Game";
import LanguageSelection from "../organisms/LanguageSelection";

export default function WhosThatPokemon() {

  const { isLoading,
    randomPoke,
    hiddenPoke,
    isFinished,
    onSelectPokemon,
    languages,
    language,
    onSetLanguage,
    onNextTry,
    tries,
    score
  } = useGame();
  return (
    <>
      <LanguageSelection languages={languages} onLanguageChange={onSetLanguage} />
      {
        tries < 3 ? (
          <Game
            isLoading={isLoading}
            randomPoke={randomPoke}
            hiddenPoke={hiddenPoke}
            isFinished={isFinished}
            onSelectPokemon={onSelectPokemon}
            language={language}
            tries={tries}
            onNextTry={onNextTry}
          />
        ) : (
          <div className="game-over">
            <GameOver score={score} />
          </div>
        )
      }
    </>
  )
}