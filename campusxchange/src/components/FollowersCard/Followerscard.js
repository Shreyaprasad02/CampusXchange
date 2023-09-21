import React from 'react'
import './Followerscard.css'

import { Followers } from '../../Data/Followersdata'
function Followerscard() {
  return (
    <div className="FollowersCard">
        <h3>Suggestions</h3>

        {Followers.map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default Followerscard
