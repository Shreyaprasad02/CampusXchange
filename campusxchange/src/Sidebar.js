import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import {Group} from '@material-ui/icons';
import {Event} from '@material-ui/icons';
import {School} from '@material-ui/icons';
import {Description} from '@material-ui/icons';
import {Settings} from '@material-ui/icons';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://th.bing.com/th/id/OIP.6OqHsNye6JXKysG6JnDieAHaCP?w=348&h=106&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Shreya Prasad</h2>
        <h4>shreyaprasadaug@gmail.com
        </h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statnumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>views on post</p>
          <p className='sidebar__statnumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <div className='sidebar__wrapper'>
           <ul className='sidebar__list'>
            <li className='sidebarListItem'>
              <Group className='sidebarIcon'/>
              <span className='sidebarListItemText'>Groups</span>
            </li>
            <li className='sidebarListItem'>
              <Event className='sidebarIcon'/>
              <span className='sidebarListItemText'>Events</span>
            </li>
            <li className='sidebarListItem'>
              <School className='sidebarIcon'/>
              <span className='sidebarListItemText'>Interview Experience</span>
            </li>
            <li className='sidebarListItem'>
              <Description className='sidebarIcon'/>
              <span className='sidebarListItemText'>Blogs</span>
            </li>
            <li className='sidebarListItem'>
              <Settings className='sidebarIcon'/>
              <span className='sidebarListItemText'>Settings</span>
            </li>

           </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
