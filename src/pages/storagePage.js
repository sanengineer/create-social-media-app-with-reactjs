import React, { Component, createRef } from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchVideos } from "../redux/actions/fetchVideosAction";
import ReactPlayer from "react-player/youtube";

import { VideosList } from "../components/StorageVideoList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export const x = async ({ fetchvideos }) => {
  console.log("fetchvideos:\n", fetchvideos);
  const x = await fetchvideos;

  console.log("x", x);
  return <ReactPlayer url={x.video_link} controls={true} />;
};

class StoragePage extends Component {
  constructor(props) {
    super(props);
    this.imagesRef = createRef();
    this.videoRef = createRef();
    this.docsRef = createRef();

    this.addActiveClassOnImages = this.addActiveClassOnImages.bind(this);
    this.addActiveClassOnVideos = this.addActiveClassOnVideos.bind(this);
    this.addActiveClassOnDocs = this.addActiveClassOnDocs.bind(this);
    this.state = {
      images: false,
      videos: false,
      docs: false,
    };
  }

  componentDidMount() {
    // this.props.dispatch(fetchWhoAmi());
    // const user_id = await this.props.auth.user.user_id;
    // const url = await this.props.dispatch(fetchVideos(user_id));

    // this.props.dispatch(fetchVideos(user_id));
    console.log("comdidmount");
  }

  addActiveClassOnImages() {
    this.setState({ images: true, videos: false, docs: false });
  }

  addActiveClassOnVideos() {
    this.setState({ videos: true, images: false, docs: false });
  }
  addActiveClassOnDocs() {
    this.setState({ docs: true, images: false, videos: false });
  }
  componentWillMount() {
    console.log("comwilmount");
    const user_id = this.props.auth.user.user_id;
    this.props.dispatch(fetchVideos(user_id));
  }

