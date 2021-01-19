import React, { Component } from "react";
import { Container, Row, Col, Form, Image, Button, Nav } from "react-bootstrap";
import { fetchWhoAmi } from "../actions/whoAmiAction";
import { connect } from "react-redux";

// import assets
import userNoPict from "../assets/images/user_no-pict.jpg";
import SidebarProfileOverview from "./auth/sidebarProfileOverview";
import usersService from "../services/users-service";

// import component

class EditProfile extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchWhoAmi());
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
    } else if (e.target.name === "birthdate") {
      user.birthdate = e.target.value;
    } else if (e.target.name === "gender") {
      user.gender = e.target.value;
    } else if (e.target.name === "address") {
      user.address = e.target.value;
    }
  };

  //   handleSubmit = () => {
  //     UserService.editUsr(
  //       this.state.me.user_id,
  //       this.state.user,
  //       this.state.token
  //     )
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     console.log(this.state.user);
  //   };

  handleSubmit = () => {
    usersService
      .updateWhoAmi(
        this.props.whoami.user_id,
        this.props.whoami,
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
  };

  render() {
    var whoamiAvatar;

    const { whoami } = this.props;

    console.log("USERIDDD:", this.props.auth.user_id);

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
              <div className="d-flex justify-content-between">
                <img
                  className="rounded-circle"
                  src={whoamiAvatar}
                  alt={"Profile Image " + whoami.firstname + whoami.lastname}
                  width={150}
                  height={150}
                />
                <Button
                  onClick={() => this.handleSubmit()}
                  variant="disabled"
                  style={{ color: "#bd07f5" }}
                >
                  Save
                </Button>
              </div>
              <div className="mt-5 mb-5">
                <div className="form-edit-wrapper">
                  <div className="form-edit-overflow">
                    <Form>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          UserName
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={whoami.username}
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
                          value={whoami.email}
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
                          value={whoami.firstname}
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
                          value={whoami.lastname}
                          onChange={(e) => this.onChange(e)}
                          name="lastname"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          BirthDate
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={whoami.birthdate}
                          onChange={(e) => this.onChange(e)}
                          name="birthdate"
                          placeholder="2020-12-12"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          avatar
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={whoami.avatar}
                          onChange={(e) => this.onChange(e)}
                          name="avatar"
                          placeholder="gak ada"
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="font-weight-bold">
                          Sex
                        </Form.Label>
                        <Form.Control
                          className="edit-profile-form"
                          value={whoami.gender}
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
                          value={whoami.address}
                          as="textarea"
                          col={3}
                          onChange={(e) => this.onChange(e)}
                          name="address"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} style={{ marginTop: "5rem" }}>
            <div className="sticky-wrapper-aside">
              <SidebarProfileOverview whoami={whoami} />
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
