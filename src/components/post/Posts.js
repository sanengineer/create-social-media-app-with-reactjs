// import react and component bootstrap
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_USER_POST } from "../../actions/actionTypes";
import userNoPict from "../../assets/images/user_no-pict.jpg";

export const Posts = ({ postArray }) => {
  let dispatch = useDispatch();
  console.log(postArray);
  if (postArray === undefined || postArray.length === 0) {
    return (
      <div>
        <p>Content is Empty</p>
      </div>
    );
  }

  const openDetail = (postData) => {
    // console.log(postData)
    dispatch({
      type: SET_USER_POST,
      payload: postData,
    });
  };

  const test = () => {
    console.log("tes click");
  };

  const PostRow = (post, index) => {
    var userAva;
    if (post.user.avatar) {
      var userAva = post.user.avatar;
    } else {
      var userAva = userNoPict;
    }

    var Fullname;
    if (
      (post.user.firstname == "" && post.user.lastname == "") ||
      (post.user.firstname == null && post.user.lastname == null)
    ) {
      var Fullname = post.user.username + post.user_id;
    } else {
      var Fullname = `${post.user.firstname} ${post.user.lastname}`;
    }

    return (
      <Link
        onClick={(e) => openDetail(post)}
        id={index}
        className="post-detail-link mmm"
        // to="/detail-post"
        to="#"
      >
        {/* <a onClick={openDetail(post)} id={index} className="post-detail-link" to="/detail-post"> */}
        <div className="quotes-people-box-list">
          <div className="first-text d-flex justify-content-between">
            <div className="img-bio d-flex justify-content-between">
              <div className="image-profile-box">
                <div className="image-profile">
                  <img
                    className="img-src rounded-circle"
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
                  <span>{post.content}</span>
                  {/* <a onClick={openDetail(post)} >detail</a> */}
                </div>
              </div>
            </div>
            {/* <div className="follow-button-group">
              <button className="follow-btn btn" to="#">
                Follow
              </button>
            </div> */}
          </div>
          {/* <div className="d-flex">
            <p className="mb-0 text-muted">4 Comment</p>
            <p className="mb-0 ml-3 text-muted">87 Saved</p>
            <p className="mb-0 ml-3 text-muted">54 Loved</p>
            <p className="mb-0 ml-3 text-muted">46 Shared</p>
          </div> */}
        </div>
      </Link>
    );
  };

  const PostTable = postArray.map((post, index) => PostRow(post, index));

  return <>{PostTable}</>;
};

export default Posts;
