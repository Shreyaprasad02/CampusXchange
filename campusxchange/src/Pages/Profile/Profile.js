import React from 'react'
import './Profile.css'
import InfoCard from '../../components/InfoCard/InfoCard'
import Sidebar from '../../components/SideBar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Followerscard from '../../components/FollowersCard/Followerscard'


function Profile() {
  return (
    <div className='ProfileLeft'>
      <InfoCard />
      <div className='Profile-center'>
            <Sidebar />
            <Feed />
      </div>
      <Followerscard />
    </div>
  )
}

export default Profile
