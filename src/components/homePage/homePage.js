import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import UsersServices from "../../services/users-service";

//related to redux
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../../actions/suggestedUsersAction";
import { fetchPublicUsers } from "../../actions/publicUsers";

// Importing assets
import noPict from "../../assets/icons/user.png";
import "./homePage.css";

// import component
import { Feeds } from "../../components/public-feeds";
import { SuggestedAccounts } from "../../components/suggested-accounts";
import { InfoWeb } from "../sidebar-footer";

class HomePage extends Component {
  state = {
    token: localStorage.jwtToken,
    me: {},
  };
  componentDidMount() {
    this.props.dispatch(fetchSuggestedUsers());
    this.props.dispatch(fetchPublicUsers());
    UsersServices.me(this.state.token).then((result) => {
      this.setState({ me: result.data });
      // console.log(result.data)
    });
  }

  render() {
    const me = this.state.me;
    const { publicusers, suggestedusers, linksInfoWeb } = this.props;
    // let me = this.state.me;
    let profileSrc;
    if (me.avatar) {
      profileSrc = me.avatar;
    } else {
      profileSrc = noPict;
    }
    return (
      <div>
        <Container className="py-2 top-main">
          <Row>
            <Col md={8}>
              <Feeds publicusers={publicusers} />
            </Col>
            <Col sm={4}>
              <div className="d-flex mb-3">
                <Image
                  className="rounded-circle"
                  src={profileSrc}
                  width={74}
                  height={74}
                />
                <div className="ml-3 pt-3">
                  <h3 className="h6 mb-1">
                    <strong>{me.username}</strong>
                  </h3>
                  <h4 className="h6 text-secondary">{`${me.firstname} ${me.lastname}`}</h4>
                </div>
              </div>
              <p className="f-12">{me.bio}</p>
              <hr />
              <p>Suggested Account :</p>
              <SuggestedAccounts suggestedusers={suggestedusers} />
              <hr></hr>
              <InfoWeb linksInfoWeb={linksInfoWeb}></InfoWeb>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  publicusers: state.publicusers.publicusers,
  suggestedusers: state.suggestedusers.suggestedusers,
  linksInfoWeb: state.linksInfoWeb,
});

export default connect(mapStateToProps)(HomePage);
