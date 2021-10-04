import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">Crear Pokemon</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
