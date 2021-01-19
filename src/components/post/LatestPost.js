// import react and component bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Button, Image, Nav } from "react-bootstrap";
import { latePostUser } from "./../../actions/postAction";
import { connect } from "react-redux";

import Posts from "./Posts";
import AddPost from "./AddPost";
import DetailPost from "./DetailPost";
import userIcon from "../../assets/images/user_no-pict.jpg";
import PropTypes from "prop-types";
import SidebarProfileOverview from "../auth/sidebarProfileOverview";
import { fetchWhoAmi } from "../../actions/whoAmiAction";

class LatestPost extends Component {
  state = {
    show: false,
    postArray: Array(),
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

  componentDidMount() {
    latePostUser(this.props.auth.user.user_id)
      .then((res) => res.data.data)
      .then((data) => {
        this.setState({ postArray: data });
        console.log("comDidMount on latest", this.state.postArray);
      });

    this.props.dispatch(fetchWhoAmi());
  }

  render() {
    const { whoami } = this.props;

    return (
      <>
        <Container className="containerBox">
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={10}>
                  <h3>Latest Post</h3>
                </Col>
                <Col sm={2} className="p-0">
                  <Button
                    onClick={this.handleShow}
                    className="post-btn btn btn-purple"
                  >
                    Post
                  </Button>
                  {/* <button onClick={this.handleShow}  className="follow-btn btn block" block>Post</button> */}
                </Col>
              </Row>
              <br></br>
              <Posts postArray={this.state.postArray} />
            </Col>
            <Col sm={4}>
              <SidebarProfileOverview whoami={whoami} />
              <Nav defaultActiveKey="#" className="flex-column">
                <Nav.Link href={"/" + whoami.username}>Latest Post</Nav.Link>
                <Nav.Link href="/edit-profile">Edit Profile</Nav.Link>
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
