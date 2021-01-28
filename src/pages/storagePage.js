import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchVideos } from "../actions/fetchVideosAction";
import { fetchWhoAmi } from "../actions/whoAmiAction";
import SidebarProfileOverview from "../components/sidebar/sidebarProfileOverview";
import ReactPlayer from "react-player/file";
import Async from "react-async";

export const x = async ({ fetchvideos }) => {
  console.log("fetchvideos:\n", fetchvideos);
  const x = await fetchvideos;

  console.log("x", x);
  return <ReactPlayer url={x.video_link} controls={true} />;
};

class StoragePage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    // this.props.dispatch(fetchWhoAmi());
    // const user_id = await this.props.auth.user.user_id;
    // const url = await this.props.dispatch(fetchVideos(user_id));

    // this.props.dispatch(fetchVideos(user_id));
    console.log("comdidmount");
  }

  componentWillMount() {
    console.log("comwilmount");
    const user_id = this.props.auth.user.user_id;
    this.props.dispatch(fetchVideos(user_id));
  }

  render() {
    const { auth, whoami, fetchvideos } = this.props;

    const no = fetchvideos;

    console.log("render\n", "no:\n", no);
    // if (fetchvideos.length !== undefined) {
    return (
      <Container className="containerBox">
        <Row>
          <Col lg={8} className="feeds-wrapper pr-5">
            <div className="m-5">
              {/* <x fetchvideos={no}></x> */}
              <Async promiseFn={fetchvideos}>
                <ReactPlayer
                  url={fetchvideos.fetchvideos[0].video_link}
                  controls={true}
                />
              </Async>
            </div>
          </Col>
          <Col lg={4} className="sidebar-wrapper">
            <SidebarProfileOverview auth={auth} whoami={whoami} />
            <div className="row mt-5">
              <div className="col col-lg-7 d-block">
                <Button className="m-3 f-12">Upload File</Button>
                <Button className="m-3 f-12">Upload Video</Button>
                <Button className="m-3 f-12">Upload Image</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
    // } else {
    //   return null;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  whoami: state.whoami.whoami,
  fetchvideos: state.fetchvideos,
});

export default connect(mapStateToProps)(StoragePage);
