import styles from './FlagButton.module.css';

export default function FlagButton({ language, onClick }) {
  return (
    <button
      className={`${styles.flagButton}`}
      onClick={() => onClick(language)}
    >
      <img
        src={`flags/${language}.png`}
        alt={`${language} flag`}
        className={`${styles.flagImg}`}
      />
    </button>
  );
}
