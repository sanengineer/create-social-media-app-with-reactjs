import React from "react";

export const SuggestedAccounts = ({ suggestedUsers }) => {
  if (suggestedUsers.lenght === 0) return null;

  console.log(suggestedUsers);

  const AccountSuggestedCard = (suggestedUser) => {
    return (
      <div className="suggested-account-item mt-4">
        <div className="image-profile-box">
          <div className="image-profile">
            <img
              className="img-src rounded-circle"
              src={suggestedUser.pict_url}
              alt="Rachel Bowler Picture Profile"
              width="40"
            />
          </div>
        </div>
        <div className="username-follow-wrapper justify-content-between">
          <div className="bio-desc pl-2">
            <div className="username">{suggestedUser.username}</div>
            <div className="name">{suggestedUser.name}</div>
          </div>
          <div className="d-block">
            <a href="#" className="suggested-account-folow-btn">
              Follow
            </a>
          </div>
        </div>
      </div>
    );
  };

  const AccountSuggestedCards = suggestedUsers.map((suggestedUser) =>
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
