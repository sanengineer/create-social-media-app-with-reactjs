// import react and component bootstrap
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CREATE_USER_POST } from "../../redux/actions/actionTypes";
import ReactHtmlParser from "react-html-parser";
import userNoPict from "../../assets/images/user_no-pict.jpg";
import ContentLoader from "react-content-loader";

export const Posts = ({ postArray, props }) => {
  let dispatch = useDispatch();
  //
  //debug
  // console.log(postArray);
  if (postArray === undefined || postArray.length === 0) {
    return (
      <div className="post-detail-link mmm">
        <ContentLoader
          speed={2}
          width={900}
          height={260}
          viewBox="0 0 900 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="78" y="12" rx="3" ry="3" width="140" height="12" />
          <rect x="78" y="36" rx="3" ry="3" width="90" height="12" />
          <rect x="0" y="92" rx="3" ry="3" width="600" height="14" />
          <rect x="0" y="116" rx="3" ry="3" width="600" height="14" />
          <rect x="0" y="140" rx="3" ry="3" width="600" height="14" />
          <circle cx="30" cy="30" r="30" />
        </ContentLoader>
      </div>
    );
  }

  const openDetail = (postData) => {
    //
    //debug
    // console.log(postData)
    dispatch({
      type: CREATE_USER_POST,
      payload: postData,
    });
  };

  const PostRow = (post, index) => {
    const userAva = !post.user.avatar ? userNoPict : post.user.avatar;

    const Fullname =
      (post.user.firstname === "" && post.user.lastname === "") ||
      (post.user.firstname === null && post.user.lastname === null)
        ? post.user.username + post.user_id
        : `${post.user.firstname} ${post.user.lastname}`;

    return (
      <Link
        onClick={(e) => openDetail(post)}
        id={index}
        className="post-detail-link mmm"
      >
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="avatar-medium img-src rounded-circle"
                    src={userAva}
                    alt={post.user.username + " Profil Picture"}
                    width="56"
                  />
                </div>
              </div>
              <div className="bio-desc pl-4">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="username">{post.user.username}</div>
                </Link>

                <div className="name">{Fullname}</div>

                <div className="second-text">
                  <div className="col" style={{ marginLeft: "0" }}>
                    <p className="row">{ReactHtmlParser(post.content)}</p>
                    <div className="row">
                      {!post.image ? null : (
                        <img
                          src={post.image}
                          className="rounded"
                          height="280"
                          alt={`Post From ${Fullname}`}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div> */}
          </div>
        </div>
      </Link>
    );
  };

  const PostTable = postArray.map((post, index) => PostRow(post, index));

  return <>{PostTable}</>;
};

export default Posts;
