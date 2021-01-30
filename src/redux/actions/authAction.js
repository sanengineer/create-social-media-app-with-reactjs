import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import * as actionTypes from "./actionTypes";
import { baseUrl } from "../../services/httpService";
require("dotenv").config();

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${baseUrl}/register`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${baseUrl}/login`, userData)
    .then((res) => {
      // const { data } = res;
      //
      //debug
      //console.log("data", res.data.accessToken);
      // set token to localstorage
      localStorage.setItem("jwtToken", res.data.accessToken);
      // set token to Auth header
      setAuthToken(res.data.accessToken);
      // const decoded =jwt_decode(user.accessToken);
      //set current user
      dispatch(setCurrentUser(res.data));
    })
    .catch((err) => {
      //console.log("error ", err);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: { message: "authentication has failed" },
      });
    });
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};

//User loading
export const setUserLoading = () => {
  return {
    type: actionTypes.USER_LOADING,
  };
};

//User log out
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.pathname = "/";
};
