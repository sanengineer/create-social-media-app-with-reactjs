import React, { Component } from "react";
import { Container, Row, Col, Form, Image, Button, Nav } from "react-bootstrap";
import { fetchWhoAmi, fetchWhoAmiSuccess } from "../actions/whoAmiAction";
import { connect } from "react-redux";
import axios, { put, post } from "axios";

// import assets
import userNoPict from "../assets/images/user_no-pict.jpg";
import SidebarProfileOverview from "./auth/sidebarProfileOverview";
import UsersService from "../services/users-service";
import ChangeAvaFormModal from "./changeAvaModal";

// import component

class EditProfile extends Component {
  constructor(props) {
    super();

    this.state = {
      show: false,
    };
  }

  state = {
    userProfile: null,
  };

  componentDidMount() {
    // this.props.dispatch(fetchWhoAmiSuccess());
    // this.setState({ userProfile: this.props.whoami });

    UsersService.whoami(localStorage.jwtToken)
      .then((res) => res.data)
      .then((res) => {
        this.setState({ userProfile: res });
        console.log("RESSSS:", res);
      })
      .catch((err) => console.log(err));
  }

  onChange = (e) => {
    let user = this.props.whoami;
    if (e.target.name === "username") {
      user.username = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    } else if (e.target.name === "firstname") {
      user.firstname = e.target.value;
    } else if (e.target.name === "lastname") {
      user.lastname = e.target.value;
    } else if (e.target.name === "bio") {
      user.bio = e.target.value;
    } else if (e.target.name === "birthdate") {
      user.birthdate = e.target.value;
    } else if (e.target.name === "gender") {
      user.gender = e.target.value;
    } else if (e.target.name === "address") {
      user.address = e.target.value;
    }

    console.log("VALUEEE:", user);

    this.setState({ userProfile: user });
  };

  handleSubmit = () => {
    let data = {
      address: this.state.userProfile.address,
      avatar: this.state.userProfile.avatar,
      bio: this.state.userProfile.bio,
      birthdate: this.state.userProfile.birthdate,
      cloudinary_id: this.state.userProfile.cloudinary_id,
      email: this.state.userProfile.email,
      firstname: this.state.userProfile.firstname,
      gender: this.state.userProfile.gender,
      lastname: this.state.userProfile.lastname,
      username: this.state.userProfile.username,
    };

    console.log("RRRR:", data, this.props.whoami.user_id);

    UsersService.updateWhoAmi(
      this.props.whoami.user_id,
      data,
      localStorage.jwtToken
    )
      .then((result) => {
        //
        //debugging
        console.log(result);
      })
      .catch((err) => {
        //
        //debugging
        console.log(err.message);
      });

    console.log("dataaaa", data);
  };

  //
  //Modal React Bootstrap
  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    var whoamiAvatar;

    console.log("userProfileee", this.state.userProfile);

    const { whoami } = this.props;
    // const { userProfile } = this.state;

    // console.log("STATEEEE:");

    // console.log("USERIDDD:", userProfile);

    // if (userProfile.avatar) {
    //   whoamiAvatar = userProfile.avatar;
    // } else {
    //   whoamiAvatar = userNoPict;
    // }

    if (whoami.avatar) {
      whoamiAvatar = whoami.avatar;
    } else {
      whoamiAvatar = userNoPict;
    }

    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <Col lg={8} className="pr-5">
            <div className="edit-profile-details-wrapper container mx-4">
              <h3 className="pb-5">
                <strong>Edit Profile</strong>
              </h3>

