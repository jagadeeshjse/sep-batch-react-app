import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn-nav">Home</button>
      </Link>
      <Link to="/counter">
        <button className="btn-nav">Counter</button>
      </Link>
      <Link to="/form">
        <button className="btn-nav">Form</button>
      </Link>
      <Link to="/display-data">
        <button className="btn-nav">Display data</button>
      </Link>
      <Link to="/meal-comp">
        <button className="btn-nav">meal compo</button>
      </Link>
      <Link to="/show-photo">
        <button className="btn-nav">show Photos</button>
      </Link>
      <Link to="/about">
        <button className="btn-nav">about</button>
      </Link>
    </div>
  );
};

export default NavBar;
