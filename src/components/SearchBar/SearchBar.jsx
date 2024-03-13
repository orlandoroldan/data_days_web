import React from "react"

import './SearchBar.css'

const SearchBar = ({onChange}) => {
    return (
        <input 
            class="searchBar" 
            type="text" 
            onChange={onChange}
            placeholder="Cerca avançada"
        />
    );
};

export default SearchBar;