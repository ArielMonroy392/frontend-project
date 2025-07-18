import { useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import PokemonLoader from "../atoms/PokeballLoader";
import "./PokemonList.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { toast } from "sonner";

export default function PokemonList({
  pokemons,
  loading,
  fetchMore,
  updateLimits,
  maxAvailable,
  resetLimits,
}) {
  const loaderRef = useRef(null);
  const minLimitInput = useRef(null);
  const maxLimitInput = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    if (loading) {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fetchMore();
          }
        },
        {
          root: null,
          rootMargin: "50px",
          threshold: 0.1,
        }
      );
    }

    observerRef.current.observe(loader);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [loading, fetchMore]);

  const handleResetLimits = () => {
    resetLimits();
    minLimitInput.current.value = '';
    maxLimitInput.current.value = '';
  };

  const handleSetNewLimits = (e) => {
    e.preventDefault();
    const min = minLimitInput.current.value;
    const max = maxLimitInput.current.value;
    if (min && max) {
      updateLimits([min, max]);
    } else {
      toast.error("Please enter both minimum and maximum values.");
    }
  };

  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list-range">
        <h2>Filter by Range</h2>
        <form onSubmit={handleSetNewLimits} className="pokemon-list-range-form">
          <Input ref={minLimitInput} id="min" type="number" placeholder="Min" />
          <Input ref={maxLimitInput} id="max" type="number" placeholder="Max" />
          <Button type="submit">Apply</Button>
        </form>
        <div className="pokemon-list-range-actions">
          <Button variant="secondary" onClick={handleResetLimits}>Reset Filters</Button>
        </div>
        <p>
          Showing {pokemons.length} of {maxAvailable} Pokémon
        </p>
      </div>
      <ul className="pokemon-list">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <li key={pokemon.id} className="pokemon-list-item">
              <PokemonCard pokemon={pokemon} />
            </li>
          ))
        ) : (
          <p>No Pokémon found</p>
        )}
      </ul>
      <div ref={loaderRef} style={{ height: 40, marginTop: 40, textAlign: "center" }}>
        {loading && <PokemonLoader />}
      </div>
    </div>
  );
}