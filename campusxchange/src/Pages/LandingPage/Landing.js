import React from 'react'
import './Landing.css'
import LandingIcon from '../../img/landingIcon.png'

const Landing = () => {
  return (
    <div className='Landing'>
      <nav className='navbar'>
        <div className='left-nav'>
          <h1 className='heading'>
           CampusXchange
          </h1>

          <div classname='all'>
          <h4>Let's connect Together...</h4>
          </div>
        </div>

        <div className='right-nav'>
          <ul>
            
              <button className='button right-nav'><li>Login</li></button>


              <button className='button right-nav'><li>Signup</li></button>

          </ul>
        </div>
      </nav>
      <hr />
      <div className='main-content'>
        <div className='left-content'>
          <h1>"CampusXchange "<span className='voilet'> Innovative networking platform </span> </h1>
          <p> This platform provides a dynamic space for students to create and maintain comprehensive profiles, interact with their peers, and share a wide range of content, including posts, achievements, interview experiences, blogs, and more. </p>
        </div>
        <div className='right-content'>
          <img src={LandingIcon} alt="can't be loaded" />

        </div>
      </div>
   

      </div>

  )
}

export default Landing
