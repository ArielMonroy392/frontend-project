import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.container}>
      <img src="/dots-lg.svg" alt="Dots" className={`${styles.dots}`} />
      <img
        src="/pokeball-lg.svg"
        alt="Pokeball"
        className={`${styles.pokeball}`}
      />
    </div>
  );
}
