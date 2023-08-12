import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


function Header() {
  return (
    <div className = "header">

      <div className = "header__left">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className = "header__center">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      </div>

      <div className = "header__search" >
          <SearchIcon />
          <input type="text" placeholder="search" />
      </div>

    </div>
  );
}

export default Header 
