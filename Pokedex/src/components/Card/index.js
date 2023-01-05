import './index.css'

import { useState, useEffect } from 'react';
import api from '../../services/api';
import Pagination from '../Pagination/Pagination';
import CardContentContainer from '../CardContent/CardContentContainer';
import Modal from '../Modal';

function Card() {

    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(`?offset=0&limit=12`);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [namePoke, setNamePoke] = useState();
    const [showModal, setShowModal] = useState(false);

    const show = () => setShowModal(true);

    const getPokeName = (e) => {
        setNamePoke(e.currentTarget.id);
    }

    useEffect(() => {
        setLoading(true);
        api.get(currentPageUrl)
        .then(res => {
            setLoading(false);
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
            setPokemon(res.data.results);
        });

    }, [currentPageUrl]);

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    if (loading) return;

    return (
        <>
            
            <div className='card-area'> 
                {pokemon?.map((pokecard) => ( 
                    <div key={`${pokecard.name}`} className="card" id={`${pokecard.name}`} onClick={show} onClickCapture={getPokeName}>
                        <CardContentContainer pokemonName={pokecard.name}/>
                    </div>
                ))}
            </div>
        
            {showModal ? <Modal setShowModal={setShowModal} namePoke={namePoke}/> : null}

            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
            
        </>
    );
}

export default Card;