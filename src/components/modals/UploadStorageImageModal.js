import React, { Component } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import UsersService from "../../services/usersService";
import axios, { put } from "axios";

class ChangeAvaFormModal extends Component {
  constructor(props) {
    super();
    this.state = {
      file: "",
    };

    this.onFormAvaSubmit = this.onFormAvaSubmit.bind(this);
    this.onChangeAva = this.onChangeAva.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onChangeAva(e) {
    this.setState({ file: e.target.files[0] });
  }

  onFormAvaSubmit(e) {
    e.preventDefault();
    this.fileUpload(this.state.file)
      .then((response) => {
        // console.log(response);
      })
      .then((data) => window.location.reload())
      .catch((err) => console.log("ERRR:", err));
  }

  fileUpload(file) {
    const user_id = this.props.whoami.user_id;
    // const url = `https://sosmetend.herokuapp.com/api/v1/avatar/${user_id}`;
    const url_local = `http://localhost:8000/api/v1/avatar/${user_id}`;
    const form_data = new FormData();

    form_data.append("image", file);

    const config = {
      headers: {
        Authorization: localStorage.jwtToken,
        "content-type": "multipart/form-data",
      },
    };

    // console.log("CONFIGGG:", config, "\n", "FORMDATAAA:", form_data, "\n");
    return put(url_local, form_data, config);
  }

  handleSubmitAvatar = () => {
    UsersService.updateImageProfile(
      this.props.whoami.user_id,
      localStorage.jwtToken
    )
      .then((res) => {
        //
        //debugging
        // console.log("AVAAAAA", res);
      })
      .catch((err) => {
        //
        //debug
        // console.log("AVAAAA:", err.message);
      });
  };

  render() {
    const { show, handleClose } = this.props;

    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Row className="justify-content-center">
            <Col sm={11}>
              <form className="mt-3" onSubmit={this.onFormAvaSubmit}>
                <h6 className="h5 mb-3 pl-2">Check! Your File Name 👇:</h6>
                <div className="box-file-see text-align-center m-2 p-4">
                  <span className="h6 f-12">{this.state.file.name}</span>
                </div>
                <input
                  type="file"
                  id="avatar-input"
                  onChange={this.onChangeAva}
                  hidden
                />
                <div className="browse-and-upload-btn-group mt-3">
                  <label className="ava-form-label btn mr-5" for="avatar-input">
                    Browse
                  </label>
                  <button
                    type="submit"
                    className="upload-ava-btn btn btn-purple"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(ChangeAvaFormModal);
