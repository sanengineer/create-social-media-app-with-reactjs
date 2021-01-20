import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Related to Authentication
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { fetchPublicUsersSuccess } from "./actions/publicUsers";

// Related to store
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store/store";

// Importing components
import Navbar from "./components/navbar";
// import Landing from './components/layout/Landing';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/auth/Dashboard";
import LatestPost from "./components/post/LatestPost";
import DetailPost from "./components/post/DetailPost";

import Landing from "./pages/landing-or-home";

//Importing stylesheet
import "sanstrap/dist/css/sanstrap.css";
import "./index.css";
import { fetchWhoAmi } from "./actions/whoAmiAction";
import EditProfile from "./components/editProfile";
import EditProfileByWahyu from "./components/editProfile-Wahyu";
import SuggestedPage from "./pages/suggested-account-page";

// // check for token  to keep user login
// if (localStorage.jwtToken) {
//   //set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp token info
//   const decoded = jwt_decode(token);

//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   //Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     //logout user
//     store.dispatch(logoutUser());

//     //Redirect to login
//     window.location.href = "./";
//   }
// }

// console.log("YYYY:", store.dispatch(setCurrentUser()));

// function App() {
// if (localStorage.jwtToken) {
//   const token = localStorage.jwtToken;
//   const decoded = jwt_decode(token);

//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;

//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());

//     window.location.href = "./login";
//   }

//   console.log("DECODDD", store.dispatch(setCurrentUser(decoded)));
//   console.log("APPPP:", token);

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Navbar></Navbar>
//           <Route exact path="/" component={Landing}></Route>
//           <Route exact path="/login" component={Login}></Route>
//           <Route exact path="/register" component={Register}></Route>
//           <Switch>
//             <PrivateRoute exact path="/latest-post" component={LatestPost} />
//             <Route exact path="/detail-post" component={DetailPost} />
//           </Switch>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchWhoAmi());
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

    console.log("APPPP:", publicusers);

    // const routeComponents;

    // const routeComponent = (routeStatusFeed) => {
    //   <Route
    //     exact
    //     path={
    //       "/feed-" +
    //       routeStatusFeed.user.username +
    //       "-" +
    //       routeStatusFeed.post_id
    //     }
    //     component={Dashboard}
    //   />;
    // };

    // const routesComponents = publicusers.map((routeStatusFeed) =>
    //   routeComponent(routeStatusFeed)
    // );

    // console.log("ROUTESSS:", routesComponents);

    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/suggested-users"
            component={SuggestedPage}
          ></Route>
          <Route
            exact
            path={"/feed-" + publicusers.post_id}
            component={Dashboard}
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
            <Route exact path="/detail-post" component={DetailPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  whoami: state.whoami.whoami,
  publicusers: state.publicusers.publicusers,
});

export default connect(mapStateToProps)(App);
