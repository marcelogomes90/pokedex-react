import { useEffect, useState } from "react";
import CardContent from "./CardContent";
import api from "../../services/api";

function CardContentContainer({ pokemonName }) {
  const [types, setTypes] = useState([]);
  const [ids, setIds] = useState([]);
  const [names, setNames] = useState([]);
  const [firstType, setFirstType] = useState([]);

  useEffect(() => {
    api.get(pokemonName).then(({ data }) => {
      setTypes(data.types);
      setIds(data.id);
      setNames(data.name);
      setFirstType(data.types);
    });
  }, [pokemonName]);

  return (
    <CardContent types={types} ids={ids} names={names} firstType={firstType} />
  );
}

export default CardContentContainer;
