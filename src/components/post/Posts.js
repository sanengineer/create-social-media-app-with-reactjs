// import react and component bootstrap
import React, { Component} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { SET_USER_POST } from '../../actions/actionTypes';

export const Posts = ({ postArray }) => {
  let dispatch = useDispatch()
  console.log(postArray)
  if(postArray === undefined || postArray.length === 0) {
    return (
      <div>
        <p>Content is Empty</p>
      </div>
    )
  }
  
  const openDetail = (postData) => {
    dispatch({
      type : SET_USER_POST,
      payload: postData
    })
  }


  const PostRow = (post, index) => {
    return (
      <Link onClick={openDetail(post)} id={index} className="post-detail-link" to="/detail-post">
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="img-src rounded-circle"
                    src={post.user.avatar}
                    alt={post.user.username + " Profil Picture"}
                    width="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-4">
                <a href="/rachelbowler">
                  <div className="username">{post.user.username}</div>
                </a>

                <div className="name">{post.user.firstname} {post.user.lastname}</div>

                <div className="second-text">
                  <span>{post.content}</span>
                </div>
              </div>
            </div>
            <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div>
          </div>
          <div className="d-flex">
              <p className="mb-0 text-muted">4 Comment</p>
              <p className="mb-0 ml-3 text-muted">87 Saved</p>
              <p className="mb-0 ml-3 text-muted">54 Loved</p>
              <p className="mb-0 ml-3 text-muted">46 Shared</p>
            </div>
        </div>
      </Link>
    )
  }

  const PostTable = postArray.map((post, index) => PostRow(post, index))

  return (
    <>
      {PostTable}
    </>
  )
}

export default Posts;