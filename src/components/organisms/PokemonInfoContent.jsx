import TabPanel from './TabPanel';
import PokemonHeaderSection from '../molecules/PokemonHeaderSection';
import PokemonNavigationButtons from '../molecules/PokemonNavigationButtons';
import Background from '../atoms/Background';
import PokemonImage from '../atoms/PokemonImage';
import styles from './PokemonInfoContent.module.css';
import { lazy } from 'react';

const PokemonStats = lazy(() => import('./PokemonStats'));
const PokemonData = lazy(() => import('./PokemonData'));
const PokemonEvolutions = lazy(() => import('./PokemonEvolutions'));

export default function PokemonInfoContent({
  pokemon,
  onPrevious,
  onNext,
  onBack,
}) {
  const tabs = [
    { name: 'Stats', component: PokemonStats, props: { pokemon } },
    { name: 'Data', component: PokemonData, props: { pokemon } },
    { name: 'Evolution', component: PokemonEvolutions, props: { pokemon } },
  ];

  return (
    <div className={styles.infoContainer}>
      <div className={styles.pokemonInfo}>
        <PokemonHeaderSection pokemon={pokemon} onBack={onBack} />

        <TabPanel tabs={tabs} />
      </div>
      <div className={`${styles.pokemonImage} bg-${pokemon.types[0]}`}>
        <Background />
        <div className={`${styles.imageContainer}`}>
          <PokemonImage
            src={pokemon.sprites.official}
            alt={`${pokemon.name} official artwork`}
          />
          <PokemonNavigationButtons
            previousId={pokemon.id > 1 ? pokemon.id - 1 : 1025}
            nextId={pokemon.id < 1025 ? pokemon.id + 1 : 1}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
      </div>
    </div>
  );
}
