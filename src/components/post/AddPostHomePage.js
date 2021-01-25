// import component react and react-bootstrap
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import React, { Component } from "react";
import { postStart, postSuccess } from "../../actions/createPostTextAction";
import PropTypes from "prop-types";
// import {Link} from 'react-router-dom';
import { connect } from "react-redux";

// import icons and images
import userNoPict from "../../assets/images/user_no-pict.jpg";
import iconEmoji from "../../assets/icons/icon_emoji.png";
import iconImage from "../../assets/icons/icon_image.png";
import { fetchWhoAmi } from "../../actions/whoAmiAction";
import { createPostText } from "../../actions/createPostTextAction";
import setAuthToken from "../../utils/setAuthToken";

class AddPostHomePage extends Component {
  // state = {
  //   post: {},
  // };

  state = {
    disabled: "",
  };

  // inputing form
  onChange = (e) => {
    let dataValue = this.props.postText;
    if (e.target.id === "post") {
      dataValue.content = e.target.value;
    }

    console.log("onchange:\n", dataValue);
    console.log(this.props.postText);

    this.setState({ disabled: dataValue.content });

    console.log("lenght:\n", dataValue.content.length > 0);
  };

  getSnapshotBeforeUpdate(nextProps) {
    console.log("AddHomePage.js: getSnapshotBeforeUpdate");
  }

  componentDidCatch() {
    console.log("AddHomePage.js: componentDidCatch", this.props.postText);
  }

  // submiting form
  onClick = () => {
    const postTextData = {
      user_id: this.props.auth.user.user_id,
      content: this.props.postText.content,
    };

    // console.log("postTextData:\n", postTextData);
    // console.log("this.props.postText:\n", this.props.postText);

    if (postTextData.content == undefined || postTextData.content == " ") {
      this.setState({ error: true });
      // this.props.dispatch(postSuccess());
    } else {
      this.props.dispatch(createPostText(postTextData));
    }

    console.log(
      "!postTextData.content:",
      !postTextData.content,
      postTextData.content == undefined,
      postTextData.content == null,
      postTextData.content == ""
    );

    // if (postTextData.content == null && !postTextData.content.trim()) {
    //   this.setState({ errors: true });
    // } else {
    //   this.props.dispatch(createPostText(postTextData));
    // }
  };

  render() {
    const { whoami, postText, isPosted } = this.props;
    const { error, disabled } = this.state;

    var userAva;

    if (whoami.avatar) {
      var userAva = whoami.avatar;
    } else {
      var userAva = userNoPict;
    }

    console.log("error:\n", error);
    // console.log("postText.content.length:", postText.content.length > 0);
    console.log("disabled:", disabled);

    return (
      <>
        <Row>
          <Col sm={1}>
            <img
              className="img-avatar rounded-circle"
              src={userAva}
              width={56}
              height={56}
              alt={`Image Profile Of ${whoami.firstname} ${whoami.lastname}`}
            />
          </Col>
          <Col sm={11}>
            <Form.Group controlId="post">
              <Form.Control
                value={postText.textContent}
                onChange={(e) => this.onChange(e)}
                as="textarea"
                rows={3}
                placeholder={
                  error
                    ? "  Fill Your post, please! 😜"
                    : "  What happen today dear?"
                }
                // placeholder="Fill Your post, please! 😜"
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
            disabled={disabled.length == 0}
          >
            NEW POST
          </button>
        </div>
      </>
    );
  }
}

AddPostHomePage.propTypes = {
  // createPostText: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postText: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  postText: state.postText,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(AddPostHomePage);
