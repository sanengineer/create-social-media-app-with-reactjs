import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./actionTypes";
require("dotenv").config();

var url =
  "http://localhost:5000" ||
  `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-rmxc3.mongodb.net/test?retryWrites=true&w=majority`;

var urlHeroku = "https://sosmetend.herokuapp.com/api/v1";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${urlHeroku}/register`, userData)
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
    .post(`${urlHeroku}/login`, userData)
    .then((res) => {
      // const { data } = res;
      const { user } = res.data;

      console.log("data", res.data.accessToken);
      // set token to localstorage
      localStorage.setItem("jwtToken", res.data.accessToken);
      // set token to Auth header
      setAuthToken(res.data.accessToken);
      // const decoded =jwt_decode(user.accessToken);
      //set current user
      dispatch(setCurrentUser(res.data));
    })
    .catch((err) => {
      console.log("error ", err);
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
};
