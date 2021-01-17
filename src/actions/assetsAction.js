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
    .post(`${urlHeroku}/user`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};
