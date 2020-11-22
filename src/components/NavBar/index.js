import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

import Logomenu from '../../assets/img/logomenu.svg';

const NavBar = () => {
  return (
    
    <header className="navbar">
      <a className="logomenua" href="/home">
        <img className="logomenu" src={Logomenu} />
      </a>
      <ul className="Menu">
        <li className="MenuLink">
          <Link className="MaginLink" to="/products"> produtos </Link>
          <Link className="MaginLink" to="/wherebuy"> onde comprar </Link>
          <Link className="MaginLink" to="/contact"> contato </Link>
          <Link className="MaginLink" to="/about"> sobre </Link>
        </li>
      </ul>
      <div className="SocialMedia">
        <a className="btninsta" href="https://www.instagram.com/mapesmoking/" />
        <a className="btnspotify" href="https://link.tospotify.com/01Yuyvmuhbb"/>
        <a className="btnwhatsapp" href="https://chat.whatsapp.com/EJmz6t8oqhhGTD1BspMNRv"/>
      </div>
    </header>
  );
}

export default NavBar;
