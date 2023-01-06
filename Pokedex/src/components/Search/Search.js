import CardContentContainer from "../CardContent/CardContentContainer";
import pokeball from "../../assets/pokebola.png";
import { ColorRing } from "react-loader-spinner";
import "./index.css";
import CardContainer from "../Card/CardContainer";
import ModalContainer from "../Modal/ModalContainer";

function Search({
  handleOnChangeSearch,
  pokemonName,
  showModal,
  handleShowModal,
  searching,
  searchName,
  searchPokemon,
  setShowModal,
  loading,
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

      {!searching && <CardContainer />}

      {searching && loading ? (
        <div className="card-area">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#808080", "#f0f0f0", "#808080", "#e15b64"]}
          />
        </div>
      ) : null}

      {searching && !loading ? (
        <div className="card-area">
          <div
            key={`${pokemonName}`}
            className="card"
            id={`${pokemonName}`}
            onClick={handleShowModal}
          >
            <CardContentContainer pokemonName={pokemonName} />
          </div>
        </div>
      ) : null}

      {showModal ? (
        <ModalContainer pokemonName={pokemonName} setShowModal={setShowModal} />
      ) : null}
    </>
  );
}

export default Search;
