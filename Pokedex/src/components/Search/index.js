import './index.css'
import { useState } from 'react';

function Search(props) {

    const handleChange = (event) => {
        props.setSearch(event.target.value);
    }

    return (
        <>
            <div className='search'>
                <p className='input-title'>Capture o seu Pokemon!</p>
                <input placeholder='Digite o nome ou o id do pokemon' type='text' onChange={handleChange}></input>
            </div>
        </>
    )
}

export default Search;