import React, { Component } from "react";

export const Feeds = ({ publicusers }) => {
  if (publicusers.length === 0) return null;
  console.log(publicusers.length);

  const Feed = (userPublic) => {
    return (
      <a className="post-detail-link" href={"/post/" + userPublic.post_id}>
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="img-src rounded-circle"
                    src={userPublic.user.avatar}
                    alt={
                      userPublic.user.firstname +
                      userPublic.user.lastname +
                      "Profil Picture"
                    }
                    width="56"
                    height="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-4">
                <a href={"/" + userPublic.user.username}>
                  <div className="username">{userPublic.user.username}</div>
                </a>

                <div className="name">
                  {userPublic.user.firstname + " " + userPublic.user.lastname}
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
            <span>{userPublic.content}</span>
          </div>
        </div>
      </a>
    );
  };

  const Feedlist = publicusers.map((userPublic) => Feed(userPublic));

  return (
    <div className="TEST">
      <div className="TEST2">{Feedlist}</div>
    </div>
  );
};
