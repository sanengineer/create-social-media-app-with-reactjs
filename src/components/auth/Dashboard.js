import React, { Component } from "react";

// import component
import HomePage from "../homePage/homePage";

class Dashboard extends Component {
  render() {
    return (
      <div className="container align-wrapper cccc" style={{ height: "72vh" }}>
        <div className="row">
          <div className="col s12 center-align">
            <HomePage />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
