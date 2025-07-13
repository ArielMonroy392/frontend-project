import "./Nav.css";
import Text from "../atoms/Text";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/pokeball.svg"></img>
        <Text className="nav-title">Pokédex</Text>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}