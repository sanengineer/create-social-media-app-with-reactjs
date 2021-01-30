import React from "react";
import userNoPict from "../../assets/images/user_no-pict.jpg";

const SidebarProfileOverview = ({ auth, whoami }) => {
  //
  //debug
  // console.log(user.username);
  // console.log("AUTH:", auth);
  // console.log("whoamiiii:", whoami);

  if (auth.isAuthenticated === false) {
    return (
      <div className="sidebar-landing-page-heading h4 pr-5">
        Sign Up or Log In To Follow Poster
      </div>
    );
  } else {
    const userAva = !whoami.avatar ? userNoPict : whoami.avatar;

    const Fullname =
      whoami.firstname === "" || whoami.firstname === null
        ? whoami.username + whoami.user_id
        : `${whoami.firstname} ${whoami.lastname}`;

    return (
      <div className="sidebar-home-page-profile-overview pr-5">
        <div className="d-flex mb-3">
          <img
            className="img-avatar rounded-circle"
            src={userAva}
            width={74}
            height={74}
            alt={`Profile Of ${whoami.firstname} ${whoami.lastname}`}
          />
          <div className="ml-3 pt-3">
            <h3 className="h6 mb-1">
              <strong>{whoami.username}</strong>
            </h3>
            <h4 className="h6 text-secondary">{Fullname}</h4>
          </div>
        </div>
        <p className="f-12">{whoami.bio}</p>
      </div>
    );
  }
};

export default SidebarProfileOverview;
