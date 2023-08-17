import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSearchCategory }) => {
  const [inputSearch, setInputSearch] = useState('');

  const search = (event) => {
    event.preventDefault();

    if (!inputSearch.trim()) return;

    onSearchCategory(inputSearch.trim());
    setInputSearch('');
  };

  return (
    <form aria-label="form" onSubmit={search}>
      <input
        id="input-search"
        type="text"
        placeholder="Buscar"
        value={inputSearch}
        onChange={({ target }) => setInputSearch(target.value)}
      />
      <small className="input-helper">Presiona enter para buscar</small>
    </form>
  );
};

SearchForm.propTypes = {
  onSearchCategory: PropTypes.func.isRequired,
};
