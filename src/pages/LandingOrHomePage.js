import React, { Component } from "react";
import { Feeds } from "../components/PublicFeeds";
import { InfoWeb } from "../components/sidebar/SidebarFooter";
import { SuggestedAccounts } from "../components/sidebar/SidebarSuggestedAccounts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../redux/actions/suggestedUsersAction";
import { fetchPublicUsers } from "../redux/actions/publicUsers";
import { fetchWhoAmi } from "../redux/actions/whoAmiAction";
import SidebarProfileOverview from "../components/sidebar/sidebarProfileOverview";
import Navbar from "../components/navbar";

class Landing extends Component {
  constructor(props) {
    super();

    // // console.log("TEST" + usersPublic);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postText !== this.props.postText) {
      this.props.dispatch(fetchPublicUsers());
      // this.props.dispatch(postStart());
      //
      //debug
      // console.log("componentDidUpdate(prevProps):", true);
    }
    //
    //debug
    // console.log("componentDidUpdate(prevProps):\n", prevProps.postText);
    // console.log("componentDidUpdate(this.props):\n", this.props.postText);
    // console.log("componentDidUpdate(this.props.postText):\n", this.props);
  }

  componentWillMount() {
    // this.props.dispatch(setCurrentUser());
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchSuggestedUsers());
    this.props.dispatch(fetchPublicUsers());
    this.props.dispatch(fetchWhoAmi());

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    const {
      publicusers,
      suggestedusers,
      linksInfoWeb,
      auth,
      whoami,
      postText,
    } = this.props;

    //
    //debug
    // console.log("WHOAMIIIIII:\n", whoami);
    // console.log("postTEXTTTT:\n", postText);
    // console.log("AUTHHHHH:", auth);
    console.log("window:", window.clientInformation.platform);
    return (
      <div className="landing-page">
        <Navbar />
        <div className="section-main container">
          <div className="row">
            <div className="feeds-wrapper col-8 pr-5">
              <Feeds
                publicusers={publicusers}
                whoami={whoami}
                postText={postText}
                auth={auth}
              ></Feeds>
            </div>
            <aside className="sidebar-wrapper col-4">
              <div className="sticky-wrapper-aside">
                <div className="overflow-wrapper-aside">
                  <SidebarProfileOverview auth={auth} whoami={whoami} />
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
  postText: state.postText,
});

export default connect(mapStateToProps)(Landing);
