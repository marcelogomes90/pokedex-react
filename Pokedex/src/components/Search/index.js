import './index.css'

function Search(props) {

    let textSearch;

    const handleChange = (e) => {
        textSearch = e.target.value;
        props.setSearch(textSearch)
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