              <div className="d-flex">
                <div className="ava-wrapper-edit">
                  {/*--
                  //
                  //first style form-*/}
                  {/* <form>
                    <div className="form-group">
                      <label
                        className="form-label ava-form-label-group"
                        for="avatar-input"
                      >
                        <div className="icon-change-ava">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 10.5C19.7348 10.5 19.4804 10.6054 19.2929 10.7929C19.1054 10.9804 19 11.2348 19 11.5V18.5C19 18.7652 18.8946 19.0196 18.7071 19.2071C18.5196 19.3946 18.2652 19.5 18 19.5H4C3.73478 19.5 3.48043 19.3946 3.29289 19.2071C3.10536 19.0196 3 18.7652 3 18.5V10.5C3 10.2348 3.10536 9.98043 3.29289 9.79289C3.48043 9.60536 3.73478 9.5 4 9.5H6C6.21807 9.51138 6.43386 9.45107 6.61443 9.32829C6.795 9.2055 6.93042 9.02698 7 8.82L7.54 7.18C7.60709 6.98138 7.7349 6.80887 7.90537 6.68684C8.07584 6.56482 8.28036 6.49946 8.49 6.5H14C14.2652 6.5 14.5196 6.39464 14.7071 6.20711C14.8946 6.01957 15 5.76522 15 5.5C15 5.23478 14.8946 4.98043 14.7071 4.79289C14.5196 4.60536 14.2652 4.5 14 4.5H8.44C7.81155 4.50118 7.19933 4.69968 6.68977 5.06751C6.1802 5.43533 5.79901 5.95389 5.6 6.55L5.28 7.55H4C3.20435 7.55 2.44129 7.86607 1.87868 8.42868C1.31607 8.99129 1 9.75435 1 10.55V18.55C1 19.3456 1.31607 20.1087 1.87868 20.6713C2.44129 21.2339 3.20435 21.55 4 21.55H18C18.7956 21.55 19.5587 21.2339 20.1213 20.6713C20.6839 20.1087 21 19.3456 21 18.55V11.55C21.0068 11.4145 20.9859 11.2791 20.9387 11.1519C20.8915 11.0248 20.8189 10.9086 20.7254 10.8103C20.6318 10.7121 20.5193 10.634 20.3946 10.5806C20.2699 10.5273 20.1356 10.4998 20 10.5ZM11 9.5C10.2089 9.5 9.43552 9.7346 8.77772 10.1741C8.11992 10.6136 7.60723 11.2384 7.30448 11.9693C7.00173 12.7002 6.92252 13.5044 7.07686 14.2804C7.2312 15.0563 7.61216 15.769 8.17157 16.3284C8.73098 16.8878 9.44372 17.2688 10.2196 17.4231C10.9956 17.5775 11.7998 17.4983 12.5307 17.1955C13.2616 16.8928 13.8864 16.3801 14.3259 15.7223C14.7654 15.0645 15 14.2911 15 13.5C15 12.4391 14.5786 11.4217 13.8284 10.6716C13.0783 9.92143 12.0609 9.5 11 9.5ZM11 15.5C10.6044 15.5 10.2178 15.3827 9.88886 15.1629C9.55996 14.9432 9.30362 14.6308 9.15224 14.2654C9.00087 13.8999 8.96126 13.4978 9.03843 13.1098C9.1156 12.7219 9.30608 12.3655 9.58579 12.0858C9.86549 11.8061 10.2219 11.6156 10.6098 11.5384C10.9978 11.4613 11.3999 11.5009 11.7654 11.6522C12.1308 11.8036 12.4432 12.06 12.6629 12.3889C12.8827 12.7178 13 13.1044 13 13.5C13 14.0304 12.7893 14.5391 12.4142 14.9142C12.0391 15.2893 11.5304 15.5 11 15.5ZM22 4.5H21V3.5C21 3.23478 20.8946 2.98043 20.7071 2.79289C20.5196 2.60536 20.2652 2.5 20 2.5C19.7348 2.5 19.4804 2.60536 19.2929 2.79289C19.1054 2.98043 19 3.23478 19 3.5V4.5H18C17.7348 4.5 17.4804 4.60536 17.2929 4.79289C17.1054 4.98043 17 5.23478 17 5.5C17 5.76522 17.1054 6.01957 17.2929 6.20711C17.4804 6.39464 17.7348 6.5 18 6.5H19V7.5C19 7.76522 19.1054 8.01957 19.2929 8.20711C19.4804 8.39464 19.7348 8.5 20 8.5C20.2652 8.5 20.5196 8.39464 20.7071 8.20711C20.8946 8.01957 21 7.76522 21 7.5V6.5H22C22.2652 6.5 22.5196 6.39464 22.7071 6.20711C22.8946 6.01957 23 5.76522 23 5.5C23 5.23478 22.8946 4.98043 22.7071 4.79289C22.5196 4.60536 22.2652 4.5 22 4.5Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <span className="ava-cover-opacity"></span>
                        <img
                          className="rounded-circle"
                          src={whoamiAvatar}
                          alt={
                            "Profile Image " +
                            whoami.firstname +
                            whoami.lastname
                          }
                          width={150}
                          height={150}
                        />
                      </label>
                      <input type="file" id="avatar-input" hidden />
                    </div>
                  </form> */}
                  {/*--
                  //
                  //second style form-*/}

