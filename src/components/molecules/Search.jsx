import Input from '../atoms/Input';
import Text from '../atoms/Text';
import styles from './Search.module.css';

export default function Search({ searchValue, onChangeSearch }) {
  const handleSearchChange = e => {
    onChangeSearch(e.target.value);
  };

  return (
    <div className={styles.banner}>
      <Input
        value={searchValue}
        onChange={handleSearchChange}
        icon="search"
        placeholder="What Pokémon are you looking for?"
        className="boxShadow wFull"
      ></Input>
      <Text className={'textMedium textWhite'}>
        Search for Pokémon by name or using the National Pokédex number
      </Text>
    </div>
  );
}
