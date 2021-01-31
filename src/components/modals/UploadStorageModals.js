import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import UsersService from "../../services/usersService";

const AddImageModal = (props) => {
  //
  //debug
  console.log("AddImageModal props:", props);
  // console.log("AddImageModal whoami:", user_id);

  const [selectedFile, setSelectedFile] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);

  console.log(currentFile);

  const selectFile = (e) => {
    setSelectedFile(e.target.files);

    //
    //debug
    // console.log("e.target.files", e.target.files);
  };

  function uploadImage() {
    const user_id = 1;
    const token = localStorage.jwtToken;
    let currentFile = selectedFile[0];
    //
    //debug
    // console.log("user_id:", user_id);
    // console.log("token:", token);
    // console.log("currentFile:", currentFile);

    setCurrentFile(currentFile);

    UsersService.uploadImages(user_id, currentFile, token)
      .then((res) => {
        //
        //
        console.log("res:", res);
      })
      .catch((err) => {
        //
        //debug
        console.log("err", err);
      });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h6 className="h5 mb-3 mt-3 pl-2">
          ✅ Check! Your 🏞 Image File Name 👇:
        </h6>
        <div className="box-file-see text-align-center m-2 p-4">
          <span className="h6 f-12">
            {!selectedFile ? "" : selectedFile[0].name}
          </span>
        </div>
        <input type="file" id="avatar-input" onChange={selectFile} hidden />
        <div className="browse-and-upload-btn-group mt-3">
          <label className="ava-form-label btn mr-5" for="avatar-input">
            Browse
          </label>
          <button
            type="submit"
            className="upload-ava-btn btn btn-purple"
            disable={!selectedFile}
            onClick={uploadImage}
          >
            Upload
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const AddVideoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <h6 className="h5 mb-3 mt-3 pl-2">
          ✅ Check! Your 🎞 Video File Name 👇:
        </h6>
        <form
          className="mt-3"
          // onSubmit={this.onFormAvaSubmit}
        >
          <div className="box-file-see text-align-center m-2 p-4">
            <span className="h6 f-12">{""}</span>
          </div>
          <input
            type="file"
            id="avatar-input"
            // onChange={this.onChangeAva}
            hidden
          />
          <div className="browse-and-upload-btn-group mt-3">
            <label className="ava-form-label btn mr-5" for="avatar-input">
              Browse
            </label>
            <button type="submit" className="upload-ava-btn btn btn-purple">
              Upload
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const AddDocModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h6 className="h5 mb-3 mt-3 pl-2">
          ✅ Check! Your 📄 Doc File Name 👇:
        </h6>
        <form
          className="mt-3"
          // onSubmit={this.onFormAvaSubmit}
        >
          <div className="box-file-see text-align-center m-2 p-4">
            <span className="h6 f-12">{""}</span>
          </div>
          <input
            type="file"
            id="avatar-input"
            // onChange={this.onChangeAva}
            hidden
          />
          <div className="browse-and-upload-btn-group mt-3">
            <label className="ava-form-label btn mr-5" for="avatar-input">
              Browse
            </label>
            <button type="submit" className="upload-ava-btn btn btn-purple">
              Upload
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export { AddImageModal, AddVideoModal, AddDocModal };
