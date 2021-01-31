import React from "react";
import { Link } from "react-router-dom";
import AddPostHomePage from "./post/AddPostHomePage";
import userNoPict from "../assets/images/user_no-pict.jpg";
import ReactHtmlParser from "react-html-parser";
import ContentLoader from "react-content-loader";

export const Feeds = ({ publicusers, whoami, auth, props }) => {
  // if (publicusers.length === 0) return null;

  //
  //debug
  // console.log(publicusers.length);
  // console.log("FEEEEEDS:", whoami.length === 0);
  if (publicusers === undefined || publicusers.length === 0) {
    return (
      <ContentLoader
        speed={2}
        width={900}
        height={460}
        viewBox="0 0 900 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="38" y="7" rx="1" ry="1" width="90" height="6" />
        <rect x="38" y="18" rx="1" ry="1" width="60" height="6" />
        <rect x="0" y="52" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="72" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="92" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="112" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="132" rx="1" ry="1" width="400" height="10" />
        <circle cx="15" cy="15" r="15" />

        <rect x="38" y="182" rx="1" ry="1" width="90" height="6" />
        <rect x="38" y="192" rx="1" ry="1" width="60" height="6" />
        <rect x="0" y="222" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="242" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="262" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="282" rx="1" ry="1" width="600" height="10" />
        <rect x="0" y="302" rx="1" ry="1" width="400" height="10" />
        <circle cx="15" cy="190" r="15" />
      </ContentLoader>
    );
  }

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
                    className="avatar-small rounded-circle"
                    src={userAva}
                    alt={`${
                      userPublic.user.firstname + userPublic.user.lastname
                    } Profil`}
                    width="56"
                    height="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-2 f-10">
                {/* <Link to={"/" + userPublic.user.username}> */}
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="username">{userPublic.user.username}</div>
                </Link>

                <div className="name font-weight-light">{Fullname}</div>
              </div>
            </div>
            {/* <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div> */}
          </div>
          <div className="second-text">
            <div className="col" style={{ marginLeft: "38px" }}>
              <p className="row feeds-post f-12">
                {ReactHtmlParser(userPublic.content)}
              </p>
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
