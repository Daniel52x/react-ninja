'use strict';

import React from 'react';
import './search.css';
import Pagination from '../pagination';

const Search = ({ handleSearch, isDisabled }) => {
  return (
    <div className="search">
      <Pagination total={10} activePage={3} />
      <input
        type="search"
        placeholder="Digite o nome do usuário no Github"
        onKeyUp={handleSearch}
        disabled={isDisabled}
      />
    </div>
  );
};

Search.propTypees = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired,
};

export default Search;
