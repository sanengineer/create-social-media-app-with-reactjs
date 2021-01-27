import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment";
import AddComment from "../components/modals/commentModals";
import UsersServices from "../services/usersService";
import { fetchPostLovesStart } from "../actions/publicPostLovesAction";

const PostDetailsDescription = ({
  postdetails,
  pathname,
  hostname,
  whoami,
  loves,
  commentspost,
}) => {
  const date = moment(postdetails.createdAt).format("DD MMMM YYYY");
  const time = moment(postdetails.createdAt).format("HH:MM");
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const lovePayload = {
      user_id: whoami.user_id,
      post_id: postdetails.post_id,
    };

    const token = localStorage.jwtToken;
    //
    //debug
    console.log("token:", token);

    UsersServices.giveLovePost(token, lovePayload)
      .then((res) => {
        //
        //debug
        console.log("res.data", res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        //
        //debug
        console.log("res.data", err.response);
        alert(err.data.message);
      });
    dispatch(fetchPostLovesStart());

    //
    //debug
    console.log("lovePayload:", lovePayload);
  };

  //
  //debug
  console.log("postdetails:", postdetails.createAt);
  console.log("date:", date);
  console.log("time:", time);

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
    <>
      <div className="quotes-people-box-list pr-5">
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
          {/* <div className="follow-button-group">
          <button className="follow-btn btn" to="#">
            Follow
          </button>
        </div> */}
        </div>
        <div className="second-text">
          <span>{postdetails.content}</span>
        </div>

        <div className="thrid-text container pt-5 pb-5">
          <div className="row justify-content-between">
            <div className="third-text-left-group d-flex">
              <div className="text-muted f-12">
                <span>{time}</span>
                <span className="post-date">{date}</span>
              </div>
            </div>
            <div className="third-text-right-group">
              <div className="ml-auto">
                <p className="mb-0 text-muted f-12">
                  <span className="comment-info-numbers">
                    {!commentspost ? 0 : commentspost.length} Comment
                  </span>
                  <span className="love-info-numbers">
                    {!loves ? 0 : loves.count} Loved
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth-text container">
          <div className="row justify-content-between">
            <div className="fourth-text-left-group d-flex">
              <div className="icon-comment">
                <button onClick={handleShow} className="icon-comment-btn btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C10.6868 2 9.38641 2.25866 8.17315 2.7612C6.9599 3.26375 5.85751 4.00035 4.92892 4.92893C3.05356 6.8043 1.99999 9.34784 1.99999 12C1.99125 14.3091 2.79078 16.5485 4.25999 18.33L2.25999 20.33C2.12123 20.4706 2.02723 20.6492 1.98986 20.8432C1.95249 21.0372 1.97341 21.2379 2.04999 21.42C2.13305 21.5999 2.26769 21.7511 2.43683 21.8544C2.60598 21.9577 2.80199 22.0083 2.99999 22H12C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20H5.40999L6.33999 19.07C6.52624 18.8826 6.63078 18.6292 6.63078 18.365C6.63078 18.1008 6.52624 17.8474 6.33999 17.66C5.03057 16.352 4.21516 14.6305 4.03268 12.7888C3.8502 10.947 4.31193 9.09901 5.33922 7.55952C6.3665 6.02004 7.89578 4.88436 9.6665 4.34597C11.4372 3.80759 13.3398 3.8998 15.0502 4.60691C16.7606 5.31402 18.1728 6.59227 19.0464 8.22389C19.92 9.85551 20.2009 11.7395 19.8411 13.555C19.4814 15.3705 18.5033 17.005 17.0735 18.1802C15.6438 19.3554 13.8508 19.9985 12 20Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              {/* <div className="ml-5">
              <div className="icon-save">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.71 9.29L14.71 3.29C14.6178 3.20005 14.5092 3.12874 14.39 3.08C14.266 3.02962 14.1338 3.0025 14 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V10C21.0008 9.86839 20.9755 9.73793 20.9258 9.61609C20.876 9.49426 20.8027 9.38344 20.71 9.29ZM9 5H13V7H9V5ZM15 19H9V16C9 15.7348 9.10536 15.4804 9.29289 15.2929C9.48043 15.1054 9.73478 15 10 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16V19ZM19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H17V16C17 15.2044 16.6839 14.4413 16.1213 13.8787C15.5587 13.3161 14.7956 13 14 13H10C9.20435 13 8.44129 13.3161 7.87868 13.8787C7.31607 14.4413 7 15.2044 7 16V19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H7V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8V6.41L19 10.41V18Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div> */}
              <div className="ml-5">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id={`popover-positioned-bottom`}>
                      <Popover.Title as="h3">Share To</Popover.Title>
                      <Popover.Content>
                        <div className="d-flex share-button-group">
                          <a
                            className="logo-twitter mr-5"
                            target="_blank"
                            href={`https://twitter.com/intent/tweet?text=${postdetails.content} Post by ${Fullname}&url=https%3A%2F%2F${hostname}${pathname}%2F&`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.9912 3.95021C22.9913 3.77357 22.9446 3.60007 22.8558 3.44735C22.7671 3.29464 22.6394 3.16817 22.4859 3.08084C22.3324 2.9935 22.1584 2.94842 21.9818 2.95017C21.8052 2.95193 21.6322 3.00046 21.4804 3.09083C20.8951 3.43921 20.265 3.70601 19.6074 3.88383C18.6684 3.07806 17.4708 2.63713 16.2334 2.64164C14.876 2.6432 13.5723 3.17223 12.5976 4.11702C11.623 5.06181 11.0536 6.3484 11.0098 7.70512C8.33378 7.27838 5.90843 5.88164 4.19625 3.78126C4.09308 3.65609 3.96133 3.55757 3.81211 3.494C3.66288 3.43043 3.50056 3.40368 3.33883 3.41601C3.17719 3.42932 3.02122 3.4818 2.88442 3.56892C2.74762 3.65603 2.63409 3.77516 2.55367 3.91601C2.1412 4.63582 1.9043 5.44276 1.86222 6.27131C1.82014 7.09986 1.97406 7.92666 2.31148 8.68456L2.30953 8.68651C2.15788 8.77991 2.03272 8.91066 1.94603 9.06625C1.85935 9.22185 1.81403 9.39708 1.81441 9.57519C1.81257 9.72211 1.82139 9.86898 1.84078 10.0146C1.94292 11.2729 2.50056 12.4507 3.40914 13.3271C3.3475 13.4446 3.30988 13.5731 3.29848 13.7052C3.28708 13.8373 3.30212 13.9704 3.34273 14.0967C3.73884 15.3308 4.58123 16.3727 5.70504 17.0185C4.56328 17.46 3.33046 17.614 2.11519 17.4668C1.89026 17.4386 1.66242 17.4876 1.46904 17.6059C1.27566 17.7242 1.12822 17.9047 1.0509 18.1178C0.973592 18.3309 0.970999 18.5639 1.04355 18.7787C1.1161 18.9935 1.25949 19.1772 1.45019 19.2998C3.54028 20.646 5.97387 21.3617 8.45996 21.3613C11.2792 21.393 14.0299 20.4921 16.2842 18.7988C18.5385 17.1054 20.1699 14.7145 20.9248 11.998C21.2778 10.8146 21.4581 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3855 6.92668 22.6486 6.20527C22.9117 5.48387 23.0282 4.7172 22.9912 3.95021ZM19.6845 7.16212C19.5194 7.35746 19.4358 7.60891 19.4511 7.86427C19.4609 8.02927 19.4599 8.19527 19.4599 8.35157C19.4579 9.39511 19.3049 10.4329 19.0058 11.4326C18.3893 13.744 17.015 15.7817 15.1029 17.2192C13.1908 18.6568 10.8516 19.4111 8.45996 19.3613C7.60084 19.3616 6.74468 19.2606 5.90918 19.0606C6.97459 18.7172 7.97077 18.1879 8.85156 17.4971C9.01378 17.3693 9.13251 17.1945 9.19145 16.9967C9.25038 16.7988 9.24664 16.5875 9.18073 16.3918C9.11483 16.1961 8.98999 16.0257 8.82334 15.9038C8.65669 15.7819 8.4564 15.7145 8.24996 15.7109C7.41879 15.698 6.62509 15.363 6.03609 14.7764C6.18551 14.7481 6.33395 14.7129 6.48141 14.6709C6.69742 14.6094 6.88645 14.477 7.01807 14.295C7.14969 14.1131 7.21623 13.8921 7.20698 13.6677C7.19773 13.4433 7.11324 13.2285 6.96709 13.058C6.82095 12.8874 6.62167 12.7711 6.40133 12.7275C5.91887 12.6323 5.46487 12.427 5.07464 12.1277C4.68441 11.8284 4.36845 11.4432 4.15133 11.002C4.33206 11.0266 4.51394 11.0419 4.69625 11.0479C4.91283 11.0511 5.12484 10.9854 5.30162 10.8603C5.47841 10.7351 5.6108 10.5569 5.67965 10.3516C5.74563 10.1443 5.74223 9.92123 5.66998 9.7161C5.59772 9.51096 5.46055 9.33499 5.27926 9.21485C4.83941 8.92182 4.4791 8.52427 4.23061 8.0578C3.98213 7.59134 3.85322 7.07052 3.85543 6.54201C3.85543 6.47561 3.85738 6.4092 3.86129 6.34377C6.10255 8.43402 9.00961 9.66621 12.0703 9.82326C12.2248 9.82934 12.3786 9.80024 12.5202 9.73816C12.6618 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0928 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0365 8.35806 13.0073 8.11357 13.0068 7.86818C13.0077 7.01271 13.3479 6.19254 13.9528 5.58764C14.5577 4.98274 15.3779 4.64251 16.2334 4.64161C16.6735 4.64043 17.1091 4.7305 17.5127 4.90615C17.9162 5.0818 18.279 5.3392 18.5781 5.66212C18.6934 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3328 5.99303 19.499 5.96001C19.9097 5.88006 20.3146 5.7724 20.7109 5.63775C20.4406 6.19072 20.0952 6.70369 19.6845 7.16212Z"
                                fill="black"
                              />
                            </svg>
                          </a>
                          <a
                            className="logo-tumblr mr-5"
                            target="_blank"
                            href={`https://tumblr.com/widgets/share/tool?canonicalUrl=https%3A%2F%2F${hostname}${pathname}`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4336 20.5083L16.4717 17.6548C16.4264 17.5208 16.3532 17.3978 16.257 17.2942C16.1607 17.1905 16.0436 17.1084 15.9133 17.0533C15.783 16.9982 15.6425 16.9714 15.501 16.9746C15.3596 16.9777 15.2205 17.0109 15.0928 17.0718C14.7062 17.2208 14.2977 17.3049 13.8838 17.3208C13.6511 17.3503 13.4159 17.2914 13.2246 17.1558C13.0499 16.9243 12.9649 16.6374 12.9853 16.3482V12.0005H16.002C16.1333 12.0006 16.2634 11.9748 16.3848 11.9245C16.5061 11.8743 16.6164 11.8006 16.7093 11.7078C16.8022 11.6149 16.8758 11.5046 16.926 11.3833C16.9763 11.2619 17.0021 11.1318 17.002 11.0005V7.09522C17.0021 6.96388 16.9763 6.8338 16.926 6.71244C16.8758 6.59108 16.8022 6.48082 16.7093 6.38794C16.6164 6.29507 16.5061 6.22141 16.3848 6.17118C16.2634 6.12096 16.1333 6.09514 16.002 6.09522H13V2.00049C13.0001 1.86914 12.9743 1.73907 12.924 1.61771C12.8738 1.49635 12.8002 1.38609 12.7073 1.29321C12.6144 1.20034 12.5041 1.12668 12.3828 1.07645C12.2614 1.02623 12.1313 1.00041 12 1.00049H9.07031C8.78544 1.0018 8.51124 1.10897 8.30098 1.30117C8.09072 1.49337 7.95943 1.75688 7.93262 2.04049C7.8927 3.03805 7.56049 4.00188 6.97729 4.81219C6.39409 5.6225 5.58561 6.24354 4.65234 6.59814C4.45873 6.66776 4.29133 6.79544 4.173 6.96376C4.05467 7.13208 3.99118 7.33282 3.99121 7.53857V11.1226C3.99114 11.2539 4.01695 11.384 4.06718 11.5053C4.11741 11.6267 4.19106 11.737 4.28394 11.8298C4.37681 11.9227 4.48708 11.9964 4.60844 12.0466C4.7298 12.0968 4.85987 12.1226 4.99121 12.1226H6.01562V16.6577C6.03244 18.3403 6.71008 19.9488 7.90234 21.1362C8.56745 21.7599 9.34948 22.2456 10.2033 22.5654C11.0571 22.8852 11.9659 23.0328 12.877 22.9995C12.9307 22.9995 12.9854 22.9995 13.0401 22.9985C14.586 22.9731 16.6583 22.351 17.3126 21.3911C17.3997 21.2634 17.456 21.1171 17.477 20.9639C17.498 20.8107 17.4832 20.6548 17.4336 20.5083ZM13.0068 20.9985C12.3342 21.052 11.6578 20.9651 11.0204 20.7434C10.3831 20.5217 9.79887 20.1699 9.30469 19.7104C8.49087 18.9016 8.02784 17.8051 8.01562 16.6577V11.1226C8.0157 10.9912 7.98988 10.8611 7.93966 10.7398C7.88943 10.6184 7.81577 10.5082 7.7229 10.4153C7.63002 10.3224 7.51975 10.2488 7.39839 10.1985C7.27703 10.1483 7.14696 10.1225 7.01562 10.1226H5.99121V8.20556C7.00101 7.71123 7.87591 6.97945 8.54093 6.07291C9.20595 5.16638 9.64126 4.11212 9.80957 3.00049H11V7.09522C10.9999 7.22656 11.0257 7.35663 11.076 7.47799C11.1262 7.59935 11.1999 7.70962 11.2927 7.80249C11.3856 7.89537 11.4959 7.96902 11.6172 8.01925C11.7386 8.06948 11.8687 8.09529 12 8.09522H15.002V10.0005H11.9854C11.8541 10.0004 11.724 10.0262 11.6026 10.0765C11.4813 10.1267 11.371 10.2003 11.2781 10.2932C11.1853 10.3861 11.1116 10.4964 11.0614 10.6177C11.0111 10.7391 10.9853 10.8691 10.9854 11.0005V16.3647C10.9716 16.7757 11.0402 17.1852 11.1873 17.5691C11.3344 17.9531 11.557 18.3036 11.8419 18.6001C12.1227 18.8582 12.4538 19.0554 12.8144 19.1794C13.175 19.3034 13.5574 19.3516 13.9376 19.3208C14.2558 19.3086 14.5726 19.2708 14.8848 19.2075L15.3096 20.4663C14.5857 20.797 13.8024 20.978 13.0068 20.9985Z"
                                fill="black"
                              />
                            </svg>
                          </a>
                          <a
                            className="logo-linkedin mr-5"
                            target="_blank"
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://${hostname}${pathname}`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.5 8.99891C16.6047 8.99853 15.7233 9.21997 14.9345 9.64344C14.8626 9.45386 14.7346 9.29068 14.5677 9.17555C14.4008 9.06043 14.2027 8.99882 14 8.99891H9.99997C9.86863 8.99883 9.73856 9.02465 9.6172 9.07488C9.49584 9.1251 9.38557 9.19876 9.2927 9.29164C9.19982 9.38451 9.12617 9.49478 9.07594 9.61614C9.02571 9.7375 8.9999 9.86757 8.99997 9.99891V21.9989C8.99989 22.1303 9.02571 22.2603 9.07594 22.3817C9.12616 22.503 9.19982 22.6133 9.29269 22.7062C9.38557 22.7991 9.49584 22.8727 9.6172 22.9229C9.73856 22.9732 9.86863 22.999 9.99997 22.9989H14C14.1313 22.999 14.2614 22.9732 14.3827 22.9229C14.5041 22.8727 14.6144 22.7991 14.7072 22.7062C14.8001 22.6133 14.8738 22.503 14.924 22.3817C14.9742 22.2603 15 22.1303 15 21.9989V16.4989C15 16.2337 15.1053 15.9793 15.2929 15.7918C15.4804 15.6043 15.7348 15.4989 16 15.4989C16.2652 15.4989 16.5195 15.6043 16.7071 15.7918C16.8946 15.9793 17 16.2337 17 16.4989V21.9989C16.9999 22.1303 17.0257 22.2603 17.0759 22.3817C17.1262 22.503 17.1998 22.6133 17.2927 22.7062C17.3856 22.7991 17.4958 22.8727 17.6172 22.9229C17.7386 22.9732 17.8686 22.999 18 22.9989H22C22.1313 22.999 22.2614 22.9732 22.3827 22.9229C22.5041 22.8727 22.6144 22.7991 22.7072 22.7062C22.8001 22.6133 22.8738 22.503 22.924 22.3817C22.9742 22.2603 23 22.1303 23 21.9989V14.4989C22.9982 13.0408 22.4181 11.6429 21.3871 10.6118C20.356 9.58077 18.9581 9.00072 17.5 8.99891ZM21 20.9989H19V16.4989C19 15.7033 18.6839 14.9402 18.1213 14.3776C17.5587 13.815 16.7956 13.4989 16 13.4989C15.2043 13.4989 14.4413 13.815 13.8786 14.3776C13.316 14.9402 13 15.7033 13 16.4989V20.9989H11V10.9989H13V11.702C13.0001 11.9092 13.0645 12.1113 13.1844 12.2803C13.3043 12.4493 13.4737 12.5769 13.6692 12.6455C13.8647 12.7141 14.0767 12.7203 14.2759 12.6633C14.4751 12.6062 14.6517 12.4887 14.7812 12.327C15.23 11.7571 15.8456 11.3415 16.542 11.1383C17.2384 10.9351 17.9808 10.9544 18.6657 11.1936C19.3506 11.4328 19.9436 11.8799 20.3621 12.4725C20.7806 13.065 21.0036 13.7735 21 14.4989V20.9989ZM6.99997 8.99891H2.99997C2.86863 8.99883 2.73856 9.02465 2.6172 9.07488C2.49584 9.1251 2.38557 9.19876 2.2927 9.29164C2.19982 9.38451 2.12617 9.49478 2.07594 9.61614C2.02571 9.7375 1.9999 9.86757 1.99997 9.99891V21.9989C1.99989 22.1303 2.02571 22.2603 2.07594 22.3817C2.12616 22.503 2.19982 22.6133 2.29269 22.7062C2.38557 22.7991 2.49584 22.8727 2.6172 22.9229C2.73856 22.9732 2.86863 22.999 2.99997 22.9989H6.99997C7.13131 22.999 7.26138 22.9732 7.38274 22.9229C7.5041 22.8727 7.61437 22.7991 7.70725 22.7062C7.80012 22.6133 7.87378 22.503 7.92401 22.3817C7.97423 22.2603 8.00005 22.1303 7.99997 21.9989V9.99891C8.00005 9.86757 7.97423 9.7375 7.924 9.61614C7.87378 9.49478 7.80012 9.38451 7.70724 9.29164C7.61437 9.19876 7.5041 9.1251 7.38274 9.07488C7.26138 9.02465 7.13131 8.99883 6.99997 8.99891ZM5.99997 20.9989H3.99997V10.9989H5.99997V20.9989ZM5.01462 1.54191C4.57698 1.51571 4.13859 1.57881 3.7261 1.72735C3.31361 1.8759 2.93564 2.1068 2.61519 2.406C2.29473 2.70521 2.03849 3.06646 1.86203 3.46781C1.68557 3.86915 1.59259 4.3022 1.58875 4.7406C1.5849 5.17901 1.67027 5.61361 1.83966 6.01799C2.00904 6.42237 2.25891 6.78807 2.57407 7.09285C2.88922 7.39763 3.26308 7.63512 3.6729 7.79089C4.08272 7.94665 4.51994 8.01742 4.95797 7.99891H4.98629C5.42509 8.02497 5.86459 7.96129 6.27795 7.81176C6.6913 7.66223 7.06983 7.42998 7.39039 7.12922C7.71096 6.82845 7.96683 6.46548 8.14238 6.06249C8.31793 5.65949 8.40946 5.22494 8.41139 4.78537C8.41332 4.3458 8.3256 3.91046 8.15359 3.50594C7.98159 3.10142 7.7289 2.73622 7.41099 2.43266C7.09307 2.12909 6.7166 1.89353 6.30457 1.74038C5.89255 1.58723 5.45362 1.5197 5.01461 1.54191H5.01462ZM4.9863 5.99891H4.95797C4.78504 6.01991 4.60961 6.00369 4.44346 5.95134C4.27731 5.89899 4.12427 5.81171 3.99461 5.69537C3.86495 5.57903 3.76167 5.43631 3.69168 5.27678C3.6217 5.11726 3.58664 4.94461 3.58884 4.77042C3.58884 4.02432 4.14841 3.5419 5.01462 3.5419C5.18932 3.51861 5.36698 3.53303 5.53564 3.58418C5.70429 3.63534 5.86003 3.72204 5.99236 3.83845C6.12468 3.95486 6.23053 4.09828 6.30276 4.25904C6.37499 4.4198 6.41193 4.59418 6.4111 4.77042C6.4111 5.51651 5.85153 5.99891 4.9863 5.99891Z"
                                fill="black"
                              />
                            </svg>
                          </a>
                          <a
                            className="logo-facebook mr-5"
                            target="_blank"
                            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${hostname}${pathname}&`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                          <CopyToClipboard
                            className="logo-copy-link"
                            text={`https://${hostname}${pathname}`}
                          >
                            <button>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.99996 17.5501L8.22996 19.2701C7.76583 19.7342 7.13634 19.995 6.47996 19.995C5.82358 19.995 5.19409 19.7342 4.72996 19.2701C4.26583 18.806 4.00508 18.1765 4.00508 17.5201C4.00508 16.8637 4.26583 16.2342 4.72996 15.7701L9.26996 11.2201C9.71557 10.773 10.316 10.5144 10.947 10.4976C11.578 10.4809 12.1913 10.7073 12.66 11.1301L12.78 11.2301C12.9696 11.4157 13.2252 11.5185 13.4906 11.5157C13.7559 11.5128 14.0093 11.4047 14.195 11.2151C14.3806 11.0255 14.4833 10.7699 14.4805 10.5045C14.4777 10.2391 14.3696 9.98575 14.18 9.80009C14.1235 9.72712 14.0634 9.65703 14 9.59009C13.1463 8.84741 12.0423 8.45694 10.9115 8.49779C9.78076 8.53864 8.70779 9.00775 7.90996 9.81009L3.30996 14.3601C2.52831 15.2109 2.10558 16.3308 2.13003 17.4858C2.15449 18.6409 2.62424 19.7419 3.44119 20.5589C4.25814 21.3758 5.35912 21.8456 6.51421 21.87C7.66929 21.8945 8.78916 21.4717 9.63996 20.6901L11.37 19.0001C11.5408 18.8137 11.6347 18.5696 11.6328 18.3168C11.6309 18.064 11.5333 17.8214 11.3597 17.6376C11.1861 17.4539 10.9493 17.3427 10.697 17.3264C10.4448 17.3102 10.1957 17.3901 9.99996 17.5501ZM20.69 3.31009C19.8487 2.4741 18.7109 2.00488 17.525 2.00488C16.339 2.00488 15.2012 2.4741 14.36 3.31009L12.63 5.00009C12.4591 5.18644 12.3652 5.43057 12.3672 5.68336C12.3691 5.93615 12.4666 6.17883 12.6402 6.36258C12.8139 6.54633 13.0506 6.65751 13.3029 6.67375C13.5552 6.68998 13.8042 6.61007 14 6.45009L15.73 4.73009C16.1941 4.26597 16.8236 4.00522 17.48 4.00522C18.1363 4.00522 18.7658 4.26597 19.23 4.73009C19.6941 5.19422 19.9548 5.82372 19.9548 6.48009C19.9548 7.13647 19.6941 7.76596 19.23 8.23009L14.69 12.7801C14.2443 13.2272 13.6439 13.4858 13.0129 13.5026C12.382 13.5193 11.7687 13.2929 11.3 12.8701L11.18 12.7701C10.9903 12.5844 10.7347 12.4817 10.4694 12.4845C10.204 12.4874 9.95061 12.5955 9.76496 12.7851C9.57931 12.9747 9.47659 13.2303 9.4794 13.4957C9.48221 13.7611 9.59033 14.0144 9.77996 14.2001C9.8526 14.2744 9.92939 14.3445 10.01 14.4101C10.8646 15.1505 11.9682 15.5395 13.0983 15.4987C14.2283 15.4579 15.3009 14.9903 16.1 14.1901L20.65 9.64009C21.4913 8.80417 21.9677 7.66932 21.9752 6.48334C21.9827 5.29736 21.5207 4.15659 20.69 3.31009Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </CopyToClipboard>
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <button href="#" className="icon-share btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33331 10V16.6667C3.33331 17.1087 3.50891 17.5326 3.82147 17.8452C4.13403 18.1577 4.55795 18.3333 4.99998 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6666 17.1087 16.6666 16.6667V10"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3334 5.00008L10 1.66675L6.66669 5.00008"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 1.66675V12.5001"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </OverlayTrigger>
              </div>
              <div className="icon-love ml-5">
                {/* <form>
                <input type="input" hidden />
              </form> */}
                <button onClick={handleSubmit} className="icon-love-btn btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.41H18.5C18.3677 10.4105 18.2368 10.4373 18.1149 10.4888C17.9931 10.5403 17.8826 10.6155 17.79 10.71L16.55 12L13.75 8.80996C13.6565 8.71004 13.5434 8.6304 13.4179 8.57595C13.2923 8.5215 13.1569 8.4934 13.02 8.4934C12.8831 8.4934 12.7477 8.5215 12.6222 8.57595C12.4966 8.6304 12.3836 8.71004 12.29 8.80996L10.59 10.51H9.00001C8.7348 10.51 8.48044 10.6153 8.2929 10.8028C8.10537 10.9904 8.00001 11.2447 8.00001 11.51C8.00001 11.7752 8.10537 12.0295 8.2929 12.2171C8.48044 12.4046 8.7348 12.51 9.00001 12.51H11C11.1316 12.5107 11.2621 12.4855 11.3839 12.4357C11.5058 12.386 11.6166 12.3126 11.71 12.22L13 10.88L15.8 14.07C15.8903 14.1729 16.0009 14.2562 16.1247 14.3147C16.2486 14.3732 16.3831 14.4056 16.52 14.41C16.6516 14.4107 16.7821 14.3855 16.9039 14.3357C17.0258 14.286 17.1366 14.2126 17.23 14.12L18.93 12.41H21C21.2652 12.41 21.5196 12.3046 21.7071 12.1171C21.8947 11.9295 22 11.6752 22 11.41C22 11.1447 21.8947 10.8904 21.7071 10.7028C21.5196 10.5153 21.2652 10.41 21 10.41ZM13.61 15.71L11.71 17.61C11.617 17.7037 11.5064 17.7781 11.3846 17.8288C11.2627 17.8796 11.132 17.9058 11 17.9058C10.868 17.9058 10.7373 17.8796 10.6154 17.8288C10.4936 17.7781 10.383 17.7037 10.29 17.61L5.08001 12.4C4.73713 12.0573 4.46513 11.6504 4.27955 11.2026C4.09398 10.7547 3.99846 10.2747 3.99846 9.78996C3.99846 9.30519 4.09398 8.82518 4.27955 8.37735C4.46513 7.92951 4.73713 7.52263 5.08001 7.17996C5.77167 6.49053 6.70843 6.1034 7.68501 6.1034C8.66159 6.1034 9.59835 6.49053 10.29 7.17996C10.383 7.27368 10.4936 7.34808 10.6154 7.39885C10.7373 7.44962 10.868 7.47575 11 7.47575C11.132 7.47575 11.2627 7.44962 11.3846 7.39885C11.5064 7.34808 11.617 7.27368 11.71 7.17996C12.4127 6.51168 13.3453 6.139 14.315 6.139C15.2847 6.139 16.2173 6.51168 16.92 7.17996C17.1428 7.4057 17.3376 7.65752 17.5 7.92996C17.6456 8.13017 17.8603 8.26926 18.1026 8.3203C18.3448 8.37135 18.5974 8.33073 18.8114 8.2063C19.0254 8.08187 19.1856 7.88248 19.2611 7.64671C19.3366 7.41094 19.322 7.15555 19.22 6.92996C18.9728 6.5195 18.6774 6.14014 18.34 5.79996C17.391 4.83981 16.1311 4.24906 14.786 4.13361C13.4409 4.01816 12.0988 4.38557 11 5.16996C10.1509 4.55825 9.14924 4.19303 8.10565 4.11461C7.06206 4.03618 6.0171 4.2476 5.08607 4.72552C4.15504 5.20345 3.37416 5.92931 2.82958 6.82299C2.28501 7.71667 1.99793 8.74343 2.00001 9.78996C1.99971 10.534 2.14718 11.2708 2.43385 11.9574C2.72053 12.6441 3.14071 13.267 3.67001 13.79L8.88001 19C9.44251 19.5618 10.205 19.8773 11 19.8773C11.795 19.8773 12.5575 19.5618 13.12 19L15 17.12C15.1863 16.9326 15.2908 16.6791 15.2908 16.415C15.2908 16.1508 15.1863 15.8973 15 15.71C14.8135 15.5297 14.5644 15.429 14.305 15.429C14.0457 15.429 13.7965 15.5297 13.61 15.71Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddComment show={show} handleClose={handleClose} />
    </>
  );
};

export default PostDetailsDescription;
