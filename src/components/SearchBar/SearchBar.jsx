import './SearchBar.css'



const SearchBar = ({onChange,} : {onchange:React.ChangeEventHandler}) => {
    return (
        <input class="searchBar" type="text" onChange={onChange} placeholder="Cerca segons títol de Workshop."
        />
    );
};


export default SearchBar;