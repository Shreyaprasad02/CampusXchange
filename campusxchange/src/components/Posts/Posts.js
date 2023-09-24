import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/Postsdata'
import Post from '../Post/Post'

function Posts() {
  return (
    <div>
    <div className="Posts">
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
    </div>
  )
}

export default Posts
