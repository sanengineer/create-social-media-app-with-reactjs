import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Feeds } from "../components/public-feeds";
import { InfoWeb } from "../components/sidebar-footer";
import { SuggestedAccounts } from "../components/suggested-accounts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../actions/suggestedUsersAction";
import { fetchPublicUsers } from "../actions/publicUsers";

class Landing extends Component {
  constructor(props) {
    super();

    // console.log("TEST" + usersPublic);
  }

  componentDidMount() {
    this.props.dispatch(fetchSuggestedUsers());
    this.props.dispatch(fetchPublicUsers());
  }

  render() {
    const { publicusers, suggestedusers, linksInfoWeb, error } = this.props;
    return (
      <div className="landing-page">
        <div className="section-main container">
          <div className="row">
            <div className="feeds-wrapper col-8 pr-5">
              <Feeds publicusers={publicusers}></Feeds>
            </div>
            <aside className="sidebar-wrapper col-4">
              <div className="sticky-wrapper-aside">
                <div className="overflow-wrapper-aside">
                  <div className="sidebar-landing-page-heading h4 pr-5">
                    Sign Up or Log In To Follow Poster
                  </div>
                  <div className="sidebar-suggested-account">
                    <div className="h6 my-4">Suggested Account</div>
                    <div>
                      <SuggestedAccounts
                        suggestedusers={suggestedusers}
                      ></SuggestedAccounts>
                    </div>
                    <div className="mt-3">
                      <a
                        href="/more-suggested-users"
                        className="more-account-link"
                      >
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

const mapStateToProps = (state) => ({
  publicusers: state.publicusers.publicusers,
  suggestedusers: state.suggestedusers.suggestedusers,
  // error: state.suggestedusers.error,
  loading: state.suggestedusers.loading,
  linksInfoWeb: state.linksInfoWeb,
});

export default connect(mapStateToProps)(Landing);
