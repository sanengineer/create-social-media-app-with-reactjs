import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { createPostText } from "../../redux/actions/createPostTextAction";
import PropTypes from "prop-types";

import { connect } from "react-redux";

// import icons and images
import userNoPict from "../../assets/images/user_no-pict.jpg";

class AddPost extends Component {
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
    // console.log(this.state.post);
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

    if (postData.content === null || postData.content === undefined) {
      // console.log("form null");
      this.setState({ errors: true });
    } else {
      // console.log(postData);
      this.props.dispatch(createPostText(postData));
      // posting(postData)
      //   .then((res) => res.data)
      //   .then((data) => {
      //     console.log(data);
      //     window.location.reload();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  render() {
    const { whoami, show, handleClose } = this.props;

    const userAva = !whoami.avatar ? userNoPict : whoami.avatar;

    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Row>
            <Col sm={1}>
              <img
                className="img-avatar rounded-circle"
                src={userAva}
                width={56}
                height={56}
                alt={`Profile Of ${whoami.firstname} ${whoami.lastname}`}
              />
            </Col>
            <Col sm={11}>
              <Form.Group controlId="post">
                <Form.Control
                  value={this.state.post.content}
                  onChange={(e) => this.onChange(e)}
                  as="textarea"
                  rows={3}
                  placeholder={
                    this.state.errors
                      ? "   Fill Your post, please! 😜"
                      : "  What happen today dear?"
                  }
                  required
                />
              </Form.Group>
              {/* <Form.Group controlId="postImage">
                                <Form.File onChange={(e) => this.onChange(e)}/>
                            </Form.Group> */}
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div>
              {/* <div className="icon-emoji">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 11C15.1978 11 15.3911 10.9414 15.5556 10.8315C15.72 10.7216 15.8482 10.5654 15.9239 10.3827C15.9996 10.2 16.0194 9.99889 15.9808 9.80491C15.9422 9.61093 15.847 9.43275 15.7071 9.29289C15.5673 9.15304 15.3891 9.0578 15.1951 9.01921C15.0011 8.98063 14.8 9.00043 14.6173 9.07612C14.4346 9.15181 14.2784 9.27998 14.1685 9.44443C14.0587 9.60888 14 9.80222 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11ZM9 11C9.19779 11 9.39113 10.9414 9.55557 10.8315C9.72002 10.7216 9.8482 10.5654 9.92388 10.3827C9.99957 10.2 10.0194 9.99889 9.98079 9.80491C9.9422 9.61093 9.84696 9.43275 9.70711 9.29289C9.56726 9.15304 9.38908 9.0578 9.19509 9.01921C9.00111 8.98063 8.80005 9.00043 8.61732 9.07612C8.43459 9.15181 8.27842 9.27998 8.16853 9.44443C8.05865 9.60888 8 9.80222 8 10C8 10.2652 8.10536 10.5196 8.2929 10.7071C8.48043 10.8946 8.73479 11 9 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16.28 12.88C16.115 12.674 15.8752 12.5415 15.613 12.5115C15.3507 12.4816 15.0872 12.5565 14.88 12.72C14.471 13.0544 14.1658 13.4984 14 14H10.35C10.1878 13.4882 9.88245 13.0336 9.47 12.69C9.26071 12.5432 9.00313 12.4821 8.75019 12.5193C8.49725 12.5565 8.26816 12.6891 8.11 12.89C7.9473 13.0941 7.87087 13.3538 7.89703 13.6135C7.92319 13.8732 8.04987 14.1124 8.25 14.28C8.42512 14.4776 8.51498 14.7364 8.5 15C8.50603 15.2623 8.41726 15.5179 8.25 15.72C8.14291 15.8005 8.05307 15.9016 7.98581 16.0174C7.91856 16.1333 7.87527 16.2615 7.8585 16.3944C7.84173 16.5273 7.85184 16.6622 7.88822 16.7911C7.92459 16.92 7.9865 17.0403 8.07026 17.1448C8.15402 17.2494 8.25792 17.336 8.37581 17.3996C8.4937 17.4632 8.62316 17.5025 8.75652 17.5151C8.88987 17.5277 9.0244 17.5134 9.15212 17.473C9.27984 17.4326 9.39814 17.367 9.5 17.28C9.88998 16.9366 10.1802 16.4944 10.34 16H14C14.1602 16.5153 14.47 16.9713 14.89 17.31C15.0572 17.4267 15.2561 17.4895 15.46 17.49C15.6102 17.4893 15.7583 17.4548 15.8934 17.389C16.0284 17.3232 16.1469 17.2279 16.24 17.11C16.4027 16.9059 16.4791 16.6462 16.453 16.3865C16.4268 16.1268 16.3001 15.8876 16.1 15.72C15.9249 15.5224 15.835 15.2636 15.85 15C15.844 14.7377 15.9327 14.4821 16.1 14.28C16.3091 14.1179 16.4454 13.8796 16.4792 13.6172C16.5129 13.3548 16.4413 13.0897 16.28 12.88Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="icon-image">
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
              </div> */}
            </div>
            <Button className="post-btn btn btn-purple" onClick={this.onClick}>
              NEW POST
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AddPost.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(AddPost);
