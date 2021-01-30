// import react and component bootstrap
import React from "react";
import { Image } from "react-bootstrap";
import userNoPict from "../../assets/images/user_no-pict.jpg";
import ReactHtmlParser from "react-html-parser";

export const Comments = ({ commentspost }) => {
  if (commentspost === undefined || commentspost.length === 0) {
    return null;
  }

  const CommentRow = (post, index) => {
    const userAva = !post.user.avatar ? userNoPict : post.user.avatar;
    return (
      <div id={index} className="comment-list d-flex mt-3">
        <div>
          <Image src={userAva} className="avatar-small mr-3" />
        </div>
        <div className="bio-desc box-comment w-100">
          <div className="pb-1 f-10">
            {post.user.username}
            <span className="font-comment">
              {/* {post.createdAt.split("T")[0]}{" "}
              {post.createdAt.split("T")[1].substring(0, 5)} */}
            </span>
          </div>
          <div className="font-comment f-12">
            <p className="m-0">{ReactHtmlParser(post.content)}</p>
          </div>
        </div>
      </div>
    );
  };

  const CommentTable = commentspost.map((post, index) =>
    CommentRow(post, index)
  );

  return (
    <>
      <div className="pt-3 pr-5">{CommentTable}</div>
    </>
  );
};

export default Comments;
