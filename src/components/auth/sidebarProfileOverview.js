import React from "react";
import noPict from "../../assets/images/user_no-pict.jpg";

const SidebarProfileOverview = ({ auth }) => {
  //
  //debugging
  //   console.log(user.username);
  console.log("AUTH:", auth);

  if (auth) {
    return (
      <>
        <div className="d-flex mb-3">
          <img className="rounded-circle" src={noPict} width={74} height={74} />
          <div className="ml-3 pt-3">
            <h3 className="h6 mb-1">
              <strong>TEST</strong>
            </h3>
            <h4 className="h6 text-secondary">TEST iii</h4>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="sidebar-landing-page-heading h4 pr-5">
        Sign Up or Log In To Follow Poster
      </div>
    );
  }
};

export default SidebarProfileOverview;
