import { fetchType } from '../services/PokemonServices';
import axios from 'axios';

async function formatPokemonData(pokemon, species) {
  const englishFlavor = species.flavor_text_entries.find(
    entry => entry.language.name === 'en'
  );

  const evolutionChainUrl = species.evolution_chain.url;
  let total = 0;
  const formatedPokemon = {
    name: pokemon.name,
    id: species.id,
    species: species.genera.find(g => g.language.name === 'en')?.genus,
    height: pokemon.height,
    weight: pokemon.weight,
    evolution: await getEvolutionChain(evolutionChainUrl, pokemon.name),
    abilities: pokemon.abilities.map(a => ({
      name: a.ability.name,
      hidden: a.is_hidden,
    })),
    stats: pokemon.stats.map(s => {
      total += s.base_stat;
      const stat = {
        name: s.stat.name,
        base: s.base_stat,
        max: calculateStat({
          base: s.base_stat,
          iv: 31,
          ev: 252,
          level: 100,
          natureBoost: 1.1,
          isHp: s.stat.name === 'hp',
        }),
        min: calculateStat({
          base: s.base_stat,
          iv: 0,
          ev: 0,
          level: 100,
          natureBoost: 0.9,
          isHp: s.stat.name === 'hp',
        }),
      };
      return stat;
    }),
    types: pokemon.types.map(t => t.type.name),
    sprites: {
      official: pokemon.sprites.other['official-artwork'].front_default,
      shiny: pokemon.sprites.other['official-artwork'].front_shiny,
    },
    evolution_chain_url: species.evolution_chain.url,
    flavor_text: englishFlavor?.flavor_text?.replace(/\f|\n/g, ' ').trim(),
    generation: generationNameToNumber(species.generation.name),
  };
  formatedPokemon.weaknesses = await getSuperEffectiveTypes(
    formatedPokemon.types
  );

  formatedPokemon.stats.push({
    name: 'total',
    base: total,
    max: 'MAX',
    min: 'MIN',
  });
  return formatedPokemon;
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
    pokemonTypes.map(type => fetchType(type))
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

function calculateStat({
  base,
  iv = 31,
  ev = 0,
  level = 50,
  natureBoost = 1.0,
  isHp = false,
}) {
  if (isHp) {
    if (base === 1) return 1;
    return Math.floor(
      ((2 * base + iv + Math.floor(ev / 4)) * level) / 100 + level + 10
    );
  } else {
    return Math.floor(
      (((2 * base + iv + Math.floor(ev / 4)) * level) / 100 + 5) * natureBoost
    );
  }
}

async function getEvolutionChain(evolutionChainUrl, currentPokemonName) {
  const evolutionRes = await axios.get(evolutionChainUrl);
  const evolutionData = evolutionRes.data;
  const names = new Set();

  function traverse(node) {
    if (!node) return;
    names.add(node.species.name);
    node.evolves_to.forEach(child => traverse(child));
  }

  traverse(evolutionData.chain);

  const detailed = await Promise.all(
    Array.from(names).map(async name => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return formatPokemon(res.data);
    })
  );

  const currentIndex = detailed.findIndex(
    p => p.name === currentPokemonName.toLowerCase()
  );

  return {
    chain: detailed,
    currentIndex,
  };
}

export {
  formatPokemonData,
  formatPokemon,
};
