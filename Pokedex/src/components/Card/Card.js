import "./index.css";
import { ColorRing } from "react-loader-spinner";
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
  loading,
}) {
  return (
    <>
      {!loading ? (
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
      ) : (
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
      )}

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
