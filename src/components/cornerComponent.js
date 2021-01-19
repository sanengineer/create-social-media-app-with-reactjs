import React from "react";
import { NavDropdown } from "react-bootstrap";
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
        <div className="who-am-i-navbar-detail">
          <strong>Sign In as</strong>
          <br />
          {user.email}
        </div>
        <NavDropdown.Divider />
        <div className="dashboard-link">
          <NavDropdown.Item href="/main-profile">Your Profile</NavDropdown.Item>
          <NavDropdown.Item className="text-center">
            <button
              className="logout-btn btn-danger btn"
              onClick={() => logOut()}
            >
              Log Out
            </button>
          </NavDropdown.Item>
        </div>
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
