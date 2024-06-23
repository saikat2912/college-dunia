import React from 'react';

const SearchBox = ({ query, setQuery }) => {
    return (
        <div className='search'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search colleges..."
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;