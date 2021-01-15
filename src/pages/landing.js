import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Feeds } from "../components/public-feeds";
import { InfoWeb } from "../components/sidebar-footer";
import { SuggestedAccounts } from "../components/suggested-accounts";
import UsersServices from "../services/users-service";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPublicUsers } from "../actions/authAction";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPublic: [],
      suggested_Users: [],
      linksInfoWeb: [
        "about",
        "explore",
        "hastag",
        "community-guideline",
        "privacy-policy",
        "terms",
        "careers",
        "developers",
        "newsroom",
        "ads",
        "investors",
        "contact",
      ],
    };

    // console.log("TEST" + usersPublic);
  }

  componentDidMount() {
    this.getUsersPublic();
    this.getSuggestedUsers();
  }

  getUsersPublic() {
    const suggestedusers = {
      suggested_users: this.state.suggested_Users,
    };

    console.log("TEST" + suggestedusers);

    this.props.fetchPublicUsers(suggestedusers);
  }

  // getSuggestedUsers() {
  //   UsersServices.fetchAllUsers().then((response) => {
  //     this.setState({
  //       suggested_Users: response.data,
  //     });

  //     console.log("TEST" + response);
  //   });
  // }

  render() {
    const { usersPublic, suggested_Users, linksInfoWeb } = this.state;
    return (
      <div className="landing-page">
        <Navbar></Navbar>
        <div className="section-main container">
          <div className="row">
            <div className="feeds-wrapper col-8 pr-5">
              <Feeds usersPublic={usersPublic}></Feeds>
            </div>
            <aside className="sidebar-wrapper col-4">
              <div className="sidebar-landing-page-heading h4 pr-5">
                Sign Up or Log In To Follow Poster
              </div>
              <div className="sidebar-suggested-account">
                <div className="h6 my-4">Suggested Account</div>
                <div>
                  <SuggestedAccounts
                    suggested_Users={suggested_Users}
                  ></SuggestedAccounts>
                </div>
                <div className="mt-3">
                  <a href="/more-suggested-users" className="more-account-link">
                    <span className="more-account pr-2">more</span>
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L0.535899 -3.01142e-07L7.4641 -9.06825e-07L4 6Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <InfoWeb linksInfoWeb={linksInfoWeb}></InfoWeb>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  fetchPublicUsers: PropTypes.func.isRequired,
  suggested_Users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  suggested_Users: state.suggested_Users,
});

export default connect(mapStateToProps, { fetchPublicUsers }(Landing));
