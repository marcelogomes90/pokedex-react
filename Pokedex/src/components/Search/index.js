import './index.css'

function Search() {

    const handleChange = (e) => {
        let textSearch = e.target.value;
        console.log(textSearch);
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