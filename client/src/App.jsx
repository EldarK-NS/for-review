import React from 'react';
import './app.css';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
