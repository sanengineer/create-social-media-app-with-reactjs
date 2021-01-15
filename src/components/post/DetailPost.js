// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Button, Image, Popover, OverlayTrigger } from 'react-bootstrap'

// import component and icon
import Post from './Post';
import AddPost from './AddPost';
import userIcon from '../../assets/images/user_no-pict.jpg';
import commentIcon from '../../assets/icons/icon_comment.png';
import saveIcon from '../../assets/icons/icon_save.png';
import shareIcon from '../../assets/icons/icon_share.png';
import loveIcon from '../../assets/icons/icon_love.png';

class DetailPost extends Component {
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
              <br></br>
              <Row>
                <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
                <Col sm={11}>

                  <div className="d-flex">
                      <div>
                        <p className="mb-0 mr-auto">Username</p>
                        <p>name</p>
                      </div>
                  </div>

                  <div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>

                  <div className="d-flex">
                    <div>
                      <p className="text-muted">4.20 am - 1 Januari 2021</p>
                    </div>
                    <div className="ml-auto">
                      <p className="mb-0 text-muted">4 Comment - 54 Loved</p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div>
                      <Image src={commentIcon}/>
                    </div>
                    <div className="ml-5">
                      <Image src={saveIcon}/>
                    </div>
                    <div className="ml-5">
                      <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay=
                          {
                              <Popover id={`popover-positioned-bottom`}>
                              <Popover.Title as="h3">{`Popover bottom`}</Popover.Title>
                              <Popover.Content>
                                  <strong>Holy guacamole!</strong> Check this info.
                              </Popover.Content>
                              </Popover>
                          }
                      >
                          <a href="#"><Image src={shareIcon}/></a>
                      </OverlayTrigger>
                    </div>
                    <div className="ml-5">
                      <Image src={loveIcon}/>
                    </div>
                  </div>
                </Col>
              </Row>
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
              <div>
                  <div className="my-3">
                      <h6>Sugested Acccount</h6>
                  </div>
                <div className="d-flex mb-3">
                    <div>
                        <Image width="50px" height="50px" src={userIcon} rounded />
                    </div>
                    <div className="my-auto ml-3">
                        <p className="mb-0 font-weight-bold">Username</p>
                        <p className="mb-0">name</p>
                    </div>
                    <div className="ml-auto " >
                        <a href="#">follow</a>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div>
                        <Image width="50px" height="50px" src={userIcon} rounded />
                    </div>
                    <div className="my-auto ml-3">
                        <p className="mb-0 font-weight-bold">Username</p>
                        <p className="mb-0">name</p>
                    </div>
                    <div className="ml-auto " >
                        <a href="#">follow</a>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div>
                        <Image width="50px" height="50px" src={userIcon} rounded />
                    </div>
                    <div className="my-auto ml-3">
                        <p className="mb-0 font-weight-bold">Username</p>
                        <p className="mb-0">name</p>
                    </div>
                    <div className="ml-auto " >
                        <a href="#">follow</a>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <AddPost show={this.state.show} handleClose={this.handleClose} />
      </>
    )
  }
}

export default DetailPost;