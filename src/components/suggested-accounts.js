import React from "react";

export const SuggestedAccounts = ({ suggestedusers }) => {
  if (suggestedusers.length === 0) return null;

  console.log("suggested_account_numbers:", suggestedusers.length);

  const AccountSuggestedCard = (suggestedUser) => {
    return (
      <div className="suggested-account-item mt-4">
        <div className="image-profile-box">
          <div className="image-profile">
            <img
              className="img-src rounded-circle"
              src={suggestedUser.avatar}
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
              <div className="name">
                {`${suggestedUser.firstname} ${suggestedUser.lastname}`}
              </div>
            </a>
          </div>
          <div className="d-block">
            <button href="#" className="suggested-account-folow-btn btn">
              Follow
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AccountSuggestedCards = suggestedusers.map((suggestedUser) =>
    AccountSuggestedCard(suggestedUser)
  );

  return <div className="test">{AccountSuggestedCards}</div>;
};
