import React from "react";
import userNoPict from "../../assets/images/user_no-pict.jpg";

export const SuggestedAccounts = ({ suggestedusers }) => {
  if (suggestedusers.length === 0) return null;

  // console.log("suggested_account_numbers:", suggestedusers.length);

  const AccountSuggestedCard = (suggestedUser) => {
    const userAva = !suggestedUser.avatar ? userNoPict : suggestedUser.avatar;

    const Fullname =
      suggestedUser.firstname === "" || suggestedUser.firstname === null
        ? suggestedUser.username + suggestedUser.user_id
        : `${suggestedUser.firstname} ${suggestedUser.lastname}`;

    return (
      <div className="suggested-account-item mt-4">
        <div className="image-profile-box">
          <div className="image-profile">
            <img
              className="img-src rounded-circle"
              src={userAva}
              alt={
                suggestedUser.firstname +
                suggestedUser.lastname +
                "Picture Profile"
              }
              width="40"
              height="40"
            />
          </div>
        </div>
        <div className="username-follow-wrapper justify-content-between">
          <div className="bio-desc pl-2">
            <a
              className="suggested-user-link"
              href={"/" + suggestedUser.username}
            >
              <div className="username">{suggestedUser.username}</div>
              <div className="name">{Fullname}</div>
            </a>
          </div>
          {/* <div className="d-block">
            <button href="#" className="suggested-account-folow-btn btn">
              Follow
            </button>
          </div> */}
        </div>
      </div>
    );
  };

  const AccountSuggestedCards = suggestedusers.map((suggestedUser) =>
    AccountSuggestedCard(suggestedUser)
  );

  return <div className="suggested-users-list">{AccountSuggestedCards}</div>;
};
