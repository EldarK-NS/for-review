import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="leftSide">
          <h2>Name</h2>
        </div>
        <div className="login">
          <h2>Login</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
