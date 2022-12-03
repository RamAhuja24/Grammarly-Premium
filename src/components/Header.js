import React from 'react';
import Logo from './Logo';
import Login from './Login';
import './Header.css';
const Header = () => {
  return(
    <div className="headerContainer">
      <Logo />
      <Login />
    </div>
  );
};

export default Header;