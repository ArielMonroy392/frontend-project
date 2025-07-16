import "./Nav.css";
import Text from "../atoms/Text";
import { Link } from "react-router";
import { NavLink } from "react-router";
import LinkNav from "./LinkNav";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/pokeball.svg"></img>
        <Text className="nav-title">Pokédex</Text>
      </div>
      <ul className="nav-links">
        <li><LinkNav to={'/'}>Home  </LinkNav></li>
        <li><LinkNav to={'/list'}>List</LinkNav></li>
      </ul>
    </nav>
  )
}