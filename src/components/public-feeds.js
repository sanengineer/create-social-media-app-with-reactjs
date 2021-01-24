import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddPostHomePage from "./post/AddPostHomePage";
import userNoPict from "../assets/images/user_no-pict.jpg";

export const Feeds = ({ publicusers, whoami }) => {
  if (publicusers.length === 0) return null;
  console.log(publicusers.length);

  console.log("FEEEEEDS:", whoami.length === 0);

  const Feed = (userPublic) => {
    var userAva;
    if (userPublic.user.avatar) {
      var userAva = userPublic.user.avatar;
    } else {
      var userAva = userNoPict;
    }

    var userFullnameNull = userPublic.user.username + userPublic.user_id;
    var userFullnameNotNull =
      userPublic.user.firstname + " " + userPublic.user.lastname;

    var FullnameNull = true;

    return (
      // <a className="post-detail-link" href={"/post/" + userPublic.post_id}>
      // <Link
      //   className="post-detail-link"
      //   to={"/feed-" + userPublic.user.username + "-" + userPublic.post_id}
      // >
      // <Link className="post-detail-link" to={"/feed-" + userPublic.post_id}>
      <Link className="post-detail-link" to="#">
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="img-src rounded-circle"
                    src={userAva}
                    alt={`${
                      userPublic.user.firstname + userPublic.user.lastname
                    } Profil Picture`}
                    width="56"
                    height="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-4">
                {/* <Link to={"/" + userPublic.user.username}> */}
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="username">{userPublic.user.username}</div>
                </Link>

                <div className="name">
                  {FullnameNull ? userFullnameNull : userFullnameNotNull}
                </div>
              </div>
            </div>
            {/* <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div> */}
          </div>
          <div className="second-text">
            <span>{userPublic.content}</span>
          </div>
        </div>
      </Link>
    );
  };

  const Feedlist = publicusers.map((userPublic) => Feed(userPublic));

  if (whoami.length === 0) {
    return (
      <div className="child-landing-page">
        <div className="child-landing-page-wrapper">
          <div className="public-feeds-landing">{Feedlist}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="child-home-page">
        <div className="child-home-page-wrapper">
          <div className="card-no-round">
            <AddPostHomePage />
          </div>
          <div className="public-feeds-home-relative">
            <div className="public-feeds-home">
              <div className="public-feeds-home-wrapper">{Feedlist}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
