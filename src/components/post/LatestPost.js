// import react and component bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Button, Image, Nav } from "react-bootstrap";
import { latePostUser } from "./../../actions/postAction";
import { connect } from "react-redux";

import Posts from "./Posts";
import AddPost from "../modals/AddPost";
import DetailPost from "./DetailPost";
import userIcon from "../../assets/images/user_no-pict.jpg";
import PropTypes from "prop-types";
import SidebarProfileOverview from "../../components/sidebar/sidebarProfileOverview";
import { fetchWhoAmi } from "../../actions/whoAmiAction";

class LatestPost extends Component {
  state = {
    show: false,
    postArray: Array(),
    postArrayLength: 0,
  };

  // showing modal
  handleShow = () => {
    // console.log(this.state.postArray);
    this.setState({ show: true });
  };

  // closing modal
  handleClose = () => {
    this.setState({ show: false });
    // console.log(this.state.postArray);
  };

  openDetail = () => {
    console.log("open detail");
    // this.props.history.push('/detail-post')
    return <DetailPost />;
  };

  componentDidUpdate(prevProps, prevState) {
    //
    //debug
    console.log("comDidUpdate\n");
    if (prevState.postArray.length !== this.state.postArray.length) {
      this.setState({
        postArray: this.state.postArray,
      });
    }
  }

  componentDidMount() {
    latePostUser(this.props.auth.user.user_id)
      .then((res) => res.data.data)
      .then((data) => {
        this.setState({ postArray: data, postArrayLength: data.length });
        console.log(
          "comDidMount on latest:\n",
          "-postArray:",
          this.state.postArray,
          "\n",
          "-postArrayLength:",
          this.state.postArrayLength
        );
      });

    this.props.dispatch(fetchWhoAmi());
  }

  render() {
    const { whoami } = this.props;

    return (
      <>
        <Container className="containerBox">
          <Row>
            <Col lg={8} className="feeds-wrapper pr-5">
              <div className="heading-profile-page-wrapper">
                <div className="row justify-content-between mb-5">
                  <Col lg={4}>
                    <h3 className="font-weight-bold">Your Posts</h3>
                  </Col>
                  <Button
                    onClick={this.handleShow}
                    className="post-btn btn btn-purple"
                  >
                    New Post
                  </Button>
                  {/* <button onClick={this.handleShow}  className="follow-btn btn block" block>Post</button> */}
                </div>
              </div>
              <br></br>
              <div className="feeds-whoami-page">
                <div className="feeds-whoami-page-wrapper">
                  <div className="feeds-whoami-page-overflow">
                    <Posts postArray={this.state.postArray} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="sidebar-wrapper">
              <SidebarProfileOverview whoami={whoami} />
              <Nav defaultActiveKey="#" className="flex-column mt-4">
                <Nav.Link href={"/" + whoami.username} className="pl-0">
                  Your Posts
                </Nav.Link>
                <Nav.Link href="/edit-profile" className="pl-0">
                  Edit Profile
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        <AddPost show={this.state.show} handleClose={this.handleClose} />
      </>
    );
  }
}

LatestPost.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
});

// export default LatestPost;
export default connect(mapStateToProps)(LatestPost);
