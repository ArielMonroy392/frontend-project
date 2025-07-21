import { fetchType } from "../services/PokemonServices";

function formatPokemonData(pokemon, species) {
  const englishFlavor = species.flavor_text_entries.find(
    entry => entry.language.name === 'en'
  );

  return {
    name: pokemon.name,
    id: species.id,
    species: species.genera.find(g => g.language.name === 'en')?.genus,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities: pokemon.abilities.map(a => ({
      name: a.ability.name,
      hidden: a.is_hidden,
    })),
    stats: pokemon.stats.map(s => ({
      name: s.stat.name,
      base: s.base_stat,
      effort: s.effort,
    })),
    types: pokemon.types.map(t => t.type.name),
    sprites: {
      official: pokemon.sprites.other['official-artwork'].front_default,
      shiny: pokemon.sprites.other['official-artwork'].front_shiny,
    },
    evolution_chain_url: species.evolution_chain.url,
    flavor_text: englishFlavor?.flavor_text?.replace(/\f|\n/g, ' ').trim(),
    generation: generationNameToNumber(species.generation.name),
  };
}

function formatPokemon(pokemon) {
  return {
    name: pokemon.name,
    types: pokemon.types.map(t => t.type.name),
    sprites: {
      official: pokemon.sprites.other['official-artwork'].front_default,
      shiny: pokemon.sprites.other['official-artwork'].front_shiny,
    },
    id: pokemon.id,
  };
}


function generationNameToNumber(name) {
  console.log(name);
  const romanMap = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
    vi: 6,
    vii: 7,
    viii: 8,
    ix: 9,
  };

  const match = name.match(/^generation-(i{1,3}|iv|v|vi{0,3}|ix)$/);
  if (!match) return null;

  const roman = match[1];
  return romanMap[roman] || null;
}

async function getSuperEffectiveTypes(pokemonTypes) {
  const typeDataList = await Promise.all(
    pokemonTypes.map(type =>
      fetchType(type)
    )
  );

  const typeEffectiveness = {};

  for (const typeData of typeDataList) {
    typeData.damage_relations.double_damage_from.forEach(t => {
      typeEffectiveness[t.name] = (typeEffectiveness[t.name] || 1) * 2;
    });

    typeData.damage_relations.half_damage_from.forEach(t => {
      typeEffectiveness[t.name] = (typeEffectiveness[t.name] || 1) * 0.5;
    });

    typeData.damage_relations.no_damage_from.forEach(t => {
      typeEffectiveness[t.name] = 0;
    });
  }

  const superEffective = Object.entries(typeEffectiveness)
    .filter(([, multiplier]) => multiplier > 1)
    .map(([type]) => type);

  return superEffective;
}



export { formatPokemonData, formatPokemon, getSuperEffectiveTypes };