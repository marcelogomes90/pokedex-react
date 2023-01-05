import "./types-colors.css";
import "./index.css";
import closeButton from "../../assets/close-button.png";

function Modal({
  idsModal,
  namesModal,
  typesModal,
  species,
  height,
  weight,
  experience,
  abilities,
  firstType,
  stats,
  hide,
}) {
  return (
    <div className="modal">
      {firstType
        .filter((pokemon) => pokemon.slot === 1)
        .map((poketype) => (
          <div
            className={`${poketype.type.name}-div div-principal`}
            key={poketype.type.name}
          >
            <img
              alt="close-button"
              className="close-button"
              src={closeButton}
              onClick={hide}
            ></img>
            <img
              alt="pokemon"
              className="image-original"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idsModal}.png`}
            ></img>
            <div className="div-infos">
              <div className="id-name">
                <p className="poke-id"># {idsModal}</p>
                <p className="poke-name">{namesModal}</p>
              </div>
              <div className="div-types">
                {typesModal?.map((pokemon) => (
                  <p
                    className={`${pokemon.type.name}-modal poke-types`}
                    key={pokemon.type.name}
                  >
                    {pokemon.type.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      <div className="div-stats">
        <div className="data">
          <h3>Pokedex Data</h3>
          <p>
            <b>Especies:</b> {species.name}
          </p>
          <p>
            <b>Height:</b> {height * 10}Cm
          </p>
          <p>
            <b>Weight:</b> {weight / 10}Kg
          </p>
          {abilities?.map((pokemon) => (
            <p key={pokemon.ability.name}>
              <b>Abilitie:</b> {pokemon.ability.name}
            </p>
          ))}
          <p>
            <b>Base Experience:</b> {experience}
          </p>
        </div>
        <div className="stats">
          <h3>Base Stats</h3>
          <div className="stats-bar">
            <p className="stats-name">
              <b>Health:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "hp")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers">{pokestats.base_stat}</p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#e53935",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>

          <div className="stats-bar">
            <p className="stats-name">
              <b>Attack:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "attack")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers" key={pokestats.base_stat}>
                    {pokestats.base_stat}
                  </p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#fb8c00",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>

          <div className="stats-bar">
            <p className="stats-name">
              <b>Defense:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "defense")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers" key={pokestats.base_stat}>
                    {pokestats.base_stat}
                  </p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#fdd835",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>

          <div className="stats-bar">
            <p className="stats-name">
              <b>Sp. Attack:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "special-attack")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers" key={pokestats.base_stat}>
                    {pokestats.base_stat}
                  </p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#1e88e5",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>

          <div className="stats-bar">
            <p className="stats-name">
              <b>Sp. Defense:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "special-defense")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers" key={pokestats.base_stat}>
                    {pokestats.base_stat}
                  </p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#43a047",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>

          <div className="stats-bar">
            <p className="stats-name">
              <b>Speed:</b>
            </p>
            {stats
              .filter((pokemon) => pokemon.stat.name === "speed")
              .map((pokestats) => (
                <>
                  <p className="stats-numbers" key={pokestats.base_stat}>
                    {pokestats.base_stat}
                  </p>
                  <div
                    style={{
                      width: `${pokestats.base_stat / 4}%`,
                      backgroundColor: "#ec407a",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="bar"></div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
