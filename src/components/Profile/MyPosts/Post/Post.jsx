import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP1_MJX189yjwvq9aXb3lbxctAToDNsEtFFb8CiW3SjUrdp9BN&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>Likes</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
