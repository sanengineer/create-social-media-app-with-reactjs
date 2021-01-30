import React, { Component } from "react";
import { Form, Button, Nav, Col } from "react-bootstrap";
import { connect } from "react-redux";
import userNoPict from "../assets/images/user_no-pict.jpg";
import SidebarProfileOverview from "../components/sidebar/SidebarProfileOverview";
import UsersService from "../services/usersService";
import ChangeAvaFormModal from "../components/modals/ChangeAvaModal";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";

class EditProfileByWahyu extends Component {
  constructor(props) {
    super();
    this.state = {
      userProfile: null,
      show: false,
      startDate: null,
    };
  }

  // state = {
  //   userProfile: null,
  //   show: false,
  //   birthdate: null,
  // };

  componentDidMount() {
    UsersService.whoami(localStorage.jwtToken)
      .then((res) => res.data)
      .then((res) => {
        this.setState({ userProfile: res });
        // console.log(res);
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
    } else if (e.target.name === "bio") {
      user.bio = e.target.value;
    } else if (e.target.name === "address") {
      user.address = e.target.value;
    }

    this.setState({ userProfile: user });
  };

  // onChangeBirthdate = (e) => {
  //   let birthdateProps = this.props.whoami.birth;
  //   if (e.target.name === "birthdate") {
  //     birthdateProps.birthdae = e.target.value;
  //   }

  //   console.log("birthdateProps", birthdateProps);

  //   this.setState({ startDate: birthdateProps });
  // };

  handleSubmit = () => {
    let data = {
      address: this.state.userProfile.address,
      avatar: this.state.userProfile.avatar,
      bio: this.state.userProfile.bio,
      birthdate: this.userProfile.birthdate,
      cloudinary_id: this.state.userProfile.cloudinary_id,
      email: this.state.userProfile.email,
      firstname: this.state.userProfile.firstname,
      gender: this.state.userProfile.gender,
      lastname: this.state.userProfile.lastname,
      username: this.state.userProfile.username,
    };

    // console.log(data, this.props.whoami.user_id);

    UsersService.updateWhoAmi(
      this.props.whoami.user_id,
      data,
      localStorage.jwtToken
    )
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        // console.log(err.message);
      });

    // console.log("EDITT PROFF", localStorage.jwtToken);
  };

  //
  //Modal React Bootstrap
  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  // handleChange(date) {
  //   this.setState({
  //     startDate: date,
  //   });
  // }

  render() {
    console.log("this.state.startDate", this.state.startDate);
    // console.log("render edit profile", this.state.userProfile);

    if (this.state.userProfile === null) {
      // console.log("jika null");
      return null;
    }

    const { whoami, auth } = this.props;
    const userAva = !whoami.avatar ? userNoPict : whoami.avatar;

    console.log("whoami", whoami);

    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="row mt-5">
            <Col lg={8} className="pr-5">
              <div className="edit-profile-details-wrapper container mx-4">
                <h3 className="pb-5">
                  <strong>Edit Profile</strong>
                </h3>
                <div className="d-flex">
                  <div className="ava-wrapper-edit">
                    <img
                      className="rounded-circle"
                      src={userAva}
                      alt={
                        "Profile Image " + whoami.firstname + whoami.lastname
                      }
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
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <div className="form-edit-wrapper">
                    <div className="form-edit-overflow">
                      <Form>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            UserName
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.username}
                            onChange={(e) => this.onChange(e)}
                            name="username"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Email
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.email}
                            onChange={(e) => this.onChange(e)}
                            name="email"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            FirstName
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.firstname}
                            onChange={(e) => this.onChange(e)}
                            name="firstname"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            LastName
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.lastname}
                            onChange={(e) => this.onChange(e)}
                            name="lastname"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            BirthDate
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.birthdate}
                            onChange={(e) => this.onChange(e)}
                            name="birthdate"
                            placeholder="2020-12-12"
                          />
                          {/* <DatePicker
                          // selected={this.state.startDate}
                          // onChange={this.handleChange}
                          // value={this.state.birthdate}
                          // onChange={(e) => this.onChangeBirthdate(e)}
                          // className="form-control"
                          // dateFormat="d MMMM yyyy"
                          // name="birthdate"
                        /> */}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Bio
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.bio}
                            as="textarea"
                            col={3}
                            onChange={(e) => this.onChange(e)}
                            name="bio"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Address
                          </Form.Label>
                          <Form.Control
                            value={this.state.userProfile.address}
                            as="textarea"
                            col={3}
                            onChange={(e) => this.onChange(e)}
                            name="address"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Sex
                          </Form.Label>
                          <Form.Control
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
                      </Form>
                    </div>
                  </div>
                  <Button
                    onClick={() => this.handleSubmit()}
                    variant="disabled"
                    className="btn-purple"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} style={{ marginTop: "5rem" }}>
              <div className="sticky-wrapper-aside">
                <SidebarProfileOverview whoami={whoami} auth={auth} />
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  whoami: state.whoami.whoami,
  auth: state.auth,
});

// export default EditProfile;
export default connect(mapStateToProps)(EditProfileByWahyu);
