import "./Nav.css";
import Text from "../atoms/Text";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/pokeball.svg"></img>
        <Text className="nav-title">Pokédex</Text>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}