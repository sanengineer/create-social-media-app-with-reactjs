// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Button, Image, Nav } from 'react-bootstrap'

// import component and icon
import Post from './Post';
import AddPost from './AddPost';
import userIcon from '../../assets/images/user_no-pict.jpg';

class LatestPost extends Component {
  state = {
    show : false,
  }

  // showing modal
  handleShow = () => {
    this.setState({ show : true})
  };

  // closing modal
  handleClose = () => {
    this.setState({ show : false})
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={10}>
                  <h3>Latest Post</h3>
                </Col>
                <Col sm={2}>
                  <Button onClick={this.handleShow} variant="outline-dark" size="sm" block>Post</Button>
                </Col>
              </Row>
              <br></br>
              <Post />
              <Post />
              <Post />
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
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Login Profile</Nav.Link>
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

export default LatestPost;