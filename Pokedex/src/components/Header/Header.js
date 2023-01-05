import pikachu from "../../assets/pikachu.png";
import pokedex from "../../assets/pokedex.png";
import charmander from "../../assets/charmander.png";
import "./index.css";

function Header() {
  return (
    <header>
      <img src={charmander} alt="charmander" className="charmander"></img>
      <img src={pokedex} alt="pokedex" className="pokedex"></img>
      <img src={pikachu} alt="pikachu" className="pikachu"></img>
    </header>
  );
}

export default Header;
