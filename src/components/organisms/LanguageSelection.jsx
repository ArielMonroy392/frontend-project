import FlagButton from "../atoms/FlagButton";
import './LanguageSelection.css';
import Text from "../atoms/Text";

export default function LanguageSelection({ languages, onLanguageChange }) {
  return (
    <div className="language-selection">
      <Text className={"text-large text-white font-bold"}>Select Language</Text>
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