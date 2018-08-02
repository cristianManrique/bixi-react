import React from 'react';
import logo from '../assets/img/logo.svg';

class Header extends React.Component {
  render() {
  return (
    <header className="header fixed flex flex-space-between">
      <div className="logo-wrapper">
        <img className="logo" alt="logo" src={logo}/>
        <h4 className="titre">My-Logo</h4>
      </div>
      <ul className="nav-flex mr20">
        <li><a href="/">Home</a></li>
        <li><a href="/localisation">Localisation</a></li>
        <li><a href="/Bixi">Bixi</a></li>
        <li><a href="/users">Users</a></li>

      </ul>
    </header>
    )
  };
};

export default Header;
