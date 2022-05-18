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
        })
    }, []);

    const hide = () => props.setShowModal(false);

    return (
        <div className="modal"> 
            {firstType.filter(pokemon => pokemon.slot == 1).map(poketype => (
                <div className={`${poketype.type.name}-div div-principal`}>
                    <img className="close-button" src={closeButton} onClick={hide}></img>
                    <img className="image-original" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idsModal}.svg`}></img>
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
                    <p>Especies: {species.name}</p>
                    <p>Height: {height * 10}Cm</p>
                    <p>Weight: {weight / 10}Kg</p>
                    {abilities?.map((pokemon) => (
                        <p>Abilities: {pokemon.ability.name}</p>
                    ))}
                    <p>Base Expirience: {experience} Points</p>
                </div>
                <div className="stats">
                    <h3>Base Stats</h3>
                    <p>hp</p>
                    <p>attack</p>
                    <p>defense</p>
                    <p>special attack</p>
                    <p>special defense</p>
                    <p>speed</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;