import React from 'react'
import './InfoCard.css'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className='infoHead'>
        <h4>Your Info</h4>
        <div>
        <EditOutlinedIcon />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Pronouns </b>
        </span>
        <span>She/Her</span>
      </div>
      
      <div className="info">
        <span>
          <b>Bio </b>
        </span>
        <span>Aspiring Software Developer</span>
      </div>

      <div className="info">
        <span>
          <b>Branch </b>
        </span>
        <span>Information Technology</span>
      </div>
      <div className="info">
        <span>
          <b>Batch </b>
        </span>
        <span>2024</span>
      </div>

      <div className="info">
        <span>
          <b>Location </b>
        </span>
        <span>Pune</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Google</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard
