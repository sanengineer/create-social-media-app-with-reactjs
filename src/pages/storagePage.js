import React, { Component, createRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchVideos } from "../redux/actions/fetchVideosAction";
import { fetchImages } from "../redux/actions/fetchImagessAction";
import ReactPlayer from "react-player/youtube";
import { StorageAddButton } from "../components/StorageAddButton";

import { VideosList } from "../components/StorageVideoList";
import { ImagesList } from "../components/StorageImageList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  AddImageModal,
  AddVideoModal,
  AddDocModal,
} from "../components/modals/UploadStorageModals";

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
      showImageModal: false,
      showVideoModal: false,
      showDocModal: false,
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
    this.props.dispatch(fetchImages(user_id));
  }

  //show modal
  showImageModal = () => {
    this.setState({ showImageModal: true });
  };

  showVideoModal = () => {
    this.setState({ showVideoModal: true });
  };

  showDocModal = () => {
    this.setState({ showDocModal: true });
  };

  onHide = () => {
    this.setState({
      showDocModal: false,
      showImageModal: false,
      showVideoModal: false,
    });
  };

  render() {
    const { whoami, fetchvideos, fetchimages } = this.props;

    const no = fetchvideos;
    console.log("this.props", this.props.children);

    console.log("render\n", "no:\n", no);
    console.log("window\n", window);
    console.log("this.videoRef", this.videoRef);
    console.log("this.imagesRef", this.imagesRef.current);
    console.log("this.docsRef", this.docsRef.current);
    // if (fetchvideos.length !== undefined) {
    return (
      <div
        className={
          this.state.showDocModal ||
          this.state.showImageModal ||
          this.state.showVideoModal
            ? "storage-page sbox-filter-blur"
            : "storage-page"
        }
      >
        <Navbar />
        <Router>
          <Container className="section-main storage-page p-0">
            <Row className="justify-content-center stor-page-first-row">
              <div className="col-lg-3 ">
                <img
                  src={whoami.avatar}
                  style={{ borderRadius: "100%" }}
                  height="160px"
                  className="avatar-large ml-5 pl-3"
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
                <StorageAddButton
                  showImageModal={(e) => this.showImageModal(e)}
                  showVideoModal={this.showVideoModal}
                  showDocModal={this.showDocModal}
                />
              </div>
            </Row>
            <div className="row stor-page-second-row">
              <Col>
                <ul className="nav nav-tabs nav-fill mb-5">
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.images
                          ? "nav-link active text-bold"
                          : "nav-link text-muted"
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
                            stroke={this.state.images ? "black" : "#8e8e8e"}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19 13L14 8L3 19"
                            stroke={this.state.images ? "black" : "#8e8e8e"}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                            stroke={this.state.images ? "black" : "#8e8e8e"}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className={
                          `font-weight-bold text-uppercase f-10` +
                          (this.state.images
                            ? ` text-black p-absolute-storage-nav-clicked`
                            : ` text-muted p-absolute-storage-nav`)
                        }
                        style={{ position: "absolute" }}
                      >
                        Images
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.videos
                          ? "nav-link active text-bold"
                          : "nav-link text-muted"
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
                            stroke={this.state.videos ? "black" : "#8e8e8e"}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                            stroke={this.state.videos ? "black" : "#8e8e8e"}
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className={
                          `font-weight-bold text-uppercase f-10` +
                          (this.state.videos
                            ? ` text-black p-absolute-storage-nav-clicked`
                            : ` text-muted p-absolute-storage-nav`)
                        }
                        style={{ position: "absolute" }}
                      >
                        Videos
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.docs
                          ? "nav-link active text-bold"
                          : "nav-link text-muted"
                      }
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
                            fill={this.state.docs ? "black" : "#8e8e8e"}
                          />
                        </svg>
                      </span>
                      <span
                        className={
                          `font-weight-bold text-uppercase f-10` +
                          (this.state.docs
                            ? ` text-black p-absolute-storage-nav-clicked`
                            : ` text-muted p-absolute-storage-nav`)
                        }
                        style={{ position: "absolute" }}
                      >
                        Docs
                      </span>
                    </Link>
                  </li>
                </ul>

                <Switch>
                  <Route path={`/${whoami.username}/storage/images`}>
                    <ImagesList fetchimages={fetchimages.fetchimages} />
                  </Route>
                  <Route path={`/${whoami.username}/storage/videos`}>
                    <VideosList
                      fetchvideos={fetchvideos.fetchvideos}
                      ref={this.videoRef}
                    />
                  </Route>
                  <Route path={`/${whoami.username}/storage/docs`}>
                    <div className="text-center">Doc</div>
                  </Route>
                </Switch>
              </Col>
            </div>
            <div className="row justify-content-center">
              <Switch>
                <Route exact path={`/${whoami.username}/storage/`}>
                  <div className="text-center" style={{ paddingTop: "5rem" }}>
                    You Can Add Image Video and Docs
                  </div>
                </Route>
              </Switch>
            </div>
            <AddImageModal
              show={this.state.showImageModal}
              onHide={this.onHide}
              user_id={whoami.user_id}
            />
            <AddVideoModal
              show={this.state.showVideoModal}
              onHide={this.onHide}
            />
            <AddDocModal show={this.state.showDocModal} onHide={this.onHide} />
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
  fetchvideos: state.fetchvideos,
  fetchimages: state.fetchimages,
});

export default connect(mapStateToProps)(StoragePage);
