// import react and component bootstrap
import React from 'react';
import {Image} from 'react-bootstrap';
import userIcon from '../../assets/images/user_no-pict.jpg';

export const Comments = ({ commentArray }) => {

  if(commentArray === undefined || commentArray.length === 0) {
    return null
  }

  const CommentRow = (post, index) => {
    return (
        <div id={index} className="d-flex mt-3">
          <div>
            <Image width="30px" height="30px" src={post.user.avatar} rounded />
          </div>
          <div className="bio-desc ml-1 box-comment w-100">
            <h6 className="mb-1">{post.user.username} 
              <span className="font-comment">{post.createdAt.split("T")[0] } { post.createdAt.split("T")[1].substring(0, 5) }</span>
              </h6>
            <div className="font-comment">
              <span>{post.content}</span>
            </div>
          </div>
        </div>
    )
  }

  const CommentTable = commentArray.map((post, index) => CommentRow(post, index))

  return (
    <>
      {CommentTable}
    </>
  )
}

export default Comments;