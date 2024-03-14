import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ onChange }) => {
    return (
        <input
            className="searchBar"
            type="text"
            onChange={onChange}
            placeholder="Cerca avançada"
        />
    );
};
SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;