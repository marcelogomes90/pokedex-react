import './App.css';
import pokeball from './assets/pokebola.png'

import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search';
import Card from './components/Card';

function App() {

  const [name, setName] = useState("");
  const [find, setFind] = useState("");
  const [searching, setSearching] = useState(false);

  const Typename = (event) => {
    setName(event.target.value);
    
  };

  const search = () => {
    if (name !== "") setFind(name.toLowerCase());
    setName("");
    setSearching(true);
};

  return (
    <div className="App">

      <><Header /></>

      <p className='input-title'>Catch your pokemon!</p>
      <div className='search'>
        <input placeholder='Search by pokemon name or id' type='text' onChange={Typename} value={name}></input>
        <button className="pokeball" type='submit' onClick={search}><img className="pokeball-img" src={pokeball}></img></button>
      </div>

      {!searching && <><Card /></> }

      {searching && <><Search name={name} find={find} setSearching={setSearching}/></>}
      
      <><Footer /></>

    </div>
  );
}

export default App;