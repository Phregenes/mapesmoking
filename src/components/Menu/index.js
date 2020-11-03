import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoMenu from '../../assents/img/logomenu.svg'
import IconInstagram from '../../assents/img/instagram.svg'
import IconSpotify from '../../assents/img/spotify.svg'
import IconWhats from '../../assents/img/whatsapp.svg'

const Header = () => {
  return (
    <div className="ComponentMenu">
      <div className="LogoMenuBar">
        <img className="LogoMenuBarImg" src={LogoMenu} />
      </div>
      <div className="MenuLink">
        <Link to="/contact"> produtos </Link>
        <Link to="/at"> onde comprar </Link>
        <Link to="/about"> contato </Link>
        <Link to="/about"> sobre </Link>
      </div>
      <div className="SocialMedia">
        <img className="icon" src={IconInstagram} />
        <img className="icon" src={IconSpotify} />
        <img className="icon" src={IconWhats} />
      </div>
    </div>
  );
}

export default Header;
