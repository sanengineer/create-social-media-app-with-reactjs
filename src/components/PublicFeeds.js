import React from "react";
import { Link } from "react-router-dom";
import AddPostHomePage from "./post/AddPostHomePage";
import userNoPict from "../assets/images/user_no-pict.jpg";
import ReactHtmlParser from "react-html-parser";

export const Feeds = ({ publicusers, whoami, auth }) => {
  if (publicusers.length === 0) return null;

  //
  //debug
  // console.log(publicusers.length);
  // console.log("FEEEEEDS:", whoami.length === 0);

  const Feed = (userPublic) => {
    const userAva = !userPublic.user.avatar
      ? userNoPict
      : userPublic.user.avatar;

    const Fullname =
      (userPublic.user.firstname === "" && userPublic.user.lastname === "") ||
      (userPublic.user.firstname === null && userPublic.user.lastname === null)
        ? userPublic.user.username + userPublic.user_id
        : `${userPublic.user.firstname} ${userPublic.user.lastname}`;

    return (
      // <a className="post-detail-link" href={"/post/" + userPublic.post_id}>
      // <Link
      //   className="post-detail-link"
      //   to={"/feed-" + userPublic.user.username + "-" + userPublic.post_id}
      // >
      // <Link className="post-detail-link" to={"/feed-" + userPublic.post_id}>
      <Link
        className="post-detail-link"
        to={`/${userPublic.user.username}/post/${userPublic.post_id}`}
      >
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="avatar-medium rounded-circle"
                    src={userAva}
                    alt={`${
                      userPublic.user.firstname + userPublic.user.lastname
                    } Profil`}
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

                <div className="name">{Fullname}</div>
              </div>
            </div>
            {/* <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div> */}
          </div>
          <div className="second-text">
            <div className="col" style={{ marginLeft: "82px" }}>
              <p className="row">{ReactHtmlParser(userPublic.content)}</p>
              <div className="row">
                {!userPublic.image ? null : (
                  <img
                    src={userPublic.image}
                    className="rounded"
                    height="280"
                    alt={`Post From ${Fullname}`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const Feedlist = publicusers.map((userPublic) => Feed(userPublic));

  return auth.isAuthenticated === true ? (
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
  ) : (
    <div className="child-landing-page">
      <div className="child-landing-page-wrapper">
        <div className="public-feeds-landing">{Feedlist}</div>
      </div>
    </div>
  );
};
