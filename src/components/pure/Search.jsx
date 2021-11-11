import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

/** Styles */
import '../../styles/css/search.scss';

const Search = () => {
    return (
      <div className="search">
        <div className="search-bar">
          { FaSearch }
          <input type="text" className="form-control form-input" placeholder="Buscar empleo..." />
        </div>
        <div className=" filter-icon">
          { FaFilter }
        </div>
      </div>
    );
};

export default Search;
