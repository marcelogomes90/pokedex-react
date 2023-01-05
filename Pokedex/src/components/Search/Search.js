import Card from "../Card";
import CardContent from "../CardContent";
import Modal from "../Modal";
import pokeball from "../../assets/pokebola.png";
import "./index.css";

function Search({
  handleOnChangeSearch,
  pokemonName,
  showModal,
  handleShowModal,
  searching,
  searchName,
  searchPokemon,
  getPokemonName,
  setShowModal,
}) {
  return (
    <>
      <p className="input-title">Catch your pokemon!</p>
      <div className="search">
        <input
          placeholder="Search by pokemon name or id"
          type="text"
          onChange={handleOnChangeSearch}
          value={searchName}
        ></input>
        <button className="pokeball" type="submit" onClick={searchPokemon}>
          <img className="pokeball-img" alt="pokebola" src={pokeball}></img>
        </button>
      </div>

      {!searching ? (
        <Card />
      ) : (
        <div className="card-area">
          <div
            key={`${pokemonName}`}
            className="card"
            id={`${pokemonName}`}
            onClick={getPokemonName && handleShowModal}
          >
            <CardContent pokemonName={pokemonName} />
          </div>
        </div>
      )}

      {showModal ? (
        <Modal namePoke={pokemonName} setShowModal={setShowModal} />
      ) : null}
    </>
  );
}

export default Search;
