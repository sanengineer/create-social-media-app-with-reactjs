import React, { Component } from "react";
import { Link } from 'react-router-dom';

export const Feeds = ({ publicusers }) => {
  if (publicusers.length === 0) return null;
  console.log(publicusers.length);

  const Feed = (userPublic) => {
    return (
      // <a className="post-detail-link" href={"/post/" + userPublic.post_id}>
      <Link className="post-detail-link" to="/latest-post">
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="img-src rounded-circle"
                    src={userPublic.avatar}
                    alt={
                      userPublic.firstname +
                      userPublic.lastname +
                      "Profil Picture"
                    }
                    width="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-4">
                <a href={"/" + userPublic.username}>
                  <div className="username">{userPublic.username}</div>
                </a>

                <div className="name">
                  {userPublic.firstname + userPublic.lastname}
                </div>
              </div>
            </div>
            <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div>
          </div>
          <div className="second-text">
            <span>{userPublic.post}</span>
          </div>
        </div>
      </Link>
    );
  };

  const Feedlist = publicusers.map((userPublic) => Feed(userPublic));

  return (
    <div className="TEST">
      <div className="TEST2">{Feedlist}</div>
    </div>
  );
};
