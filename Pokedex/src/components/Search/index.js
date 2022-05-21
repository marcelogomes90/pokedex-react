import './index.css'

import { useState, useEffect } from 'react';
import axios from 'axios';

import CardContent from '../CardContent';
import Modal from '../Modal';

function Search(props) {

    const [nameofPokemon, setNameofPokemon] = useState('');
    const [showModal, setShowModal] = useState(false);
   
    const show = () => setShowModal(true);

    const getPokeName = (e) => {
        setNameofPokemon(e.currentTarget.id);
    }

    useEffect(() => {

        async function getData() {

            try {
      
              let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.find}`);
              setNameofPokemon(res.data.name);
      
            } catch (error) {
      
              alert('Pokemon not found, try again!')
              props.setSearching(false);
            }
      
          }
      
          getData();

    }, [props.find]);

    return (
        <>
            <div className='card-area'> 
                <div key={`${nameofPokemon}`} className="card" id={`${nameofPokemon}`} onClick={show} onClickCapture={getPokeName}>
                    <CardContent pokemonName={ nameofPokemon } />
                </div>
            </div>
        

            {showModal ? <Modal setShowModal={setShowModal} namePoke={nameofPokemon}/> : null}
        </>
    )
}

export default Search;