import pokeAxios from "./Axios";
import {formatPokemon} from "../utils/Utils.js";

export async function fetchPokemons({ offset = 0, limit = 25 }) {
  const response = await pokeAxios.get("pokemon", {
    params: { offset, limit },
  });

  if (!response.data || !response.data.results) {
    throw new Error("Failed to fetch pokemons");
  }

  const pokemonDetails = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const res = await pokeAxios.get(pokemon.url);
      return res.data;
    })
  );

  return pokemonDetails.map((pokemon) => { return formatPokemon(pokemon); });
}

export async function fetchPokemonById(id) {
  const pokemon = await pokeAxios.get(`pokemon/${id}`);

  if (!pokemon.data) {
    throw new Error(`Pokemon with ID ${id} not found`);
  }
  return pokemon.data;
}

export async function fetchPokemonSpecies(id) {
  const species = await pokeAxios.get(`pokemon-species/${id}`);

  if (!species.data) {
    throw new Error(`Species for Pokemon with ID ${id} not found`);
  }
  return species.data;
}