import './FlagButton.css';

export default function FlagButton({ language, onClick }) {
  return (
    <button className="flag-button" onClick={() => onClick(language)}>
      <img src={`flags/${language}.png`} alt={`${language} flag`} />
    </button>
  );
}
