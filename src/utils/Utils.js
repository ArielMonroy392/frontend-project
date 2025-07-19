function formatPokemonData(pokemon, species) {
  const englishFlavor = species.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  );

  const formatted = {
    name: pokemon.name,
    national_pokedex_id: species.id,
    species: species.genera.find((g) => g.language.name === 'en')?.genus,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities: pokemon.abilities.map((a) => ({
      name: a.ability.name,
      hidden: a.is_hidden,
    })),
    stats: pokemon.stats.map((s) => ({
      name: s.stat.name,
      base: s.base_stat,
      effort: s.effort,
    })),
    types: pokemon.types.map((t) => t.type.name),
    sprites: {
      official: pokemon.sprites.other['official-artwork'].front_default,
      shiny: pokemon.sprites.other['official-artwork'].front_shiny,
    },
    evolution_chain_url: species.evolution_chain.url,
    flavor_text: englishFlavor?.flavor_text?.replace(/\f|\n/g, ' ').trim(),
  };

  return formatted;
}

export { formatPokemonData };
