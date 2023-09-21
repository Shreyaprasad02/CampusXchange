import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOptions/HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import Description from '@material-ui/icons/Description';
import AssistantIcon from '@material-ui/icons/Assistant';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <div className = "header">

      <div className = "header__left">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className = "header__center">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={ChatIcon} title='Messaging'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={AssistantIcon} title='Assistant'/>
          <HeaderOption Icon={Description} title='Interview Experience'/>
          <HeaderOption avatar={AccountCircleIcon} title='Me'/>
      </div>

      <div className = "header__search" >
          <SearchIcon />
          <input type="text" placeholder="Search" />
      </div>

    </div>
  );
}

export default Header 
