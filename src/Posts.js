import React from 'react'
import './Post.css';

function Posts() {
    return (
        <div className="post">
            <h3>Username: </h3>
          {/* header -> avatar + username  */}

          <img className="post__image"
          src="https://www.impactbnd.com/hubfs/blog-files/find-micro-influencers-on-instagram.jpeg" 
          alt=""/>
        <h4 className="post__text"> <strong>Username:</strong> [[Caption]]</h4>

        </div>
    )
}

export default Posts
