// import react and component bootstrap
import React, { Component} from 'react';
import { Container, Row, Col, Image, Popover, OverlayTrigger, Form, Button } from 'react-bootstrap'

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
import Comments from './Comments';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SuggestedAccounts } from "../../components/suggested-accounts";
import { commenting, getComments } from '../../actions/commentAction';

class DetailPost extends Component {

  state = {
    comment : "",
    commentArray : Array()
  }
  
  componentDidMount(){
    console.log(Object.keys(this.props.post['post']).length)
    console.log(this.props.post['post'])
    console.log('ini adalah redux post detail', this.props.post)

    this.getComment();

    console.log("ini respon get comment", this.state.commentArray)
  }

  onChange = (e) => {
    this.setState({ comment : e.target.value })
    console.log(this.state.comment)
  }

  postComment = () => {
    // let commentArray = this.state.commentArray
    console.log('click')

    let commentData = {
      user_id : this.props.post['post'].user_id,
      post_id : this.props.post['post'].post_id,
      content : this.state.comment,
    }

    commenting(commentData)
    .then(res => res.data)
    .then(res2 => {
      console.log(res2);
      this.setState({comment: ""})
      // commentArray.push(commentData);
      this.getComment();
    })
    .catch(err => console.log(err))
    console.log(commentData)

    // this.setState({ commentArray: commentArray })
    // console.log(this.state.commentArray)
  }

  getComment = () => {
    getComments(this.props.post['post'].post_id)
    .then(res => res.data.data)
    .then(res2 => {
      console.log(res2)
      this.setState({commentArray: res2})
    })
    .catch(err => console.log(err))
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
                      <p className="text-muted">{this.props.post['post'].createdAt.split("T")[0] } { this.props.post['post'].createdAt.split("T")[1].substring(0, 5) }</p>
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
                    <div className="bio-desc ml-1 box-comment w-100">
                      <h6 className="mb-1">wahyu</h6>
                      <div>
                        <Form.Control className="font-comment" value={this.state.comment} onChange={(e) => this.onChange(e)} as="textarea" rows={3} placeholder="What happen today dear ?" />
                        <div className="d-flex">
                          <Button onClick={ this.postComment } className="ml-auto" variant="primary" size="sm">Comment</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Comments commentArray={this.state.commentArray} />

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
                  <p>{this.props.post['post'].user.bio }</p>
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