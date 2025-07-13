import PokemonImage from "../atoms/PokemonImage";
import Button from "../atoms/Button";
import "./Game.css";
import PokemonLoader from "../atoms/PokeballLoader";
import { MAX_TRIES } from "../../constants/game";
import Icon from "../atoms/Icon";

export default function Game({ isLoading, randomPoke, hiddenPoke, isFinished, onSelectPokemon, language, tries, onNextTry }) {
  console.log(randomPoke);
  return (
    <div className="game-container">
      {isLoading ? (
        <PokemonLoader />
      ) : (
        <>
          <div className="hidden-pokemon">
            {hiddenPoke && (
              <PokemonImage
                className={`${isFinished ? "" : "filter"}`}
                src={hiddenPoke.sprites}
              ></PokemonImage>
            )}
          </div>
          {<ul className="button-list">
            {randomPoke.map((pokemon) => (
              <li key={pokemon.id}>
                <Button
                  variant="primary"
                  onClick={() => onSelectPokemon(pokemon)}
                  disabled={isFinished || tries >= MAX_TRIES}
                >
                  {pokemon.name.get(language)}
                </Button>
              </li>
            ))}
          </ul>}

          {isFinished && tries < MAX_TRIES && (
            <Button variant="secondary" onClick={onNextTry}>
              Next pokemon
              <Icon icon="chevron_right" size={24} />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
