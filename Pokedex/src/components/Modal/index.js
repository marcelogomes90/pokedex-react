import "../CardContent/types-colors.css"
import "./index.css";
import api from "../../services/api";
import { useState, useEffect } from "react";
import closeButton from '../../assets/close-button.png'

function Modal(props) {

    const [idsModal, setIdsModal] = useState([]);

    useEffect(() => {
        api.get(props.namePoke).then(({data}) => {
            setIdsModal(data.id);
        })
    }, []);

    const hide = () => props.setShowModal(false);

    return (
        <div className="modal"> 
            <div className="div-principal">
                <img className="close-button" src={closeButton} onClick={hide}></img>
                <img className="image-original" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idsModal}.svg`}></img>
                <div className="div-infos">
                    <p className="poke-id"># 1</p>
                    <p className="poke-name">Bulbasaur</p>
                    <p className="poke-types">grass</p>
                </div>
            </div>
            <div className="div-stats">
                <div className="data">
                    <h3>Pokedex Data</h3>
                    <p>Species</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Abilities</p>
                    <p>other</p>
                    <p>other1</p>
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