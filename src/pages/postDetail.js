import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostDetails } from "../actions/postDetailsAction";
import { Container, Row, Col, Button, Image, Nav } from "react-bootstrap";
import SidebarProfileOverview from "../components/sidebar/sidebarProfileOverview";
import PostDetailsDescription from "../components/postDetailDescriptions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SuggestedAccounts } from "../components/sidebar/suggested-accounts";
import { InfoWeb } from "../components/sidebar/sidebar-footer";
import { fetchPostLoves } from "../actions/publicPostLovesAction";
import { fetchCommentsPost } from "../actions/fetchCommentsPostAction";
import Comments from "../components/post/Comments";

class PostDetails extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate(prevProps.loves.loading):\n",
      prevProps.loves.loading
    );
    console.log(
      "componentDidUpdate(this.props.loves.loading):\n",
      this.props.loves.loading
    );

    if (prevProps.loves.loading !== this.props.loves.loading) {
      const spliturl = this.props.match.path.split("/");
      const postId = spliturl[3];
      console.log("postId", postId);
      this.props.dispatch(fetchPostLoves(postId));
    }
    console.log("this.props.loves.loves", this.props.loves.loves);
    // console.log(this.props.dispatch());
  }

  componentDidMount() {
    console.log("PostDetails:");
    // console.log("window:", window);
    // console.log("this.props.params:", this.props.params);
    // console.log("this.props:", this.props);

    // window.scrollTo(0, 0);

    const spliturl = this.props.match.path.split("/");
    const postId = spliturl[3];
    const userdata = this.props.postdetails.user;

    document.title = `Sosmet App | Posting From ${spliturl[1]}`;

    this.props.dispatch(fetchPostLoves(postId));
    this.props.dispatch(fetchCommentsPost(postId));

    // const data = this.props.publicusers;

    // const x = data.find((x) => x.post_id == `${postId}`);

    // console.log("x", x);
    // console.log("data:", data);

    // this.props.fetchPostDetails(postId);
    // console.log(
    //   "postdetails.user.username:",
    //   this.props.postdetails.user.username
    // );

    //
    //debug
    console.log("postId:", postId);
    // console.log("params:", params);
    console.log("userdata:", userdata);
  }

  render() {
    const {
      postdetails,
      publicusers,
      suggestedusers,
      whoami,
      auth,
      linksInfoWeb,
      match,
      loves,
      commentspost,
    } = this.props;

    const spliturl = match.path.split("/");
    const postId = spliturl[3];
    const data = publicusers;
    const x = data.find((x) => x.post_id == `${postId}`);

    const pathname = window.location.pathname;
    const hostname = window.location.hostname;

    //
    //debug
    // console.log("match.params.id:", match.params);
    console.log("postdetails:", postdetails);
    console.log("commentspost:", commentspost);
    // console.log("url:", url.href);
    console.log(this.props);
    console.log("loves", loves);
    console.log("window:", window);
    // console.log("postdetails.user.username:", postdetails.user.username);

    return (
      <>
        <Container className="containerBox">
          <Row>
            <Col lg={8} className="feeds-wrapper pr-5">
              <div className="heading-profile-page-wrapper">{}</div>
              <br></br>
              <div className="feeds-whoami-page">
                <div className="feeds-whoami-page-wrapper">
                  <div className="feeds-whoami-page-overflow">
                    <PostDetailsDescription
                      postdetails={x}
                      pathname={pathname}
                      hostname={hostname}
                      whoami={whoami}
                      loves={loves.loves}
                      commentspost={commentspost.commentspost}
                    ></PostDetailsDescription>
                    <Comments commentspost={commentspost.commentspost} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="sidebar-wrapper">
              <SidebarProfileOverview auth={auth} whoami={whoami} />
              <div className="sidebar-suggested-account mt-3">
                <div className="h6 mb-2">Suggested Account</div>
                <div>
                  <SuggestedAccounts
                    suggestedusers={suggestedusers}
                  ></SuggestedAccounts>
                </div>
                <div className="mt-3">
                  <a href="/suggested-users" className="more-account-link">
                    <span className="more-account pr-2">more</span>
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L0.535899 -3.01142e-07L7.4641 -9.06825e-07L4 6Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <InfoWeb linksInfoWeb={linksInfoWeb}></InfoWeb>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

PostDetails.propsTypes = {
  auth: PropTypes.object.isRequired,
  postdetails: PropTypes.object.isRequired,
  whoami: PropTypes.object.isRequired,
  publicusers: PropTypes.object.isRequired,
  fetchPostLoves: PropTypes.func.isRequired,
  fetchCommentsPost: PropTypes.func.isRequired,
  suggestedusers: PropTypes.object.isRequired,
  linksInfoWeb: PropTypes.object.isRequired,
  loves: PropTypes.object.isRequired,
  commentspost: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  postdetails: state.postdetails.postdetails,
  publicusers: state.publicusers.publicusers,
  suggestedusers: state.suggestedusers.suggestedusers,
  whoami: state.whoami.whoami,
  auth: state.auth,
  loves: state.loves,
  linksInfoWeb: state.linksInfoWeb,
  commentspost: state.commentspost,
});

export default connect(mapStateToProps)(PostDetails);
