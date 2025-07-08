import PokemonImage from "../atoms/PokemonImage";
import Button from "../atoms/Button";
import "./Game.css";

export default function Game({ isLoading, randomPoke, hiddenPoke, isFinished, onSelectPokemon, language }) {

  return (
    <div className="game-container">
      {isLoading ? (
        <div>loading</div>
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
        </>
      )}
    </div>
  );
}
