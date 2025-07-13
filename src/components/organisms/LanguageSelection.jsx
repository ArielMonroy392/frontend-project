import FlagButton from "../atoms/FlagButton";
import './LanguageSelection.css';
import Text from "../atoms/Text";
import { SUPPORTED_LANGUAGES } from "../../constants/game";

export default function LanguageSelection({ onLanguageChange }) {
  return (
    <div className="language-selection">
      <Text className={"text-large text-white font-bold"}>Select Language</Text>
      <ul className="language-list">
        {SUPPORTED_LANGUAGES.map((language) => (
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