                  <img
                    className="rounded-circle"
                    src={whoamiAvatar}
                    alt={"Profile Image " + whoami.firstname + whoami.lastname}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="form-image-change">
                  <div className="username-label-for-change-image">
                    {/* <img src={this.state.file.name} /> */}
                    <h2 className="h4 font-weight-bold">{whoami.username}</h2>
                  </div>
                  <div
                    onClick={this.handleShow}
                    className="change-ava-btn mt-3"
                  >
                    Change Avatar
                  </div>
                  <ChangeAvaFormModal
                    show={this.state.show}
                    handleClose={this.handleClose}
                  />
                  {/* <form className="mt-3" onSubmit={this.onFormAvaSubmit}>
                    <label
                      className="font-weight-bold form-label ava-form-label btn-purple btn f-12"
                      for="avatar-input"
                    >
                      Change Avatar
                    </label>
                    <input
                      type="file"
                      id="avatar-input"
                      onChange={this.onChangeAva}
                      hidden
                    />
                    <button type="submit">Upload</button>
                  </form> */}
                </div>
              </div>
              <div className="mt-5 mb-5">
                <div className="form-edit-wrapper">
                  <div className="form-edit-overflow">
                    {/* <Form>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          UserName
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.username}
                          onChange={(e) => this.onChange(e)}
                          name="username"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          Email
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.email}
                          onChange={(e) => this.onChange(e)}
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          FirstName
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.firstname}
                          onChange={(e) => this.onChange(e)}
                          name="firstname"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          LastName
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.lastname}
                          onChange={(e) => this.onChange(e)}
                          name="lastname"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          Bio
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.bio}
                          as="textarea"
                          onChange={(e) => this.onChange(e)}
                          name="bio"
                          placeholder="let's introduce your self to the world"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          BirthDate
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.birthdate}
                          onChange={(e) => this.onChange(e)}
                          name="birthdate"
                          placeholder="2020-12-12"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          Sex
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.gender}
                          as="select"
                          onChange={(e) => this.onChange(e)}
                          name="gender"
                        >
                          <option value="">Choosee</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          Address
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={this.state.userProfile.address}
                          as="textarea"
                          col={3}
                          onChange={(e) => this.onChange(e)}
                          name="address"
                        />
                      </Form.Group>
                    </Form> */}
                    <Button
                      onClick={() => this.handleSubmit()}
                      variant="disabled"
                      className="btn-purple"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} style={{ marginTop: "5rem" }}>
            <div className="sticky-wrapper-aside">
              <Nav defaultActiveKey="#" className="flex-column mt-4">
                <Nav.Link href={"/" + whoami.username} className="pl-0">
                  Your Posts
                </Nav.Link>
                <Nav.Link href="/edit-profile" className="pl-0">
                  Edit Profile
                </Nav.Link>
              </Nav>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
});

export default connect(mapStateToProps)(EditProfile);
