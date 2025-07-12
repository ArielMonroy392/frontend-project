import PokemonImage from "../atoms/PokemonImage";
import Button from "../atoms/Button";
import "./Game.css";
import PokemonLoader from "../atoms/PokeballLoader";

export default function Game({ isLoading, randomPoke, hiddenPoke, isFinished, onSelectPokemon, language, tries, onNextTry }) {

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
                >
                  {pokemon.name.get(language)}
                </Button>
              </li>
            ))}
          </ul>}

          {isFinished && tries < 3 && (
            <Button variant="secondary" onClick={onNextTry}> Next pokemon </Button>
          )}
        </>
      )}
    </div>
  );
}
