// import component react and react-bootstrap
import { Form, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { baseUrl } from "../../services/httpService";
import userNoPict from "../../assets/images/user_no-pict.jpg";
import { createPostText } from "../../redux/actions/createPostTextAction";
import { post } from "axios";

class AddPostHomePage extends Component {
  constructor(props) {
    super();
    this.onChangeImage = this.onChangeImage.bind(this);
    this.postImage = this.postImage.bind(this);

    this.state = {
      file: "",
      disabled: "",
      image_link: "",
    };
  }

  // onChangePostImage(e) {
  //   this.setState({ image_file_name: e.target.files[0] });
  // }

  onRemove() {
    this.setState({ file: "" });
  }

  postImage(file) {
    const user_id = this.props.whoami.user_id;
    // const url = `${baseUrl}/upload-image/${user_id}`;
    const url = `${baseUrl}/upload-image/${user_id}`;
    const form_data = new FormData();
    form_data.append("image", file);
    const config = {
      headers: {
        Authorization: localStorage.jwtToken,
        "content-type": "multipart/form-data",
      },
    };

    return post(url, form_data, config);
  }

  onChangeImage = (e) => {
    let dataValue = this.props.postText;
    if (e.target.id === "post") {
      dataValue.image = e.target.file;
    }

    this.setState({ file: e.target.files[0] });

    //
    //debug
    // console.log("onchange:\n", dataValue);
    // console.log("dataValue.image", dataValue.image);
    // console.log(this.props.postText);
    // console.log("e.target.files[0]:", e.target);
    // console.log("lenght:\n", dataValue.image.length > 0);
  };

  // inputing form
  onChange = (e) => {
    let dataValue = this.props.postText;
    if (e.target.id === "post") {
      dataValue.content = e.target.value;
    }

    // console.log("onchange:\n", dataValue);
    // console.log(this.props.postText);

    this.setState({ disabled: dataValue.content });

    // console.log("lenght:\n", dataValue.content.length > 0);
  };

  getSnapshotBeforeUpdate(nextProps) {
    console.log("AddHomePage.js: getSnapshotBeforeUpdate");
  }

  componentDidCatch() {
    console.log("AddHomePage.js: componentDidCatch", this.props.postText);
    console.log("AddHomePage.js: componentDidCatch", this.props.postImage);
  }

  // submiting form
  onClick = async () => {
    if (this.state.image_link) {
      const postTextData = {
        user_id: this.props.auth.user.user_id,
        content: this.props.postText.content,
        image: this.state.image_link,
      };

      if (postTextData.content === undefined || postTextData.content === " ") {
        this.setState({ error: true });
        // this.props.dispatch(postSuccess());
      } else {
        this.props.dispatch(createPostText(postTextData));
      }
    } else {
      await this.postImage(this.state.file)
        .then((response) => {
          this.setState({ image_link: response.data.image_link });
        })
        // .then((data) => window.location.reload())
        .catch((err) => console.log("ERRR:", err));

      const postTextData = {
        user_id: this.props.auth.user.user_id,
        content: this.props.postText.content,
        image: this.state.image_link,
      };

      // const postImageData = {
      //   image: this.props.postText.image,
      // };

      if (postTextData.content === undefined || postTextData.content === " ") {
        this.setState({ error: true });
        // this.props.dispatch(postSuccess());
      } else {
        await this.props.dispatch(createPostText(postTextData));
      }
    }

    //
    //debug
    // console.log("postTextData:\n", postTextData);
    // console.log("postImageData:\n", postImageData);
    // console.log("this.props.postText:\n", this.props.postText);
    // console.log(
    //   "!postTextData.content:",
    //   !postTextData.content,
    //   postTextData.content === undefined,
    //   postTextData.content === null,
    //   postTextData.content === ""
    // );

    // if (postTextData.content == null && !postTextData.content.trim()) {
    //   this.setState({ errors: true });
    // } else {
    //   this.props.dispatch(createPostText(postTextData));
    // }
  };

  render() {
    const { whoami, postText } = this.props;
    const { error, disabled } = this.state;

    const userAva = !whoami.avatar ? userNoPict : whoami.avatar;

    //
    //debug
    // console.log("error:\n", error);
    // console.log("error:\n", userAva);
    // console.log("postText.content.length:", postText.content.length > 0);
    // console.log("disabled:", disabled);
    // console.log("this.state.image_link", this.state.image_link);
    console.log("!this.state.file:", !this.state.file);

    return (
      <>
        <Row>
          <Col sm={1}>
            <img
              className="avatar-small img-avatar rounded-circle"
              src={userAva}
              alt={`Profile Of ${whoami.firstname} ${whoami.lastname}`}
            />
          </Col>
          <Col sm={11}>
            <Form.Group controlId="post">
              <Form.Control
                value={postText.textContent}
                onChange={(e) => this.onChange(e)}
                as="textarea"
                style={{ minHeight: "40px" }}
                className="f-12"
                rows={3}
                placeholder={
                  error
                    ? "  Fill Your post, please! 😜"
                    : "  What happen today dear?"
                }
              />
              <input
                onChange={(e) => this.onChangeImage(e)}
                type="file"
                value={postText.imageContent}
                id="input-image"
                hidden
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="row justify-content-between pr-3">
          <div className="d-block">
            <label className="icon-add-post-image btn" for="input-image">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.1645 21.9977 19.3284 21.981 19.49 21.95L19.79 21.88H19.86H19.91L20.28 21.74L20.41 21.67C20.51 21.61 20.62 21.56 20.72 21.49C20.8535 21.3918 20.9805 21.2849 21.1 21.17L21.17 21.08C21.2682 20.9805 21.3585 20.8735 21.44 20.76L21.53 20.63C21.5998 20.5187 21.6601 20.4016 21.71 20.28C21.7374 20.232 21.7609 20.1818 21.78 20.13C21.83 20.01 21.86 19.88 21.9 19.75V19.6C21.9567 19.4046 21.9903 19.2032 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V14.69L7.29 11.39C7.38296 11.2963 7.49356 11.2219 7.61542 11.1711C7.73728 11.1203 7.86799 11.0942 8 11.0942C8.13201 11.0942 8.26272 11.1203 8.38458 11.1711C8.50644 11.2219 8.61704 11.2963 8.71 11.39L17.31 20H5ZM20 19C19.9991 19.1233 19.9753 19.2453 19.93 19.36C19.9071 19.4087 19.8804 19.4556 19.85 19.5C19.8232 19.5423 19.7931 19.5825 19.76 19.62L14.41 14.27L15.29 13.39C15.383 13.2963 15.4936 13.2219 15.6154 13.1711C15.7373 13.1203 15.868 13.0942 16 13.0942C16.132 13.0942 16.2627 13.1203 16.3846 13.1711C16.5064 13.2219 16.617 13.2963 16.71 13.39L20 16.69V19ZM20 13.86L18.12 12C17.5477 11.457 16.7889 11.1543 16 11.1543C15.2111 11.1543 14.4523 11.457 13.88 12L13 12.88L10.12 10C9.54772 9.45699 8.7889 9.15428 8 9.15428C7.2111 9.15428 6.45228 9.45699 5.88 10L4 11.86V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V13.86Z"
                  fill="black"
                />
              </svg>
              <span className="h3 f-10">
                {!this.state.file.name ? null : this.state.file.name}
              </span>
            </label>
            {/* <span onClick={() => this.onRemove()}>x</span> */}
          </div>

          <div className="d-block">
            <button
              className="btn btn-purple f-12"
              style={{ paddding: "10px 20px !important" }}
              // onClick={async () => {
              //   await this.postImage(this.state.file);
              //   this.onClick();
              // }}
              onClick={async () => {
                if (!this.state.image_link.length) {
                  this.onClick();
                } else {
                  await this.postImage(this.state.file);
                  this.onClick();
                }
              }}
              disabled={disabled.length === 0}
            >
              NEW POST
            </button>
          </div>
        </div>
      </>
    );
  }
}

AddPostHomePage.propTypes = {
  // createPostText: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postText: PropTypes.object.isRequired,
  // postImage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  postText: state.postText,
  // postImage: state.postImage,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(AddPostHomePage);
