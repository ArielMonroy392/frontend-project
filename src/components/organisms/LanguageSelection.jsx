import FlagButton from "../atoms/FlagButton";

export default function LanguageSelection({ languages, onLanguageChange }) {
  return (
    <div>
      <h2>Select Language</h2>
      <ul className="language-list">
        {languages.map((language) => (
          <li key={language}>
            <FlagButton
              language={language}
              onClick={() => onLanguageChange(language)}
            >
              {language}
            </FlagButton>
          </li>
        ))}
      </ul>
    </div>
  ) 
}