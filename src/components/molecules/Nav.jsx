import "./Nav.css";
import Text from "../atoms/Text";
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/pokeball.svg"></img>
        <Text className="nav-title">Pokédex</Text>
      </div>
      <ul className="nav-links">
        <li><NavLink to={'/'} style={({ isActive }) => isActive ? { background: 'lightgray' } : {}}>Home</NavLink></li>
        <li><NavLink to={'/list'} style={({ isActive }) => isActive ? { background: 'lightgray' } : {}}>List</NavLink></li>
      </ul>
    </nav>
  )
}