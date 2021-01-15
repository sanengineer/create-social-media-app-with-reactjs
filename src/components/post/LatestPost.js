// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Button, Image, Nav } from 'react-bootstrap'
// import {Link} from 'react-router-dom';
import {latePostUser} from './../../actions/postAction';

// import component and icon
// import Post from './Post';
import AddPost from './AddPost';
import DetailPost from './DetailPost';
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
    this.setState({ show : false});
  };

  openDetail = () => {
    console.log("open detail");
    // this.props.history.push('/detail-post')
    return(
      <DetailPost/>
    )
  }

  componentDidMount(){
    console.log('comDidMount')
    latePostUser('2');
  }

  PostRow = (post, index) => {
    return (
      <div id={index} onClick={this.openDetail}>
        <Row>
            <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
            <Col sm={11}>
                <div className="d-flex">
                    <div>
                        <p className="mb-0">Username</p>
                        <p>name</p>
                    </div>
                        <div className="ml-auto">
                        <p className="text-muted">4.20 am - 1 Januari 2021</p>
                    </div>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Col>
        </Row>
        <div className="d-flex">
            <p className="mb-0 text-muted">4 Comment</p>
            <p className="mb-0 ml-3 text-muted">87 Saved</p>
            <p className="mb-0 ml-3 text-muted">54 Loved</p>
            <p className="mb-0 ml-3 text-muted">46 Shared</p>
        </div>
        <hr></hr>
      </div>
    )
  }

  PostTable = [1,2,3,4].map((post, index) => this.PostRow(post, index))
  // PostTable = [1,2,3,4].map((post, index) => <Post />)

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
              {this.PostTable}
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

export default LatestPost;