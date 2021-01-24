import React from "react";
import noPict from "../../assets/images/user_no-pict.jpg";

const SidebarProfileOverview = ({ auth, whoami }) => {
  //
  //debugging
  //   console.log(user.username);
  // console.log("AUTH:", auth);
  console.log("whoamiiii:", whoami);

  if (whoami.length == 0) {
    return (
      <div className="sidebar-landing-page-heading h4 pr-5">
        Sign Up or Log In To Follow Poster
      </div>
    );
  } else {
    return (
      <div className="sidebar-home-page-profile-overview pr-5">
        <div className="d-flex mb-3">
          <img
            className="img-avatar rounded-circle"
            src={whoami.avatar}
            width={74}
            height={74}
            alt={`Image Profile Of ${whoami.firstname} ${whoami.lastname}`}
          />
          <div className="ml-3 pt-3">
            <h3 className="h6 mb-1">
              <strong>{whoami.username}</strong>
            </h3>
            <h4 className="h6 text-secondary">
              {`${whoami.firstname} ${whoami.lastname}`}
            </h4>
          </div>
        </div>
        <p className="f-12">{whoami.bio}</p>
      </div>
    );
  }
};

export default SidebarProfileOverview;
