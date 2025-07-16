import { NavLink } from "react-router";
import "./linknav.css";

export default function LinkNav({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
      {children}
    </NavLink>
  );
}
