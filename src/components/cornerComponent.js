import React from "react";
import { NavDropdown, Button } from "react-bootstrap";
import "./navHeader.css";

// import assets
import noPict from "../assets/icons/user.png";

export const CornerComponent = ({ user, logOut, auth }) => {
  console.log(user.avatar);

  let profileSrc;
  if (user.avatar) {
    profileSrc = user.avatar;
  } else {
    profileSrc = noPict;
  }

  if (auth) {
    return (
      <NavDropdown
        className="testcccc"
        title={
          <img
            className="img-avatar avatar rounded-circle"
            src={profileSrc}
            alt="user pic"
          />
        }
        id="collasible-nav-dropdown"
      >
        {/* <div className="CCCC p-5"> */}
        <strong>SignIn as :</strong>
        <br />
        {user.email}
        <NavDropdown.Divider />
        <NavDropdown.Item href="/main-profile">
          <Button>Your Profile</Button>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Button
            className="btn-block"
            variant="danger"
            onClick={() => logOut()}
          >
            Log Out
          </Button>
        </NavDropdown.Item>
        {/* </div> */}
      </NavDropdown>
    );
  } else {
    return (
      <ul className="navbar-nav d-lg-flex order-4">
        <li className="...">
          <a className="login-btn btn text-uppercase" href="/login">
            Login
          </a>
        </li>
        <li className="...">
          <a className="signup-btn btn text-uppercase" href="/register">
            Sign Up
          </a>
        </li>
      </ul>
    );
  }
};
