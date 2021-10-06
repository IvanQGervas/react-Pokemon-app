import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header--container">
          <Link to="/">
            <img src={logo} alt="Logo PokeApp" />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">Crear Pokemon</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
