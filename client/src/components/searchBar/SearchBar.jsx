import React, { useState } from 'react';
import './search.css';
import { getNotesByType, getNotes } from '../../store/actions/notes';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const [executedType, setExecutedType] = useState(false);
  const [titleText, setTitleText] = useState('');
  const dispatch = useDispatch();

  const handleSearchByType = (e) => {
    e.preventDefault();
    const searchQuery = {
      query: 'executed',
      search: executedType,
    };
    localStorage.setItem('searchParams', JSON.stringify(searchQuery));
    dispatch(getNotesByType(searchQuery));
  };

  const handleSearchByText = (e) => {
    e.preventDefault();
    const searchQuery = {
      query: 'title',
      search: titleText.trim(),
    };
    localStorage.setItem('searchParams', JSON.stringify(searchQuery));
    dispatch(getNotesByType(searchQuery));
  };
  const showAll = () => {
    localStorage.clear();
    setTitleText('');
    dispatch(getNotes());
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearchByText}>
        <input
          type="text"
          placeholder="поиск по названию"
          className="input"
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <form className="search-form" onSubmit={handleSearchByType}>
        <select className="input" onChange={(e) => setExecutedType(e.target.value)}>
          <option value={false}>not executed</option>
          <option value={true}>executed</option>
        </select>
        <input type="submit" value="Search" />
      </form>
      <button onClick={showAll}>Show All Notes</button>
    </div>
  );
};

export default SearchBar;
