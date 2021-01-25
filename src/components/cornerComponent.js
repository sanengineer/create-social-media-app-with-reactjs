import React from "react";
import { NavDropdown } from "react-bootstrap";

// import assets
import noPict from "../assets/images/user_no-pict.jpg";

export const CornerComponent = ({ whoami, logOut, auth }) => {
  //
  //
  // console.log(whoami.length);
  // console.log("LOGOUUUTTT:", logOut);

  let whoAmiProfileSrc;

  if (whoami.avatar) {
    whoAmiProfileSrc = whoami.avatar;
  } else {
    whoAmiProfileSrc = noPict;
  }

  if (auth.isAuthenticated === false) {
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
  } else {
    return (
      <NavDropdown
        className="testcccc"
        title={
          <img
            className="img-avatar-navbar avatar rounded-circle"
            src={whoAmiProfileSrc}
            alt="user pic"
            width="30"
            height="30"
          />
        }
        id="collasible-nav-dropdown"
      >
        <div className="who-am-i-navbar-detail">
          <strong>Sign In as:</strong>
          <br />
          {whoami.username}
        </div>
        <NavDropdown.Divider />
        <div className="dashboard-link">
          <NavDropdown.Item href={"/" + whoami.username}>
            Profile
          </NavDropdown.Item>
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
  }
};
