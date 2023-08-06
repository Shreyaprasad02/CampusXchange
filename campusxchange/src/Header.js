import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className = "header">

      <div className = "header__left">
      <img src="/images/logo.png" alt="" />

        <div className = "header__search" >
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className = "header__right">
        <HeaderOption title='Home' />
        <HeaderOption />

      </div>
    </div>
  );
}

export default Header 
