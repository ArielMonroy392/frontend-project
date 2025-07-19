import useGame from "../../hooks/useGame";
import Button from "../atoms/Button";
import Game from "../organisms/Game";
import LanguageSelection from "../organisms/LanguageSelection";
import Text from "../atoms/Text";
import { MAX_TRIES } from "../../constants/game";
import Icon from "../atoms/Icon";
import "./WhosThatPokemon.css";

export default function WhosThatPokemon() {

  const { isLoading,
    randomPoke,
    hiddenPoke,
    isFinished,
    onSelectPokemon,
    language,
    onSetLanguage,
    onNextTry,
    tries,
    score,
    resetGame
  } = useGame();
  return (
    <div className="whos-that-pokemon">
      <LanguageSelection onLanguageChange={onSetLanguage} />
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
      {
        tries === MAX_TRIES &&
        <div className="game-over">
          <Text className="text-xl">Your score: {" "} {score}</Text>
          <Button onClick={resetGame}>
            Restart
            <Icon icon="replay" size={24} />
          </Button>
        </div>
      }
    </div>
  )
}