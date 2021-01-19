import React, { Component } from "react";

// import component
import HomePage from "../homePage/homePage";

class Dashboard extends Component {
  render() {
    return (
      <div className="container align-wrapper cccc" style={{ height: "72vh" }}>
        <div className="row">
          <div className="text-center" style={{ marginTop: "10rem" }}>
            {/* <HomePage /> */}
            Edit Profile PAGE
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
