import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar"

function Posts() {
    return (
        <div className="post">
            <div className="post__header">

            <Avatar 
            className ="post__avatar"
            alt="Remy Sharp" 
            src="/static/images/avatar/1.jpg" />
            <h3>Username</h3>
          {/* header -> avatar + username  */}
          </div>

          <img className="post__image"
          src="https://www.impactbnd.com/hubfs/blog-files/find-micro-influencers-on-instagram.jpeg" 
          alt=""/>
        <h4 className="post__text"> <strong>Username:</strong> [[Caption]]</h4>
        </div>
    )
}

export default Posts
