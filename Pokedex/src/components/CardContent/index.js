import './index.css'
import './types-colors.css'
import { useEffect, useState } from "react";
import api from '../../services/api'

function CardContent(props) {

    const [types, setTypes] = useState([]);
    const [ids, setIds] = useState([]);
    const [names, setNames] = useState([]);
    const [firtType, setFirstType] = useState([]);

    useEffect(() => {
        api.get(props.pokemonName).then(({data}) => {
            setTypes(data.types);
            setIds(data.id);
            setNames(data.name);
            setFirstType(data.types);
        })
    }, []);

    return (
        <>
            {firtType.filter(pokemon => pokemon.slot == 1).map(poketype => (
                <div className={`${poketype.type.name}-bg`}>
                    <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ids}.svg`}></img>
                </div>   
            ))}
            <div className="pokemon-info">
                <p className='pokemon-id'>{`${ids}.`}</p>
                <p className='pokemon-name'>{names}</p>
            </div>
            <div className="pokemon-types">
                {types?.map((pokemon) => (
                    <p className={`${pokemon.type.name}`}>{pokemon.type.name}</p>  
                ))}
            </div>
        </>
    )
}

export default CardContent;