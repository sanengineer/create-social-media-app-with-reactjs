import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../redux/actions/suggestedUsersAction";
import { SuggestedAccounts } from "../components/sidebar/SidebarSuggestedAccounts";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

class SuggestedPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchSuggestedUsers());
  }

  render() {
    const { suggestedusers } = this.props;

    return (
      <>
        <Navbar />
        <Container className="section-main">
          <div className="suggested-page">
            <div className="section-main container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <div className="mb-4">
                    <h3 className="h5 font-weight-bold">Suggested Users</h3>
                  </div>
                  <div className="suggested-wrapper">
                    <SuggestedAccounts suggestedusers={suggestedusers} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  suggestedusers: state.suggestedusers.suggestedusers,
});

export default connect(mapStateToProps)(SuggestedPage);
