import { useState, useEffect } from "react";
import api from "../../services/api";
import Card from "./Card";

function CardContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`?offset=0&limit=12`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(true);

  const getPokemonName = (e) => {
    setPokemonName(e.currentTarget.id);
  };

  useEffect(() => {
    setLoading(true);
    api.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemons(res.data.results);
      window.scrollTo(0, 0);
    });
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <Card
      pokemons={pokemons}
      nextPageUrl={nextPageUrl}
      prevPageUrl={prevPageUrl}
      pokemonName={pokemonName}
      showModal={showModal}
      setShowModal={setShowModal}
      gotoNextPage={gotoNextPage}
      gotoPrevPage={gotoPrevPage}
      handleModal={handleModal}
      getPokemonName={getPokemonName}
      loading={loading}
    />
  );
}

export default CardContainer;
