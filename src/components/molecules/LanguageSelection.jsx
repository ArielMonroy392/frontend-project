import FlagButton from '../atoms/FlagButton.jsx';
import styles from './LanguageSelection.module.css';
import Text from '../atoms/Text.jsx';
import { SUPPORTED_LANGUAGES } from '../../constants/game.js';

export default function LanguageSelection({ onLanguageChange }) {
  return (
    <div className={styles.languageSelection}>
      <Text className={'textLarge textWhite fontBold'}>Select Language</Text>
      <ul className={styles.languageList}>
        {SUPPORTED_LANGUAGES.map(language => (
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
  );
}
