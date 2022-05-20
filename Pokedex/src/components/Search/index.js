import './index.css'

function Search(props) {

    let textSearch;

    const handleChange = (e) => {
        textSearch = e.target.value;
        props.setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon/${textSearch}`)
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