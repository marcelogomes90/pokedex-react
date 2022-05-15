import './index.css'

function Search() {
    return (
        <>
            <div className='search'>
                <p className='input-title'>Capture o seu Pokemon!</p>
                <input placeholder='Digite o nome ou o id do pokemon'></input>
            </div>
        </>
    )
}

export default Search;