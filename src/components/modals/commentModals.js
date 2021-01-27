import React, { Component } from "react";
import { Modal, Button, Form, Row, Image, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userNoPict from "../../assets/images/user_no-pict.jpg";
import { createComment } from "../../actions/createCommentAction";

class AddComment extends Component {
  state = {
    disabled: "",
    // postId: "",
  };

  //input form
  onChange = (e) => {
    let dataValue = this.props.createcomment;
    if (e.target.id === "comment") {
      dataValue.content = e.target.value;
    }

    this.setState({ disabled: dataValue.content });
  };

  //   getPostId() {
  //     const spliturl = this.props.match.path.split("/");
  //     const postId = spliturl[3];

  //     return this.setState({ postId: postId });
  //   }

  componentDidMount() {
    // this.getPostId();

    console.log("window.location:", window.location.pathname);
  }

  //submit
  onClick = async () => {
    const spliturl = window.location.pathname.split("/");
    const postId = spliturl[3];
    // const userdata = this.props.postdetails.user;

    // const spliturl = await this.props.match.path.split("/");
    // const postId = await spliturl[3];

    const commentData = {
      post_id: postId,
      user_id: this.props.auth.user.user_id,
      content: this.props.createcomment.content,
    };

    if (
      (commentData.content === undefined &&
        commentData.post_id === undefined) ||
      (commentData.content === " " && commentData.post_id == " ")
    ) {
      this.setState({ error: true });
    } else {
      this.props.dispatch(createComment(commentData));
    }
  };

  render() {
    const { whoami, createcomment, publicusers } = this.props;
    const { error, disabled } = this.state;
    console.log(publicusers);
    var userAva;

    if (whoami.avatar) {
      var userAva = whoami.avatar;
    } else {
      var userAva = userNoPict;
    }

    //
    //debug
    console.log("disabled:", disabled);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
        <Modal.Body>
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
              {/* <Form noValidate onSubmit={this.onClick}> */}
              <Form.Group controlId="comment">
                <Form.Control
                  value={createcomment.content}
                  onChange={(e) => this.onChange(e)}
                  as="textarea"
                  rows={3}
                  placeholder={
                    error ? "  Fill Your Comment, please! 😜" : "  Type Here..."
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              {/* </Form> */}
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div>
              {/* <Image src={iconEmoji} />
                  <Image src={iconImage} /> */}
            </div>
            <Button
              onClick={this.onClick}
              className="btn-purple btn w-25"
              block
              disabled={disabled.length == 0}
            >
              COMMENT
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AddComment.propTypes = {
  // createPostText: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  createComment: PropTypes.object.isRequired,
  publicusers: PropTypes.object.isRequired,
  whoami: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  createcomment: state.createcomment,
  publicusers: state.publicusers.publicusers,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(AddComment);
