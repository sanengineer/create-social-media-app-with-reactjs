import React, { Component } from "react";
import RB from "../assets/images/user_rachel-bowler.png";

export default class AccountCard extends Component {
  render() {
    return (
      <div className="suggested-account-item mt-4">
        <div className="image-profile-box">
          <div className="image-profile">
            <img
              className="img-src rounded-circle"
              src={RB}
              alt="Rachel Bowler Picture Profile"
              width="40"
            />
          </div>
        </div>
        <div className="username-follow-wrapper justify-content-between">
          <div className="bio-desc pl-2">
            <div className="username">rachelbowler</div>
            <div className="name">Rachel Bowler</div>
          </div>
          <div className="d-block">
            <a href="#" className="suggested-account-folow-btn">
              Follow
            </a>
          </div>
        </div>
      </div>
    );
  }
}
