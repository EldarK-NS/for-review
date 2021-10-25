import React, { useState, useEffect } from 'react';
import './home.css';
import SearchBar from '../../components/searchBar/SearchBar';
import Form from '../../components/form/Form';
import Notes from '../../components/notes/Notes';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, getNotesByType } from '../../store/actions/notes';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let searchQuery;
    if (localStorage.getItem('searchParams')) {
      searchQuery = JSON.parse(localStorage.getItem('searchParams'));
      dispatch(getNotesByType(searchQuery));
    } else {
      dispatch(getNotes());
    }
  }, [currentId, dispatch, localStorage]);

  return (
    <div className="home-container">
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="wrapper">
        <div className="notes">
          <Notes setCurrentId={setCurrentId} />
        </div>
        <div className="form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
