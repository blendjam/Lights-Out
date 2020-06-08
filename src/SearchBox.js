import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="SearchBox">

            <input 
            type="search" 
            placeholder="Search Pokemon" 
            onChange={searchChange} 
            />

        </div>
    );
};

export default SearchBox;