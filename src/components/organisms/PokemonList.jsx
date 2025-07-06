import { useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

export default function PokemonList({
  pokemons,
  loading,
  setLimit,
  fetchMore,
}) {
  const loaderRef = useRef(null);
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const loader = loaderRef.current;
    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [loading, fetchMore]);

  return (
    <div className="pokemon-list-container">
      <div>
        <label htmlFor="limit-select">Items per page:</label>
        <select
          id="limit-select"
          className="pokemon-list-select"
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <ul className="pokemon-list">
        {
          pokemons.length > 0 ? pokemons.map((pokemon) => (
          <li key={pokemon.id} className="pokemon-list-item">
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </li>
        )) : <p>No Pokémon found</p>
        }
      </ul>
      <div
        ref={loaderRef}
        style={{ height: 40, marginTop: 40, textAlign: "center" }}
      >
        {loading && <p>Loading more...</p>}
      </div>
    </div>
  );
}
