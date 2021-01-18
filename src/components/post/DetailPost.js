// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Image, Popover, OverlayTrigger } from 'react-bootstrap'

// import component and icon
import userIcon from '../../assets/images/user_no-pict.jpg';
import commentIcon from '../../assets/icons/icon_comment.png';
import saveIcon from '../../assets/icons/icon_save.png';
import shareIcon from '../../assets/icons/icon_share.png';
import loveIcon from '../../assets/icons/icon_love.png';
import logoTwitter from '../../assets/icons/logo_twitter.png';
import logoFaceBook from '../../assets/icons/logo_facebook.png';
import logoLinkIdn from '../../assets/icons/logo_linkedin.png';
import logoReddit from '../../assets/icons/logo_reddit.png';
import logoTumblr from '../../assets/icons/logo_tumblr.png';
import iconCopyLink from '../../assets/icons/icon_copy-link.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SuggestedAccounts } from "../../components/suggested-accounts";

class DetailPost extends Component {
  
  componentDidMount(){
    console.log(Object.keys(this.props.post['post']).length)
    console.log(this.props.post['post'])
    console.log('ini adalah redux post detail', this.props.post)
  }

  render() {
    if(Object.keys(this.props.post['post']).length == 0){
      // this.props.history.push('/latest-post');
      return(
        <div className="container containerBox">
          <p>detail error</p>
        </div>
      )
    }
    return (
      <>
        <Container className="containerBox">
          <Row>
            <Col sm={8}>
              <br></br>
              <Row>
                <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
                <Col sm={11}>

                  <div className="d-flex">
                      <div>
                        <p className="mb-0 mr-auto">{this.props.post['post'].user.username}</p>
                        <p>{this.props.post['post'].firstname} {this.props.post['post'].lastname}</p>
                      </div>
                  </div>

                  <div>
                      <p>{this.props.post['post'].content}</p>
                  </div>

                  <div className="d-flex">
                    <div>
                      <p className="text-muted">{this.props.post['post'].createdAt}</p>
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
                              <Popover.Title as="h3">Share To</Popover.Title>
                              <Popover.Content>
                                <div className="d-flex">
                                  <div>
                                    <Image src={logoTwitter} />
                                  </div>
                                  <div>
                                    <Image className="pl-3" src={logoTumblr} />
                                  </div>
                                  <div>
                                    <Image className="pl-3" src={logoLinkIdn} />
                                  </div>
                                  <div>
                                    <Image className="pl-3" src={logoFaceBook} />
                                  </div>
                                  <div>
                                    <Image className="pl-3" src={logoReddit} />
                                  </div>
                                  <div>
                                    <Image className="pl-3" src={iconCopyLink} />
                                  </div>
                                </div>
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
                  <hr></hr>
                  <h5>Comments</h5>
                  
                  <div className="d-flex mt-3">
                    <div>
                      <Image width="30px" height="30px" src={userIcon} rounded />
                    </div>
                    <div className="bio-desc ml-1 box-comment">
                      <h6 className="mb-0">wahyu</h6>
                      <div className="font-comment">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mt-3">
                    <div>
                      <Image width="30px" height="30px" src={userIcon} rounded />
                    </div>
                    <div className="bio-desc ml-1 box-comment">
                      <h6 className="mb-0">wahyu</h6>
                      <div className="font-comment">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                      </div>
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
                <SuggestedAccounts
                    suggestedusers={this.props.suggestedusers}
                ></SuggestedAccounts>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

DetailPost.propTypes = {
  post: PropTypes.object.isRequired,
  suggestedusers: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post : state.post,
  suggestedusers: state.suggestedusers.suggestedusers
});

export default connect(mapStateToProps)(DetailPost);