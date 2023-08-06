import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon, title}) {
  return<div className='headerOption'>
      {Icon && <Icon className='headerOption__icon'/>}
    </div>;
}

export default HeaderOption;
