import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Related to Authentication
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authAction";
import { fetchPublicUsers } from "./redux/actions/publicUsers";
import { fetchSuggestedUsers } from "./redux/actions/suggestedUsersAction";

// Related to store
import { connect } from "react-redux";
import store from "./redux/store/store";

import Navbar from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import LatestPost from "./components/post/LatestPost";
import Landing from "./pages/LandingOrHomePage";
import { fetchWhoAmi } from "./redux/actions/whoAmiAction";
import EditProfileByWahyu from "./components/editProfile-Wahyu";
import SuggestedPage from "./pages/SuggestedAccountPage";
import PostDetails from "./pages/PostDetail";
import StoragePage from "./pages/StoragePage";
import PdfRender from "./pages/JournalsPage";

//Importing stylesheet
import "sanstrap/dist/css/sanstrap.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchWhoAmi());
    this.props.dispatch(fetchPublicUsers());
    this.props.dispatch(fetchSuggestedUsers());
  }

  render() {
    // check for token  to keep user login
    if (localStorage.jwtToken) {
      //set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp token info
      const decoded = jwt_decode(token);

      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));

      //Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        //logout user
        store.dispatch(logoutUser());

        //Redirect to login
        window.location.href = "./";
      }
    }

    const { whoami, publicusers } = this.props;

    const route = (user) => ({
      path: `/${user.user.username}/post/${user.post_id}`,
      params: { id: `${user.post_id}` },
      component: PostDetails,
    });

    const routes = publicusers.map((user) => route(user));

    const dynamicRoutes = routes.map(({ path, component, params }, key) => (
      <Route
        exact
        path={path}
        component={component}
        params={params}
        key={key}
      />
    ));

    //
    //debug
    // console.log("ROUTESSS:", routesComponents);
    // console.log("publicusers.user:", publicusers.user.username);
    // console.log("this.props", this.props);
    // console.log("APPPP:", publicusers);
    // console.log("route", route);
    // console.log("publicusers:", publicusers[0]);
    // console.log("dynamicRoutes.props:", dynamicRoutes.props);
    // console.log("dynamicRoutes:", dynamicRoutes);

    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/home" component={Landing}></Route>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/suggested-users"
            component={SuggestedPage}
          ></Route>
          {dynamicRoutes}
          <Route
            exact
            path={`/${whoami.username}/journals`}
            component={PdfRender}
          />
          <Switch>
            <PrivateRoute
              exact
              path={"/" + whoami.username}
              component={LatestPost}
            />
            <PrivateRoute
              exact
              path="/edit-profile"
              component={EditProfileByWahyu}
            />
            <PrivateRoute
              path={"/" + whoami.username + "/storage"}
              component={StoragePage}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  whoami: state.whoami.whoami,
  publicusers: state.publicusers.publicusers,
  postdetails: state.postdetails.postdetails,
  suggestedusers: state.suggestedusers.suggestedusers,
});

export default connect(mapStateToProps)(App);
