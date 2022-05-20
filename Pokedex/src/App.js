import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search';
import CardContent from './components/CardContent';
import Pagination from './components/Pagination';
import Modal from './components/Modal'

function App() {

  const [search, setSearch] = useState('?offset=0&limit=12')
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${search}`);
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
    axios.get(currentPageUrl, { 
    })
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
    <div className="App">

      <><Header /></>
      
      <><Search setSearch={setSearch}/></>
      
      <div className='card-area'>
        {pokemon?.map((pokecard) => (
          <div className="card" id={`${pokecard.name}`} onClick={show} onClickCapture={getPokeName}>
            <CardContent pokemonName={ pokecard.name }/>
          </div>
        ))}
      </div>

      {showModal ? <Modal setShowModal={setShowModal} namePoke={namePoke}/> : null}
      
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      
      <><Footer /></>

    </div>
  );
}

export default App;