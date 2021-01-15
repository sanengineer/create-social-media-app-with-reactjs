import React from "react";

export const SuggestedAccounts = ({ suggested_Users }) => {
  if (suggested_Users.length === 0) return null;

  console.log(suggested_Users);

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
                {suggestedUser.firstname + suggestedUser.lastname}
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

  const AccountSuggestedCards = suggested_Users.map((suggestedUser) =>
    AccountSuggestedCard(suggestedUser)
  );

  return <div className="xxx">{AccountSuggestedCards}</div>;
};

// export default class AccountCard extends Component {
//   render() {
//     return (
//       <div className="suggested-account-item mt-4">
//         <div className="image-profile-box">
//           <div className="image-profile">
//             <img
//               className="img-src rounded-circle"
//               src={RB}
//               alt="Rachel Bowler Picture Profile"
//               width="40"
//             />
//           </div>
//         </div>
//         <div className="username-follow-wrapper justify-content-between">
//           <div className="bio-desc pl-2">
//             <div className="username">rachelbowler</div>
//             <div className="name">Rachel Bowler</div>
//           </div>
//           <div className="d-block">
//             <a href="#" className="suggested-account-folow-btn">
//               Follow
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
