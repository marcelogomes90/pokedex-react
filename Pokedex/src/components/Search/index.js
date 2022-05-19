import './index.css'
import { useState } from 'react';

function Search(props) {

    const [searchContent, setSearchContent] = useState();

    const handleChange = (event) => {
        setSearchContent(event.target.value);
        props.setSearch(searchContent);
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