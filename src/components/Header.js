import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Avatar characters</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List of Characters</Link>
      </nav>
    </header>
  );
};

export default Header;
