import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

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

        

        <div className='item'>
          <img src='' alt='' />
          <span>Groups</span>
        </div>
        <div className='item'>
          <img src='' alt='' />
          <span>Events</span>
        </div>
        <div className='item'>
          <img src='' alt='' />
          <span>Interview Experience</span>
        </div>
        <div className='item'>
          <img src='' alt='' />
          <span>Blogs</span>
        </div>
        <div className='item'>
          <img src='' alt='' />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
