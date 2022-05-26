import "./types-colors.css"
import "./index.css";
import api from "../../services/api";
import { useState, useEffect } from "react";
import closeButton from '../../assets/close-button.png'

function Modal(props) {

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
        api.get(props.namePoke).then(({data}) => {
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
        })
    }, []);

    const hide = () => props.setShowModal(false);

    return (
        <div className="modal"> 
            {firstType.filter(pokemon => pokemon.slot == 1).map(poketype => (
                <div className={`${poketype.type.name}-div div-principal`}>
                    <img className="close-button" src={closeButton} onClick={hide}></img>
                    <img className="image-original" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idsModal}.png`}></img>
                    <div className="div-infos">
                        <div className="id-name">
                            <p className="poke-id"># {idsModal}</p>
                            <p className="poke-name">{namesModal}</p>
                        </div>
                        <div className="div-types">
                            {typesModal?.map((pokemon) => (
                                <p className={`${pokemon.type.name}-modal poke-types`}>{pokemon.type.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="div-stats">
                <div className="data">
                    <h3>Pokedex Data</h3>
                    <p><b>Especies:</b> {species.name}</p>
                    <p><b>Height:</b> {height * 10}Cm</p>
                    <p><b>Weight:</b> {weight / 10}Kg</p>
                    {abilities?.map((pokemon) => (
                        <p ><b>Abilitie:</b> {pokemon.ability.name}</p>
                    ))}
                    <p><b>Base Experience:</b> {experience}</p>
                </div>
                <div className="stats">
                    <h3>Base Stats</h3>
                    <div className="stats-bar">
                        <p className="stats-name"><b>Health:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'hp').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#e53935", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>

                    <div className="stats-bar">
                        <p className="stats-name"><b>Attack:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'attack').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#fb8c00", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>
                    
                    <div className="stats-bar">
                        <p className="stats-name"><b>Defense:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'defense').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#fdd835", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>

                    <div className="stats-bar">
                        <p className="stats-name"><b>Sp. Attack:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'special-attack').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#1e88e5", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>

                    <div className="stats-bar">
                        <p className="stats-name"><b>Sp. Defense:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'special-defense').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#43a047", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>

                    <div className="stats-bar">
                        <p className="stats-name"><b>Speed:</b></p>
                        {stats.filter(pokemon => pokemon.stat.name == 'speed').map(pokestats => (
                            <>
                                <p className="stats-numbers">{pokestats.base_stat}</p>
                                <div style={{width: `${pokestats.base_stat/4}%`,  backgroundColor: "#ec407a", borderRadius: "20px"}}><div className="bar"></div></div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
