import "./index.css";
import Pagination from "../Pagination/Pagination";
import CardContentContainer from "../CardContent/CardContentContainer";
import ModalContainer from "../Modal/ModalContainer";

function Card({
  pokemons,
  nextPageUrl,
  prevPageUrl,
  pokemonName,
  showModal,
  setShowModal,
  gotoNextPage,
  gotoPrevPage,
  handleModal,
  getPokemonName,
}) {
  return (
    <>
      <div className="card-area">
        {pokemons?.map((pokecard) => (
          <div
            key={`${pokecard.name}`}
            className="card"
            id={`${pokecard.name}`}
            onClickCapture={getPokemonName}
            onClick={handleModal}
          >
            <CardContentContainer pokemonName={pokecard.name} />
          </div>
        ))}
      </div>

      {showModal ? (
        <ModalContainer setShowModal={setShowModal} pokemonName={pokemonName} />
      ) : null}

      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default Card;
