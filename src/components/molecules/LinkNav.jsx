import { NavLink } from 'react-router';
import styles from './LinkNav.module.css';

export default function LinkNav({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? styles.navLinkActive : styles.navLink}`
      }
    >
      {children}
    </NavLink>
  );
}
