import styles from './TabButton.module.css';

export default function TabButton({ name, active, onClick }) {
  return (
    <button
      key={name}
      className={`${styles.tabButton} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
