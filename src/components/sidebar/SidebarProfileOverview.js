import React from "react";
import userNoPict from "../../assets/images/user_no-pict.jpg";
import ContentLoader from "react-content-loader";

const SidebarProfileOverview = ({ props, auth, whoami }) => {
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
      whoami.firstname === "" ||
      whoami.firstname === null ||
      whoami.firstname === undefined
        ? whoami.username + whoami.user_id
        : `${whoami.firstname} ${whoami.lastname}`;

    return (
      <div className="sidebar-home-page-profile-overview pr-5">
        {whoami.firstname === undefined || whoami.username === null ? (
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="98" y="20" rx="3" ry="3" width="140" height="14" />
            <rect x="98" y="44" rx="3" ry="3" width="90" height="14" />
            <rect x="0" y="92" rx="3" ry="3" width="200" height="14" />
            <rect x="0" y="116" rx="3" ry="3" width="120" height="14" />
            <circle cx="40" cy="40" r="40" />
          </ContentLoader>
        ) : (
          <>
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
            <p className="f-12">{whoami.bio}</p>{" "}
          </>
        )}
      </div>
    );
  }
};

export default SidebarProfileOverview;
