import { useState, useEffect, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Search from "./Search";

function SearchContainer() {
  const [pokemonName, setPokemonName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [findPokemon, setFindPokemon] = useState("");
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${findPokemon}`
      );
      setPokemonName(res.data.name);
    } catch (error) {
      setSearching(false);
      toast.error("Name or id not found, try again!");
    }
    setLoading(false);
  }, [findPokemon]);

  console.log(loading);
  useEffect(() => {
    getData();
  }, [findPokemon, getData]);

  return (
    <>
      <Search
        handleOnChangeSearch={handleOnChangeSearch}
        pokemonName={pokemonName}
        searchName={searchName}
        showModal={showModal}
        handleShowModal={handleShowModal}
        searching={searching}
        searchPokemon={searchPokemon}
        setShowModal={setShowModal}
        loading={loading}
      />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default SearchContainer;
