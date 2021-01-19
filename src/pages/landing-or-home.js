import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Feeds } from "../components/public-feeds";
import { InfoWeb } from "../components/sidebar-footer";
import { SuggestedAccounts } from "../components/suggested-accounts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../actions/suggestedUsersAction";
import { fetchPublicUsers } from "../actions/publicUsers";
import { fetchWhoAmi } from "../actions/whoAmiAction";
import SidebarProfileOverview from "../components/auth/sidebarProfileOverview";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser } from "../actions/authAction";

class Landing extends Component {
  constructor(props) {
    super();

    // console.log("TEST" + usersPublic);
  }

  componentDidMount() {
    this.props.dispatch(fetchSuggestedUsers());
    this.props.dispatch(fetchPublicUsers());
    this.props.dispatch(fetchWhoAmi());

    // this.props.dispatch(setCurrentUser());
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");
    // }
  }

  render() {
    const {
      publicusers,
      suggestedusers,
      linksInfoWeb,
      auth,
      whoami,
      error,
    } = this.props;

    console.log("WHOAMIIIIII:", whoami);

    // console.log("AUTHHHHH:", auth);
    return (
      <div className="landing-page">
        <div className="section-main container">
          <div className="row">
            <div className="feeds-wrapper col-8 pr-5">
              <Feeds publicusers={publicusers} whoami={whoami}></Feeds>
            </div>
            <aside className="sidebar-wrapper col-4">
              <div className="sticky-wrapper-aside">
                <div className="overflow-wrapper-aside">
                  <SidebarProfileOverview
                    auth={auth.isAuthenticated}
                    whoami={whoami}
                  />
                  <div className="sidebar-suggested-account mt-3">
                    <div className="h6 mb-2">Suggested Account</div>
                    <div>
                      <SuggestedAccounts
                        suggestedusers={suggestedusers}
                      ></SuggestedAccounts>
                    </div>
                    <div className="mt-3">
                      <a href="/suggested-users" className="more-account-link">
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
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propsTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  publicusers: state.publicusers.publicusers,
  suggestedusers: state.suggestedusers.suggestedusers,
  // error: state.suggestedusers.error,
  loading: state.suggestedusers.loading,
  linksInfoWeb: state.linksInfoWeb,
  whoami: state.whoami.whoami,
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