  render() {
    const { whoami, fetchvideos } = this.props;

    const no = fetchvideos;
    console.log("this.props", this.props.children);

    console.log("render\n", "no:\n", no);
    console.log("window\n", window);
    console.log("this.videoRef", this.videoRef);
    console.log("this.imagesRef", this.imagesRef.current);
    console.log("this.docsRef", this.docsRef.current);
    // if (fetchvideos.length !== undefined) {
    return (
      <Router>
        <Container className="container-box">
          <Row className="justify-content-center mb-5 mt-5">
            <div className="col-lg-3 ">
              <img
                src={whoami.avatar}
                style={{ borderRadius: "100%" }}
                height="160px"
                className="ml-5 pl-3"
                alt={`Profile of ${whoami.firstname} ${whoami.lastname}`}
              />
            </div>
            <div className="col-lg-4 align-items-center position-relative">
              <div className="row">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <h2 className="font-weight-bold">
                    {whoami.firstname} {whoami.lastname}
                  </h2>
                  <p className="mt-3">{whoami.bio}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <NavDropdown
                className="storage"
                title={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 13H11V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H13V9C13 8.73478 12.8946 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13ZM21 2L3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3L2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4L4 4L20 4V20Z"
                      fill="black"
                    />
                  </svg>
                }
                id="collasible-nav-dropdown"
              >
                <div className="dashboard-link f-12">
                  <NavDropdown.Item
                    href={"/" + whoami.username}
                    className="pt-3 pr-2 pb-2 pl-2"
                  >
                    <span className="icon-storage-add">
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 11.995C16.7348 11.995 16.4804 12.1004 16.2929 12.2879C16.1054 12.4754 16 12.7298 16 12.995V13.375L14.52 11.895C13.9974 11.3766 13.2911 11.0856 12.555 11.0856C11.8189 11.0856 11.1126 11.3766 10.59 11.895L9.89 12.595L7.41 10.115C6.88012 9.61062 6.17657 9.3293 5.445 9.3293C4.71343 9.3293 4.00988 9.61062 3.48 10.115L2 11.595V5.99501C2 5.7298 2.10536 5.47544 2.29289 5.28791C2.48043 5.10037 2.73478 4.99501 3 4.99501H10C10.2652 4.99501 10.5196 4.88966 10.7071 4.70212C10.8946 4.51458 11 4.26023 11 3.99501C11 3.7298 10.8946 3.47544 10.7071 3.28791C10.5196 3.10037 10.2652 2.99501 10 2.99501H3C2.20435 2.99501 1.44129 3.31108 0.87868 3.87369C0.316071 4.4363 0 5.19936 0 5.99501V17.995C0 18.7907 0.316071 19.5537 0.87868 20.1163C1.44129 20.6789 2.20435 20.995 3 20.995H15C15.7956 20.995 16.5587 20.6789 17.1213 20.1163C17.6839 19.5537 18 18.7907 18 17.995V12.995C18 12.7298 17.8946 12.4754 17.7071 12.2879C17.5196 12.1004 17.2652 11.995 17 11.995ZM3 18.995C2.73478 18.995 2.48043 18.8897 2.29289 18.7021C2.10536 18.5146 2 18.2602 2 17.995V14.425L4.9 11.525C5.04691 11.385 5.24206 11.3069 5.445 11.3069C5.64794 11.3069 5.84309 11.385 5.99 11.525L9.16 14.695L13.46 18.995H3ZM16 17.995C15.9986 18.1864 15.9354 18.3723 15.82 18.525L11.31 13.995L12.01 13.295C12.0817 13.2218 12.1673 13.1637 12.2617 13.124C12.3561 13.0843 12.4576 13.0639 12.56 13.0639C12.6624 13.0639 12.7639 13.0843 12.8583 13.124C12.9527 13.1637 13.0383 13.2218 13.11 13.295L16 16.205V17.995ZM20.71 3.28501L17.71 0.285013C17.6149 0.193973 17.5028 0.122608 17.38 0.0750135C17.1365 -0.0250045 16.8635 -0.0250045 16.62 0.0750135C16.4972 0.122608 16.3851 0.193973 16.29 0.285013L13.29 3.28501C13.1968 3.37825 13.1228 3.48894 13.0723 3.61076C13.0219 3.73259 12.9959 3.86315 12.9959 3.99501C12.9959 4.26132 13.1017 4.51671 13.29 4.70501C13.4783 4.89332 13.7337 4.9991 14 4.9991C14.2663 4.9991 14.5217 4.89332 14.71 4.70501L16 3.40501V8.99501C16 9.26023 16.1054 9.51458 16.2929 9.70212C16.4804 9.88966 16.7348 9.99501 17 9.99501C17.2652 9.99501 17.5196 9.88966 17.7071 9.70212C17.8946 9.51458 18 9.26023 18 8.99501V3.40501L19.29 4.70501C19.383 4.79874 19.4936 4.87314 19.6154 4.9239C19.7373 4.97467 19.868 5.00081 20 5.00081C20.132 5.00081 20.2627 4.97467 20.3846 4.9239C20.5064 4.87314 20.617 4.79874 20.71 4.70501C20.8037 4.61205 20.8781 4.50145 20.9289 4.37959C20.9797 4.25773 21.0058 4.12703 21.0058 3.99501C21.0058 3.863 20.9797 3.7323 20.9289 3.61044C20.8781 3.48858 20.8037 3.37798 20.71 3.28501Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className=" add-image-text">Upload Image</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/chats/inbox"
                    className="pt-2 pr-2 pb-2 pl-2"
                  >
                    <span className="icon-storage-add">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M23 7L16 12L23 17V7Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.00409 20.7491C7.08824 20.7491 7.17177 20.7431 7.25409 20.7312V21.995C7.25409 22.4591 7.43847 22.9043 7.76665 23.2325C8.09484 23.5606 8.53996 23.745 9.00409 23.745C9.46822 23.745 9.91334 23.5606 10.2415 23.2325C10.5697 22.9043 10.7541 22.4591 10.7541 21.995V20.7329C10.8367 20.7448 10.9202 20.7508 11.0041 20.7508C11.2351 20.7508 11.4638 20.7051 11.6771 20.6162C11.8894 20.5278 12.0822 20.3983 12.2444 20.2353C12.4074 20.0731 12.5369 19.8803 12.6253 19.668C12.7141 19.4548 12.7599 19.226 12.7599 18.995C12.7599 18.764 12.7141 18.5353 12.6253 18.322C12.5367 18.1093 12.4069 17.9162 12.2435 17.7538C12.2431 17.7533 12.2427 17.7529 12.2422 17.7525L10.2444 15.7547L10.2386 15.7489L10.2327 15.7432C10.0681 15.5856 9.87428 15.4617 9.66219 15.3785C9.24018 15.2072 8.768 15.2072 8.34599 15.3785C8.1339 15.4617 7.94009 15.5856 7.77546 15.7432L7.76955 15.7489L7.76376 15.7547L5.76376 17.7547C5.4348 18.0836 5.25 18.5298 5.25 18.995C5.25 19.4602 5.4348 19.9064 5.76376 20.2353C6.09272 20.5643 6.53888 20.7491 7.00409 20.7491Z"
                            fill="black"
                            stroke="white"
                            stroke-width="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="add-video-text">Upload Video</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={`/${whoami.username}/journals/`}
                    className="pt-2 pr-2 pb-2 pl-2 mb-2 mr-3"
                  >
                    <span className="icon-storage-add">
                      <svg
                        width="18"
                        height="23"
                        viewBox="0 0 18 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2929 9.29289C16.4804 9.10536 16.7348 9 17 9C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H10C10.2652 0 10.5196 0.105357 10.7071 0.292893C10.8946 0.48043 11 0.734784 11 1C11 1.26522 10.8946 1.51957 10.7071 1.70711C10.5196 1.89464 10.2652 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V8.6V11.43V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H13.46C13.46 16 13.5 16.0049 14.5 16.0049C15.5 16.0049 15.82 15.53 15.82 15.53C15.9354 15.3773 15.9986 15.1914 16 15V13.21V10.38V10C16 9.73478 16.1054 9.48043 16.2929 9.29289Z"
                          fill="black"
                        />
                        <path
                          d="M17.7308 6.30492C17.8145 6.38758 17.8836 6.4821 17.9354 6.58492C17.9872 6.68774 18 7.00492 18 7.00492C18 7.50492 18 8.00492 17.4615 8.00492H15.8462H12.6154C11.7585 8.00492 10.9368 7.68885 10.3309 7.12624C9.725 6.56363 9.38461 5.80057 9.38461 5.00492V2.00492H4.00001L4 0.00491949L9.5 0.00488281H10.5L10.9677 0.114919C11.0784 0.163 11.1802 0.227136 11.2692 0.304919L17.7308 6.30492Z"
                          fill="black"
                        />
                        <path
                          d="M11.5385 3.41488L14.3277 6.00488H12.6154C12.3298 6.00488 12.0558 5.89953 11.8539 5.71199C11.6519 5.52445 11.5385 5.2701 11.5385 5.00488V3.41488Z"
                          fill="white"
                        />
                        <path
                          d="M7.00409 18.754C7.08824 18.754 7.17177 18.7479 7.25409 18.7361V19.9999C7.25409 20.464 7.43847 20.9091 7.76665 21.2373C8.09484 21.5655 8.53996 21.7499 9.00409 21.7499C9.46822 21.7499 9.91334 21.5655 10.2415 21.2373C10.5697 20.9091 10.7541 20.464 10.7541 19.9999V18.7377C10.8367 18.7497 10.9202 18.7557 11.0041 18.7557C11.2351 18.7557 11.4638 18.71 11.6771 18.6211C11.8894 18.5327 12.0822 18.4032 12.2444 18.2402C12.4074 18.078 12.5369 17.8852 12.6253 17.6729C12.7141 17.4597 12.7599 17.2309 12.7599 16.9999C12.7599 16.7689 12.7141 16.5401 12.6253 16.3269C12.5367 16.1142 12.4069 15.9211 12.2435 15.7586C12.2431 15.7582 12.2427 15.7578 12.2422 15.7574L10.2444 13.7596L10.2386 13.7538L10.2327 13.7481C10.0681 13.5905 9.87428 13.4666 9.66219 13.3833C9.24018 13.2121 8.768 13.2121 8.34599 13.3833C8.1339 13.4666 7.94009 13.5905 7.77546 13.7481L7.76955 13.7538L7.76376 13.7596L5.76376 15.7596C5.4348 16.0885 5.25 16.5347 5.25 16.9999C5.25 17.4651 5.4348 17.9113 5.76376 18.2402C6.09272 18.5692 6.53888 18.754 7.00409 18.754Z"
                          fill="black"
                          stroke="white"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                    <span className="add-doc-text">Upload Document</span>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Row>
          <div className="row">
            <Col>
              <ul className="nav nav-tabs nav-fill mb-5">
                <li className="nav-item">
                  <Link
                    className={
                      this.state.images ? "nav-link active" : "nav-link"
                    }
                    onClick={this.addActiveClassOnImages}
                    to={`/${whoami.username}/storage/images`}
                  >
                    <span className="pr-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 13L14 8L3 19"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span style={{ position: "absolute", top: "11px" }}>
                      Images
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.state.videos ? "nav-link active" : "nav-link"
                    }
                    onClick={this.addActiveClassOnVideos}
                    to={`/${whoami.username}/storage/videos`}
                  >
                    <span className="pr-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23 7L16 12L23 17V7Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span style={{ position: "absolute", top: "11px" }}>
                      Videos
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={this.state.docs ? "nav-link active" : "nav-link"}
                    onClick={this.addActiveClassOnDocs}
                    to={`/${whoami.username}/storage/docs`}
                  >
                    <span className="pr-2">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 6.94C15.9896 6.84813 15.9695 6.75763 15.94 6.67V6.58C15.8919 6.47718 15.8278 6.38267 15.75 6.3L9.75 0.3C9.66734 0.222216 9.57282 0.158081 9.47 0.11H9.38L9.06 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V7C16 7 16 7 16 6.94ZM10 3.41L12.59 6H10V3.41ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8V7C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8H14V17Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span style={{ position: "absolute", top: "11px" }}>
                      Docs
                    </span>
                  </Link>
                </li>
              </ul>

              <Switch>
                <Route path={`/${whoami.username}/storage/images`}>
                  <div>OOO</div>
                </Route>
                <Route path={`/${whoami.username}/storage/videos`}>
                  <VideosList
                    fetchvideos={fetchvideos.fetchvideos}
                    ref={this.videoRef}
                  />
                </Route>
              </Switch>
              <Switch>
                <Route exact path={`/${whoami.username}/storage/`}>
                  <div className="text-center">
                    You Can Add Image Video and Docs
                  </div>
                </Route>
              </Switch>
            </Col>
          </div>
        </Container>
      </Router>
    );
    // } else {
    //   return null;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
  fetchvideos: state.fetchvideos,
});

export default connect(mapStateToProps)(StoragePage);
