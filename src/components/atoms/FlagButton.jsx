const countryCode = new Map([
  ["ja-Hrkt", "JP"],
  ["roomaji", "JP"],
  ["ko", "KR"],
  ["zh-Hant", "TW"],
  ["fr", "FR"],
  ["de", "DE"],
  ["es", "ES"],
  ["it", "IT"],
  ["en", "US"],
  ["ja", "JP"],
  ["zh-Hans", "CN"]
]);

import './FlagButton.css';

export default function FlagButton({ language, onClick }) {
  return (
    <button className="flag-button" onClick={() => onClick(language)}>
      <img src={`https://flagsapi.com/${countryCode.get(language)}/flat/64.png`} alt={`${language} flag`} />
    </button>
  );
}
