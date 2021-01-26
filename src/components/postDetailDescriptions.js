import React from "react";
import { Link } from "react-router-dom";

const PostDetailsDescription = ({ postdetails }) => {
  console.log("postdetails:", postdetails);
  var Fullname;
  if (
    (postdetails.user.firstname == "" && postdetails.user.lastname == "") ||
    (postdetails.user.firstname == null && postdetails.user.lastname == null)
  ) {
    var Fullname = postdetails.user.username + postdetails.user_id;
  } else {
    var Fullname = `${postdetails.user.firstname} ${postdetails.user.lastname}`;
  }
  return (
    <div className="quotes-people-box-list">
      <div className="first-text d-flex justify-content-between">
        <div className="img-bio d-flex justify-content-between">
          <div className="image-profile-box">
            <div className="image-profile">
              <img
                className="img-src rounded-circle"
                src={postdetails.user.avatar}
                alt={`${
                  postdetails.user.firstname + postdetails.user.lastname
                } Profil Picture`}
                width="56"
                height="56"
              />
            </div>
          </div>
          <div className="bio-desc pl-4">
            <Link to={"/" + postdetails.user.username} />
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="username">{postdetails.user.username}</div>
            </Link>

            <div className="name">{Fullname}</div>
          </div>
        </div>
        <div className="follow-button-group">
          <button className="follow-btn btn" to="#">
            Follow
          </button>
        </div>
      </div>
      <div className="second-text">
        <span>{postdetails.content}</span>
      </div>
    </div>
  );
};

export default PostDetailsDescription;
