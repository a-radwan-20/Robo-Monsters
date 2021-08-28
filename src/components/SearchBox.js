import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba4 b--blue bg-lightest-blue w-25'
            type='search' 
            placeholder='Search your favorit monster'
            onChange={searchChange} />
        </div>
    );
}

export default SearchBox;