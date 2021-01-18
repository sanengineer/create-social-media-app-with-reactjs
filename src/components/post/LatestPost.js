// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Button, Image, Nav } from 'react-bootstrap'
import {latePostUser} from './../../actions/postAction';
import { connect } from 'react-redux';

import Posts from './Posts';
import AddPost from './AddPost';
import DetailPost from './DetailPost';
import userIcon from '../../assets/images/user_no-pict.jpg';
import PropTypes from 'prop-types';

class LatestPost extends Component {
  state = {
    show : false,
    postArray: Array()
  }

  // showing modal
  handleShow = () => {
    // console.log(this.state.postArray);
    this.setState({ show : true})
  };

  // closing modal
  handleClose = () => {
    this.setState({ show : false});
    // console.log(this.state.postArray);
  };

  openDetail = () => {
    console.log("open detail");
    // this.props.history.push('/detail-post')
    return(
      <DetailPost/>
    )
  }

  componentDidMount(){
    latePostUser(this.props.auth.user.user_id)
    .then(res => res.data.data)
    .then(data => {
      this.setState({ postArray: data})
      console.log("comDidMount on latest", this.state.postArray)
    });
    
  }

  render() {
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
                  <Button onClick={this.handleShow} variant="outline-dark" size="sm" block>Post</Button>
                  {/* <button onClick={this.handleShow}  className="follow-btn btn block" block>Post</button> */}
                </Col>
              </Row>
              <br></br>
              <Posts postArray={this.state.postArray} />
            </Col>
            <Col sm={4}>
              <div className="d-flex">
                  <div>
                    <Image width="70px" height="70px" src={userIcon} rounded />
                  </div>
                  <div className="my-auto ml-3">
                    <p className="mb-0 font-weight-bold">Username</p>
                    <p className="mb-0">name</p>
                  </div>
              </div>
              <div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <hr></hr>
              <Nav defaultActiveKey="#" className="flex-column">
                <Nav.Link href="#">Login Profile</Nav.Link>
                <Nav.Link eventKey="link-1">Latest Post</Nav.Link>
                <Nav.Link eventKey="link-2">Log Activity</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        <AddPost show={this.state.show} handleClose={this.handleClose} />
      </>
    )
  }
}

LatestPost.propTypes = {
  auth : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth : state.auth
});

// export default LatestPost;
export default connect(mapStateToProps)(LatestPost);