import Button from '../atoms/Button';
import styles from './PokemonNavigationButtons.module.css';

export default function PokemonNavigationButtons({
  previousId,
  nextId,
  onPrevious,
  onNext,
}) {
  return (
    <div className={styles.navButtons}>
      <Button onClick={onPrevious} variant="secondary">
        Previous #{previousId.toString().padStart(3, '0')}
      </Button>
      <Button onClick={onNext}>
        Next #{nextId.toString().padStart(3, '0')}
      </Button>
    </div>
  );
}
