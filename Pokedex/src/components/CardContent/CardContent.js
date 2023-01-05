import "./index.css";
import "./types-colors.css";

function CardContent({ types, ids, names, firstType }) {
  return (
    <>
      {firstType
        ?.filter((pokemon) => pokemon.slot === 1)
        .map((poketype) => (
          <div className={`${poketype.type.name}-bg pokemon-type-bg`} key={poketype.type.name}>
            <img
              className="pokemon-img"
              alt="pokemon-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ids}.png`}
            ></img>
          </div>
        ))}

      <div className="pokemon-info">
        <p className="pokemon-id">{`${ids}.`}</p>
        <p className="pokemon-name">{names}</p>
      </div>
      <div className="pokemon-types">
        {types?.map((pokemon) => (
          <p className={`${pokemon.type.name} pokemon-type`} key={pokemon.type.name}>
            {pokemon.type.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default CardContent;
