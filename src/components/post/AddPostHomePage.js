// import component react and react-bootstrap
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import React, { Component } from "react";
import { posting } from "../../actions/postAction";
import PropTypes from "prop-types";
// import {Link} from 'react-router-dom';
import { connect } from "react-redux";

// import icons and images
import userIcon from "../../assets/images/user_no-pict.jpg";
import iconEmoji from "../../assets/icons/icon_emoji.png";
import iconImage from "../../assets/icons/icon_image.png";
import { fetchWhoAmi } from "../../actions/whoAmiAction";

class AddPostHomePage extends Component {
  state = {
    post: {},
  };

  // inputing form
  onChange = (e) => {
    let dataValue = this.state.post;
    if (e.target.id === "post") {
      dataValue.content = e.target.value;
    } else if (e.target.id === "postImage") {
      dataValue.image = e.target.files[0];
    }

    this.setState({ post: dataValue });
    console.log(this.state.post);
  };

  // submiting form
  onClick = () => {
    // const formData = new FormData();
    // formData.append(
    //     "images", this.state.post.image
    // )
    // formData.append(
    //     "content", this.state.post.content
    // )
    // formData.append(
    //     "user_id", this.props.auth.user.user_id
    // )
    const postData = {
      user_id: this.props.auth.user.user_id,
      content: this.state.post.content,
      // images: this.state.post.image
    };

    console.log(postData);
    posting(postData)
      .then((res) => res.data)
      .then((data) => window.location.reload())
      .catch((err) => console.log(err));

    // window.location.reload();
  };

  render() {
    const { whoami } = this.props;
    return (
      <>
        <Row>
          <Col sm={1}>
            <img
              className="rounded-circle"
              src={whoami.avatar}
              width={56}
              height={56}
              alt={"Image Profile Of" + whoami.firstname + whoami.lastname}
            />
          </Col>
          <Col sm={11}>
            <Form.Group controlId="post">
              <Form.Control
                value={this.state.post.content}
                onChange={(e) => this.onChange(e)}
                as="textarea"
                rows={3}
                placeholder="What happen today dear ?"
              />
            </Form.Group>
            {/* <Form.Group controlId="postImage">
                                <Form.File onChange={(e) => this.onChange(e)}/>
                            </Form.Group> */}
          </Col>
        </Row>
        <div className="post-bottom-btn">
          {/* <div>
            <img src={iconEmoji} />
            <img src={iconImage} />
          </div> */}
          <button
            className="post-btn btn btn-purple"
            size="sm"
            onClick={this.onClick}
            block
          >
            POST
          </button>
        </div>
      </>
    );
  }
}

// AddPost.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(AddPostHomePage);
