import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

function SearchContainer() {
  const [pokemonName, setPokemonName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [findPokemon, setFindPokemon] = useState("");
  const [searching, setSearching] = useState(false);

  const handleOnChangeSearch = (event) => {
    setSearchName(event.target.value);
  };

  const searchPokemon = () => {
    if (searchName !== "") {
      setFindPokemon(searchName.toLowerCase());
    } else {
      return;
    }
    setSearching(true);
    setSearchName("");
  };

  const handleShowModal = () => setShowModal(true);

  const getPokemonName = (e) => {
    setPokemonName(e.currentTarget.id);
  };

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${findPokemon}`);
        setPokemonName(res.data.name);
      } catch (error) {
        alert("Pokemon not found, try again!");
        setSearching(false);
      }
    }

    getData();
  }, [findPokemon]);

  return (
    <Search
      handleOnChangeSearch={handleOnChangeSearch}
      pokemonName={pokemonName}
      searchName={searchName}
      showModal={showModal}
      handleShowModal={handleShowModal}
      searching={searching}
      searchPokemon={searchPokemon}
      getPokemonName={getPokemonName}
      setShowModal={setShowModal}
    />
  );
}

export default SearchContainer;
