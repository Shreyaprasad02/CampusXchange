import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Feed() {
  return <div className='feed'>
    <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type='text' placeholder='Start a post'/>
                <button type='submit'>Send</button>
            </form>
        </div>

        <div className='feed__Options'>
            <div className='option'>
                <PhotoIcon style={{color:'#70b5f9'}}/> 
                <span>Photo</span>
            </div>

            <div className='option'>
                <YouTubeIcon style={{color:'#7fc15e'}} /> 
                <span>Video</span>
            </div>

            <div className='option'>
                <TodayIcon style={{color:'#e7a33e'}}/> 
                <span>Event</span>
            </div>

            <div className='option'>
                <AssignmentIcon style={{color:'#fc9295'}}/> 
                <span>Write article</span>
            </div>
            
        </div>
    </div>
  </div>;
}

export default Feed
