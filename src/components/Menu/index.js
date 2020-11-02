import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="border-box">
        <Link to="/home"> Home •</Link> 
        <Link to="/contact"> AO VIVO •</Link>
        <Link to="/about"> Sobre </Link>
      </div>
    </div>
  );
}

export default Header;
