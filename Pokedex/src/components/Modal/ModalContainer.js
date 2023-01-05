import api from "../../services/api";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function ModalContainer({ pokemonName, setShowModal }) {
  const [idsModal, setIdsModal] = useState([]);
  const [namesModal, setNamesModal] = useState([]);
  const [typesModal, setTypesModal] = useState([]);
  const [species, setSpecies] = useState([]);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [experience, setExpirience] = useState();
  const [abilities, setAbilities] = useState([]);
  const [firstType, setFirstType] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    api.get(pokemonName).then(({ data }) => {
      setIdsModal(data.id);
      setNamesModal(data.name);
      setTypesModal(data.types);
      setSpecies(data.species);
      setHeight(data.height);
      setWeight(data.weight);
      setExpirience(data.base_experience);
      setAbilities(data.abilities);
      setFirstType(data.types);
      setStats(data.stats);
    });
  }, [pokemonName]);

  const hide = () => setShowModal(false);

  return (
    <Modal
      idsModal={idsModal}
      namesModal={namesModal}
      typesModal={typesModal}
      species={species}
      height={height}
      weight={weight}
      experience={experience}
      abilities={abilities}
      firstType={firstType}
      stats={stats}
      hide={hide}
    />
  );
}

export default ModalContainer;
