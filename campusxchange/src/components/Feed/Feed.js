import React from 'react';
import './Feed.css';
import PostShare from '../PostShare/PostShare';
import Posts from '../Posts/Posts';

function Feed() {
  return <div className='Feed'>
    <div>
        <PostShare />
        <Posts />
    </div>
  </div>;
}

export default Feed
