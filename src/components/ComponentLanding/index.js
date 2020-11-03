import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assents/img/logo.svg';

const ComponentLanding = () => {
  return (
     <div className="ComponentLanding">
        <img className="logo" src={Logo} />
      <div className="btn">
      <Link to="/home">
        <button type="button" className="btn1">
          SIM
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn2">
          NAO
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ComponentLanding;