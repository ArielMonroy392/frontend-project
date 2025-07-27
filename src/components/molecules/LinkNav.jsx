import { NavLink } from 'react-router';
import styles from './LinkNav.module.css';

export default function LinkNav({ to, children }) {
  return (
    <NavLink
      to={to}
      className={`${styles.linkNav} ${({ isActive }) => (isActive ? styles.active : '')}`}
    >
      {children}
    </NavLink>
  );
}
