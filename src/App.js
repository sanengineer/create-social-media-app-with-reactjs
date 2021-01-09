import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


// Related to Authentication
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction'

// Related to store
import { Provider } from 'react-redux';
import store from './store/store'

// Importing components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute'
import Dashboard from './components/auth/Dashboard';



// check for token  to keep user login
if(localStorage.jwtToken){
  //set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp token info
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  //Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if(decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser())

    //Redirect to login
    window.location.href='./login'
  }
}

function App () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Navbar/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register}/>
                <Route exact path ="/login" component={Login}/>
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                </Switch>
          </div>
        </Router>
      </Provider>
    )};

export default App;
