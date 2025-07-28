import styles from './Nav.module.css';
import Text from '../atoms/Text';
import LinkNav from '../atoms/LinkNav';

export default function Nav() {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.navBrand}`}>
        <img src="/pokeball.svg" alt="pokeball brand"></img>
        <Text className={`${styles.navTitle}`}>Pokédex</Text>
      </div>
      <ul className={`${styles.navLinks}`}>
        <li>
          <LinkNav to={'/'}>Home </LinkNav>
        </li>
        <li>
          <LinkNav to={'/list'}>List</LinkNav>
        </li>
      </ul>
    </nav>
  );
}
